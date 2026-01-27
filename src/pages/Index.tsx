import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ImageWithWatermark } from "@/components/ImageWithWatermark";
import { SpecialOfferBanner } from "@/components/SpecialOfferBanner";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "КоперГруппСервис",
    "alternateName": "КГС",
    "url": "https://kgs-ural.ru",
    "logo": "https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png",
    "description": "Производство и поставка сваебойного оборудования, буровых установок, копровых мачт. Шефмонтаж и техобслуживание по всей России и СНГ.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Екатеринбург",
      "addressCountry": "RU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-800-600-74-65",
      "contactType": "customer service",
      "email": "service@kgs-ural.ru",
      "availableLanguage": "Russian"
    },
    "sameAs": [
      "https://vk.com/kgsural",
      "https://t.me/kgs_ural"
    ],
    "foundingDate": "2013",
    "areaServed": ["RU", "KZ", "BY"],
    "knowsAbout": ["сваебойное оборудование", "копровые мачты", "буровые установки", "шефмонтаж"]
  };

  const equipment = [
    {
      id: 1,
      title: "Мачты копровые",
      image: "https://cdn.poehali.dev/files/f50bcd3e-120c-4036-9648-3b8a985947a3.png",
      models: [
        "Мачты копровые крановые (серия МК Россия)",
        "Мачты копровые экскаваторные (серия MSX Россия)",
        "Мачты копровые экскаваторные (Китай)"
      ]
    },
    {
      id: 2,
      title: "Сваебойные молоты",
      image: "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
      models: [
        "Молоты гидравлические DongHao",
        "Молоты дизельные трубчатые STARKE",
        "Молоты дизельные трубчатые SEMW",
        "Молоты дизельные штанговые JULI",
        "Свайные наголовники"
      ]
    },
    {
      id: 3,
      title: "Сваебойные машины",
      image: "https://cdn.poehali.dev/files/fa6a1c32-f5ac-47df-9c14-016eeb4d7260.png",
      models: [
        "Сваебойные установки STARKE (серия LH)",
        "Шагающие сваебойные установки JULI (серия KLB)",
        "Сваебойная установка КБУРГ"
      ]
    },
    {
      id: 4,
      title: "Буровые машины",
      image: "https://cdn.poehali.dev/files/f0763622-3011-4803-ae06-6ec6db9aa3ce.png",
      models: [
        "Гидравлическая буровая машина JINT (серия SH)",
        "Гидравлическая буровая машина JINT (серия SD)",
        "Горизонтальная буровая машина JULI (серия JL)"
      ]
    },
    {
      id: 5,
      title: "Вибропогружатели крановые",
      image: "https://cdn.poehali.dev/files/20e2dbf3-1009-4b9d-83ab-9ceac3ef4216.png",
      models: [
        "Вибропогружатели гидравлические крановые Yongan (серия YZ)",
        "Вибропогружатели гидравлические крановые Yongan (серия YZ-VM)",
        "Вибропогружатели электрические крановые Yongan (серия DZJ)"
      ]
    },
    {
      id: 6,
      title: "Вибропогружатели экскаваторные",
      image: "https://cdn.poehali.dev/files/9de47f8e-82f1-49ce-b46a-09736cce72a3.png",
      models: [
        "Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS)",
        "Гидравлические экскаваторные вибропогружатели с нижним зажимом (серия S)",
        "Удлинённая стрела для экскаватора",
        "Быстросъёмное соединение (квик-каплер)"
      ]
    },
    {
      id: 7,
      title: "Сваевдавливающие установки",
      image: "https://cdn.poehali.dev/files/876e67f7-de30-453a-ae1b-6d5bbb60e863.png",
      models: [
        "Сваевдавливающая установка JULI (серия YZS)"
      ]
    },
    {
      id: 8,
      title: "Сваескусыватели",
      image: "https://cdn.poehali.dev/files/80fab017-44fa-4d20-8ea0-2a2996b71c1f.png",
      models: [
        "Сваескусыватели для круглых свай",
        "Сваескусыватели для квадратных свай"
      ]
    },
    {
      id: 9,
      title: "Домкраты",
      image: "https://cdn.poehali.dev/files/5cf49725-e360-435c-8968-e7a658e38518.png",
      models: [
        "Домкраты для извлечения свай"
      ]
    }
  ];

  const services = [
    {
      icon: "Wrench",
      title: "Шефмонтаж и пусконаладка оборудования",
      description: "Профессиональная установка и настройка оборудования"
    },
    {
      icon: "Settings",
      title: "Техническое обслуживание",
      description: "Регулярное обслуживание и ремонт техники"
    },
    {
      icon: "GraduationCap",
      title: "Консультация и обучение",
      description: "Обучение персонала работе с оборудованием"
    },
    {
      icon: "ShieldCheck",
      title: "Гарантийное и постгарантийное обслуживание",
      description: "Полная поддержка на всех этапах эксплуатации"
    }
  ];

  const stats = [
    { value: 350, label: "Клиентов по России и СНГ" },
    { value: 60, label: "Выполненных шефмонтажей" },
    { value: 10, label: "Лет опыта команды" },
    { value: 130, label: "Единиц поставленной техники" }
  ];

  const principles = [
    {
      icon: "ShieldCheck",
      title: "Гарантия качества и соблюдение сроков"
    },
    {
      icon: "DollarSign",
      title: "Оптимальные цены на оборудование"
    },
    {
      icon: "Users",
      title: "Индивидуальный подход к клиенту"
    },
    {
      icon: "Award",
      title: "Широкий ассортимент оборудования"
    },
    {
      icon: "Wrench",
      title: "Техническое обслуживание оборудования"
    },
    {
      icon: "HeadphonesIcon",
      title: "Постпродажный сервис"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="КГС — Сваебойное оборудование | Производство, шефмонтаж, сервис"
        description="Производство и поставка сваебойного оборудования, буровых установок, копровых мачт. Шефмонтаж, техобслуживание. Работаем по всей России и СНГ. 10+ лет опыта. 350+ клиентов."
        keywords="сваебойное оборудование, копровые мачты, буровые установки, сваебойные молоты, шефмонтаж оборудования, купить сваебойное оборудование, производство свайного оборудования"
        canonical="https://kgs-ural.ru/"
        ogImage="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/og-image-1763364751842.png"
      />
      <SchemaOrg data={organizationSchema} />
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
              <Link to="/catalog" className="text-white/90 hover:text-accent transition-colors text-sm">Оборудование</Link>
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
              <a href="#contact">
                <Button size="sm" className="btn-gradient text-white hidden md:block">
                  Заказать звонок
                </Button>
              </a>
              <MobileMenu currentPath="/" />
            </div>
          </div>
        </div>
      </header>

      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="absolute inset-0">
          <ImageWithWatermark 
            src="https://cdn.poehali.dev/files/478ad401-ddf3-4936-9a52-2fcda59d6718.jpeg"
            alt="Оборудование для свайных работ"
            className="w-full h-full object-cover opacity-20"
            style={{filter: 'brightness(0.9) contrast(1.1) saturate(1.15)'}}
          />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="animate-fade-in relative z-10">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
                10+ лет на рынке
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
                Оборудование и машины для строительства свайных фундаментов
              </h1>
              <div className="mb-4 md:mb-6">
                <p className="text-accent text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
                  ПРОИЗВОДСТВО • ПОСТАВКА • СЕРВИС
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8">
                <a href="#contact" className="w-full sm:w-auto">
                  <Button size="lg" className="btn-gradient-reverse text-white font-medium w-full sm:w-auto">
                    Получить каталог
                  </Button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <Button size="lg" className="btn-gradient-reverse text-white font-medium w-full sm:w-auto">
                    Запросить консультацию
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={18} />
                  <span className="text-white/90 text-xs sm:text-sm">350+ клиентов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={18} />
                  <span className="text-white/90 text-xs sm:text-sm">Прямые поставки</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={18} />
                  <span className="text-white/90 text-xs sm:text-sm">Собственное производство</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <AnimatedCounter 
                  end={stat.value} 
                  suffix="+" 
                  className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-accent mb-1 md:mb-2"
                />
                <div className="text-xs md:text-sm text-muted-foreground leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpecialOfferBanner />

      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4">О компании КГС</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Мы — команда профессионалов с более чем 10-летним опытом в поставке и производстве оборудования для строительства свайных фундаментов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            <div className="relative flex justify-center items-start">
              <div className="max-w-[500px] w-full">
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/8c3796cc-a524-4f33-9530-7c050d6bfc36.png"
                  alt="Производство КГС"
                  variant="content"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Award" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Поставка импортного оборудования</h3>
                  <p className="text-muted-foreground">
                    Сотрудничество с ведущими производителями Китая и Турции
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Factory" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Собственное производство</h3>
                  <p className="text-muted-foreground">
                    2 производственных цеха площадью 1000 и 1800 м²
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Users" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Полный цикл услуг</h3>
                  <p className="text-muted-foreground">
                    От подбора оборудования до ввода в эксплуатацию и постпродажного сервиса
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              Принципы, которыми мы руководствуемся в работе
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={principle.icon} className="text-accent" size={28} />
                  </div>
                  <h4 className="font-heading font-semibold text-center text-base md:text-lg">
                    {principle.title}
                  </h4>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link to="/about">
              <Button size="lg" className="btn-gradient-reverse text-white font-medium w-full sm:w-auto">
                Подробнее о компании
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4">Каталог оборудования</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Широкий ассортимент техники для строительства свайных фундаментов
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {equipment.map((item) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white shadow-md">
                <div className="relative aspect-square overflow-hidden bg-white">
                  <ImageWithWatermark
                    src={item.image}
                    alt={item.title}
                    className={`h-full w-full object-contain group-hover:scale-105 transition-transform duration-300 ${item.id === 7 || item.id === 8 || item.id === 9 ? 'p-0' : 'p-4'}`}
                    watermarkPosition={item.id === 7 ? 'bottom-2 right-4' : 'bottom-4 right-4'}
                  />
                </div>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-heading font-semibold text-lg md:text-xl mb-4">{item.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {item.models.map((model, idx) => (
                      <li key={idx}>
                        <a 
                          href="#contact"
                          className="text-sm md:text-base text-muted-foreground hover:text-primary flex items-start transition-colors cursor-pointer group/item"
                        >
                          <Icon name="ChevronRight" size={18} className="mr-1 mt-0.5 flex-shrink-0 text-accent/60 group-hover/item:text-accent" />
                          <span className="leading-snug group-hover/item:underline">{model}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <Link to="/catalog">
                    <Button variant="outline" className="w-full group/btn border-accent text-accent hover:bg-accent hover:text-white">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link to="/catalog" className="block sm:inline-block">
              <Button size="lg" className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
                Полный каталог оборудования
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Наши услуги</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} className="text-accent" size={32} />
                </div>
                <h3 className="font-heading font-semibold text-lg">{service.title}</h3>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="btn-gradient-reverse text-white font-medium">
                Подробнее об услугах
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="production" className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
                Производство
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Производственный цех
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>2 производственных цеха площадью 1000 и 1800 кв.м.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>2 станка плазменной резки с ЧПУ 2,5 × 6,0 м</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>12 сварочных постов (полуавтомат)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>Фрезерные и токарные станки с ЧПУ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>Кран-балки грузоподъёмностью 5 т.</span>
                </div>
              </div>

              <Link to="/production">
                <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90">
                  Подробнее о производстве
                </Button>
              </Link>
            </div>

            <div className="image-card relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary opacity-30 z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary opacity-30 z-10 pointer-events-none"></div>
              <ImageWithWatermark 
                src="https://cdn.poehali.dev/files/659f2e6b-375e-43a9-849a-527f54ee4b64.png"
                alt="Производственный цех КГС"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4">Получите консультацию</h2>
              <p className="text-muted-foreground text-base md:text-lg">
                Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Card className="p-4 md:p-6">
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input placeholder="email@example.com" type="email" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox id="privacy-index" className="mt-1" />
                    <label 
                      htmlFor="privacy-index" 
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      Я согласен на обработку персональных данных в соответствии с{" "}
                      <a href="#" className="text-primary hover:text-accent underline">
                        политикой конфиденциальности
                      </a>
                    </label>
                  </div>
                  <Button type="submit" className="w-full btn-gradient-reverse text-white" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </Card>

              <div className="space-y-4 md:space-y-6">
                <Card className="p-4 md:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="Phone" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Телефоны</h3>
                      <p className="text-muted-foreground mb-1">
                        <a href="tel:88006007465" className="hover:text-accent transition-colors">
                          8 (800) 600-74-65
                        </a>
                        {" "}— бесплатно
                      </p>
                      <p className="text-muted-foreground mb-1">
                        <a href="tel:+73433467475" className="hover:text-accent transition-colors">
                          +7 (343) 346-74-75
                        </a>
                        {" "}— офис
                      </p>
                      <p className="text-muted-foreground">
                        <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                          @kgs_ural
                        </a>
                        {" "}— Telegram
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="Mail" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground mb-1">
                        <a 
                          href="mailto:info@kgs-ural.ru"
                          className="hover:text-accent transition-colors"
                        >
                          info@kgs-ural.ru
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a 
                          href="mailto:service@kgs-ural.ru"
                          className="hover:text-accent transition-colors"
                        >
                          service@kgs-ural.ru
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="MapPin" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Адрес офиса</h3>
                      <p className="text-muted-foreground">
                        г. Екатеринбург, ул. 40-летия Комсомола, 38/Л, офис 503
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Пн–Пт: 09:00 — 18:00
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-3 md:mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                  alt="КГС Логотип"
                  className="h-12 md:h-16 w-auto"
                />
              </div>
              <p className="text-white/70 text-xs md:text-sm">
                Производство и поставка оборудования для строительства свайных фундаментов
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base">Каталог</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Сваебойные молоты</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Буровые установки</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Копровые мачты</a></li>
                <li><Link to="/parts" className="hover:text-accent transition-colors">Запчасти</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/services" className="hover:text-accent transition-colors">Шефмонтаж и пусконаладка оборудования</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Техническое обслуживание и обучение</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Гарантия</Link></li>
                <li><Link to="/production" className="hover:text-accent transition-colors">Производство и доставка</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">О компании</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-accent transition-colors">О нас</Link></li>
                <li><a href="#" className="hover:text-accent transition-colors">Доставка</a></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Контакты</Link></li>
                <li><a href="#" className="hover:text-accent transition-colors">Новости</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
              <p>© 2025 КоперГруппСервис. Все права защищены.</p>
              <div className="flex items-center space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  <Icon name="Share2" size={20} />
                </a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  <Icon name="Video" size={20} />
                </a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-accent transition-colors">Политика cookie</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;