import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  variant?: 'hero' | 'card' | 'content' | 'logo' | 'gallery';
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  variant = 'content' 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const variantStyles: Record<string, string> = {
    hero: 'rounded-2xl shadow-2xl',
    card: 'rounded-lg shadow-lg',
    content: 'rounded-xl shadow-xl',
    logo: '',
    gallery: 'rounded-lg shadow-md'
  };

  const imageFilters: Record<string, React.CSSProperties> = {
    hero: {
      filter: 'brightness(0.96) contrast(1.08) saturate(1.12)',
    },
    card: {
      filter: 'brightness(0.97) contrast(1.06) saturate(1.08)',
    },
    content: {
      filter: 'brightness(0.96) contrast(1.08) saturate(1.12)',
    },
    logo: {},
    gallery: {
      filter: 'brightness(0.98) contrast(1.05) saturate(1.08)',
    }
  };

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto object-cover transition-all duration-500 ${variantStyles[variant]} ${className} ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={imageFilters[variant]}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};