import Icon from "@/components/ui/icon";

const KvadratnyeGallerySection = () => {
  return (
    <section id="gallery" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Фотогалерея
          </h2>
          <div className="flex flex-col items-center justify-center py-16 px-8 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Icon name="Camera" size={32} className="text-accent/60" />
            </div>
            <p className="text-primary/70 text-lg font-medium mb-1">Фотографии будут добавлены в ближайшее время</p>
            <p className="text-primary/40 text-sm">Реальные снимки оборудования на объектах</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KvadratnyeGallerySection;
