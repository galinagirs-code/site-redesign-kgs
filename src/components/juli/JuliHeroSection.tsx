import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";

const JuliHeroSection = () => {
  return (
    <>
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/50 text-sm">
              Дизельные штанговые молоты
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Дизельные штанговые молоты Dongtai Juli серии DD
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Энергия удара на 70-80% больше российских аналогов. Высокая мощность и низкий расход топлива
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="aspect-square rounded-lg overflow-hidden bg-white p-8 shadow-lg">
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png"
                  alt="Молоты дизельные штанговые Dongtai Juli серии DD"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary">
                  О производителе и оборудовании
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Дизельные штанговые молоты, производимые компанией Dongtai Juli Machinery Manufacturing Co., LTD (Китай), отличаются высокой мощностью, надёжностью и стабильным качеством. Оборудование завоевало хорошую репутацию и пользуется устойчивым спросом на мировом рынке.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Наиболее современной разработкой компании является штанговый дизельный молот серии DD, созданный на основе многолетнего производственного опыта и с применением передовых технологий китайских и зарубежных производителей.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Используя принцип и технологии дизельного двигателя, данные молоты имеют возможность непрерывно и эффективно работать длительное время.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    Это свойство достигается благодаря:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-muted-foreground">
                      <Icon name="Check" className="mr-3 mt-1 text-accent flex-shrink-0" size={20} />
                      <span>Эффективной системе воздушного охлаждения с высокой теплоотдачей</span>
                    </li>
                    <li className="flex items-start text-muted-foreground">
                      <Icon name="Check" className="mr-3 mt-1 text-accent flex-shrink-0" size={20} />
                      <span>Современной системе подачи топлива</span>
                    </li>
                    <li className="flex items-start text-muted-foreground">
                      <Icon name="Check" className="mr-3 mt-1 text-accent flex-shrink-0" size={20} />
                      <span>Компактной и продуманной конструкции, удобной в эксплуатации и обслуживании</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    По совокупности технических характеристик штанговые дизельные молоты серии DD значительно превосходят отечественные аналоги.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="bg-muted/30 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
                Преимущества дизельных молотов Dongtai Juli DD
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="Zap" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Энергия удара на 70–80% выше</h3>
                    <p className="text-muted-foreground text-sm">Чем у российских молотов с аналогичной массой ударной части</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="Gauge" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Высокая степень компрессии</h3>
                    <p className="text-muted-foreground text-sm">По сравнению с отечественными аналогами</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="Fuel" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Высокая мощность</h3>
                    <p className="text-muted-foreground text-sm">При низком расходе топлива</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="Clock" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Длительный срок службы</h3>
                    <p className="text-muted-foreground text-sm">Надежная конструкция и качественные материалы</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="Wind" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Эффективная теплоотдача</h3>
                    <p className="text-muted-foreground text-sm">Повышающая общую производительность оборудования</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JuliHeroSection;
