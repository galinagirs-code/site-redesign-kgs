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
import { SpecialOfferBanner } from "@/components/SpecialOfferBanner";

const Catalog = () => {
  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Каталог сваебойного оборудования",
    "description": "Широкий выбор оборудования для свайных работ",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Копровые мачты",
          "description": "Мачты копровые крановые и экскаваторные для забивки свай",
          "category": "Свайное оборудование",
          "brand": {
            "@type": "Brand",
            "name": "KGS"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Сваебойные молоты",
          "description": "Гидравлические и дизельные молоты для забивки свай",
          "category": "Свайное оборудование",
          "brand": {
            "@type": "Brand",
            "name": "Yongan, Starke"
          }
        }
      }
    ]
  };

  const categories = [
    {
      id: "masts",
      title: "Мачты копровые",
      image: "https://cdn.poehali.dev/files/f50bcd3e-120c-4036-9648-3b8a985947a3.png",
      models: [
        "Мачты копровые крановые (серия МК)",
        "Мачты копровые экскаваторные (Китай)",
        "Мачты копровые экскаваторные (Россия)"
      ],
      questions: [
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
          question: "Параметры свай и бурения",
          columns: [
            { label: "Сечение свай, диаметр трубы?", placeholder: "Укажите сечение" },
            { label: "Диаметр бурения?", placeholder: "Укажите диаметр" }
          ]
        },
        {
          question: "Длина сваи"
        },
        {
          question: "Глубина работ",
          columns: [
            { label: "Глубина забивки?", placeholder: "Укажите глубину забивки" },
            { label: "Глубина бурения?", placeholder: "Укажите глубину бурения" }
          ]
        },
        {
          question: "Какие будут грунты?"
        },
        {
          question: "Когда планируется закупка (объект)?"
        },
        {
          question: "Требуется ли шефмонтаж?",
          options: ["Да", "Нет"]
        },
        {
          question: "В какой город осуществлять доставку?"
        }
      ]
    },
    {
      id: "pile-hammers",
      title: "Сваебойные молоты",
      image: "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
      models: [
        "Молоты гидравлические DongHao",
        "Молоты дизельные трубчатые STARKE",
        "Молоты дизельные трубчатые SEMW",
        "Молоты дизельные штанговые JULI",
        "Свайные наголовники"
      ],
      questions: [
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
      ]
    },
    {
      id: "pile-machines",
      title: "Сваебойные машины",
      image: "https://cdn.poehali.dev/files/fa6a1c32-f5ac-47df-9c14-016eeb4d7260.png",
      models: [
        "Сваебойные установки STARKE (серия LH)",
        "Шагающие сваебойные установки JULI (серия KLB)",
        "КБУРГ"
      ],
      questions: [
        {
          question: "Сечение свай, диаметр трубы, длина свайного элемента?"
        },
        {
          question: "Глубина погружения свайного элемента (глубина забивки)?"
        },
        {
          question: "Какие будут грунты?"
        },
        {
          question: "Когда планируется закупка (объект)?"
        },
        {
          question: "В какой город осуществлять доставку?"
        }
      ]
    },
    {
      id: "drilling",
      title: "Буровые машины",
      image: "https://cdn.poehali.dev/files/f0763622-3011-4803-ae06-6ec6db9aa3ce.png",
      models: [
        "Гидравлическая буровая машина JINT (серия SH)",
        "Гидравлическая буровая машина JINT (серия SD)",
        "Горизонтальная буровая машина JuLi (серия JL)"
      ],
      questions: [
        {
          question: "Диаметр бурения?"
        },
        {
          question: "Глубина бурения?"
        },
        {
          question: "Какие будут грунты?"
        },
        {
          question: "Требуется ли шефмонтаж?",
          options: ["Да", "Нет"]
        },
        {
          question: "Когда планируется объект?"
        },
        {
          question: "В какой город осуществлять доставку?"
        }
      ]
    },
    {
      id: "vibro-crane",
      title: "Вибропогружатели крановые",
      image: "https://cdn.poehali.dev/files/d148e800-1448-4288-bda0-4d9ffa4bcc8a.png",
      models: [
        "Вибропогружатели электрические крановые"
      ],
      questions: [
        {
          question: "На какую базовую машину будете навешивать?",
          options: ["Экскаватор", "Кран"]
        },
        {
          question: "Если кран",
          options: ["Электрический", "Гидравлический"]
        },
        {
          question: "Грузоподъемность базовой машины?"
        },
        {
          question: "Что планируете погружать?"
        },
        {
          question: "Глубина погружения?"
        },
        {
          question: "Диаметр трубы?"
        },
        {
          question: "Какие требуются зажимы?",
          options: ["Труба", "Шпунт", "Сваи"]
        },
        {
          question: "Какие будут грунты?"
        },
        {
          question: "Требуется ли шефмонтаж?",
          options: ["Да", "Нет"]
        },
        {
          question: "Когда планируется закупка (объект)?"
        },
        {
          question: "В какой город осуществлять доставку?"
        }
      ]
    },
    {
      id: "vibro-excavator",
      title: "Вибропогружатели экскаваторные",
      image: "https://cdn.poehali.dev/files/9de47f8e-82f1-49ce-b46a-09736cce72a3.png",
      models: [
        "Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS)",
        "Гидравлические экскаваторные вибропогружатели с нижним зажимом (серия S)",
        "Удлинённая стрела для экскаватора",
        "Быстросъёмное соединение (квик-каплер)"
      ],
      questions: [
        {
          question: "Грузоподъемность базовой машины?"
        },
        {
          question: "Что планируете погружать?"
        },
        {
          question: "Глубина погружения?"
        },
        {
          question: "Диаметр трубы?"
        },
        {
          question: "Какие требуются зажимы?",
          options: ["Труба", "Шпунт", "Сваи"]
        },
        {
          question: "Какие будут грунты?"
        },
        {
          question: "Требуется ли шефмонтаж?",
          options: ["Да", "Нет"]
        },
        {
          question: "Когда планируется объект?"
        },
        {
          question: "В какой город осуществлять доставку?"
        }
      ]
    },
    {
      id: "pile-pressing",
      title: "Сваевдавливающие установки",
      image: "https://cdn.poehali.dev/files/1ae9275c-07fe-4d96-894d-285350ab6cbd.png",
      models: [
        "Сваевдавливающая установка JULI (серия YZS)"
      ],
      questions: [
        {
          question: "Сечение свай, длина свайного элемента?"
        },
        {
          question: "Глубина вдавливания?"
        },
        {
          question: "Какие будут грунты?"
        },
        {
          question: "Требуется ли шефмонтаж?",
          options: ["Да", "Нет"]
        },
        {
          question: "Когда планируется закупка (объект)?"
        },
        {
          question: "В какой город осуществлять доставку?"
        }
      ]
    },
    {
      id: "cutters",
      title: "Сваескусыватели",
      image: "https://cdn.poehali.dev/files/80fab017-44fa-4d20-8ea0-2a2996b71c1f.png",
      models: [
        "Сваескусыватели для круглых свай",
        "Сваескусыватели для квадратных свай"
      ],
      questions: [
        {
          question: "Диаметр скусываемого свайного элемента (для круглых)"
        },
        {
          question: "Сечение скусываемого свайного элемента (для квадратных)"
        }
      ]
    },
    {
      id: "jacks",
      title: "Домкраты",
      image: "https://cdn.poehali.dev/files/5cf49725-e360-435c-8968-e7a658e38518.png",
      models: [
        "Домкраты для извлечения свай"
      ],
      questions: []
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Каталог сваебойного оборудования — купить копровые мачты, молоты, буровые | КГС"
        description="Большой выбор сваебойного оборудования: копровые мачты, гидравлические и дизельные молоты, буровые установки, вибропогружатели. Прямые поставки от производителей. Оптимальные цены."
        keywords="купить сваебойное оборудование, копровые мачты цена, сваебойные молоты купить, буровые установки для свай, вибропогружатели, каталог свайного оборудования"
        canonical="https://kgs-ural.ru/catalog"
        ogTitle="Каталог сваебойного оборудования КГС"
        ogDescription="Широкий выбор оборудования для свайных работ. Прямые поставки, доступные цены, гарантия качества."
      />
      <SchemaOrg data={catalogSchema} />
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
              <a href="#contact">
                <Button size="sm" className="btn-gradient text-white hidden md:block">
                  Получить каталог
                </Button>
              </a>
              <MobileMenu currentPath="/catalog" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Каталог оборудования', path: '/catalog' }]} />

      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/50 text-sm">
              Полный каталог оборудования
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              КоперГруппСервис — лидер рынка по поставкам современного оборудования и техники для строительства свайных фундаментов
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              Работаем по всей России и странам СНГ
            </p>
            
            <a href="#contact" className="block sm:inline-block">
              <Button size="lg" className="btn-gradient-reverse text-white font-medium shadow-xl w-full sm:w-auto">
                <Icon name="Download" className="mr-2" size={20} />
                Получить каталог
              </Button>
            </a>
          </div>
        </div>
      </section>

      <SpecialOfferBanner />

      {/* Catalog Equipment Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white shadow-md">
                <div className="relative aspect-square overflow-hidden bg-white">
                  <OptimizedImage
                    src={category.image}
                    alt={category.title}
                    variant="card"
                    className="h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4">
                    {category.title}
                  </h2>
                  <ul className="space-y-2 mb-6">
                    {category.models.map((model, idx) => {
                      const isKoprovyeMachty = category.id === "masts" && model === "Мачты копровые крановые серия МК";
                      return (
                        <li key={idx}>
                          {isKoprovyeMachty ? (
                            <Link 
                              to="/catalog/machty-koprovye"
                              className="text-sm md:text-base text-muted-foreground hover:text-primary flex items-start transition-colors cursor-pointer group"
                            >
                              <Icon name="ChevronRight" size={18} className="mr-1 mt-0.5 flex-shrink-0 text-accent/60 group-hover:text-accent" />
                              <span className="leading-snug group-hover:underline">{model}</span>
                            </Link>
                          ) : (
                            <a 
                              href="#contact"
                              className="text-sm md:text-base text-muted-foreground hover:text-primary flex items-start transition-colors cursor-pointer group"
                            >
                              <Icon name="ChevronRight" size={18} className="mr-1 mt-0.5 flex-shrink-0 text-accent/60 group-hover:text-accent" />
                              <span className="leading-snug group-hover:underline">{model}</span>
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <EquipmentForm 
                    categoryTitle={category.title}
                    categoryId={category.id}
                    questions={category.questions || []}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-8 text-center text-primary">
              Поставка, производство и сервис оборудования для строительства свайных фундаментов
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              <p>
                КоперГруппСервис предлагает комплексные решения для проектов по выполнению свайных работ — от подбора техники до поставки запасных частей и полного технического обслуживания оборудования.
              </p>
              <p>
                Наш ассортимент включает широкий спектр специализированной техники:
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 md:p-8 mb-8">
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-6 text-primary">
                Ассортимент оборудования
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Свайные молоты различных типов</strong> — гидравлические, дизельные штанговые и трубчатые
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Вибропогружатели крановые</strong> — с нормальной частотой и вариабельные, гидравлические и электрические
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Экскаваторные вибропогружатели</strong> — с гуськом и боковым зажимом
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Копровые мачты кранового типа</strong> — для молотов и бурового вращателя
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Сваебойные машины (копры)</strong>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Машины статического вдавливания (сваевдавливающие)</strong>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Буровые машины</strong>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Сваескусыватели</strong>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Свайные наголовники</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-6 text-primary">
                Комплексное обслуживание от нашей компании включает:
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p>
                    Профессиональные консультации по подбору оборудования и техники
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p>
                    Организацию доставки любым удобным способом (ж/д, морским или автомобильным транспортом) до строительной площадки заказчика
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p>
                    Полное таможенное оформление грузов
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p>
                    Шефмонтажные работы непосредственно на объекте
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p>
                    Сервисное обслуживание и обеспечение запасными частями
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg border-l-4 border-accent">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center font-medium">
                Мы предлагаем полный цикл услуг под ключ, обеспечивая наших клиентов всем необходимым для успешной реализации строительных проектов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Получить консультацию
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Нужна консультация?
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8">
              Свяжитесь с нами для получения подробной информации о любой категории оборудования
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+78003006587" className="inline-block">
                <Button size="lg" className="btn-gradient-reverse text-white w-full sm:w-auto">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить нам
                </Button>
              </a>
              <a href="mailto:info@kgs-ural.ru" className="inline-block">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full sm:w-auto">
                  <Icon name="Mail" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </a>
            </div>
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

export default Catalog;