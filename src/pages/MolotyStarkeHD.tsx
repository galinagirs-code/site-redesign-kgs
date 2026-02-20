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

const MolotyStarkeHD = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Молоты дизельные трубчатые Starke (серия HD)",
    "description": "Дизельные трубчатые молоты Starke серии HD для забивки железобетонных свай, стальных труб, прямых и морских свай. Высокая эффективность и экономия топлива.",
    "brand": {
      "@type": "Brand",
      "name": "Starke"
    },
    "category": "Сваебойные молоты",
    "manufacturer": {
      "@type": "Organization",
      "name": "Starke"
    }
  };

  const galleryImages = [
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png"
  ];

  const variants = [
    {
      name: "HD-19",
      specs: [
        { label: "Масса ударной части", value: "1,9 т" },
        { label: "Энергия удара", value: "40 кДж" },
        { label: "Частота ударов", value: "40–55 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "1,9" },
        { label: "Энергия удара, кДж", value: "40" },
        { label: "Частота ударов, уд/мин", value: "40–55" },
        { label: "Расход топлива, л/час", value: "5–7" },
        { label: "Вес молота, кг", value: "3800" },
        { label: "Длина молота, мм", value: "4200" },
        { label: "Диаметр цилиндра, мм", value: "400" }
      ]
    },
    {
      name: "HD-25",
      specs: [
        { label: "Масса ударной части", value: "2,5 т" },
        { label: "Энергия удара", value: "52 кДж" },
        { label: "Частота ударов", value: "40–50 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "2,5" },
        { label: "Энергия удара, кДж", value: "52" },
        { label: "Частота ударов, уд/мин", value: "40–50" },
        { label: "Расход топлива, л/час", value: "7–9" },
        { label: "Вес молота, кг", value: "4900" },
        { label: "Длина молота, мм", value: "4600" },
        { label: "Диаметр цилиндра, мм", value: "450" }
      ]
    },
    {
      name: "HD-30",
      specs: [
        { label: "Масса ударной части", value: "3,0 т" },
        { label: "Энергия удара", value: "65 кДж" },
        { label: "Частота ударов", value: "35–50 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "3,0" },
        { label: "Энергия удара, кДж", value: "65" },
        { label: "Частота ударов, уд/мин", value: "35–50" },
        { label: "Расход топлива, л/час", value: "8–11" },
        { label: "Вес молота, кг", value: "5700" },
        { label: "Длина молота, мм", value: "4900" },
        { label: "Диаметр цилиндра, мм", value: "500" }
      ]
    },
    {
      name: "HD-40",
      specs: [
        { label: "Масса ударной части", value: "4,0 т" },
        { label: "Энергия удара", value: "88 кДж" },
        { label: "Частота ударов", value: "35–50 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "4,0" },
        { label: "Энергия удара, кДж", value: "88" },
        { label: "Частота ударов, уд/мин", value: "35–50" },
        { label: "Расход топлива, л/час", value: "10–13" },
        { label: "Вес молота, кг", value: "7200" },
        { label: "Длина молота, мм", value: "5300" },
        { label: "Диаметр цилиндра, мм", value: "550" }
      ]
    },
    {
      name: "HD-50",
      specs: [
        { label: "Масса ударной части", value: "5,0 т" },
        { label: "Энергия удара", value: "110 кДж" },
        { label: "Частота ударов", value: "30–45 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "5,0" },
        { label: "Энергия удара, кДж", value: "110" },
        { label: "Частота ударов, уд/мин", value: "30–45" },
        { label: "Расход топлива, л/час", value: "12–15" },
        { label: "Вес молота, кг", value: "8800" },
        { label: "Длина молота, мм", value: "5700" },
        { label: "Диаметр цилиндра, мм", value: "600" }
      ]
    },
    {
      name: "HD-60",
      specs: [
        { label: "Масса ударной части", value: "6,0 т" },
        { label: "Энергия удара", value: "135 кДж" },
        { label: "Частота ударов", value: "30–45 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "6,0" },
        { label: "Энергия удара, кДж", value: "135" },
        { label: "Частота ударов, уд/мин", value: "30–45" },
        { label: "Расход топлива, л/час", value: "14–17" },
        { label: "Вес молота, кг", value: "10500" },
        { label: "Длина молота, мм", value: "6100" },
        { label: "Диаметр цилиндра, мм", value: "650" }
      ]
    },
    {
      name: "HD-80",
      specs: [
        { label: "Масса ударной части", value: "8,0 т" },
        { label: "Энергия удара", value: "180 кДж" },
        { label: "Частота ударов", value: "28–42 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "8,0" },
        { label: "Энергия удара, кДж", value: "180" },
        { label: "Частота ударов, уд/мин", value: "28–42" },
        { label: "Расход топлива, л/час", value: "16–20" },
        { label: "Вес молота, кг", value: "13800" },
        { label: "Длина молота, мм", value: "6800" },
        { label: "Диаметр цилиндра, мм", value: "720" }
      ]
    },
    {
      name: "HD-100",
      specs: [
        { label: "Масса ударной части", value: "10 т" },
        { label: "Энергия удара", value: "225 кДж" },
        { label: "Частота ударов", value: "25–40 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "10" },
        { label: "Энергия удара, кДж", value: "225" },
        { label: "Частота ударов, уд/мин", value: "25–40" },
        { label: "Расход топлива, л/час", value: "18–23" },
        { label: "Вес молота, кг", value: "17000" },
        { label: "Длина молота, мм", value: "7400" },
        { label: "Диаметр цилиндра, мм", value: "800" }
      ]
    },
    {
      name: "HD-120",
      specs: [
        { label: "Масса ударной части", value: "12 т" },
        { label: "Энергия удара", value: "270 кДж" },
        { label: "Частота ударов", value: "25–38 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "12" },
        { label: "Энергия удара, кДж", value: "270" },
        { label: "Частота ударов, уд/мин", value: "25–38" },
        { label: "Расход топлива, л/час", value: "20–25" },
        { label: "Вес молота, кг", value: "20000" },
        { label: "Длина молота, мм", value: "8000" },
        { label: "Диаметр цилиндра, мм", value: "880" }
      ]
    }
  ];

  const questions = [
    {
      question: "Какой молот требуется?",
      options: ["Дизельный штанговый", "Дизельный трубчатый", "Гидравлический"]
    },
    {
      question: "На какую машину планируете навешивать?"
    },
    {
      question: "Какие сваи планируете забивать?",
      subfields: [
        { label: "Сечение", placeholder: "Укажите сечение свай" },
        { label: "Длина", placeholder: "Укажите длину свай" }
      ]
    },
    {
      question: "Какие требуются захваты?",
      options: ["Круглые", "Квадратные", "Плоские", "Под изготовление"]
    },
    {
      question: "Какой грунт?"
    },
    {
      question: "Требуется ли наголовник?",
      options: ["Да", "Нет"],
      conditionalFields: {
        "Да": [
          { label: "Какой наголовник", placeholder: "Укажите тип наголовника" },
          { label: "Сечение", placeholder: "Укажите сечение" }
        ]
      }
    },
    {
      question: "Требуется ли шефмонтаж?",
      options: ["Да", "Нет"]
    },
    {
      question: "В какой город осуществлять доставку?"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Молоты дизельные трубчатые Starke (серия HD) | KGS"
        description="Дизельные трубчатые молоты Starke серии HD. Энергия удара на 30-50% больше штанговых молотов. Регулировка силы удара в процессе работы без остановки."
        keywords="дизельные молоты, молоты Starke, серия HD, трубчатые молоты, забивка свай, сваебойное оборудование"
        canonical="https://kgs-ural.ru/catalog/moloty-starke-hd"
        ogTitle="Молоты дизельные трубчатые Starke (серия HD) - мощное оборудование для забивки свай"
        ogDescription="Дизельные трубчатые молоты Starke HD с высокой энергией удара и экономичным расходом топлива. Оптимальное соотношение цены и качества."
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />
      
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://cdn.poehali.dev/files/4a8cdfcd-d84b-4bda-b7ca-c8ca1ab6a835.svg" alt="KGS" className="h-8" />
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white/80 hover:text-accent transition-colors">Главная</Link>
              <Link to="/catalog" className="text-white hover:text-accent transition-colors">Оборудование</Link>
              <Link to="/services" className="text-white/80 hover:text-accent transition-colors">Услуги</Link>
              <Link to="/production" className="text-white/80 hover:text-accent transition-colors">Производство</Link>
              <Link to="/about" className="text-white/80 hover:text-accent transition-colors">О компании</Link>
              <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">Контакты</Link>
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
              <MobileMenu currentPath="/catalog/moloty-starke-hd" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: 'Оборудование', path: '/catalog' },
        { label: 'Молоты дизельные трубчатые Starke серия HD', path: '/catalog/moloty-starke-hd' }
      ]} />

      <section className="relative pt-14 pb-8 md:pt-16 md:pb-10 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Серия HD
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Молоты дизельные трубчатые Starke (серия HD)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Варианты дизельных трубчатых молотов HD
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

      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-white">
              <OptimizedImage 
                src="https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png"
                alt="Молоты дизельные трубчатые Starke серия HD"
                className="w-full h-full object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="variants" className="py-10 md:py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
                Варианты дизельных трубчатых молотов серии HD
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {variants.map((variant, index) => (
                  <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-heading font-bold text-primary">
                          {variant.name}
                        </h3>
                      </div>
                      
                      <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                        {variant.specs.map((spec, idx) => (
                          <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                            <span className="text-sm text-gray-700">{spec.label}</span>
                            <span className="text-sm font-semibold text-gray-900">{spec.value}</span>
                          </div>
                        ))}
                        
                        {expandedVariant === variant.name && (
                          <>
                            {variant.detailedSpecs.map((spec, idx) => (
                              <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                                <span className="text-sm text-gray-700">{spec.label}</span>
                                <span className="text-sm font-semibold text-gray-900">{spec.value}</span>
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

      <section id="description" className="py-10 md:py-14 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-xl mb-12 animate-fade-in">
              <CardContent className="p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center">Дизельные трубчатые молоты Starke серии HD</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">Принцип работы</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Дизельные трубчатые молоты для забивки свай работают по принципу дизельного двигателя, обеспечивая непрерывную высокоэффективную работу. Используется независимая технология принудительной смазки насоса, значительно увеличивающая срок службы оборудования.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                      Применение: установка железобетонных свай, свай из стальных труб, прямых и морских свай, наклонных свай.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-3">Преимущества молотов Starke HD</h4>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li className="leading-relaxed">Энергия удара на 30-50% больше, чем у штанговых молотов с аналогичными параметрами</li>
                      <li className="leading-relaxed">Оптимальное соотношение массы ударной части и силы удара — экономия топлива</li>
                      <li className="leading-relaxed">Регулировка силы удара в процессе работы без остановки молота</li>
                      <li className="leading-relaxed">Простая система воздушного охлаждения</li>
                      <li className="leading-relaxed">Ниже стоимость по сравнению с гидравлическими молотами</li>
                      <li className="leading-relaxed">Прочность, надежность, простота в эксплуатации и обслуживании</li>
                      <li className="leading-relaxed">Длительный срок службы благодаря принудительной смазке</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-3">Назначение молотов Starke HD</h4>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li className="leading-relaxed">Погружение железобетонных свай</li>
                      <li className="leading-relaxed">Устройство свайных фундаментов из стальных труб</li>
                      <li className="leading-relaxed">Забивка прямых свай</li>
                      <li className="leading-relaxed">Установка морских свай</li>
                      <li className="leading-relaxed">Погружение наклонных свай</li>
                      <li className="leading-relaxed">Погружение шпунта Ларсена</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center">
              Фотогалерея
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                  onClick={() => setSelectedImage(image)}
                >
                  <OptimizedImage 
                    src={image}
                    alt={`Молоты дизельные трубчатые Starke HD - фото ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                    <Icon name="ZoomIn" className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={48} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-accent"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={32} />
            </Button>
            <img
              src={selectedImage}
              alt="Увеличенное изображение"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <section id="consultation" className="py-10 md:py-14 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">
                Консультация специалиста
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Подбор дизельного трубчатого молота Starke
              </h2>
              <p className="text-lg text-muted-foreground">
                Заполните форму, и наш специалист поможет подобрать оптимальную модель молота для ваших задач
              </p>
            </div>

            {!showConsultationForm ? (
              <div className="text-center">
                <Button
                  size="lg"
                  className="btn-gradient text-white text-lg px-8 py-6"
                  onClick={() => setShowConsultationForm(true)}
                >
                  <Icon name="MessageSquare" size={24} className="mr-3" />
                  Получить консультацию
                </Button>
              </div>
            ) : (
              <Card className="border-none shadow-2xl animate-fade-in">
                <CardContent className="p-8">
                  <EquipmentForm 
                    equipmentType="Молоты дизельные трубчатые Starke (серия HD)"
                    questions={questions}
                    onClose={() => setShowConsultationForm(false)}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">КоперГруппСервис</h3>
              <p className="text-white/80">Производство и поставка сваебойного оборудования</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>Телефон: 8 (800) 600-74-65</p>
                <p>Email: info@kgs-ural.ru</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Send" size={24} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Share2" size={24} />
                </a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Video" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} КоперГруппСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MolotyStarkeHD;