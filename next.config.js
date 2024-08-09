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
                img-src 'self' data: https://images.pexels.com https://dummyimage.com;
                connect-src 'self' https://api.example.com;
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
  