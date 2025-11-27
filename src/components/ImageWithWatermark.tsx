interface ImageWithWatermarkProps {
  src: string;
  alt: string;
  className?: string;
  showWatermark?: boolean;
}

export const ImageWithWatermark = ({ 
  src, 
  alt, 
  className = '',
  showWatermark = true
}: ImageWithWatermarkProps) => {
  return (
    <div className="relative">
      <img 
        src={src}
        alt={alt}
        className={className}
      />
      {showWatermark && (
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
