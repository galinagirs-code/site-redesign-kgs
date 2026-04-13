import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";

const VibroYZVMHeroSection = () => {
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
              Вибропогружатели · Серия YZ-VM (вариабельные)
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Гидравлические крановые вибропогружатели Yongan (серия YZ-VM)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Модели вибропогружателей
              </a>
              <a href="#clamps" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Модели зажимов
              </a>
              <a href="#stations" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Гидравлическая станция
              </a>
              <a href="#general-info" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
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
              Гидравлические крановые вибропогружатели Yongan (серия YZ-VM)
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  Гидравлические вибропогружатели серии YZ-VM от Yongan Machinery Co., Ltd. (Китай) разработаны с акцентом на надёжность, эффективность и долговечность при работе в самых сложных условиях.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
                  Оборудование применяется для погружения и извлечения:
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    "шпунтовых свай",
                    "трубных свай",
                    "Н-балок и других конструкций",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                      <span className="text-base md:text-lg text-primary">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-heading font-bold text-primary mb-3 mt-6">Технология регулируемого эксцентрикового момента</h3>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  Система регулируемого эксцентрикового момента позволяет изменять вибрационную силу за счёт взаимного положения эксцентриков, обеспечивая точную настройку амплитуды и стабильную работу вибропогружателя в различных условиях.
                </p>

                <h3 className="text-lg font-heading font-bold text-primary mb-3">Ключевые преимущества</h3>
                <div className="space-y-2 mb-6">
                  {[
                    "Плавный запуск и остановка — отсутствие ударных нагрузок",
                    "Точная регулировка амплитуды — адаптация под любые задачи",
                    "Гибкость применения — подходит для телескопических стрел автокранов",
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
                    src="https://cdn.poehali.dev/files/fff63bae-a7f6-479e-87bc-6487caec4015.png"
                    alt="Гидравлический крановый вибропогружатель серия YZ-VM"
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

export default VibroYZVMHeroSection;