import { NextResponse } from 'next/server';

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
    const response = await fetch('https://www.olmocr.com/api/ocr', {
      method: 'POST',
      body: formData,
    });

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
  } catch (error) {
    console.error('Error in OCR API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 