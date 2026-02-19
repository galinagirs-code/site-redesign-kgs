import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";

const MachtyHeroSection = () => {
  return (
    <>
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Мачты копровые крановые
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Мачты копровые крановые (серия МК)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Варианты копровых мачт серии МК
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

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-10 text-center">Копровая мачта МК KGS</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  Производственные мощности КоперГруппСервис (ООО «КГС») в г. Екатеринбурге позволяют изготавливать копровые мачты с учётом индивидуальных требований заказчика.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  В производстве применяются проверенные комплектующие гидросистем и систем управления, что обеспечивает:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                    <span className="text-base md:text-lg text-primary">высокое качество</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                    <span className="text-base md:text-lg text-primary">надёжность в эксплуатации</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                    <span className="text-base md:text-lg text-primary">длительный срок службы</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-xl max-w-md w-full">
                  <OptimizedImage
                    src="https://cdn.poehali.dev/files/eb7819dd-21cf-4aaf-b332-9fefc66e1ecc.png"
                    alt="Мачты копровые крановые серия МК"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">Ключевые преимущества МК KGS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Быстрый демонтаж</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Мачта легко снимается, при этом базовая машина полностью сохраняет свои штатные функции.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingUp" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Экономическая эффективность</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Переоборудование гусеничного крана в сваебойную или буровую установку позволяет задействовать технику, которая ранее простаивала без работы.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="RefreshCw" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Универсальность</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Быстрое переоборудование: кран &#8660; сваебойная или буровая установка.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="BadgeRussianRuble" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Оптимальные цены</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Использование оборудования КоперГруппСервис позволяет получить сваебойную или буровую установку, которая в 10–20 раз дешевле импортных аналогов.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Settings" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Простота эксплуатации</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Оборудование отличается удобством управления и обслуживания.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MachtyHeroSection;