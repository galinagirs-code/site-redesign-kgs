import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const About = () => {
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
      icon: "Shield",
      title: "Надёжность",
      description: "Гарантия на всё оборудование и качественный сервис"
    },
    {
      icon: "Target",
      title: "Профессионализм",
      description: "Команда экспертов с 12+ летним опытом в отрасли"
    },
    {
      icon: "Heart",
      title: "Клиентоориентированность",
      description: "Индивидуальный подход к каждому проекту"
    },
    {
      icon: "TrendingUp",
      title: "Развитие",
      description: "Постоянное расширение ассортимента и услуг"
    }
  ];

  const team = [
    {
      name: "Алексей Иванов",
      position: "Генеральный директор",
      description: "Основатель компании, эксперт в области свайных технологий",
      image: "https://cdn.poehali.dev/files/placeholder-team-1.jpg"
    },
    {
      name: "Мария Петрова",
      position: "Руководитель отдела продаж",
      description: "Ответственна за работу с клиентами и развитие дилерской сети",
      image: "https://cdn.poehali.dev/files/placeholder-team-2.jpg"
    },
    {
      name: "Дмитрий Сидоров",
      position: "Главный инженер",
      description: "Руководит технической поддержкой и шефмонтажными работами",
      image: "https://cdn.poehali.dev/files/placeholder-team-3.jpg"
    }
  ];

  const achievements = [
    { value: "350+", label: "Клиентов" },
    { value: "60+", label: "Шефмонтажей" },
    { value: "130+", label: "Единиц техники" },
    { value: "12+", label: "Лет опыта" }
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
              <Link to="/about" className="text-accent transition-colors text-sm font-medium">О компании</Link>
              <a href="/#catalog" className="text-white/90 hover:text-accent transition-colors text-sm">Каталог</a>
              <a href="/#services" className="text-white/90 hover:text-accent transition-colors text-sm">Услуги</a>
              <a href="/#contact" className="text-white/90 hover:text-accent transition-colors text-sm">Контакты</a>
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
              С 2013 года
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              О компании КоперГруппСервис
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Мы специализируемся на производстве, поставке и обслуживании оборудования для свайных работ. 
              За 12 лет работы стали надёжным партнёром для 350+ компаний по всей России и СНГ.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {achievements.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Наша миссия
              </h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Обеспечивать строительные компании надёжным и современным оборудованием для свайных работ, 
                предоставляя комплексный сервис от поставки до технической поддержки.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Мы работаем напрямую с ведущими производителями Китая и развиваем собственное производство в Екатеринбурге, 
                что позволяет предлагать конкурентные цены и гарантировать качество.
              </p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={value.icon} className="text-accent" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              История развития
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ключевые вехи нашего пути
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-0 md:pl-20">
                    <div className="absolute left-0 top-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold hidden md:flex">
                      {milestone.year}
                    </div>
                    
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                          <Icon name="Calendar" className="text-accent" size={24} />
                        </div>
                        <div>
                          <div className="text-accent font-semibold mb-1 md:hidden">{milestone.year}</div>
                          <h3 className="font-heading font-semibold text-lg mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
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

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary to-accent/20 flex items-center justify-center">
                  <Icon name="User" className="text-white/30" size={80} />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-1">{member.name}</h3>
                  <div className="text-accent text-sm font-medium mb-3">{member.position}</div>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
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
                <li><a href="/#catalog" className="hover:text-accent transition-colors">Запасные части</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="/#services" className="hover:text-accent transition-colors">Шефмонтаж</a></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">Сервис и ремонт</a></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">Инжиниринг</a></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">Производство</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">О компании</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-accent transition-colors">О нас</Link></li>
                <li><a href="/#contact" className="hover:text-accent transition-colors">Контакты</a></li>
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

export default About;
