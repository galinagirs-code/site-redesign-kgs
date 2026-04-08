import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";

const KburgHeroSection = () => {
  return (
    <>
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Сваебойные машины · КБУРГ
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Полноповоротные копрово-бурильные установки (КБУРГ)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#benefits" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Преимущества
              </a>
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Модели установок КБУРГ
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
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-10 text-center">
              Полноповоротные копрово-бурильные установки на базе гусеничных экскаваторов
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  КБУРГ — уникальная конструкция навесного оборудования, которая позволяет навешивать копрово-бурильное оборудование на любые гусеничные экскаваторы российского и импортного производства с массой от 18 тонн и более.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  На установке используются как дизельные, так и гидравлические молоты с массой ударной части до 5 тн. Копрово-бурильная установка КБУРГ осуществляет погружение (забивку) железобетонных или металлических свай длиной до 16 метров с максимальным сечением 400×400 мм, а также устройство скважин строительного назначения и шпунтовые работы.
                </p>
                <div className="space-y-3">
                  {[
                    "Первая отечественная разработка, позволяющая совместное использование на копровой мачте сваебойного и бурильного оборудования",
                    "Техника прошла все этапы сертификации согласно требований Таможенного Союза и имеет Сертификат ТС, выданный органом по Сертификации",
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
