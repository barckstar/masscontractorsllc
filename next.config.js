/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'images.pexels.com',
        'dummyimage.com'
      ]
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: `
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
              `.replace(/\s+/g, ' ').trim(),
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  