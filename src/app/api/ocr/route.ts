import { NextResponse } from 'next/server';

// 设置超时时间为30秒
const TIMEOUT = 30000;
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// 简单的请求队列实现
interface QueueItem {
  promise: Promise<Response>;
  status: 'pending' | 'fulfilled' | 'rejected';
}

let requestQueue: QueueItem[] = [];
const MAX_CONCURRENT_REQUESTS = 2;

async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries: number = MAX_RETRIES,
  retryDelay: number = RETRY_DELAY
): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      
      // 如果是429错误，增加延迟时间
      if (response.status === 429) {
        const delay = retryDelay * Math.pow(2, i);
        console.log(`Rate limited, waiting ${delay}ms before retry ${i + 1}`);
        await wait(delay);
        continue;
      }
      
      // 如果是其他错误但还有重试次数
      if (!response.ok && i < retries - 1) {
        const delay = retryDelay * Math.pow(2, i);
        console.log(`Request failed with status ${response.status}, retrying in ${delay}ms`);
        await wait(delay);
        continue;
      }
      
      return response;
    } catch (error) {
      if (i === retries - 1) throw error;
      const delay = retryDelay * Math.pow(2, i);
      console.log(`Request failed, retrying in ${delay}ms`);
      await wait(delay);
    }
  }
  throw new Error('Max retries reached');
}

async function processRequest(formData: FormData): Promise<Response> {
  const file = formData.get('file') as File;
  
  if (!file) {
    console.error('No file received');
    return NextResponse.json(
      { error: 'No file provided' },
      { status: 400 }
    );
  }

  // 检查文件大小
  if (file.size > MAX_FILE_SIZE) {
    console.error('File too large:', file.size);
    return NextResponse.json(
      { error: 'File too large, maximum size is 10MB' },
      { status: 413 }
    );
  }

  // 打印文件信息
  console.log('File info:', {
    name: file.name,
    type: file.type,
    size: file.size
  });

  // 创建新的FormData
  const newFormData = new FormData();
  newFormData.append('file', file);

  console.log('Forwarding request to olmocr.com');
  
  // 创建AbortController用于超时控制
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    const response = await fetchWithRetry('https://www.olmocr.com/api/ocr', {
      method: 'POST',
      body: newFormData,
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        'Origin': 'https://olmocr.im',
        'Referer': 'https://olmocr.im/'
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from olmocr.com:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        error: errorText
      });
      
      return NextResponse.json(
        { 
          error: `OCR service error: ${response.statusText}`,
          details: errorText
        },
        { status: response.status }
      );
    }

    console.log('Received response from olmocr.com');
    const data = await response.json();
    console.log('Response data:', data);

    return NextResponse.json(data);
  } catch (error: unknown) {
    clearTimeout(timeoutId);
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('Request timeout');
        return NextResponse.json(
          { 
            error: 'Request timeout',
            details: 'The OCR service is taking too long to respond. Please try again.'
          },
          { status: 504 }
        );
      }
      console.error('Error processing request:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    }
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    console.log('Received OCR request');
    const formData = await request.formData();

    // 清理完成的请求
    requestQueue = requestQueue.filter(item => item.status === 'pending');

    // 如果队列已满，等待一个请求完成
    while (requestQueue.length >= MAX_CONCURRENT_REQUESTS) {
      console.log('Request queue full, waiting...');
      const promises = requestQueue.map(item => item.promise);
      await Promise.race(promises);
      requestQueue = requestQueue.filter(item => item.status === 'pending');
    }

    // 添加新请求到队列
    const requestPromise = processRequest(formData);
    const queueItem: QueueItem = {
      promise: requestPromise,
      status: 'pending'
    };
    
    requestQueue.push(queueItem);

    // 更新请求状态
    requestPromise
      .then(() => { queueItem.status = 'fulfilled'; })
      .catch(() => { queueItem.status = 'rejected'; });

    return await requestPromise;
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 