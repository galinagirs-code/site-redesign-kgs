import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";

const DomkratyHeroSection = () => {
  return (
    <>
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Домкраты для извлечения свай
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Домкраты для извлечения свай (серия PTM)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#benefits" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Преимущества
              </a>
              <a href="#description" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Общая информация
              </a>
              <a href="#specs" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Технические характеристики
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-6 text-center">Свайный домкрат PTM</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  Свайный домкрат предназначен для извлечения свай из грунта. Оборудование работает по поэтапному принципу: пресс захватывает сваю, после чего гидравлическая система поднимает её на заданное расстояние. Затем цикл повторяется до полного извлечения.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  Подходит для работы в различных типах грунтов: глинистых, песчаных, а также с небольшим содержанием гравия. Домкрат используется для извлечения:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                    <span className="text-base md:text-lg text-primary">стальных трубчатых свай</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                    <span className="text-base md:text-lg text-primary">шпунта Ларсена</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                    <span className="text-base md:text-lg text-primary">двутавровых балок</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                    <span className="text-base md:text-lg text-primary">швеллеров</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-xl max-w-md w-full">
                  <OptimizedImage
                    src="https://cdn.poehali.dev/files/d05a5eac-16c6-4c54-a71d-01df490e9adc.png"
                    alt="Домкрат для извлечения свай PTM"
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

export default DomkratyHeroSection;
