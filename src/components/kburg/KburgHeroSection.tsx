import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";

const KburgHeroSection = () => {
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
              Сваебойные машины · КБУРГ
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Полноповоротные копрово-бурильные установки (КБУРГ) на базе гусеничных экскаваторов
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Модели установок
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
              Полноповоротная копрово-бурильная установка
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
                  КБУРГ — это первая отечественная разработка, которая позволяет навешивать копрово-бурильное оборудование на любые гусеничные экскаваторы российского и импортного производства с массой от 18 тонн и более.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
                  Копрово-бурильная установка осуществляет погружение (забивку) железобетонных или металлических свай длиной до 16 метров с максимальным сечением 400×400 мм, а также устройство скважин строительного назначения и шпунтовые работы.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  На установке используются как дизельные, так и гидравлические молоты с массой ударной части до 5 тн.
                </p>
                <div className="space-y-3">
                  {[
                    "Совместное использование сваебойного и бурильного оборудования на одной копровой мачте.",
                    "Универсальная установка на экскаваторы различных производителей от 18 тонн",
                    "Широкий диапазон моделей, обеспечивающий забивку свай длиной от 12 до 16 метров.",
                    "Надёжная конструкция для работы в тяжёлых условиях — от −40°C до +40°C",
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
                    src="https://cdn.poehali.dev/files/d9fe2f3d-3792-4912-aeeb-17112b58e733.png"
                    alt="Полноповоротная копрово-бурильная установка КБУРГ на базе гусеничного экскаватора"
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

export default KburgHeroSection;