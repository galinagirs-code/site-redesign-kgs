import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MobileMenu } from "@/components/MobileMenu";
import { ConsultationButton } from "@/components/ConsultationButton";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const About = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const milestones = [
    {
      year: "2013",
      title: "Основание компании",
      description: "Начало деятельности в сфере поставок оборудования для свайных работ"
    },
    {
      year: "2015",
      title: "Первые прямые поставки",
      description: "Налажены прямые поставки с ведущими производителями Китая"
    },
    {
      year: "2018",
      title: "Открытие производства",
      description: "Запущен собственный производственный цех в Екатеринбурге"
    },
    {
      year: "2020",
      title: "Расширение географии",
      description: "Выход на рынки Казахстана и стран СНГ"
    },
    {
      year: "2023",
      title: "350+ клиентов",
      description: "Достигнут рубеж в 350 довольных клиентов по России и СНГ"
    }
  ];

  const values = [
    {
      icon: "ShieldCheck",
      title: "Гарантия качества",
      description: "Контроль выполнения заказа на каждом этапе. Оборудование поставляется напрямую с заводов с сертификатами качества"
    },
    {
      icon: "DollarSign",
      title: "Оптимальные цены",
      description: "Прямые контракты с производителями позволяют предложить выгодные цены и полный цикл обслуживания"
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description: "Каждый клиент получает решение, максимально соответствующее его требованиям и задачам"
    },
    {
      icon: "Package",
      title: "Широкий ассортимент",
      description: "Обширный выбор техники и комплектующих для сокращения сроков поставки"
    },
    {
      icon: "Wrench",
      title: "Техобслуживание",
      description: "Ремонт и обслуживание европейского и китайского оборудования квалифицированными специалистами"
    },
    {
      icon: "Award",
      title: "Гарантия на оборудование",
      description: "Гарантийное и постгарантийное обслуживание на всём сроке эксплуатации техники"
    }
  ];

  const team = [
    {
      name: "Евгений Анатольевич Селезнев",
      position: "Генеральный директор",
      email: "info@kgs-ural.ru",
      description: "Руководит стратегическим развитием компании и ключевыми направлениями бизнеса"
    },
    {
      name: "Ольга Александровна Жирова",
      position: "Исполнительный директор",
      email: "zhirova@kgs-ural.ru",
      description: "Отвечает за операционное управление и координацию всех подразделений компании"
    },
    {
      name: "Юлия Александровна Плюхина",
      position: "Менеджер по продажам",
      email: "sales2@kgs-ural.ru",
      description: "Консультирует клиентов и подбирает оптимальные решения для проектов"
    },
    {
      name: "Артур Фирдависович Муталлапов",
      position: "Сервисный инженер",
      email: "sales3@kgs-ural.ru",
      description: "Обеспечивает техническую поддержку, диагностику и ремонт оборудования"
    }
  ];

  const achievements = [
    { value: 350, label: "Клиентов" },
    { value: 60, label: "Шефмонтажей" },
    { value: 130, label: "Единиц техники" },
    { value: 10, label: "Лет опыта" }
  ];

  const projects = [
    {
      id: 1,
      title: "Жилой комплекс «Новая высота», Москва",
      description: "Поставка и шефмонтаж 3 сваебойных молотов для забивки свай под многоэтажный ЖК",
      equipment: "Дизельные молоты DZJ-90",
      duration: "2 месяца",
      year: "2024",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg"
    },
    {
      id: 2,
      title: "Завод по производству металлоконструкций, Екатеринбург",
      description: "Комплексная поставка оборудования: буровая установка и копровые мачты",
      equipment: "Буровая установка MD-750, 2 копровые мачты",
      duration: "3 месяца",
      year: "2023",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg"
    },
    {
      id: 3,
      title: "Мост через реку Кама, Пермский край",
      description: "Поставка вибропогружателей для монтажа свайных опор моста",
      equipment: "Вибропогружатели ICE 44RF",
      duration: "4 месяца",
      year: "2023",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg"
    },
    {
      id: 4,
      title: "Торговый центр, Санкт-Петербург",
      description: "Шефмонтаж сваебойного оборудования на крупном объекте коммерческой недвижимости",
      equipment: "Гидравлический молот BSP CX-500",
      duration: "1.5 месяца",
      year: "2024",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg"
    },
    {
      id: 5,
      title: "Промышленный парк, Новосибирск",
      description: "Изготовление нестандартных металлоконструкций на собственном производстве",
      equipment: "Копровая мачта, наголовники, захваты",
      duration: "2 месяца",
      year: "2023",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg"
    },
    {
      id: 6,
      title: "Нефтеперерабатывающий завод, Казахстан",
      description: "Международная поставка буровой установки с полным таможенным сопровождением",
      equipment: "Буровая установка BGS-85",
      duration: "3 месяца",
      year: "2022",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg"
    }
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
              <Link to="/about" className="text-accent transition-colors text-sm font-medium">О компании</Link>
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
              <Button size="sm" className="btn-gradient text-white hidden md:block">
                Заказать звонок
              </Button>
              <MobileMenu currentPath="/about" />
            </div>
          </div>
        </div>
      </header>

      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Более 10 лет на рынке
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              КГС — ваш эксперт в оборудовании и строительстве фундаментов
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Торгово-производственная компания с более чем 10-летним опытом поставок, проектирования и реализации решений в сфере оборудования и фундаментостроения.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {achievements.map((stat, index) => (
              <Card key={index} className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix="+" 
                  className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-2"
                />
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-white to-muted/30">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">
                О компании КоперГруппСервис
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">КоперГруппСервис</strong> — ваш надёжный партнёр в производстве и поставках оборудования для забивки свай и лидерного бурения. Мы изготавливаем копровые мачты кранового и экскаваторного типа, а также широкий ассортимент расходных и запасных частей: свайные наголовники для гидравлических и дизельных молотов, захваты молота по направляющим, крепления, шнеки и другие металлоконструкции по вашим чертежам.
                </p>
                <p>
                  Мы поставляем только проверенное высококачественное оборудование из стран Азии и Европы, сотрудничая с известными мировыми производителями. За годы работы нам удалось выстроить долгосрочные и надёжные партнёрские отношения с лидерами отрасли.
                </p>
                <p>
                  Помимо поставок техники, мы предлагаем <strong className="text-foreground">полный спектр профессиональных услуг:</strong>
                </p>
                <ul className="grid md:grid-cols-2 gap-3 ml-6">
                  <li className="flex items-start space-x-2">
                    <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                    <span>Конструкторские разработки для уникальных проектов</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                    <span>Техническое обслуживание и профилактику оборудования</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                    <span>Шефмонтаж на объекте</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                    <span>Диагностику и ремонт импортного и отечественного оборудования</span>
                  </li>
                </ul>
                <p>
                  Также мы поставляем запасные части для экскаваторов и строительной техники: гидромоторы, редукторы, насосы, распределители, клапаны, гидроцилиндры, гусеницы и многое другое — всё для того, чтобы ваша техника работала без простоев и максимально эффективно.
                </p>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg mb-6 border-l-4 border-accent">
                <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                  Миссия компании
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Подбирать оптимальное оборудование и запчасти для надёжного, эффективного и своевременного решения ваших проектов.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-3xl font-heading font-bold mb-4 text-primary">
                  Цель компании
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Обеспечивать российский и СНГ-рынки высококачественным оборудованием для строительства фундаментов по оптимальным ценам и выстраивать долгосрочные, взаимовыгодные отношения с клиентами.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg"
                alt="Производство КГС"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent rounded-lg"></div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-l-4 border-accent">
            <h3 className="text-3xl font-heading font-bold mb-4 text-center text-primary">
              Задачи компании
            </h3>
            <p className="text-muted-foreground mb-6 text-center">
              Сопровождаем каждый этап работы и поставки оборудования заказчику:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Обработка заявок и производство",
                "Таможенная очистка и логистика",
                "Доставка на объект заказчика",
                "Шефмонтаж и ввод техники в эксплуатацию",
                "Обучение операторов для качественного выполнения работ",
                "Послепродажное обслуживание"
              ].map((task, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                  <div className="bg-accent/10 p-2 rounded">
                    <Icon name="CheckCircle2" className="text-accent" size={20} />
                  </div>
                  <span className="text-sm font-medium">{task}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Наши ценности
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={value.icon} className="text-accent" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-primary text-white max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white/10 p-6 rounded-lg flex-shrink-0">
                <Icon name="Headphones" className="text-accent" size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-3">
                  Послепродажное обслуживание
                </h3>
                <p className="text-white/90 mb-4">
                  Мы заботимся о вашей технике на каждом этапе её эксплуатации
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                    <span><strong>Надёжный сервис</strong> — качественное обслуживание приобретённой техники</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                    <span><strong>Максимальная эффективность</strong> — расширение возможностей и настройка систем</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                    <span><strong>Снижение рисков</strong> — минимизация простоев и финансовых потерь</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                    <span><strong>Быстрая доступность</strong> — необходимые запчасти всегда в наличии</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Наши партнеры
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Официальные представители ведущих мировых производителей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-accent" size={40} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">JULI</h3>
                <p className="text-muted-foreground text-sm">
                  Dongtai Juli Machinery Manufacturing Co., Ltd — производитель сваебойного и бурового оборудования
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-accent" size={40} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">STARKE</h3>
                <p className="text-muted-foreground text-sm">
                  Starke Machinery — ведущий производитель сваебойных установок и дизельных молотов
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-accent" size={40} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">YONGAN</h3>
                <p className="text-muted-foreground text-sm">
                  Yongan Machinery — специализация на вибропогружателях и гидравлических молотах
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 text-center">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Официальный статус дилера</strong> позволяет нам предлагать оригинальное оборудование по лучшим ценам с полной гарантией производителя
            </p>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Сертификаты и лицензии
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Наша деятельность подтверждена официальными документами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative aspect-[4/3]">
                <img 
                  src="https://cdn.poehali.dev/files/5e0971fa-3d0b-4041-a860-aef1bb88b334.JPG"
                  alt="Дилерский сертификат Dongtai Juli Machinery"
                  className="w-full h-full object-contain bg-white"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                    <Icon name="Award" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">Дилерский сертификат</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Официальный дилер Dongtai Juli Machinery Manufacturing Co., Ltd
                    </p>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>• Право продажи дизельных свайных молотов и запчастей</p>
                      <p>• Территория: вся Россия</p>
                      <p>• Действителен до: 24 июня 2027</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative aspect-[4/3]">
                <img 
                  src="https://cdn.poehali.dev/files/90b2ed09-d639-473d-9f73-cdc948b93674.jpg"
                  alt="Сертификат дилера Dongtai Juli (русская версия)"
                  className="w-full h-full object-contain bg-white"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                    <Icon name="FileCheck" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">Сертификат дилера (русская версия)</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Официальный дистрибьютор тайваньской Juli Machinery Manufacturing Co., Ltd
                    </p>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>• Право продажи направляющих стержней марки Juli</p>
                      <p>• Дилерская сеть и принадлежности</p>
                      <p>• Срок действия: до 24 июня 2027</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>



          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 max-w-4xl mx-auto mt-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex-shrink-0">
                <Icon name="FileText" className="text-primary" size={48} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Полный пакет документов
                </h3>
                <p className="text-muted-foreground mb-4">
                  Предоставляем все необходимые сертификаты, декларации соответствия, 
                  паспорта на оборудование и инструкции на русском языке. 
                  Помогаем с таможенным оформлением.
                </p>
                <Button className="btn-gradient text-white">
                  Запросить документы
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Производственный цех
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Собственная производственная площадка в г. Берёзовский, Свердловская область
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Icon name="Factory" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Производственные мощности</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-muted-foreground"><strong>Площадь цеха:</strong> 250 кв.м.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-muted-foreground">Станок плазменной резки с ЧПУ 2,5 × 6,0 м</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-muted-foreground">Четыре сварочных поста (полуавтомат)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-muted-foreground">Фрезерный станок с ЧПУ</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-muted-foreground">Токарный станок с ЧПУ</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-muted-foreground">Гибочный станок</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-muted-foreground">Кран-балка грузоподъёмностью 5 т</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Icon name="Package" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Склад запчастей</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                На складе всегда в наличии комплектующие для поставляемого оборудования, что обеспечивает:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="Zap" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-muted-foreground">Быстрый ремонт техники</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-muted-foreground">Минимизацию простоев</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="TrendingDown" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-muted-foreground">Снижение затрат наших клиентов</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Изготавливаем:</strong> стандартные и индивидуальные металлоконструкции по вашим чертежам
                </p>
              </div>
            </Card>
          </div>

          <div className="relative rounded-lg overflow-hidden h-[400px]">
            <img 
              src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg"
              alt="Производственный цех КГС"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Современное оборудование для качественного производства
                </h3>
                <p className="text-white/90">
                  Оснащение цеха позволяет выполнять сложные производственные задачи любой сложности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Наши проекты
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Примеры успешно реализованных поставок и шефмонтажей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Icon name="Image" size={64} className="text-muted-foreground" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Фото 1
                </h3>
                <p className="text-muted-foreground text-sm">
                  Пример реализованного проекта
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <Icon name="Image" size={64} className="text-muted-foreground" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Фото 2
                </h3>
                <p className="text-muted-foreground text-sm">
                  Пример реализованного проекта
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Icon name="Image" size={64} className="text-muted-foreground" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Фото 3
                </h3>
                <p className="text-muted-foreground text-sm">
                  Пример реализованного проекта
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <Icon name="Video" size={64} className="text-muted-foreground" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Видео 1
                </h3>
                <p className="text-muted-foreground text-sm">
                  Видеообзор проекта
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Icon name="Video" size={64} className="text-muted-foreground" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Видео 2
                </h3>
                <p className="text-muted-foreground text-sm">
                  Видеообзор проекта
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <Icon name="Video" size={64} className="text-muted-foreground" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Видео 3
                </h3>
                <p className="text-muted-foreground text-sm">
                  Видеообзор проекта
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Более 60 успешно реализованных проектов по всей России и странам СНГ
            </p>
            <Link to="/#contact">
              <Button className="btn-gradient-reverse text-white">
                Обсудить ваш проект
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
                  Работаем по всей России
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Поставим оборудование и запчасти в любой город России
                </p>
              </div>

              <div className="relative aspect-[3/2] md:aspect-[16/9] mb-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Map_of_Russia_-_Russian_Federation.svg/2560px-Map_of_Russia_-_Russian_Federation.svg.png"
                  alt="Карта России - география работы КГС"
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg">
                  <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Truck" className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Доставка по РФ</h3>
                  <p className="text-sm text-muted-foreground">ЖД, авто и морским транспортом</p>
                </div>

                <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                  <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Wrench" className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Шефмонтаж на объекте</h3>
                  <p className="text-sm text-muted-foreground">Выезд специалистов в любой регион</p>
                </div>

                <div className="text-center p-4 bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg">
                  <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Package" className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Запчасти в наличии</h3>
                  <p className="text-sm text-muted-foreground">Оперативная отправка по России</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Наша команда
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Профессионалы, которые делают компанию успешной
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary to-accent/20 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="User" className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg mb-1">{member.name}</h3>
                      <div className="text-accent text-sm font-medium mb-2">{member.position}</div>
                      <p className="text-muted-foreground text-sm mb-3">{member.description}</p>
                      <a 
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center space-x-2 text-sm text-primary hover:text-accent transition-colors"
                      >
                        <Icon name="Mail" size={16} />
                        <span>{member.email}</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <ConsultationButton size="lg" />
          </div>
          
          <Card className="mt-8 p-6 bg-gradient-to-br from-accent/5 to-primary/5 max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Icon name="Mail" className="text-accent" size={24} />
              <h3 className="font-heading font-semibold text-lg">По вопросам рекламы и сотрудничества</h3>
            </div>
            <a 
              href="mailto:marketing@kgs-ural.ru"
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              marketing@kgs-ural.ru
            </a>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Наш офис
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Посетите нас по адресу в Екатеринбурге или свяжитесь удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">Адрес офиса</h3>
                    <p className="text-muted-foreground mb-3">
                      г. Екатеринбург, ул. 40-летия Комсомола, 38/Л, офис 503
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>График работы:</strong><br />
                      Пн–Пт: 09:00 — 18:00
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">Телефоны</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>
                        <a href="tel:88006007465" className="hover:text-accent transition-colors">
                          8 (800) 600-74-65
                        </a>
                        <span className="text-sm"> — бесплатно</span>
                      </p>
                      <p>
                        <a href="tel:+73433467475" className="hover:text-accent transition-colors">
                          +7 (343) 346-74-75
                        </a>
                        <span className="text-sm"> — офис</span>
                      </p>
                      <p>
                        <a href="tel:+79122410318" className="hover:text-accent transition-colors">
                          +7 (912) 241-03-18
                        </a>
                        <span className="text-sm"> — WhatsApp</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
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
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="Factory" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">Производственный цех</h3>
                    <p className="text-muted-foreground">
                      г. Берёзовский, Свердловская область<br />
                      (за ЕКАДом)
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative rounded-lg overflow-hidden h-[600px] shadow-xl">
              <iframe
                src="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=1169658096189&ll=60.597474%2C56.838011&pt=60.597474,56.838011,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                className="border-0"
                title="Карта офиса КГС"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Что говорят о нас компании, с которыми мы работаем
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Работаем с КГС уже 3 года. Отличное качество оборудования, всегда в срок. 
                Шефмонтаж прошёл без проблем, инженеры очень грамотные."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Building2" className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-sm">ООО "СтройТех"</div>
                  <div className="text-xs text-muted-foreground">Москва</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Заказывали буровую установку и сваебойный молот. Цена ниже конкурентов, 
                качество на высоте. Техподдержка всегда на связи."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Building2" className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-sm">ООО "ФундаментСтрой"</div>
                  <div className="text-xs text-muted-foreground">Санкт-Петербург</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Быстрая доставка в Казахстан, все документы оформили правильно. 
                Рекомендуем как надёжного поставщика оборудования."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Building2" className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-sm">ТОО "КазСтрой"</div>
                  <div className="text-xs text-muted-foreground">Алматы, Казахстан</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Отличный сервис! Когда возникла поломка, приехали на следующий день и быстро починили. 
                Такой подход к клиентам редко встретишь."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Building2" className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-sm">ООО "УралФундамент"</div>
                  <div className="text-xs text-muted-foreground">Екатеринбург</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Покупали копровую мачту и запчасти. Консультанты помогли подобрать именно то, что нужно. 
                Оборудование работает безупречно уже полтора года."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Building2" className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-sm">ООО "СибирьСтрой"</div>
                  <div className="text-xs text-muted-foreground">Новосибирск</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Собственное производство в Екатеринбурге — это большой плюс. 
                Изготовили нестандартные металлоконструкции точно в срок."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Building2" className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-sm">ЗАО "ВолгаСваи"</div>
                  <div className="text-xs text-muted-foreground">Самара</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Готовы начать сотрудничество?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Свяжитесь с нами для получения консультации или каталога оборудования
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="btn-gradient-reverse text-white font-medium">
                  Получить консультацию
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Вернуться на главную
                </Button>
              </Link>
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
                <li><a href="/#catalog" className="hover:text-accent transition-colors">Сваебойные молоты</a></li>
                <li><a href="/#catalog" className="hover:text-accent transition-colors">Буровые установки</a></li>
                <li><a href="/#catalog" className="hover:text-accent transition-colors">Копровые мачты</a></li>
                <li><Link to="/parts" className="hover:text-accent transition-colors">Запчасти</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/services" className="hover:text-accent transition-colors">Шефмонтаж</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Сервис и ремонт</Link></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">Инжиниринг</a></li>
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

export default About;