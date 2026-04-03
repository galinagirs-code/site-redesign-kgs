import { useState } from "react";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";

const galleryImages = [
  {
    src: "https://cdn.poehali.dev/files/d05a5eac-16c6-4c54-a71d-01df490e9adc.png",
    alt: "Домкрат для извлечения свай PTM — общий вид",
  },
  {
    src: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/bucket/68e14096-0f33-4cd7-8f49-22eb30e134b5.png",
    alt: "Технические характеристики PTM850 и PTM920",
  },
];

const DomkratyGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              Фотогалерея
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain bg-gray-50 p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-base md:text-lg font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[70] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Фото в полном размере"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default DomkratyGallerySection;
