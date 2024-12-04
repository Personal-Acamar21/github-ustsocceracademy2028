import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '100vw'
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Generate WebP version URL
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, '.webp');
    
    // Check if WebP is supported
    const webpSupport = document.createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0;

    setImageSrc(webpSupport ? webpSrc : src);
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"
          style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
        />
      )}
      <picture>
        <source
          type="image/webp"
          srcSet={`
            ${imageSrc}?w=400 400w,
            ${imageSrc}?w=800 800w,
            ${imageSrc}?w=1200 1200w
          `}
          sizes={sizes}
        />
        <source
          type="image/jpeg"
          srcSet={`
            ${src}?w=400 400w,
            ${src}?w=800 800w,
            ${src}?w=1200 1200w
          `}
          sizes={sizes}
        />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoading(false)}
          className={`
            ${className}
            ${loading ? 'opacity-0' : 'opacity-100'}
            transition-opacity duration-300
          `}
        />
      </picture>
    </div>
  );
}