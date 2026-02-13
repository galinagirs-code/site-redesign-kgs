import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";
import { schemaImage } from "./MachtyKitayData";

const MachtyKitayContent = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Мачты копровые экскаваторные
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Мачты копровые экскаваторные (Китай)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#specs" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Технические характеристики
              </a>
              <a href="#info" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
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

      {/* Описание продукта */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-10 text-center">
              Мачты копровые экскаваторные (Китай)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  Экскаваторная копровая мачта китайского производства — навесное оборудование, предназначенное для переоборудования базового экскаватора в сваебойную установку.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed">
                  Конструкция обеспечивает устойчивость, точность позиционирования и надёжную работу при забивке свай на строительных, промышленных и инфраструктурных объектах.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 shadow-xl max-w-md w-full">
                  <OptimizedImage
                    src={schemaImage}
                    alt="Чертёж копровой мачты (Китай)"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">Общая информация</h3>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                Мачта представляет собой металлическую конструкцию с направляющими и усиленным оголовком.
              </p>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-4">В состав конструкции входят:</p>
              <div className="space-y-3 mb-6">
                {[
                  "Мачта повышенной жёсткости",
                  "Опорный узел крепления к базовой машине",
                  "2 гидроцилиндра регулировки наклона",
                  "Гидроцилиндр для подъема и опускания шасси",
                  "2 лебедки по 4т",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                    <span className="text-base md:text-lg text-primary">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed font-medium">
                Установка производится на экскаваторную базу с подключением к гидравлической системе машины.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MachtyKitayContent;