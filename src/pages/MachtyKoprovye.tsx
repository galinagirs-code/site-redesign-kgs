import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OptimizedImage } from "@/components/OptimizedImage";
import { EquipmentForm } from "@/components/EquipmentForm";
import { useState } from "react";

const MachtyKoprovye = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Мачты копровые крановые серия МК",
    "description": "Копровые мачты серии МК для гусеничных кранов 25-36 тонн. Превращают кран в сваебойную или буровую установку.",
    "brand": {
      "@type": "Brand",
      "name": "KGS"
    },
    "category": "Свайное оборудование",
    "manufacturer": {
      "@type": "Organization",
      "name": "КоперГруппСервис"
    }
  };

  const variants = [
    {
      name: "МК-12С",
      type: "сваебойная",
      specs: [
        { label: "Длина погружаемой сваи", value: "12 м" },
        { label: "Максимальное сечение сваи", value: "400 × 400 мм" },
        { label: "Масса навесного оборудования", value: "не более 16 т" }
      ],
      detailedSpecs: [
        { label: "Рабочие наклоны мачты, не более", value: "" },
        { label: "Вперед-назад, град", value: "4", indent: true },
        { label: "Влево-вправо, град", value: "4", indent: true },
        { label: "Изменение вылета мачты не более, м", value: "1" },
        { label: "Ширина направляющих мачты Ах⌀В/Сx⌀D, мм", value: "330×⌀70" },
        { label: "Типы применяемых молотов", value: "" },
        { label: "Дизельные трубчатые", value: "HD-19", indent: true },
        { label: "Дизельные штанговые", value: "DD-18 / DD-25", indent: true },
        { label: "Гидравлические", value: "HHP-4", indent: true },
        { label: "Масса навесного оборудования, не более, т", value: "16" }
      ]
    },
    {
      name: "МК-14С",
      type: "сваебойная",
      specs: [
        { label: "Длина погружаемой сваи", value: "14 м" },
        { label: "Максимальное сечение сваи", value: "400 × 400 мм" },
        { label: "Масса навесного оборудования", value: "не более 18 т" }
      ],
      detailedSpecs: [
        { label: "Рабочие наклоны мачты, не более", value: "" },
        { label: "Вперед-назад, град", value: "4", indent: true },
        { label: "Влево-вправо, град", value: "4", indent: true },
        { label: "Изменение вылета мачты не более, м", value: "1" },
        { label: "Ширина направляющих мачты Ах⌀В/Сx⌀D, мм", value: "330×⌀70" },
        { label: "Типы применяемых молотов", value: "" },
        { label: "Дизельные трубчатые", value: "HD-25", indent: true },
        { label: "Дизельные штанговые", value: "DD-25 / DD-35", indent: true },
        { label: "Гидравлические", value: "HHP-5", indent: true },
        { label: "Масса навесного оборудования, не более, т", value: "18" }
      ]
    },
    {
      name: "МК-16С",
      type: "сваебойная",
      specs: [
        { label: "Длина погружаемой сваи", value: "16 м" },
        { label: "Максимальное сечение сваи", value: "400 × 400 мм" },
        { label: "Масса навесного оборудования", value: "не более 19 т" }
      ],
      detailedSpecs: [
        { label: "Рабочие наклоны мачты, не более", value: "" },
        { label: "Вперед-назад, град", value: "4", indent: true },
        { label: "Влево-вправо, град", value: "4", indent: true },
        { label: "Изменение вылета мачты не более, м", value: "1" },
        { label: "Ширина направляющих мачты Ах⌀В/Сx⌀D, мм", value: "330×⌀70" },
        { label: "Типы применяемых молотов", value: "" },
        { label: "Дизельные трубчатые", value: "HD-30", indent: true },
        { label: "Дизельные штанговые", value: "DD-35 / DD-45", indent: true },
        { label: "Гидравлические", value: "HHP-5", indent: true },
        { label: "Масса навесного оборудования, не более, т", value: "19" }
      ]
    },
    {
      name: "МК-12Б",
      type: "буровая",
      specs: [
        { label: "Глубина бурения", value: "12 м" },
        { label: "Максимальный диаметр бурения", value: "600 мм" },
        { label: "Масса навесного оборудования", value: "не более 10 т" }
      ],
      detailedSpecs: [
        { label: "Рабочие наклоны мачты, не более", value: "" },
        { label: "Вперед-назад, град", value: "4", indent: true },
        { label: "Влево-вправо, град", value: "4", indent: true },
        { label: "Макс. крутящий момент на буровом инструменте, кгс×м", value: "3700" },
        { label: "Частота вращения выходного вала редуктора, об/мин", value: "31,6" },
        { label: "Масса привода, кг", value: "1550" },
        { label: "Изменение вылета мачты не более, м", value: "1" },
        { label: "Ширина направляющих мачты Ах⌀В / Сx⌀D, мм", value: "365×⌀70 / 650×⌀102" },
        { label: "Типы применяемых вращателей", value: "СО2МП" },
        { label: "Масса навесного оборудования, не более, т", value: "10" }
      ]
    },
    {
      name: "МК-14Б",
      type: "буровая",
      specs: [
        { label: "Глубина бурения", value: "14 м" },
        { label: "Максимальный диаметр бурения", value: "600 мм" },
        { label: "Масса навесного оборудования", value: "не более 12 т" }
      ],
      detailedSpecs: [
        { label: "Рабочие наклоны мачты, не более", value: "" },
        { label: "Вперед-назад, град", value: "4", indent: true },
        { label: "Влево-вправо, град", value: "4", indent: true },
        { label: "Макс. крутящий момент на буровом инструменте, кгс×м", value: "3700" },
        { label: "Частота вращения выходного вала редуктора, об/мин", value: "31,6" },
        { label: "Масса привода, кг", value: "1550" },
        { label: "Изменение вылета мачты не более, м", value: "1" },
        { label: "Ширина направляющих мачты Ах⌀В / Сx⌀D, мм", value: "365×⌀70 / 650×⌀102" },
        { label: "Типы применяемых вращателей", value: "СО2МП" },
        { label: "Масса навесного оборудования, не более, т", value: "12" }
      ]
    },
    {
      name: "МК-16Б",
      type: "буровая",
      specs: [
        { label: "Глубина бурения", value: "16 м" },
        { label: "Максимальный диаметр бурения", value: "600 мм" },
        { label: "Масса навесного оборудования", value: "не более 14 т" }
      ],
      detailedSpecs: [
        { label: "Рабочие наклоны мачты, не более", value: "" },
        { label: "Вперед-назад, град", value: "4", indent: true },
        { label: "Влево-вправо, град", value: "4", indent: true },
        { label: "Макс. крутящий момент на буровом инструменте, кгс×м", value: "3700" },
        { label: "Частота вращения выходного вала редуктора, об/мин", value: "31,6" },
        { label: "Масса привода, кг", value: "1550" },
        { label: "Изменение вылета мачты не более, м", value: "1" },
        { label: "Ширина направляющих мачты Ах⌀В / Сx⌀D, мм", value: "365×⌀70 / 650×⌀102" },
        { label: "Типы применяемых вращателей", value: "СО2МП" },
        { label: "Масса навесного оборудования, не более, т", value: "14" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Мачты копровые крановые серия МК | KGS"
        description="Копровые мачты МК для гусеничных кранов 25-36 тонн. Превращают кран в сваебойную или буровую установку. Стоимость в 10-20 раз ниже импортных аналогов."
        keywords="копровые мачты, мачты МК, сваебойная установка на кран, буровая мачта, навесное оборудование для крана"
        canonical="https://kgs-ural.ru/catalog/machty-koprovye"
        ogTitle="Копровые мачты серии МК - превратите кран в сваебойную установку"
        ogDescription="Навесное оборудование для гусеничных кранов 25-36 т. Сваебойные и буровые мачты длиной от 12 до 16 метров."
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />
      
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-12 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="text-white/90 hover:text-accent transition-colors text-sm">О компании</Link>
              <Link to="/catalog" className="text-accent transition-colors text-sm font-medium">Оборудование</Link>
              <Link to="/parts" className="text-white/90 hover:text-accent transition-colors text-sm">Запчасти</Link>
              <Link to="/services" className="text-white/90 hover:text-accent transition-colors text-sm">Услуги</Link>
              <Link to="/production" className="text-white/90 hover:text-accent transition-colors text-sm">Производство и доставка</Link>
              <a href="#" className="text-white/90 hover:text-accent transition-colors text-sm">Новости</a>
              <Link to="/contact" className="text-white/90 hover:text-accent transition-colors text-sm">Контакты</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-3">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Send" size={18} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Share2" size={18} />
                </a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Video" size={18} />
                </a>
              </div>
              <a href="tel:88006007465" className="text-white hover:text-accent transition-colors text-sm font-medium hidden lg:block">
                8 (800) 600-74-65
              </a>
              <Button size="sm" className="btn-gradient text-white hidden md:block">
                Заказать звонок
              </Button>
              <MobileMenu currentPath="/catalog/machty-koprovye" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: 'Оборудование', path: '/catalog' },
        { label: 'Мачты копровые крановые серия МК', path: '/catalog/machty-koprovye' }
      ]} />

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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 text-center">Копровая мачта МК KGS</h2>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Назначение и возможности</h3>
                <p className="text-lg text-primary leading-relaxed mb-6">
                  Копровая мачта — это направляющий элемент для навесного оборудования, который существенно расширяет функциональные возможности базовой строительной техники. Она позволяет эффективно использовать имеющиеся машины для выполнения свайных и буровых работ без потери их основного назначения.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Монтаж на базовую технику</h4>
                    <p className="text-primary mb-2">Копровая мачта устанавливается на:</p>
                    <ul className="list-disc pl-5 space-y-1 text-primary">
                      <li>гусеничные краны</li>
                      <li>экскаваторы</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Совместимое навесное оборудование</h4>
                    <ul className="list-disc pl-5 space-y-1 text-primary">
                      <li>сваебойные молоты для забивки свай</li>
                      <li>вращатели для буровых работ</li>
                      <li>оборудование для лидерного бурения</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Производство и качество</h3>
                <p className="text-lg text-primary leading-relaxed mb-6">
                  Производственные мощности ООО «КГС» (г. Екатеринбург) позволяют изготавливать копровые мачты с учётом индивидуальных требований заказчика.
                </p>
                <p className="text-lg text-primary leading-relaxed mb-6">
                  В производстве применяются проверенные комплектующие гидросистем и систем управления, что обеспечивает:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-lg mt-0.5">&#10004;</span>
                    <span className="text-lg text-primary">высокое качество</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-lg mt-0.5">&#10004;</span>
                    <span className="text-lg text-primary">надёжность в эксплуатации</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-lg mt-0.5">&#10004;</span>
                    <span className="text-lg text-primary">длительный срок службы</span>
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
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">Ключевые преимущества</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" size={20} className="text-accent" />
                    </div>
                    <h4 className="font-semibold text-primary">Быстрый демонтаж</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Мачта легко снимается, при этом базовая машина полностью сохраняет свои штатные функции.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingUp" size={20} className="text-accent" />
                    </div>
                    <h4 className="font-semibold text-primary">Экономическая эффективность</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Переоборудование гусеничного крана в сваебойную или буровую установку позволяет задействовать технику, которая ранее простаивала без работы.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="RefreshCw" size={20} className="text-accent" />
                    </div>
                    <h4 className="font-semibold text-primary">Универсальность</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Быстрое переоборудование: кран &#8660; сваебойная или буровая установка.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="BadgeRussianRuble" size={20} className="text-accent" />
                    </div>
                    <h4 className="font-semibold text-primary">Оптимальные цены</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Сваебойная или буровая установка KGS в 10–20 раз дешевле импортных аналогов.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Settings" size={20} className="text-accent" />
                    </div>
                    <h4 className="font-semibold text-primary">Простота эксплуатации</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Оборудование отличается удобством управления и обслуживания.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="variants" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
                Варианты копровых мачт серии МК
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {variants.map((variant, index) => (
                  <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-heading font-bold text-primary">
                          {variant.name}
                        </h3>
                        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                          {variant.type}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                        {variant.specs.map((spec, idx) => (
                          <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                            <span className="text-base text-gray-700 flex-1">{spec.label}</span>
                            <span className="text-base font-semibold text-gray-900 text-right ml-4">{spec.value}</span>
                          </div>
                        ))}
                        
                        {expandedVariant === variant.name && (
                          <>
                            {variant.detailedSpecs.map((spec, idx) => (
                              <div key={idx} className={spec.indent ? "flex justify-between items-center py-1 border-b border-gray-200 last:border-0 ml-4" : "flex justify-between items-center py-1 border-b border-gray-200 last:border-0"}>
                                {spec.value ? (
                                  <>
                                    <span className="text-sm text-gray-700">{spec.label}</span>
                                    <span className="text-sm font-semibold text-gray-900">{spec.value}</span>
                                  </>
                                ) : (
                                  <span className="text-sm font-bold text-primary mt-2">{spec.label}</span>
                                )}
                              </div>
                            ))}
                          </>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 mt-4">
                        <Button 
                          variant="outline"
                          size="sm"
                          onClick={() => setExpandedVariant(expandedVariant === variant.name ? null : variant.name)}
                          className="w-full"
                        >
                          {expandedVariant === variant.name ? (
                            <>
                              <Icon name="ChevronUp" size={16} className="mr-2" />
                              Скрыть характеристики
                            </>
                          ) : (
                            <>
                              <Icon name="ChevronDown" size={16} className="mr-2" />
                              Подробнее
                            </>
                          )}
                        </Button>
                        <a href="#consultation" className="block">
                          <Button className="btn-gradient text-white w-full" size="sm">
                            <Icon name="MessageSquare" size={16} className="mr-2" />
                            Получить консультацию
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="description" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">Общая информация</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={20} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary">Области применения</h3>
                  </div>
                  <p className="text-primary mb-3">Копровая мачта МК применяется для:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary mb-4">
                    <li>забивки железобетонных свай, труб и шпунта</li>
                    <li>устройства буронабивных свай</li>
                    <li>лидерного бурения скважин под ж/б сваи</li>
                  </ul>
                  <p className="text-primary mb-3">Используется при строительстве фундаментов в отраслях:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary">
                    <li><strong>ПГС</strong> — заводы, жилые дома, офисные здания</li>
                    <li><strong>Нефтегазовая отрасль</strong> — трубопроводы, НПЗ и ГПЗ</li>
                    <li><strong>Мостостроение</strong> — эстакады, транспортные переходы</li>
                    <li><strong>Энергетика</strong> — ЛЭП, подстанции</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Cog" size={20} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary">Принцип работы</h3>
                  </div>
                  <p className="text-primary mb-3">Копровая мачта МК KGS — металлоконструкция, обеспечивающая:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary mb-4">
                    <li>перемещение сваи и рабочего оборудования</li>
                    <li>точное центрирование по оси</li>
                    <li>наведение сваи на точку погружения</li>
                  </ul>
                  <p className="text-primary mb-3">Крепление мачты осуществляется с помощью специальных устройств (цапф) и раскосов.</p>
                  <p className="text-primary font-semibold mb-2">Копровая установка (кран + мачта):</p>
                  <ol className="list-decimal pl-5 space-y-1.5 text-primary">
                    <li>Поднимает сваю</li>
                    <li>Подвозит или подтаскивает к месту установки</li>
                    <li>Устанавливает сваю в проектное положение</li>
                    <li>Погружает сваю в грунт сваебойным оборудованием</li>
                    <li>Перемещается к следующей свае</li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Gamepad2" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary">Управление копровой мачтой</h3>
                </div>
                <p className="text-primary mb-4">
                  Управление осуществляется оператором из кабины крана с помощью пульта управления.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="text-primary font-semibold mb-2">Пульт управления — гидролинии:</p>
                    <ul className="list-disc pl-5 space-y-1.5 text-primary">
                      <li>цилиндров коррекции</li>
                      <li>цилиндра опоры мачты</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="text-primary font-semibold mb-2">Стандартные органы управления крана:</p>
                    <ul className="list-disc pl-5 space-y-1.5 text-primary">
                      <li>главная и вспомогательная лебёдки</li>
                      <li>поворот платформы</li>
                      <li>ход крана</li>
                      <li>подъём и опускание стрелы</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
              Фотогалерея
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                onClick={() => setSelectedImage('https://cdn.poehali.dev/files/68df293b-53a7-4932-bd60-36437d60be60.png')}
              >
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/68df293b-53a7-4932-bd60-36437d60be60.png"
                  alt="Монтаж крановой мачты г. Кемерово"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Монтаж крановой мачты г. Кемерово</p>
                </div>
              </div>

              <div 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                onClick={() => setSelectedImage('https://cdn.poehali.dev/files/ed120cc2-2508-4f24-9a50-d1aa58fabca3.png')}
              >
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/ed120cc2-2508-4f24-9a50-d1aa58fabca3.png"
                  alt="Монтаж крановой мачты г. Кемерово"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Монтаж крановой мачты г. Кемерово</p>
                </div>
              </div>

              <div 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                onClick={() => setSelectedImage('https://cdn.poehali.dev/files/2bcdb5cc-5dd3-430d-95f7-e6fc89359026.png')}
              >
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/2bcdb5cc-5dd3-430d-95f7-e6fc89359026.png"
                  alt="Монтаж крановой мачты МК 16С г. Пенза"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Монтаж крановой мачты МК 16С г. Пенза</p>
                </div>
              </div>

              <div 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                onClick={() => setSelectedImage('https://cdn.poehali.dev/files/8984414d-cf59-483a-98b7-0634a185152e.png')}
              >
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/8984414d-cf59-483a-98b7-0634a185152e.png"
                  alt="Монтаж крановой мачты МК 16С г. Пенза"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Монтаж крановой мачты МК 16С г. Пенза</p>
                </div>
              </div>

              <div 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                onClick={() => setSelectedImage('https://cdn.poehali.dev/files/7adbc86d-5c25-436f-a84b-d217eda4e7fd.png')}
              >
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/7adbc86d-5c25-436f-a84b-d217eda4e7fd.png"
                  alt="Монтаж крановой мачты МК 16С г. Пенза"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Монтаж крановой мачты МК 16С г. Пенза</p>
                </div>
              </div>

              <div 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                onClick={() => setSelectedImage('https://cdn.poehali.dev/files/1ef11383-b865-4384-adde-507a7bdc6f10.png')}
              >
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/1ef11383-b865-4384-adde-507a7bdc6f10.png"
                  alt="Монтаж крановой мачты МК 14-С г. Санкт-Петербург"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Монтаж крановой мачты МК 14-С г. Санкт-Петербург</p>
                </div>
              </div>

              <div 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                onClick={() => setSelectedImage('https://cdn.poehali.dev/files/2203b71f-feff-4ca9-be4b-df4ae6c471d6.png')}
              >
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/2203b71f-feff-4ca9-be4b-df4ae6c471d6.png"
                  alt="Монтаж крановой мачты МК 14-С г. Санкт-Петербург"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Монтаж крановой мачты МК 14-С г. Санкт-Петербург</p>
                </div>
              </div>

              <div 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                onClick={() => setSelectedImage('https://cdn.poehali.dev/files/2a2d6e50-48b5-48a7-b8aa-0f664fcaa6dd.png')}
              >
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/2a2d6e50-48b5-48a7-b8aa-0f664fcaa6dd.png"
                  alt="Монтаж крановой мачты г. Сасово"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Монтаж крановой мачты г. Сасово</p>
                </div>
              </div>

              <div 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                onClick={() => setSelectedImage('https://cdn.poehali.dev/files/2b460a56-3a42-4079-a756-88087a092bd3.png')}
              >
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/2b460a56-3a42-4079-a756-88087a092bd3.png"
                  alt="Монтаж крановой мачты г. Симферополь"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Монтаж крановой мачты г. Симферополь</p>
                </div>
              </div>

              <div 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                onClick={() => setSelectedImage('https://cdn.poehali.dev/files/f5e26a31-154a-4b26-8cda-ddaf61511994.png')}
              >
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/f5e26a31-154a-4b26-8cda-ddaf61511994.png"
                  alt="Монтаж крановой мачты г. Симферополь"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Монтаж крановой мачты г. Симферополь</p>
                </div>
              </div>

              <div 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                onClick={() => setSelectedImage('https://cdn.poehali.dev/files/3f496d09-1eeb-4735-ad82-bb050eeefed5.png')}
              >
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/3f496d09-1eeb-4735-ad82-bb050eeefed5.png"
                  alt="Монтаж крановой мачты г. Симферополь"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Монтаж крановой мачты г. Симферополь</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Нужна консультация по выбору мачты?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Оставьте заявку и наши специалисты помогут подобрать оптимальную модель под ваши задачи и базовую машину
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setShowConsultationForm(true)}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Link to="/catalog">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full"
                >
                  <Icon name="ArrowLeft" className="mr-2" size={20} />
                  Вернуться в каталог
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex items-center justify-between">
              <h3 className="font-heading font-semibold text-lg">Консультация: Мачты копровые</h3>
              <button 
                onClick={() => setShowConsultationForm(false)}
                className="text-muted-foreground hover:text-primary"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
            <div className="p-4">
              <EquipmentForm 
                categoryTitle="Мачты копровые"
                    categoryId="masts"
                    questions={[
                      {
                        question: "На какую базовую машину будете навешивать?",
                        options: ["Экскаватор", "Кран"]
                      },
                      {
                        question: "Модель базовой машины?"
                      },
                      {
                        question: "Что планируете навешивать?",
                        columns: [
                          { label: "Молот - какой?", placeholder: "Укажите молот" },
                          { label: "Вращатель - какой?", placeholder: "Укажите вращатель" }
                        ]
                      },
                      {
                        question: "Длина сваи"
                      },
                      {
                        question: "Когда планируется закупка (объект)?"
                      },
                      {
                        question: "В какой город осуществлять доставку?"
                      }
                    ]}
                  />
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[70] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Фото в полном размере"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <footer className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-16 w-auto mb-4"
              />
              <p className="text-white/70 text-sm leading-relaxed">
                Официальный дилер ведущих производителей сваебойного оборудования
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-white/70 hover:text-accent transition-colors">О компании</Link></li>
                <li><Link to="/catalog" className="text-white/70 hover:text-accent transition-colors">Оборудование</Link></li>
                <li><Link to="/parts" className="text-white/70 hover:text-accent transition-colors">Запчасти</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-accent transition-colors">Услуги</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start text-white/70">
                  <Icon name="Phone" size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <a href="tel:88006007465" className="hover:text-accent transition-colors">8 (800) 600-74-65</a>
                </li>
                <li className="flex items-start text-white/70">
                  <Icon name="Mail" size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@kgs-ural.ru" className="hover:text-accent transition-colors">info@kgs-ural.ru</a>
                </li>
                <li className="flex items-start text-white/70">
                  <Icon name="MapPin" size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <span>Екатеринбург, ул. Победы, 5</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Send" size={22} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Share2" size={22} />
                </a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Video" size={22} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} КоперГруппСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MachtyKoprovye;