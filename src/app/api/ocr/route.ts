import { NextResponse } from 'next/server';

// 设置超时时间为25秒
const TIMEOUT = 25000;
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries: number = MAX_RETRIES
): Promise<Response> {
  try {
    const response = await fetch(url, options);
    if (!response.ok && retries > 0) {
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return fetchWithRetry(url, options, retries - 1);
    }
    return response;
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return fetchWithRetry(url, options, retries - 1);
    }
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    console.log('Received OCR request');
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      console.error('No file received');
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
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
          'Origin': request.headers.get('origin') || 'https://olmocr.im',
          'Referer': request.headers.get('referer') || 'https://olmocr.im'
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
    } catch (fetchError: unknown) {
      clearTimeout(timeoutId);
      if (fetchError instanceof Error) {
        if (fetchError.name === 'AbortError') {
          console.error('Request timeout after retries');
          return NextResponse.json(
            { 
              error: 'Request timeout after retries',
              details: 'The OCR service is taking too long to respond. Please try again with a smaller file or try later.'
            },
            { status: 504 }
          );
        }
        console.error('Fetch error:', {
          name: fetchError.name,
          message: fetchError.message,
          stack: fetchError.stack
        });
      }
      throw fetchError;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error in OCR API route:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      return NextResponse.json(
        { 
          error: 'Internal server error', 
          details: error.message,
          type: error.name
        },
        { status: 500 }
      );
    }
    console.error('Unknown error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 