import { writeFileSync } from 'fs';
import { resolve } from 'path';

const pages = [
  '/',
  '/about-us',
  '/our-teams',
  '/tryouts',
  '/cozy-feet',
  '/ust-cares',
  '/our-staff',
  '/camps-clinics',
  '/indoor-facilities',
  '/outdoor-facilities',
  '/shop',
  '/sponsors',
  '/contact'
];

const domain = 'https://ustsoccer.com'; // Replace with your actual domain

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(page => `
    <url>
      <loc>${domain}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `)
    .join('')}
</urlset>`;

writeFileSync(resolve(process.cwd(), 'dist', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');