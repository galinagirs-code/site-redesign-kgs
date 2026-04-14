import Icon from "@/components/ui/icon";

const StarkeGallerySection = () => {
  return (
    <section id="gallery" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Фотогалерея
          </h2>
          <div className="text-center py-12 bg-white rounded-2xl">
            <Icon name="ImageIcon" size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-primary text-base md:text-lg">Фотографии будут добавлены в ближайшее время</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarkeGallerySection;
