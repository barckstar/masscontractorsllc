import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const response = NextResponse.next();
  
  // Define your CSP policy
  const cspPolicy = `
    default-src 'none';
    script-src 'self' 'nonce-random123' https://trusted.cdn.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https://images.example.com;
    connect-src 'self' https://api.example.com;
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
  `;

  // Add CSP header to the response
  response.headers.set('Content-Security-Policy', cspPolicy.trim());

  return response;
}
