import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";

const VibroCSHeroSection = () => {
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
              Вибропогружатели · Серия CS
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Модели вибропогружателей
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
              Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS)
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS) — флагманская разработка, созданная на базе полного производственного цикла и строгого контроля качества.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  Оборудование производится с соблюдением высоких требований к качеству, включая использование специализированных цехов с контролируемыми условиями производства.
                </p>
                <div className="space-y-3">
                  {[
                    "Равномерный и мощный зажим по всей длине хвостовика, исключающий проскальзывание и деформацию",
                    "Мгновенная фиксация и освобождение оснастки, сокращающие цикл работ до 30%",
                    "Универсальная система адаптеров для работы с различными типами свай и шпунта",
                    "Продуманная эргономика и повышенная безопасность оператора",
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
                    src="https://cdn.poehali.dev/files/05395cd1-e682-42d5-be1a-b8e559de4b67.jpg"
                    alt="Гидравлический экскаваторный вибропогружатель серия CS"
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

export default VibroCSHeroSection;