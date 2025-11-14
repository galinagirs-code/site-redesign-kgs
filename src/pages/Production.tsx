import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Production = () => {
  const capabilities = [
    {
      icon: "Ruler",
      title: "Инженерный отдел",
      description: "Детальные расчёты, моделирование и проектирование конструкций"
    },
    {
      icon: "Factory",
      title: "Производственный участок",
      description: "Быстрое и качественное изготовление оборудования по стандартам"
    },
    {
      icon: "Wrench",
      title: "Сервисные инженеры",
      description: "Профессиональный монтаж и ввод оборудования в работу"
    }
  ];

  const advantages = [
    "Оперативно выпускаем оборудование разной сложности",
    "Производим запасные и расходные части",
    "Выполняем заказы в сжатые сроки",
    "Обеспечиваем строгий контроль качества на каждом этапе"
  ];

  const rvdFeatures = [
    { icon: "Shield", text: "Высокая износостойкость" },
    { icon: "Gauge", text: "Стабильность давления" },
    { icon: "Timer", text: "Долговечность в интенсивной эксплуатации" },
    { icon: "Award", text: "Соответствие промышленным стандартам" }
  ];

  const machtCapabilities = [
    "Бурение",
    "Забивка свай",
    "Разработка котлованов"
  ];

  const modernizationFactors = [
    "Прочность несущих конструкций",
    "Устойчивость машины под нагрузкой",
    "Мощность силовой установки",
    "Возможности гидравлической системы",
    "Совместимость с системой управления",
    "Особенности веса и баланса",
    "Условия эксплуатации",
    "Экономическая эффективность проекта"
  ];

  const modernizationBenefits = [
    "Стоимость в несколько раз ниже, чем покупка новой техники",
    "Сохранение базовой машины в первоначальном виде",
    "Модульная конструкция всех доработок — без вмешательства в ключевые узлы",
    "Возможность полного восстановления исходной конфигурации техники"
  ];

  const deliverySteps = [
    {
      number: "1",
      title: "Приём и проверка оборудования у китайского поставщика",
      items: [
        "Контроль комплектации",
        "Проверка соответствия параметрам",
        "Фото- и видеоотчёты по запросу"
      ]
    },
    {
      number: "2",
      title: "Подготовка документации",
      items: [
        "Формирование полного пакета документов",
        "Оформление бумаг для прохождения таможни",
        "Проверка корректности всех спецификаций"
      ]
    },
    {
      number: "3",
      title: "Отгрузка и таможенное оформление",
      items: [
        "Подача оборудования на транспорт",
        "Сопровождение груза на всех этапах",
        "Организация быстрой и корректной «растаможки»"
      ]
    },
    {
      number: "4",
      title: "Доставка до региона заказчика",
      items: [
        "Автотранспорт",
        "Железнодорожная доставка",
        "Комбинированные логистические схемы"
      ]
    },
    {
      number: "5",
      title: "Контроль и безопасность груза",
      items: [
        "Сопровождение груза по всему маршруту",
        "Контроль сохранности",
        "Постоянное информирование клиента о статусе перевозки"
      ]
    },
    {
      number: "6",
      title: "Уведомление о прибытии",
      items: [
        "Сообщаем о готовности к выгрузке заранее и координируем процесс"
      ]
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
              <Link to="/" className="text-white/90 hover:text-accent transition-colors text-sm">Главная</Link>
              <Link to="/about" className="text-white/90 hover:text-accent transition-colors text-sm">О компании</Link>
              <a href="/#catalog" className="text-white/90 hover:text-accent transition-colors text-sm">Каталог</a>
              <Link to="/production" className="text-accent transition-colors text-sm font-medium">Производство и логистика</Link>
              <a href="#" className="text-white/90 hover:text-accent transition-colors text-sm">Новости</a>
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

      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Собственное производство
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Производство и доставка
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Полный цикл производства навесного оборудования и организация доставки по всей России
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">
              Полный цикл производства навесного оборудования
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Одним из ключевых направлений деятельности компании является полный цикл производства навесного оборудования для фундаментного строения, а также изготовление металлоконструкций любой сложности по чертежам заказчика.
              </p>
              <p>
                Мы создаём решения, соответствующие техническим нормам, инженерным требованиям и задачам конкретного проекта.
              </p>
              <p className="font-semibold text-foreground">
                Наш опыт позволяет нам воплощать даже самые сложные инженерные идеи, если они не противоречат законам физики и требованиям безопасности.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold mb-8 text-center">
              Работа компании — полный цикл
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {capabilities.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="text-accent" size={32} />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-center mb-3">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                <Icon name="MapPin" className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Екатеринбург — центр металлургии России
                </h3>
                <p className="text-muted-foreground mb-6">
                  Наше производство расположено в Екатеринбурге — центре металлургии России. Это позволяет:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                      <span className="text-sm">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/50">
                  Производство РВД
                </Badge>
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Рукава высокого давления
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Помимо основного оборудования, компания производит рукава высокого давления любого диаметра и длины.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  В производстве используются европейские материалы, что гарантирует высокое качество и надёжность.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {rvdFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-accent/10 p-2 rounded">
                        <Icon name={feature.icon} className="text-accent" size={20} />
                      </div>
                      <span className="text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6 italic">
                  Каждый РВД проходит обязательный контроль и испытания перед отгрузкой.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg"
                  alt="Производство РВД"
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative">
                <img 
                  src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg"
                  alt="Копровые мачты"
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/50">
                  Универсальность оборудования
                </Badge>
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Копровые мачты для кранов и экскаваторов
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Для расширения возможностей строительной техники мы предлагаем копровые мачты для кранов и экскаваторов.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Устанавливая мачту на базовую машину, вы получаете оборудование, способное выполнять:
                </p>
                <div className="space-y-3 mb-6">
                  {machtCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium">{capability}</span>
                    </div>
                  ))}
                </div>
                <Card className="p-4 bg-accent/5 border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    Это позволяет использовать уже имеющуюся технику в новых задачах без покупки нового оборудования, снижая затраты заказчика.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Модернизация техники для забивки свай
              </h2>
              <p className="text-muted-foreground text-lg">
                Оптимальные технические решения по модернизации
              </p>
            </div>

            <Card className="p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Компания «КоперГруппСервис» модернизирует краны и экскаваторы, превращая простаивающие машины в полноценные сваебойные или буровые установки.
              </p>
              
              <h3 className="font-heading font-semibold text-xl mb-4">
                При модернизации учитываем:
              </h3>
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {modernizationFactors.map((factor, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm text-muted-foreground">{factor}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-xl mb-4">
                  Преимущества модернизации:
                </h3>
                <div className="space-y-3">
                  {modernizationBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Проектирование бурового и свайного оборудования
              </h2>
              <p className="text-muted-foreground text-lg">
                Комплексное проектирование оборудования под ваши задачи
              </p>
            </div>

            <Card className="p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Проектирование начинается с формирования технического задания на основе опросного листа.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Затем создаётся технический проект, учитывающий:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Рабочие задачи и условия эксплуатации",
                  "Характеристики базовой машины",
                  "Расчёт нагрузок",
                  "Технические ограничения",
                  "Промышленные и экологические стандарты"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                    <Icon name="Lightbulb" className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-xl mb-4">
                  Результат проектирования:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: "Target", text: "Оборудование с высокой эффективностью" },
                    { icon: "DollarSign", text: "Оптимальные затраты на производство и эксплуатацию" },
                    { icon: "ShieldCheck", text: "Надёжность и безопасность" },
                    { icon: "Settings", text: "Точная интеграция с базовой машиной" }
                  ].map((result, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-accent/10 p-2 rounded">
                        <Icon name={result.icon} className="text-accent" size={20} />
                      </div>
                      <span className="text-sm font-medium">{result.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary to-accent/20 text-white text-center">
              <p className="text-lg mb-6">
                Компания «КоперГруппСервис» — это инженерная экспертиза, современное производство и практический опыт, позволяющие создавать универсальное, надёжное и экономически выгодное оборудование для фундаментного строения.
              </p>
              <p className="text-xl font-semibold mb-6">
                Готовы обсудить задачу или рассчитать стоимость оборудования?
              </p>
              <p className="text-white/90 mb-8">
                Оставьте заявку — инженер «КоперГруппСервис» свяжется с вами, уточнит технические требования и предложит оптимальное решение под ваш проект.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Заказать расчёт стоимости
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
                Логистика
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Доставка оборудования и спецтехники
              </h2>
              <p className="text-muted-foreground text-lg">
                ООО «КоперГруппСервис» обеспечивает покупателю быструю, надёжную и безопасную доставку оборудования и спецтехники — от проверки товара у производителя до выгрузки на объекте заказчика.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {deliverySteps.map((step, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg mb-3">
                        {step.title}
                      </h3>
                      <div className="space-y-2">
                        {step.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-2">
                            <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={16} />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 bg-gradient-to-br from-white to-muted/30">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Благодаря многолетнему опыту работы с промышленным оборудованием и проверенными иностранными поставщиками, «КоперГруппСервис» обеспечивает своим клиентам быстрые и надёжные поставки техники.
                </p>
                <p>
                  Оптимизированные маршруты, отработанные процессы и прямое взаимодействие с производителями позволяют организовать доставку в минимальные сроки и на выгодных условиях.
                </p>
                <p>
                  Мы полностью берём на себя все этапы — от проверки оборудования и подготовки документов до таможенного сопровождения, транспортировки и контроля сохранности груза.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  КоперГруппСервис — когда важны точность, надёжность и ответственность за результат.
                </p>
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
                <li><a href="/#catalog" className="hover:text-accent transition-colors">Запасные части</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="/#services" className="hover:text-accent transition-colors">Шефмонтаж</a></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">Сервис и ремонт</a></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">Инжиниринг</a></li>
                <li><Link to="/production" className="hover:text-accent transition-colors">Производство</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">О компании</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-accent transition-colors">О нас</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Контакты</Link></li>
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

export default Production;