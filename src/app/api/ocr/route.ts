import { NextResponse } from 'next/server';

// 设置超时时间为8秒（Vercel限制为10秒）
const TIMEOUT = 8000;

export async function POST(request: Request) {
  try {
    console.log('Received OCR request');
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      console.error('No file received');
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    console.log('Forwarding request to olmocr.com');
    
    // 创建AbortController用于超时控制
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

    try {
      const response = await fetch('https://www.olmocr.com/api/ocr', {
        method: 'POST',
        body: formData,
        signal: controller.signal,
        // 添加必要的请求头
        headers: {
          'Accept': 'application/json',
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.error('Error from olmocr.com:', response.status, response.statusText);
        return NextResponse.json(
          { error: `OCR service error: ${response.statusText}` },
          { status: response.status }
        );
      }

      console.log('Received response from olmocr.com');
      const data = await response.json();
      console.log('Response data:', data);

      return NextResponse.json(data);
    } catch (fetchError) {
      clearTimeout(timeoutId);
      if (fetchError.name === 'AbortError') {
        console.error('Request timeout');
        return NextResponse.json(
          { error: 'Request timeout' },
          { status: 504 }
        );
      }
      throw fetchError;
    }
  } catch (error) {
    console.error('Error in OCR API route:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
} 