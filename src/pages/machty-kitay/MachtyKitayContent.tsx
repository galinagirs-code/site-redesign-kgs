import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
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
              <a href="#construction" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Конструкция
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
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">Ключевые преимущества</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Ruler" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Высота 20,8 м</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Общая высота мачты 20 850 мм позволяет работать с длинными сваями на крупных объектах.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Shield" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Повышенная жёсткость</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Пространственная ферменная конструкция с усиленным оголовком обеспечивает устойчивость при работе.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Weight" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">2 лебёдки по 4 т</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Две лебёдки грузоподъёмностью 4 тонны каждая для подъёма свай и рабочего оборудования.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Settings" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Гидрорегулировка</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Гидравлическая регулировка наклона двумя цилиндрами для точного позиционирования сваи.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="DollarSign" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Выгодная цена</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Китайское производство позволяет предложить конкурентоспособную стоимость при высоком качестве исполнения.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Wrench" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Простой монтаж</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Установка на экскаваторную базу с подключением к штатной гидравлической системе машины.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MachtyKitayContent;
