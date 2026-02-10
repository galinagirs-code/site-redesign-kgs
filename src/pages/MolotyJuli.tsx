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

const MolotyJuli = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Молоты дизельные штанговые JULI",
    "description": "Дизельные штанговые молоты JULI серии DD. Энергия удара на 70-80% больше российских аналогов. Высокая мощность и низкий расход топлива.",
    "brand": {
      "@type": "Brand",
      "name": "Dongtai Juli"
    },
    "category": "Сваебойные молоты",
    "manufacturer": {
      "@type": "Organization",
      "name": "Dongtai Juli Machinery Manufacturing Co., LTD"
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
      name: "DD-18",
      specs: [
        { label: "Масса ударной части", value: "1,8 т" },
        { label: "Максимальная энергия", value: "43 кДж" },
        { label: "Количество ударов в минуту", value: "40–60" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "1,8" },
        { label: "Максимальный ход цилиндра, м", value: "2,1" },
        { label: "Количество ударов в минуту", value: "40–60" },
        { label: "Максимальная энергия, кДж", value: "43" },
        { label: "Расход топлива, л/час", value: "6" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "596" },
        { label: "Максимальный вес сваи, т", value: "5" },
        { label: "Коэффициент компрессии", value: "18" },
        { label: "Масса молота, кг", value: "3300" }
      ]
    },
    {
      name: "DD-25",
      specs: [
        { label: "Масса ударной части", value: "2,5 т" },
        { label: "Максимальная энергия", value: "57,5 кДж" },
        { label: "Количество ударов в минуту", value: "40–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "2,5" },
        { label: "Максимальный ход цилиндра, м", value: "2,5" },
        { label: "Количество ударов в минуту", value: "40–50" },
        { label: "Максимальная энергия, кДж", value: "57,5" },
        { label: "Расход топлива, л/час", value: "10" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "968" },
        { label: "Максимальный вес сваи, т", value: "6" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "4600" }
      ]
    },
    {
      name: "DD-30",
      specs: [
        { label: "Масса ударной части", value: "3,0 т" },
        { label: "Максимальная энергия", value: "73,5 кДж" },
        { label: "Количество ударов в минуту", value: "35–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "3,0" },
        { label: "Максимальный ход цилиндра, м", value: "2,7" },
        { label: "Количество ударов в минуту", value: "35–50" },
        { label: "Максимальная энергия, кДж", value: "73,5" },
        { label: "Расход топлива, л/час", value: "11" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "1109" },
        { label: "Максимальный вес сваи, т", value: "6,5" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "5000" }
      ]
    },
    {
      name: "DD-35",
      specs: [
        { label: "Масса ударной части", value: "3,5 т" },
        { label: "Максимальная энергия", value: "87,5 кДж" },
        { label: "Количество ударов в минуту", value: "35–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "3,5" },
        { label: "Максимальный ход цилиндра, м", value: "2,85" },
        { label: "Количество ударов в минуту", value: "35–50" },
        { label: "Максимальная энергия, кДж", value: "87,5" },
        { label: "Расход топлива, л/час", value: "12,5" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "1268" },
        { label: "Максимальный вес сваи, т", value: "7,5" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "5600" }
      ]
    },
    {
      name: "DD-40",
      specs: [
        { label: "Масса ударной части", value: "4,0 т" },
        { label: "Максимальная энергия", value: "105 кДж" },
        { label: "Количество ударов в минуту", value: "35–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "4,0" },
        { label: "Максимальный ход цилиндра, м", value: "3,0" },
        { label: "Количество ударов в минуту", value: "35–50" },
        { label: "Максимальная энергия, кДж", value: "105" },
        { label: "Расход топлива, л/час", value: "14" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "1386" },
        { label: "Максимальный вес сваи, т", value: "9" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "6200" }
      ]
    },
    {
      name: "DD-50",
      specs: [
        { label: "Масса ударной части", value: "5,0 т" },
        { label: "Максимальная энергия", value: "131,2 кДж" },
        { label: "Количество ударов в минуту", value: "30–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "5,0" },
        { label: "Максимальный ход цилиндра, м", value: "3,0" },
        { label: "Количество ударов в минуту", value: "30–50" },
        { label: "Максимальная энергия, кДж", value: "131,2" },
        { label: "Расход топлива, л/час", value: "16" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "1746" },
        { label: "Максимальный вес сваи, т", value: "12" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "7500" }
      ]
    },
    {
      name: "DD-60",
      specs: [
        { label: "Масса ударной части", value: "6,0 т" },
        { label: "Максимальная энергия", value: "163,8 кДж" },
        { label: "Количество ударов в минуту", value: "30–45" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "6,0" },
        { label: "Максимальный ход цилиндра, м", value: "3,1" },
        { label: "Количество ударов в минуту", value: "30–45" },
        { label: "Максимальная энергия, кДж", value: "163,8" },
        { label: "Расход топлива, л/час", value: "18" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "2106" },
        { label: "Максимальный вес сваи, т", value: "15" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "9000" }
      ]
    },
    {
      name: "DD-75",
      specs: [
        { label: "Масса ударной части", value: "7,5 т" },
        { label: "Максимальная энергия", value: "206 кДж" },
        { label: "Количество ударов в минуту", value: "30–45" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "7,5" },
        { label: "Максимальный ход цилиндра, м", value: "3,2" },
        { label: "Количество ударов в минуту", value: "30–45" },
        { label: "Максимальная энергия, кДж", value: "206" },
        { label: "Расход топлива, л/час", value: "21" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "2535" },
        { label: "Максимальный вес сваи, т", value: "18" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "11000" }
      ]
    },
    {
      name: "DD-100",
      specs: [
        { label: "Масса ударной части", value: "10 т" },
        { label: "Максимальная энергия", value: "275 кДж" },
        { label: "Количество ударов в минуту", value: "25–40" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "10" },
        { label: "Максимальный ход цилиндра, м", value: "3,2" },
        { label: "Количество ударов в минуту", value: "25–40" },
        { label: "Максимальная энергия, кДж", value: "275" },
        { label: "Расход топлива, л/час", value: "25" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "3256" },
        { label: "Максимальный вес сваи, т", value: "22" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "14000" }
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
    <div className="min-h-screen bg-background">
      <SEO 
        title="Молоты дизельные штанговые JULI | KGS"
        description="Дизельные штанговые молоты JULI серии DD для забивки свай. Энергия удара на 70-80% больше российских аналогов. Высокая мощность, низкий расход топлива."
        keywords="молоты juli, дизельные штанговые молоты, молот dd, молот для свай juli"
        canonical="https://kgs-ural.ru/catalog/moloty-juli"
        ogTitle="Молоты дизельные штанговые JULI - мощное оборудование для забивки свай"
        ogDescription="Дизельные штанговые молоты JULI с энергией удара на 70-80% больше российских аналогов."
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />
      
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/5c1db9e3-d3bc-4fef-9e97-4e9fc1e1f1fc.png" 
                alt="KGS Logo" 
                className="h-8 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white/90 hover:text-white transition-colors">
                Главная
              </Link>
              <Link to="/catalog" className="text-white hover:text-white transition-colors">
                Оборудование
              </Link>
              <Link to="/about" className="text-white/90 hover:text-white transition-colors">
                О компании
              </Link>
              <Link to="/contact" className="text-white/90 hover:text-white transition-colors">
                Контакты
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+73432888845" className="text-white hover:text-accent transition-colors">
                +7 (343) 288-88-45
              </a>
            </div>

            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs 
              items={[
                { label: "Главная", href: "/" },
                { label: "Каталог", href: "/catalog" },
                { label: "Сваебойные молоты", href: "/catalog/svaebojnye-moloty" },
                { label: "Молоты дизельные штанговые JULI" }
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
              Молоты дизельные штанговые JULI
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Дизельные штанговые молоты серии DD для забивки свай различных типов
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div>
                <div className="aspect-square rounded-lg overflow-hidden bg-muted mb-4">
                  <OptimizedImage
                    src={galleryImages[0]}
                    alt="Молоты дизельные штанговые JULI"
                    className="w-full h-full object-contain p-8"
                  />
                </div>
              </div>

              <div>
                <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
                  Дизельные штанговые молоты
                </Badge>
                <h2 className="text-3xl font-bold mb-4">О молотах JULI</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Дизельный штанговый молот производства Dongtai Juli Machinery Manufacturing Co., LTD (Китай) отличается большой мощностью и стабильным качеством. Серия DD — самая современная продукция, производимая на основе многолетнего опыта и передовых технологий.
                  </p>
                  <h3 className="text-xl font-semibold mb-3">Преимущества молотов JULI:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 mt-1 text-accent flex-shrink-0" size={20} />
                      <span>Энергия удара на 70-80% больше, чем у молотов российского производства с таким же весом ударной части</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 mt-1 text-accent flex-shrink-0" size={20} />
                      <span>Высокая компрессия по сравнению с российскими аналогами</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 mt-1 text-accent flex-shrink-0" size={20} />
                      <span>Высокая мощность и низкий расход топлива</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 mt-1 text-accent flex-shrink-0" size={20} />
                      <span>Большой срок службы</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 mt-1 text-accent flex-shrink-0" size={20} />
                      <span>Хорошая теплоотдача, увеличивающая производительность</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Модели молотов JULI серии DD</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {variants.map((variant) => (
                  <Card key={variant.name} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-primary">{variant.name}</h3>
                      <div className="space-y-2 mb-4">
                        {variant.specs.map((spec, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{spec.label}:</span>
                            <span className="font-medium">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => setExpandedVariant(expandedVariant === variant.name ? null : variant.name)}
                      >
                        {expandedVariant === variant.name ? 'Скрыть характеристики' : 'Все характеристики'}
                        <Icon name={expandedVariant === variant.name ? "ChevronUp" : "ChevronDown"} className="ml-2" size={16} />
                      </Button>
                      {expandedVariant === variant.name && (
                        <div className="mt-4 pt-4 border-t space-y-2">
                          {variant.detailedSpecs.map((spec, idx) => (
                            <div key={idx} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{spec.label}:</span>
                              <span className="font-medium">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Получить консультацию</h2>
              <p className="text-center text-muted-foreground mb-8">
                Заполните форму, и наши специалисты помогут подобрать оптимальную модель молота JULI для ваших задач
              </p>
              <EquipmentForm 
                equipmentType="Молоты дизельные штанговые JULI"
                questions={questions}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">О компании</h3>
              <p className="text-white/80 text-sm">
                КоперГруппСервис — лидер рынка по поставкам современного оборудования для строительства свайных фундаментов
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-sm">
                <p className="text-white/80">
                  <Icon name="Phone" className="inline mr-2" size={16} />
                  +7 (343) 288-88-45
                </p>
                <p className="text-white/80">
                  <Icon name="Mail" className="inline mr-2" size={16} />
                  info@kgs-ural.ru
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/catalog" className="text-white/80 hover:text-white transition-colors">Каталог</Link></li>
                <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">О компании</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Оборудование</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/catalog/svaebojnye-moloty" className="text-white/80 hover:text-white transition-colors">Сваебойные молоты</Link></li>
                <li><Link to="/catalog/machty-koprovye" className="text-white/80 hover:text-white transition-colors">Мачты копровые</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 КоперГруппСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MolotyJuli;
