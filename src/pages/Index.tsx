import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

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
      title: "Шефмонтаж",
      description: "Профессиональная установка и пусконаладка оборудования по всей России"
    },
    {
      icon: "Settings",
      title: "Сервис и ремонт",
      description: "Диагностика, техническое обслуживание и ремонт техники"
    },
    {
      icon: "Ruler",
      title: "Инжиниринг",
      description: "Конструкторские разработки и проектирование металлоконструкций"
    },
    {
      icon: "Factory",
      title: "Производство",
      description: "Собственный цех в Екатеринбурге, изготовление под заказ"
    }
  ];

  const stats = [
    { value: "350+", label: "Клиентов по России и СНГ" },
    { value: "60+", label: "Выполненных шефмонтажей" },
    { value: "12+", label: "Лет опыта команды" },
    { value: "130+", label: "Единиц поставленной техники" }
  ];

  return (
    <div className="min-h-screen">
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
              <a href="#catalog" className="text-white/90 hover:text-accent transition-colors text-sm">Каталог</a>
              <a href="#services" className="text-white/90 hover:text-accent transition-colors text-sm">Услуги</a>
              <a href="#production" className="text-white/90 hover:text-accent transition-colors text-sm">Производство</a>
              <Link to="/contact" className="text-white/90 hover:text-accent transition-colors text-sm">Контакты</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <a href="tel:88006007465" className="text-white hover:text-accent transition-colors text-sm font-medium hidden lg:block">
                8 (800) 600-74-65
              </a>
              <Button size="sm" className="btn-gradient text-white">
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
                12+ лет на рынке
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Оборудование для свайных фундаментов
              </h1>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Производство, поставка и сервис. Прямые поставки с заводов Китая и собственное производство в Екатеринбурге.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button size="lg" className="btn-gradient-reverse text-white font-medium">
                  Получить каталог
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Запросить консультацию
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span className="text-white/90 text-sm">350+ клиентов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span className="text-white/90 text-sm">Прямые поставки</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span className="text-white/90 text-sm">Своё производство</span>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg"
                  alt="Оборудование для свайных работ"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">О компании КГС</h2>
            <p className="text-muted-foreground text-lg">
              Мы — команда профессионалов с опытом более 12 лет в фундаментостроении. 
              С 2014 года поставляем и производим оборудование для забивки свай и лидерного бурения.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg"
                alt="Производство КГС"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
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
                    Прямые дилерские каналы с ведущими заводами: JULI, STARKE, YONGAN
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
                    Цех площадью 250 м² в Екатеринбурге с современным оборудованием ЧПУ
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
        </div>
      </section>

      <section id="catalog" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Каталог оборудования</h2>
            <p className="text-muted-foreground text-lg">
              Широкий ассортимент техники для строительства свайных фундаментов
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button variant="outline" className="w-full group/btn border-accent text-accent hover:bg-accent hover:text-white">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Полный каталог оборудования
            </Button>
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
                Собственный цех в Екатеринбурге
              </h2>
              <p className="text-white/80 text-lg mb-6">
                Производственная площадка оснащена современным оборудованием для изготовления металлоконструкций любой сложности.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>Станок плазменной резки ЧПУ 2,5×6 м</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>Фрезерный и токарный станки с ЧПУ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>Четыре сварочных поста</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>Кран-балка грузоподъёмностью 5 тонн</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>Площадь цеха 250 м²</span>
                </div>
              </div>

              <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90">
                Подробнее о производстве
              </Button>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Получите консультацию</h2>
              <p className="text-muted-foreground text-lg">
                Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
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
                  <Button className="w-full btn-gradient-reverse text-white" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </Card>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="Phone" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Телефоны</h3>
                      <p className="text-muted-foreground mb-1">8 (800) 600-74-65 — бесплатно</p>
                      <p className="text-muted-foreground mb-1">+7 (343) 346-74-75 — офис</p>
                      <p className="text-muted-foreground">+7 (912) 241-03-18 — WhatsApp</p>
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
                      <p className="text-muted-foreground">info@kgs-ural.ru</p>
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

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                  alt="КГС Логотип"
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-white/70 text-sm">
                Производство и поставка оборудования для свайных фундаментов
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Сваебойные молоты</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Буровые установки</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Копровые мачты</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Запасные части</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Шефмонтаж</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Сервис и ремонт</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Инжиниринг</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Производство</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">О компании</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-accent transition-colors">О нас</Link></li>
                <li><a href="#" className="hover:text-accent transition-colors">Доставка</a></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Контакты</Link></li>
                <li><a href="#" className="hover:text-accent transition-colors">Реквизиты</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
              <p>© 2025 КоперГруппСервис. Все права защищены.</p>
              <p>ИНН: 6670440671 | ОГРН: 1169658096189</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;