import Icon from "@/components/ui/icon";

const DomkratyGallerySection = () => {
  return (
    <section id="gallery" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Фотогалерея
          </h2>
          <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
            <Icon name="ImageOff" size={48} className="text-primary/30 mb-4" />
            <p className="text-primary/50 text-base md:text-lg font-medium">
              Фотографии будут добавлены в ближайшее время
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomkratyGallerySection;
