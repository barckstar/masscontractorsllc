export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/cdn-cgi/', '/_next/static/media/'],
            }
        ],
        sitemap: 'https://mascontractors.com/sitemap.xml',
    }
}
