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

const Index = () => {
  const equipment = [
    {
      id: 1,
      title: "Сваебойные молоты",
      description: "Гидравлические и дизельные молоты для забивки свай",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg"
    },
    {
      id: 2,
      title: "Буровые установки",
      description: "Оборудование для лидерного бурения",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg"
    },
    {
      id: 3,
      title: "Копровые мачты",
      description: "Кранового и экскаваторного типа",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg"
    },
    {
      id: 4,
      title: "Вибропогружатели",
      description: "Высокочастотное оборудование для погружения свай",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg"
    },
    {
      id: 5,
      title: "Навесное оборудование",
      description: "Захваты, наголовники, металлоконструкции",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg"
    },
    {
      id: 6,
      title: "Запасные части",
      description: "Комплектующие для всех типов оборудования",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg"
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
                <a href="https://wa.me/79122410318" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="MessageCircle" size={18} />
                </a>
                <a href="https://t.me/+79122410318" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Send" size={18} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Share2" size={18} />
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
        
        <div className="absolute inset-0 md:hidden">
          <img 
            src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg"
            alt="Оборудование для свайных работ"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in relative z-10">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
                10+ лет на рынке
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
                Оборудование и машины для строительства свайных фундаментов
              </h1>
              <p className="text-white/80 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Производство, поставка и сервис
              </p>
              
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
                  <span className="text-white/90 text-xs sm:text-sm">Своё производство</span>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg"
                  alt="Оборудование для свайных работ"
                  className="w-full h-[500px] object-cover animate-subtle-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
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

      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4">О компании КГС</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Мы — команда профессионалов с опытом работы более 10 лет, специализирующаяся на поставке и производстве оборудования для строительства свайных фундаментов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg"
                alt="Производство КГС"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover animate-subtle-zoom"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Award" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Официальные поставки</h3>
                  <p className="text-muted-foreground">
                    Прямые дилерские каналы с ведущими заводами Китая и Турции
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
              <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 animate-subtle-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-heading font-semibold text-lg md:text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-4">{item.description}</p>
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
            <p className="text-muted-foreground text-lg">
              Комплексное обслуживание от профессиональной команды
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} className="text-accent" size={32} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
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
              <p className="text-white/80 text-lg mb-6">
                Производственная площадка «КоперГруппСервис» находится в г. Берёзовский, Свердловская область (за ЕКАДом) и оснащена всем необходимым для выполнения сложных производственных задач.
              </p>
              
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

            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg"
                alt="Производственный цех"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
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
                        <a href="tel:+79122410318" className="hover:text-accent transition-colors">
                          +7 (912) 241-03-18
                        </a>
                        {" "}— WhatsApp
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
                      <a 
                        href="mailto:info@kgs-ural.ru"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        info@kgs-ural.ru
                      </a>
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
                Производство и поставка оборудования для свайных фундаментов
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
                <li><Link to="/services" className="hover:text-accent transition-colors">Шефмонтаж</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Сервис и ремонт</Link></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Инжиниринг</a></li>
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
                <a href="https://wa.me/79122410318" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="https://t.me/+79122410318" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  <Icon name="Share2" size={20} />
                </a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  <Icon name="Video" size={20} />
                </a>
              </div>
              <p>ИНН: 6670440671 | ОГРН: 1169658096189</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;