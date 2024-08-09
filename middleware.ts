import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const response = NextResponse.next();
  
  // Define your CSP policy
  const cspPolicy = `
              default-src 'none';
              script-src 'self' 'nonce-random123' https://trusted.cdn.com;
              style-src 'self' 'unsafe-inline';
              font-src 'self' https://fonts.example.com; // Permitir fuentes
              img-src 'self' data: https://images.example.com;
              connect-src 'self' https://api.example.com;
              media-src 'self' https://media.example.com; // Permitir medios
              frame-src https://www.example.com; // Permitir enmarcar ciertos sitios
              frame-ancestors 'none';
              base-uri 'self';
              form-action 'self';
  `;

  // Add CSP header to the response
  response.headers.set('Content-Security-Policy', cspPolicy.trim());

  return response;
}
