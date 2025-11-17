import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { useState } from "react";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "Все оборудование" },
    { id: "pile-hammers", name: "Сваебойные молоты" },
    { id: "pile-machines", name: "Сваебойные машины" },
    { id: "drilling", name: "Буровые машины" },
    { id: "vibro-crane", name: "Вибропогружатели крановые" },
    { id: "vibro-excavator", name: "Вибропогружатели экскаваторные" },
    { id: "masts", name: "Копровые мачты" }
  ];

  const equipment = [
    {
      id: 1,
      category: "masts",
      title: "Копровые мачты KGS серия МК",
      description: "Копровые мачты для кранов - универсальное оборудование для забивки свай",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg",
      features: ["Крановый тип", "Высокая производительность", "Надёжная конструкция"]
    },
    {
      id: 2,
      category: "pile-hammers",
      title: "Yongan серия YC",
      description: "Гидравлические сваебойные молоты с высокой энергией удара",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg",
      features: ["Гидравлический привод", "Высокая энергия удара", "Экологичность"]
    },
    {
      id: 3,
      category: "pile-hammers",
      title: "Starke серия HD",
      description: "Дизельные трубчатые сваебойные молоты надёжной конструкции",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg",
      features: ["Дизельный привод", "Трубчатая конструкция", "Простота обслуживания"]
    },
    {
      id: 4,
      category: "pile-hammers",
      title: "Dongtai Juli серия DD",
      description: "Дизельные штанговые молоты для эффективной забивки свай",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg",
      features: ["Штанговая конструкция", "Надёжность", "Универсальность"]
    },
    {
      id: 5,
      category: "pile-machines",
      title: "STARKE серия LH",
      description: "Сваебойные установки для профессионального применения",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg",
      features: ["Полный цикл работ", "Высокая мобильность", "Автоматизация"]
    },
    {
      id: 6,
      category: "pile-machines",
      title: "JuLi серия KLB",
      description: "Шагающие сваебойные установки повышенной проходимости",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg",
      features: ["Шагающая база", "Повышенная проходимость", "Устойчивость"]
    },
    {
      id: 7,
      category: "drilling",
      title: "JINT серия SH",
      description: "Гидравлические буровые машины для лидерного бурения",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg",
      features: ["Гидравлическая система", "Точность бурения", "Большая глубина"]
    },
    {
      id: 8,
      category: "drilling",
      title: "JINT серия SD",
      description: "Гидравлические буровые установки универсального применения",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg",
      features: ["Универсальность", "Производительность", "Надёжность"]
    },
    {
      id: 9,
      category: "drilling",
      title: "JuLi серия JL",
      description: "Горизонтально-направленные буровые установки",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg",
      features: ["Горизонтальное бурение", "Высокая точность", "Мощность"]
    },
    {
      id: 10,
      category: "vibro-crane",
      title: "Yongan серия YZ",
      description: "Гидравлические крановые вибропогружатели высокой мощности",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg",
      features: ["Гидравлический привод", "Высокая частота", "Эффективность"]
    },
    {
      id: 11,
      category: "vibro-crane",
      title: "Yongan серия YZ-VM",
      description: "Модернизированные гидравлические вибропогружатели",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg",
      features: ["Улучшенная конструкция", "Повышенная надёжность", "Производительность"]
    },
    {
      id: 12,
      category: "vibro-crane",
      title: "Yongan серия DZJ",
      description: "Электрические крановые вибропогружатели",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg",
      features: ["Электрический привод", "Экономичность", "Простота эксплуатации"]
    },
    {
      id: 13,
      category: "vibro-excavator",
      title: "Серия SG",
      description: "Гидравлические экскаваторные вибропогружатели с боковым зажимом",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg",
      features: ["Боковой зажим", "Универсальность", "Быстрая установка"]
    },
    {
      id: 14,
      category: "vibro-excavator",
      title: "Серия VH",
      description: "Гидравлические экскаваторные вибропогружатели с нижним зажимом",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg",
      features: ["Нижний зажим", "Устойчивость", "Точность погружения"]
    }
  ];

  const filteredEquipment = selectedCategory === "all" 
    ? equipment 
    : equipment.filter(item => item.category === selectedCategory);

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
              <Link to="/catalog" className="text-accent transition-colors text-sm font-medium">Оборудование</Link>
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
              <MobileMenu currentPath="/catalog" />
            </div>
          </div>
        </div>
      </header>

      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Каталог оборудования
            </Badge>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Каталог оборудования
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              ООО «КГС» — лидер рынка в сфере поставок современного оборудования и техники для строительства свайных фундаментов на территории России и стран СНГ
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                className={selectedCategory === cat.id ? "btn-gradient text-white whitespace-nowrap" : "whitespace-nowrap"}
                size="sm"
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                  <div className="space-y-2 mb-4">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={16} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button className="btn-gradient text-white flex-1">
                      Подробнее
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Запросить цену
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-primary">
              Наш ассортимент
            </h2>
            
            <div className="space-y-3 mb-8 text-muted-foreground">
              <p className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span>Свайные молоты различных типов (гидравлические, дизельные штанговые и трубчатые)</span>
              </p>
              <p className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span>Вибропогружатели крановые (с нормальной частотой и вариабельные, гидравлические и электрические)</span>
              </p>
              <p className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span>Экскаваторные вибропогружатели с гуськом и боковым зажимом</span>
              </p>
              <p className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span>Копровые мачты кранового типа для молотов и бурового вращателя</span>
              </p>
              <p className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span>Сваебойные машины (копры)</span>
              </p>
              <p className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span>Машины статического вдавливания (сваевдавливающие)</span>
              </p>
              <p className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span>Буровые машины</span>
              </p>
              <p className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span>Сваескусыватели</span>
              </p>
              <p className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span>Свайные наголовники</span>
              </p>
            </div>

            <h3 className="text-2xl font-heading font-bold mb-6 text-primary">
              Комплексное обслуживание от нашей компании включает:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span className="text-muted-foreground">Профессиональные консультации по подбору оборудования и техники</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span className="text-muted-foreground">Организацию доставки любым удобным способом до строительной площадки заказчика</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span className="text-muted-foreground">Полное таможенное оформление грузов</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span className="text-muted-foreground">Шефмонтажные работы непосредственно на объекте</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                <span className="text-muted-foreground">Сервисное обслуживание и обеспечение запасными частями</span>
              </div>
            </div>

            <p className="text-muted-foreground text-center text-lg mb-8">
              Мы предлагаем полный цикл услуг под ключ, обеспечивая наших клиентов всем необходимым для успешной реализации строительных проектов.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-lg border-l-4 border-accent text-center">
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Получить каталог</h3>
                <p className="text-muted-foreground mb-6">Полный каталог оборудования с техническими характеристиками и ценами</p>
                <Button size="lg" className="btn-gradient text-white w-full">
                  Скачать каталог
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg border-l-4 border-primary text-center">
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Консультация специалиста</h3>
                <p className="text-muted-foreground mb-6">Поможем подобрать оптимальное решение для вашего проекта</p>
                <Button size="lg" className="btn-gradient-reverse text-white w-full">
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-12 w-auto mb-4"
              />
              <p className="text-white/70 text-sm mb-4">
                Поставка буровой и спецтехники из Китая с 2015 года
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/catalog" className="text-white/70 hover:text-accent transition-colors">Буровое оборудование</Link></li>
                <li><Link to="/catalog" className="text-white/70 hover:text-accent transition-colors">Спецтехника</Link></li>
                <li><Link to="/parts" className="text-white/70 hover:text-accent transition-colors">Запчасти</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Компания</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-white/70 hover:text-accent transition-colors">О нас</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-accent transition-colors">Услуги</Link></li>
                <li><Link to="/production" className="text-white/70 hover:text-accent transition-colors">Производство и доставка</Link></li>
                <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Новости</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <Icon name="MapPin" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-white/70">г. Екатеринбург, ул. Фронтовых бригад, д. 22, оф. 909</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-accent flex-shrink-0" />
                  <a href="tel:88006007465" className="text-white/70 hover:text-accent transition-colors">8 (800) 600-74-65</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} className="text-accent flex-shrink-0" />
                  <a href="mailto:info@kgs-ural.ru" className="text-white/70 hover:text-accent transition-colors">info@kgs-ural.ru</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/70 text-sm">
            <p>&copy; 2025 ООО «КГС». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;