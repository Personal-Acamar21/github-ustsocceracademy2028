import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({ 
  title, 
  description, 
  image = 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67395a73732b002e9d319baf.png',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website'
}: SEOProps) {
  const siteName = 'UST Soccer Academy';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#00FF00" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          "name": siteName,
          "url": url,
          "logo": image,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "P.O. BOX: 312",
            "addressLocality": "KINGS PARK",
            "addressRegion": "NY",
            "postalCode": "11754",
            "addressCountry": "US"
          },
          "telephone": "631-506-6567",
          "email": "INFO@USTSOCCER.COM"
        })}
      </script>
    </Helmet>
  );
}