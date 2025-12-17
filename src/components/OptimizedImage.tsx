import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  variant?: 'hero' | 'card' | 'content' | 'logo' | 'gallery';
  showWatermark?: boolean;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  variant = 'content',
  showWatermark = true
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
      filter: 'brightness(1.02) contrast(1.15) saturate(1.15) sharpen(1.2)',
    },
    card: {
      filter: 'brightness(1.0) contrast(1.12) saturate(1.12) sharpen(1.1)',
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
      {showWatermark && variant !== 'logo' && (
        <div className="absolute bottom-4 right-4 opacity-40 hover:opacity-60 transition-opacity pointer-events-none">
          <img 
            src="https://cdn.poehali.dev/files/584417ee-f78b-4041-a7fe-8b33469a6007.png"
            alt="KGS"
            className="w-20 h-auto drop-shadow-lg"
          />
        </div>
      )}
    </div>
  );
};