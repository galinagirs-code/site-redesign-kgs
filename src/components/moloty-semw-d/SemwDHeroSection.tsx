import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";

const SemwDHeroSection = () => {
  return (
    <>
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div
          className="absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Сваебойные молоты · SEMW
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Молоты дизельные трубчатые SEMW (серия D)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Модели молотов
              </a>
              <a href="#description" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Общая информация
              </a>
              <a href="#gallery" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Фотогалерея
              </a>
              <a href="#consultation" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-6 text-center">
              Дизельные трубчатые молоты SEMW серии D
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  Дизельные трубчатые молоты серии D — ключевой продукт компании SEMW,
                  предназначенный для забивки свай в различных грунтовых условиях.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  Оборудование используется в мостовом строительстве, портовой инфраструктуре,
                  энергетике (включая ветроэнергетику), высотном строительстве и транспортных проектах.
                </p>
                <div className="space-y-3">
                  {[
                    "Трубчатый корпус — высокий КПД",
                    "Автоматический цикл работы",
                    "Адаптация под разные типы свай",
                    "Возможность работы в различных грунтах и под наклоном",
                    "Широкий диапазон моделей: от D8 до D260",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                      <span className="text-base md:text-lg text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-xl max-w-md w-full">
                  <OptimizedImage
                    src="https://cdn.poehali.dev/files/ede80223-4ca2-41d9-8d09-c213a937fc00.png"
                    alt="Дизельный трубчатый молот SEMW серия D"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SemwDHeroSection;