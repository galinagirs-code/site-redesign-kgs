import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";

const Services = () => {
  const supervisionSteps = [
    "Выезд на объект и проведение настройки и пусконаладки спецтехники с тестированием в различных режимах",
    "Предоставление квалифицированных консультаций по монтажу оборудования",
    "Согласование с заказчиком режимов работы оборудования и вспомогательной оснастки",
    "Определение объема работ, типа и количества привлекаемой техники",
    "Полноценный шефмонтаж сваебойного оборудования по всей России",
    "Контроль монтажа гидравлики, электрики и навесного оборудования",
    "Инструктаж обслуживающего персонала по правильной эксплуатации техники",
    "Сдача оборудования заказчику и совместное тестирование всех функций"
  ];

  const supervisionBenefits = [
    { icon: "UserCheck", title: "Профессиональный монтаж", description: "Под контролем опытных инженеров" },
    { icon: "Settings", title: "Точная настройка", description: "Тестирование в рабочих режимах" },
    { icon: "GraduationCap", title: "Инструктаж персонала", description: "По эксплуатации и обслуживанию" },
    { icon: "Award", title: "Соответствие стандартам", description: "Требованиям завода-изготовителя" },
    { icon: "Zap", title: "Бесперебойная работа", description: "Техники с первого запуска" }
  ];

  const maintenanceServices = [
    { icon: "Wrench", title: "Диагностика и ремонт", description: "Сваебойной и буровой техники" },
    { icon: "HardHat", title: "Шефмонтаж оборудования", description: "Поставляемого нашей компанией" },
    { icon: "Users", title: "Обучение специалистов", description: "Операторов и механиков на месте" },
    { icon: "MessageSquare", title: "Техконсультации", description: "По обслуживанию и эксплуатации" }
  ];

  const guaranteeFeatures = [
    { icon: "Calendar", text: "Гарантия до 4 месяцев на выполненные работы" },
    { icon: "RotateCcw", text: "Повторный ремонт бесплатно в гарантийный период" },
    { icon: "ShieldCheck", text: "Контроль качества на каждом этапе" },
    { icon: "MapPin", text: "Сервис по всей России и в странах СНГ" }
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
              <Link to="/catalog" className="text-white/90 hover:text-accent transition-colors text-sm">Оборудование</Link>
              <Link to="/parts" className="text-white/90 hover:text-accent transition-colors text-sm">Запчасти</Link>
              <Link to="/services" className="text-accent transition-colors text-sm font-medium">Услуги</Link>
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
              <Button size="sm" className="btn-gradient text-white hidden md:block">
                Заказать звонок
              </Button>
              <MobileMenu currentPath="/services" />
            </div>
          </div>
        </div>
      </header>

      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Профессиональный сервис
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Услуги
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Полный спектр услуг по монтажу, обслуживанию и ремонту сваебойного и бурового оборудования
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="#supervision" 
                className="bg-white/10 hover:bg-accent/20 border border-white/20 hover:border-accent/50 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium"
              >
                Шефмонтаж оборудования
              </a>
              <a 
                href="#maintenance" 
                className="bg-white/10 hover:bg-accent/20 border border-white/20 hover:border-accent/50 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium"
              >
                Техническое обслуживание
              </a>
              <a 
                href="#guarantee" 
                className="bg-white/10 hover:bg-accent/20 border border-white/20 hover:border-accent/50 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium"
              >
                Гарантия
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="supervision" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/50">
                Шефмонтаж оборудования
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Шефмонтаж и пусконаладка оборудования
              </h2>
              <p className="text-xl text-muted-foreground mb-2">
                Безупречная установка — надёжная работа вашей техники!
              </p>
              <p className="text-lg text-muted-foreground">
                Мы выполняем шефмонтаж и пусконаладку оборудования по всей территории России.
              </p>
            </div>

            <Card className="p-8 mb-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Одной из наиболее востребованных услуг нашей компании является <strong className="text-foreground">шефмонтаж</strong>, который гарантирует бесперебойную работу сваебойной техники, буровых установок, ударных молотов и другого оборудования при правильной установке и эксплуатации.
                </p>
                <p>
                  <strong className="text-foreground">Шефмонтаж</strong> — это процесс установки оборудования под контролем опытного инженерного специалиста. Благодаря этой услуге заказчики могут быть уверены в:
                </p>
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                    <Icon name="CheckCircle2" className="text-accent mb-2" size={24} />
                    <p className="text-sm font-medium">Правильности монтажа и настройки всех элементов</p>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                    <Icon name="Award" className="text-accent mb-2" size={24} />
                    <p className="text-sm font-medium">Соблюдении стандартов завода-изготовителя</p>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                    <Icon name="Package" className="text-accent mb-2" size={24} />
                    <p className="text-sm font-medium">Наличии всех необходимых комплектующих</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg mb-8">
                <h3 className="font-heading font-semibold text-xl mb-4">
                  Что включает шефмонтаж и пусконаладка:
                </h3>
                <div className="space-y-3">
                  {supervisionSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="font-heading font-semibold text-2xl mb-6 text-center">
                Что вы получаете:
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {supervisionBenefits.map((benefit, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={benefit.icon} className="text-accent" size={24} />
                    </div>
                    <h4 className="font-heading font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg border border-accent/30">
                <p className="text-sm text-muted-foreground mb-4">
                  Наши сервисные инженеры — это специалисты с многолетним опытом, которые знают все тонкости наладки и настройки сложного оборудования, строго соблюдая действующие стандарты и нормативы.
                </p>
                <p className="font-semibold text-lg">
                  КоперГруппСервис — гарант надёжного старта вашей техники.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary to-accent/20 text-white text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Свяжитесь с нами уже сегодня
              </h3>
              <div className="space-y-3 mb-6">
                <p className="text-lg">
                  <Icon name="Phone" className="inline mr-2" size={20} />
                  Горячая линия: <a href="tel:88006007465" className="font-bold hover:text-accent transition-colors">8 (800) 600-74-65</a>
                </p>
                <p className="text-lg">
                  <Icon name="Mail" className="inline mr-2" size={20} />
                  E-mail: <a href="mailto:info@kgs-ural.ru" className="font-bold hover:text-accent transition-colors">info@kgs-ural.ru</a>
                </p>
              </div>
              <Button size="lg" className="btn-gradient text-white font-medium">
                Заказать шефмонтаж
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="maintenance" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/50">
                Техническое обслуживание
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Обслуживание спецтехники и оборудования
              </h2>
              <p className="text-xl text-muted-foreground mb-2">
                Надёжный сервис для вашей техники
              </p>
              <p className="text-lg text-muted-foreground">
                Качественное техническое обслуживание — залог долгой и бесперебойной работы спецтехники
              </p>
            </div>

            <Card className="p-8 mb-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  В современных условиях сервис может успешно функционировать только при наличии опытных специалистов и профессионального диагностического оборудования.
                </p>
                <p>
                  Именно поэтому в компании <strong className="text-foreground">КоперГруппСервис</strong> большое внимание уделяется подготовке персонала — наши инженеры регулярно проходят обучение и повышение квалификации, в том числе на заводах-изготовителях оборудования.
                </p>
                <div className="bg-accent/5 p-6 rounded-lg border border-accent/20 my-6">
                  <p className="font-semibold text-foreground text-center text-lg">
                    Постоянный спрос на услуги наших сервисных инженеров — лучшее подтверждение высокого качества обслуживания и доверия клиентов.
                  </p>
                </div>
              </div>

              <h3 className="font-heading font-semibold text-2xl mb-6 text-center">
                Что мы делаем:
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {maintenanceServices.map((service, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                        <Icon name={service.icon} className="text-accent" size={28} />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-2">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-primary/5 p-6 rounded-lg mb-8">
                <h3 className="font-heading font-semibold text-xl mb-4 flex items-center">
                  <Icon name="AlertCircle" className="text-accent mr-3" size={24} />
                  Почему важно обучение:
                </h3>
                <p className="text-muted-foreground mb-4">
                  Неподготовленный оператор может допустить ошибки, которые приведут к неисправностям или аварийным ситуациям. Обучение механиков и операторов позволяет избежать поломок, повысить безопасность и продлить срок службы оборудования.
                </p>
                <p className="font-medium">
                  Наши специалисты знают специфику каждой модели техники и умеют находить решение даже в нестандартных ситуациях.
                </p>
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg border border-accent/30">
                <h3 className="font-heading font-semibold text-xl mb-3">
                  Надёжность, подтверждённая опытом
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  За годы работы мы выстроили прочные партнёрские отношения с крупными поставщиками оригинальных комплектующих. Это позволяет нам использовать качественные детали от заводов-изготовителей и поддерживать высокий уровень сервиса.
                </p>
                <p className="font-semibold text-lg">
                  КоперГруппСервис — ваш надёжный партнёр в обслуживании сваебойной и буровой техники.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary to-accent/20 text-white text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Свяжитесь с нами уже сегодня
              </h3>
              <div className="space-y-3 mb-6">
                <p className="text-lg">
                  <Icon name="Phone" className="inline mr-2" size={20} />
                  Горячая линия: <a href="tel:88006007465" className="font-bold hover:text-accent transition-colors">8 (800) 600-74-65</a>
                </p>
                <p className="text-lg">
                  <Icon name="Mail" className="inline mr-2" size={20} />
                  E-mail: <a href="mailto:info@kgs-ural.ru" className="font-bold hover:text-accent transition-colors">info@kgs-ural.ru</a>
                </p>
              </div>
              <Button size="lg" className="btn-gradient text-white font-medium">
                Заказать обслуживание техники
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="guarantee" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/50">
                Гарантия качества
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Гарантия на спецтехнику и оборудование
              </h2>
              <p className="text-xl text-muted-foreground">
                Надёжность, подтверждённая гарантией
              </p>
            </div>

            <Card className="p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Компания <strong className="text-foreground">КоперГруппСервис</strong> ответственно подходит к каждому этапу ремонта и обслуживания спецтехники. Мы гарантируем надёжность всех выполненных сервисных работ и уверенность клиентов в результате.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {guaranteeFeatures.map((feature, index) => (
                  <Card key={index} className="p-6 bg-accent/5 border-accent/20 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                        <Icon name={feature.icon} className="text-accent" size={28} />
                      </div>
                      <p className="font-medium text-lg">{feature.text}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-primary/5 p-6 rounded-lg mb-6">
                <p className="text-muted-foreground text-center italic">
                  Подобные случаи крайне редки, но мы считаем важным, чтобы наши клиенты чувствовали полную защиту и уверенность после обслуживания техники.
                </p>
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg border border-accent/30">
                <p className="text-muted-foreground mb-3">
                  Мы работаем по всей России и в странах СНГ, обеспечивая профессиональный сервис, ремонт и диагностику строительного оборудования.
                </p>
                <p className="font-semibold text-lg">
                  КоперГруппСервис — надёжный партнёр и гарантия бесперебойной работы вашей техники.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary to-accent/20 text-white text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Свяжитесь с нами
              </h3>
              <div className="space-y-3 mb-6">
                <p className="text-lg">
                  <Icon name="Phone" className="inline mr-2" size={20} />
                  Горячая линия: <a href="tel:88006007465" className="font-bold hover:text-accent transition-colors">8 (800) 600-74-65</a>
                </p>
                <p className="text-lg">
                  <Icon name="Mail" className="inline mr-2" size={20} />
                  E-mail: <a href="mailto:info@kgs-ural.ru" className="font-bold hover:text-accent transition-colors">info@kgs-ural.ru</a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-gradient text-white font-medium">
                  Узнать о гарантийных условиях
                </Button>
                <Button size="lg" className="btn-gradient-reverse text-white">
                  Оставить заявку на сервис
                </Button>
              </div>
            </Card>
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
                <li><a href="/#catalog" className="hover:text-accent transition-colors">Сваебойные молоты</a></li>
                <li><a href="/#catalog" className="hover:text-accent transition-colors">Буровые установки</a></li>
                <li><a href="/#catalog" className="hover:text-accent transition-colors">Копровые мачты</a></li>
                <li><Link to="/parts" className="hover:text-accent transition-colors">Запчасти</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#supervision" className="hover:text-accent transition-colors">Шефмонтаж</a></li>
                <li><a href="#maintenance" className="hover:text-accent transition-colors">Сервис и ремонт</a></li>
                <li><a href="#guarantee" className="hover:text-accent transition-colors">Гарантия</a></li>
                <li><Link to="/production" className="hover:text-accent transition-colors">Производство и доставка</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">О компании</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-accent transition-colors">О нас</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Контакты</Link></li>
                <li><a href="#" className="hover:text-accent transition-colors">Новости</a></li>
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

export default Services;