import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Буровые установки",
          "description": "Оборудование для лидерного бурения под сваи",
          "category": "Буровое оборудование",
          "brand": {
            "@type": "Brand",
            "name": "JINT, JuLi"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Вибропогружатели",
          "description": "Высокочастотное оборудование для погружения свай",
          "category": "Свайное оборудование",
          "brand": {
            "@type": "Brand",
            "name": "ICE"
          }
        }
      }
    ]
  };

  const categories = [
    {
      id: "masts",
      title: "Копровые мачты KGS",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg",
      items: [
        { name: "Мачты копровые крановые серия МК", description: "Универсальное оборудование для забивки свай" }
      ]
    },
    {
      id: "pile-hammers",
      title: "Сваебойные молоты",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg",
      items: [
        { name: "Молоты гидравлические Yongan (серия YC)", description: "Высокая энергия удара" },
        { name: "Молоты дизельные трубчатые Starke (серия HD)", description: "Надёжная конструкция" },
        { name: "Молоты дизельные штанговые Dongtai Juli (серия DD)", description: "Эффективная забивка свай" }
      ]
    },
    {
      id: "pile-machines",
      title: "Сваебойные машины",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg",
      items: [
        { name: "Сваебойные установки STARKE (серия LH)", description: "Для профессионального применения" },
        { name: "Шагающие сваебойные установки JuLi (серия KLB)", description: "Повышенная проходимость" }
      ]
    },
    {
      id: "drilling",
      title: "Буровые машины",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg",
      items: [
        { name: "Гидравлическая буровая машина JINT (серия SH)", description: "Точность бурения" },
        { name: "Гидравлическая буровая машина JINT (серия SD)", description: "Универсальное применение" },
        { name: "Горизонтальная буровая машина JuLi (серия JL)", description: "Высокая точность" }
      ]
    },
    {
      id: "vibro-crane",
      title: "Вибропогружатели крановые",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg",
      items: [
        { name: "Вибропогружатели гидравлические крановые Yongan (серия YZ)", description: "Высокая мощность" },
        { name: "Вибропогружатели гидравлические крановые Yongan (серия YZ-VM)", description: "Модернизированная версия" },
        { name: "Вибропогружатели электрические крановые Yongan (серия DZJ)", description: "Экономичность" }
      ]
    },
    {
      id: "vibro-excavator",
      title: "Вибропогружатели экскаваторные",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg",
      items: [
        { name: "Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия SG)", description: "Универсальность" },
        { name: "Гидравлические экскаваторные вибропогружатели с нижним зажимом (серия VH)", description: "Устойчивость" }
      ]
    },
    {
      id: "heads",
      title: "Наголовники",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg",
      items: [
        { name: "Свайные наголовники от KGS", description: "Для различных типов свай" }
      ]
    },
    {
      id: "cutters",
      title: "Сваескусыватели",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg",
      items: [
        { name: "Сваескусыватели для круглых свай", description: "Эффективное срезание" },
        { name: "Сваескусыватели для квадратных свай", description: "Точность обработки" }
      ]
    },
    {
      id: "jacks",
      title: "Домкраты",
      image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg",
      items: [
        { name: "Домкраты для извлечения свай", description: "Мощное гидравлическое оборудование" }
      ]
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
                  Получить каталог
                </Button>
              </a>
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
              Полный каталог
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
              Каталог оборудования
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Широкий ассортимент техники для строительства свайных фундаментов от ведущих производителей
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

      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <a 
                key={category.id}
                href={`#${category.id}`}
                className="bg-white hover:bg-accent/10 border border-primary/20 hover:border-accent text-primary hover:text-accent px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-all text-xs md:text-sm font-medium shadow-sm hover:shadow-md"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {categories.map((category, categoryIndex) => (
            <div key={category.id} id={category.id} className={`mb-12 md:mb-16 ${categoryIndex !== 0 ? 'pt-12 md:pt-16 border-t' : ''}`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary">
                  {category.title}
                </h2>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white text-sm md:text-base w-full sm:w-auto">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img 
                        src={category.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-heading font-semibold text-base md:text-lg mb-2 line-clamp-2">{item.name}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">{item.description}</p>
                      <div className="flex gap-2">
                        <a href="#contact" className="flex-1">
                          <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white text-xs md:text-sm">
                            Подробнее
                          </Button>
                        </a>
                        <a href="#contact" className="flex-1">
                          <Button className="w-full btn-gradient text-white text-xs md:text-sm">
                            Запросить цену
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4">Получите консультацию</h2>
              <p className="text-muted-foreground text-base md:text-lg">
                Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
              </p>
            </div>

            <Card className="p-4 md:p-6 lg:p-8">
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Иван Иванов"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-base"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-base"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Комментарий</label>
                  <textarea 
                    rows={4}
                    placeholder="Расскажите о вашем проекте или интересующем оборудовании..."
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none text-base"
                  />
                </div>
                <div className="flex items-start space-x-3">
                  <input type="checkbox" id="privacy-catalog" className="mt-1" required />
                  <label 
                    htmlFor="privacy-catalog" 
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <a href="#" className="text-primary hover:text-accent underline">
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>
                <Button type="submit" className="w-full btn-gradient text-white" size="lg">
                  Отправить заявку
                </Button>
              </form>
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
                Производство и поставка оборудования для строительства свайных фундаментов
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#masts" className="text-white/70 hover:text-accent transition-colors">Копровые мачты</a></li>
                <li><a href="#pile-hammers" className="text-white/70 hover:text-accent transition-colors">Сваебойные молоты</a></li>
                <li><Link to="/catalog" className="text-white/70 hover:text-accent transition-colors">Спецтехника</Link></li>
                <li><Link to="/parts" className="text-white/70 hover:text-accent transition-colors">Запчасти</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="text-white/70 hover:text-accent transition-colors">Шефмонтаж и пусконаладка оборудования</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-accent transition-colors">Техническое обслуживание и обучение</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-accent transition-colors">Гарантия</Link></li>
                <li><Link to="/production" className="text-white/70 hover:text-accent transition-colors">Производство и доставка</Link></li>
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

export default Catalog;