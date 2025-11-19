import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const Production = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Форма отправлена:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => {
        setIsDialogOpen(false);
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const capabilities = [
    {
      icon: "Ruler",
      title: "Инженерный отдел",
      description: "Выполняет детальные расчёты, моделирование и проектирование конструкций"
    },
    {
      icon: "Factory",
      title: "Производственный участок",
      description: "Быстро и качественно изготавливает оборудование, соблюдая стандарты качества"
    },
    {
      icon: "Wrench",
      title: "Сервисные инженеры",
      description: "Обеспечивают профессиональный шефмонтаж и ввод оборудования в эксплуатацию"
    }
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

  const projectingConsiderations = [
    "Рабочие задачи и условия эксплуатации",
    "Характеристики базовой машины",
    "Расчёт нагрузок",
    "Технические ограничения",
    "Промышленные и экологические стандарты"
  ];

  const projectingResults = [
    "Оборудование с высокой эффективностью",
    "Оптимальные затраты на производство и эксплуатацию",
    "Надёжность и безопасность",
    "Точная интеграция с базовой машиной"
  ];

  const deliverySteps = [
    {
      number: "1",
      title: "Приём и проверка оборудования у завода-изготовителя",
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
        "Загрузка оборудования на транспорт",
        "Сопровождение груза на всех этапах",
        "Организация быстрой и правильной таможенной очистки"
      ]
    },
    {
      number: "4",
      title: "Доставка до региона заказчика",
      items: [
        "Автотранспорт",
        "Железнодорожная доставка",
        "Авиадоставка",
        "Комбинированные логистические схемы"
      ],
      note: "Сроки поставки рассчитываются индивидуально"
    },
    {
      number: "5",
      title: "Контроль и безопасность груза",
      items: [
        "Страхование груза",
        "Сопровождение груза по всему маршруту",
        "Обеспечение сохранности груза",
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
      <SEO 
        title="Производство и доставка сваебойного оборудования по России и СНГ | КГС"
        description="Собственное производство металлоконструкций в Екатеринбурге. Модернизация техники под задачи клиента. Логистика по всей России и СНГ. Гарантия качества и сроков доставки."
        keywords="производство сваебойного оборудования, доставка копровых мачт, изготовление металлоконструкций, модернизация техники, логистика оборудования"
        canonical="https://kgs-ural.ru/production"
        ogTitle="Производство и доставка сваебойного оборудования"
        ogDescription="Собственное производство, модернизация под задачи, логистика по России и СНГ."
      />
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
              <Link to="/production" className="text-accent transition-colors text-sm font-medium">Производство и доставка</Link>
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
              <MobileMenu currentPath="/production" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Производство и доставка', path: '/production' }]} />

      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Собственное производство
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Производство и доставка
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Полный цикл производства навесного оборудования и организация доставки по всей России
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              <a href="#masts" className="px-4 py-2 bg-white/10 hover:bg-accent hover:text-white text-white rounded-lg transition-all hover:scale-105 text-sm backdrop-blur-sm border border-white/20">
                Копровые мачты
              </a>
              <a href="#modernization" className="px-4 py-2 bg-white/10 hover:bg-accent hover:text-white text-white rounded-lg transition-all hover:scale-105 text-sm backdrop-blur-sm border border-white/20">
                Модернизация техники
              </a>
              <a href="#engineering" className="px-4 py-2 bg-white/10 hover:bg-accent hover:text-white text-white rounded-lg transition-all hover:scale-105 text-sm backdrop-blur-sm border border-white/20">
                Проектирование оборудования
              </a>
              <a href="#delivery" className="px-4 py-2 bg-white/10 hover:bg-accent hover:text-white text-white rounded-lg transition-all hover:scale-105 text-sm backdrop-blur-sm border border-white/20">
                Доставка оборудования
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="production-cycle" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Полный цикл производства навесного оборудования
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Одним из ключевых направлений деятельности компании является полный цикл производства оборудования для фундаментостроения, а также изготовление металлоконструкций любой сложности по чертежам заказчика.
              </p>
              <p>
                Мы создаём решения, соответствующие техническим нормам, инженерным требованиям и задачам конкретного проекта.
              </p>
              <p>
                Наш опыт позволяет нам воплощать даже самые сложные инженерные идеи, если они не противоречат законам физики и требованиям безопасности.
              </p>
              <p className="font-semibold text-primary">
                Работа компании строится по принципу полного цикла — от инженерных расчётов до монтажа оборудования:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {capabilities.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon name="MapPin" size={32} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-3">
                      Производство на Урале
                    </h3>
                    <p className="text-gray-700">
                      Наше производство расположено на Урале — в центре металлургической промышленности России, что позволяет минимизировать логистические расходы, сокращать сроки поставок и предлагать максимально выгодные условия для наших клиентов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="masts" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">
              Копровые мачты
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Копровые мачты для кранов и экскаваторов
            </h2>
            <h3 className="text-xl font-semibold text-primary mb-6">
              Универсальность оборудования — наш приоритет
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>
                Для расширения возможностей строительной техники мы предлагаем копровые мачты для кранов и экскаваторов.
              </p>
              <p>
                Устанавливая мачту на базовую машину, вы получаете оборудование, способное выполнять:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {machtCapabilities.map((capability, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center space-x-3">
                    <Icon name="CheckCircle2" size={24} className="text-accent flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{capability}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
              <CardContent className="p-8">
                <p className="text-gray-700 text-lg">
                  Это позволяет использовать уже имеющуюся технику в новых задачах без покупки нового оборудования, снижая затраты заказчика.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="modernization" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
              Модернизация
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Модернизация техники для забивки свай
            </h2>
            <h3 className="text-xl font-semibold text-primary mb-6">
              Оптимальные технические решения по модернизации
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>
                Компания «КоперГруппСервис» модернизирует краны и экскаваторы, превращая простаивающие машины в полноценные сваебойные или буровые установки.
              </p>
              <p className="font-semibold text-primary">При модернизации учитываем:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {modernizationFactors.map((factor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex items-start space-x-3">
                    <Icon name="Settings" size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{factor}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-primary mb-4">Преимущества модернизации:</h4>
              <div className="space-y-3">
                {modernizationBenefits.map((benefit, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                    <CardContent className="p-4 flex items-start space-x-3">
                      <Icon name="CheckCircle2" size={20} className="text-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="engineering" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">
              Проектирование
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Проектирование бурового и свайного оборудования
            </h2>
            <h3 className="text-xl font-semibold text-primary mb-6">
              Комплексное проектирование оборудования под ваши задачи
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>
                Проектирование начинается с формирования технического задания на основе опросного листа.
              </p>
              <p>Затем создаётся технический проект, учитывающий:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {projectingConsiderations.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex items-start space-x-3">
                    <Icon name="FileText" size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-primary mb-4">Результат проектирования:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {projectingResults.map((result, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                    <CardContent className="p-4 flex items-start space-x-3">
                      <Icon name="Award" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">{result}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    Компания «КоперГруппСервис»
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Это инженерная экспертиза, современное производство и практический опыт, позволяющие создавать универсальное, надёжное и экономически выгодное оборудование для фундаментного строения.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-primary/90 text-white">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-heading font-bold mb-4">
                    Готовы обсудить задачу или рассчитать стоимость оборудования?
                  </h4>
                  <p className="text-white/90 text-lg mb-6">
                    Оставьте заявку — менеджер «КоперГруппСервис» свяжется с вами, уточнит технические требования и предложит оптимальное решение под ваш проект.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={() => setIsDialogOpen(true)}
                      className="bg-accent hover:bg-accent/90 text-white"
                    >
                      Отправить заявку
                    </Button>
                    <Button 
                      onClick={() => setIsDialogOpen(true)}
                      variant="outline" 
                      className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                    >
                      Получить консультацию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
              Доставка
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Доставка оборудования и спецтехники в минимальные сроки
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                ООО «КоперГруппСервис» обеспечивает покупателю быструю, надёжную и безопасную доставку оборудования и спецтехники — от проверки товара у производителя до выгрузки на объекте заказчика.
              </p>
              <p>
                Мы берём на себя все этапы логистики и таможенного оформления.
              </p>
            </div>

            <h3 className="text-2xl font-heading font-bold text-primary mb-8">
              Как мы организуем доставку
            </h3>

            <div className="space-y-6 mb-12">
              {deliverySteps.map((step, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-primary mb-4">{step.title}</h4>
                        <ul className="space-y-2">
                          {step.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <Icon name="ChevronRight" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                        {step.note && (
                          <p className="mt-3 text-sm text-gray-600 italic">* {step.note}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 mb-8">
              <CardContent className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Благодаря многолетнему опыту работы с оборудованием для свайного фундаментостроения и надежным партнерам, «КоперГруппСервис» обеспечивает своим клиентам быстрые и надёжные поставки техники.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-primary/90 text-white">
              <CardContent className="p-8">
                <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                  <p>
                    Оптимизированные маршруты, отработанные процессы и прямое взаимодействие с производителями позволяют организовать доставку в минимальные сроки и на выгодных условиях.
                  </p>
                  <p>
                    Мы полностью берём на себя все этапы — от проверки оборудования и подготовки документов до таможенного сопровождения, транспортировки и обеспечения сохранности груза.
                  </p>
                  <p className="font-semibold text-accent text-xl pt-4">
                    КоперГруппСервис — когда важны точность, надёжность и ответственность за результат.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-16 w-auto mb-4"
              />
              <p className="text-white/70 text-sm">
                Оборудование для свайного фундаментостроения
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Услуги</h4>
              <nav className="space-y-2">
                <Link to="/services" className="block text-white/70 hover:text-accent transition-colors text-sm">Шефмонтаж и пусконаладка оборудования</Link>
                <Link to="/services" className="block text-white/70 hover:text-accent transition-colors text-sm">Техническое обслуживание и обучение</Link>
                <Link to="/services" className="block text-white/70 hover:text-accent transition-colors text-sm">Гарантия</Link>
                <Link to="/production" className="block text-white/70 hover:text-accent transition-colors text-sm">Производство и доставка</Link>
              </nav>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:88006007465" className="block text-white/70 hover:text-accent transition-colors">
                  8 (800) 600-74-65
                </a>
                <a href="mailto:service@kgs-ural.ru" className="block text-white/70 hover:text-accent transition-colors">
                  service@kgs-ural.ru
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="https://wa.me/79122410318" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="https://t.me/+79122410318" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Share2" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2024 КоперГруппСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading font-bold text-primary">
              Оставить заявку
            </DialogTitle>
            <DialogDescription>
              Заполните форму, и наш менеджер свяжется с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Имя *
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Введите ваше имя"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Телефон *
              </label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+7 (___) ___-__-__"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@mail.ru"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Сообщение
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Опишите вашу задачу или вопрос"
                className="w-full min-h-[100px]"
              />
            </div>
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2 text-green-800">
                <Icon name="CheckCircle2" size={20} />
                <span>Заявка успешно отправлена!</span>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-800">
                <Icon name="AlertCircle" size={20} />
                <span>Ошибка отправки. Попробуйте позже.</span>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-gradient text-white flex-1"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="flex-1"
              >
                Отменить
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Production;