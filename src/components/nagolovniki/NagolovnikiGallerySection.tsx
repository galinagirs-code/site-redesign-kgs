import Icon from "@/components/ui/icon";

const NagolovnikiGallerySection = () => {
  return (
    <section id="gallery" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Фотогалерея
          </h2>
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
              <Icon name="Images" size={32} className="text-accent" />
            </div>
            <p className="text-xl font-heading font-bold text-primary mb-2">
              Фотографии будут добавлены в ближайшее время
            </p>
            <p className="text-primary/60 text-base">
              Следите за обновлениями на сайте
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NagolovnikiGallerySection;
