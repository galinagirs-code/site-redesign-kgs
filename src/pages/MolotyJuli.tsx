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
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Молоты дизельные штанговые Dongtai Juli (серия DD)",
    "description": "Дизельные штанговые молоты Dongtai Juli серии DD. Энергия удара на 70-80% больше российских аналогов. Высокая мощность и низкий расход топлива.",
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
    "https://cdn.poehali.dev/files/34555c97-b564-4a8a-96f6-c2d485d0d5da.jpg"
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
    <div className="min-h-screen">
      <SEO 
        title="Молоты дизельные штанговые Dongtai Juli (серия DD) | KGS"
        description="Дизельные штанговые молоты Dongtai Juli серии DD для забивки свай. Энергия удара на 70-80% больше российских аналогов. Высокая мощность, низкий расход топлива."
        keywords="молоты juli, дизельные штанговые молоты, молот dd, молот для свай juli, dongtai juli"
        canonical="https://kgs-ural.ru/catalog/moloty-juli"
        ogTitle="Молоты дизельные штанговые Dongtai Juli (DD) - мощное оборудование"
        ogDescription="Дизельные штанговые молоты Dongtai Juli с энергией удара на 70-80% больше российских аналогов."
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
                <a href="https://vk.com/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Share2" size={18} />
                </a>
              </div>
              <a href="tel:+78003006587" className="hidden lg:flex items-center text-white text-sm">
                <Icon name="Phone" className="mr-2" size={16} />
                +7 (800) 300-65-87
              </a>
              <MobileMenu currentPath="/catalog/moloty-juli" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: 'Каталог', path: '/catalog' },
        { label: 'Сваебойные молоты', path: '/catalog' },
        { label: 'Молоты дизельные штанговые Dongtai Juli (серия DD)', path: '/catalog/moloty-juli' }
      ]} />

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
                  src={galleryImages[0]}
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

          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
              Модели молотов Dongtai Juli серии DD
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {variants.map((variant) => (
                <Card key={variant.name} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-primary">{variant.name}</h3>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      {variant.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-start text-sm border-b border-muted pb-2">
                          <span className="text-muted-foreground">{spec.label}:</span>
                          <span className="font-medium text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group"
                      onClick={() => setExpandedVariant(expandedVariant === variant.name ? null : variant.name)}
                    >
                      {expandedVariant === variant.name ? 'Скрыть' : 'Все характеристики'}
                      <Icon 
                        name={expandedVariant === variant.name ? "ChevronUp" : "ChevronDown"} 
                        className="ml-2 group-hover:translate-y-1 transition-transform" 
                        size={16} 
                      />
                    </Button>

                    {expandedVariant === variant.name && (
                      <div className="mt-4 pt-4 border-t space-y-2 animate-fade-in">
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

          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
                Назначение молотов Dongtai Juli DD
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <p className="text-muted-foreground">Погружение деревянных и железобетонных свай</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <p className="text-muted-foreground">Устройство свайных фундаментов</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <p className="text-muted-foreground">Погружение металлических труб</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <p className="text-muted-foreground">Погружение шпунта Ларсена</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary text-center">
              Получить консультацию по выбору молота
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Заполните форму, и наши специалисты помогут подобрать оптимальную модель молота Dongtai Juli для ваших задач
            </p>
            <EquipmentForm 
              categoryTitle="Молоты дизельные штанговые Dongtai Juli (серия DD)"
              categoryId="moloty-juli"
              questions={questions}
            />
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-12 w-auto mb-4"
              />
              <p className="text-white/70 text-sm">
                Надёжный поставщик сваебойного оборудования
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4 text-accent">Навигация</h3>
              <nav className="space-y-2">
                <Link to="/about" className="block text-white/70 hover:text-accent transition-colors text-sm">О компании</Link>
                <Link to="/catalog" className="block text-white/70 hover:text-accent transition-colors text-sm">Оборудование</Link>
                <Link to="/parts" className="block text-white/70 hover:text-accent transition-colors text-sm">Запчасти</Link>
                <Link to="/services" className="block text-white/70 hover:text-accent transition-colors text-sm">Услуги</Link>
              </nav>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4 text-accent">Контакты</h3>
              <div className="space-y-2 text-sm">
                <a href="tel:+78003006587" className="block text-white/70 hover:text-accent transition-colors">
                  +7 (800) 300-65-87
                </a>
                <a href="mailto:info@kgs-ural.ru" className="block text-white/70 hover:text-accent transition-colors">
                  info@kgs-ural.ru
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4 text-accent">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Send" size={24} />
                </a>
                <a href="https://vk.com/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Share2" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 text-xs md:text-sm">
              © 2024 ООО «КГС». Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MolotyJuli;