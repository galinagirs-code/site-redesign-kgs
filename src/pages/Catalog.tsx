import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OptimizedImage } from "@/components/OptimizedImage";

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
      }
    ]
  };

  const categories = [
    {
      id: "masts",
      title: "Копровые мачты KGS",
      image: "https://cdn.poehali.dev/files/f50bcd3e-120c-4036-9648-3b8a985947a3.png",
      models: [
        "Мачты копровые крановые серия МК"
      ]
    },
    {
      id: "pile-hammers",
      title: "Сваебойные молоты",
      image: "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
      models: [
        "Молоты гидравлические Yongan (серия YC)",
        "Молоты дизельные трубчатые Starke (серия HD)",
        "Молоты дизельные штанговые Dongtai Juli (серия DD)"
      ]
    },
    {
      id: "pile-machines",
      title: "Сваебойные машины",
      image: "https://cdn.poehali.dev/files/fa6a1c32-f5ac-47df-9c14-016eeb4d7260.png",
      models: [
        "Сваебойные установки STARKE (серия LH)",
        "Шагающие сваебойные установки JuLi (серия KLB)"
      ]
    },
    {
      id: "drilling",
      title: "Буровые машины",
      image: "https://cdn.poehali.dev/files/f0763622-3011-4803-ae06-6ec6db9aa3ce.png",
      models: [
        "Гидравлическая буровая машина JINT (серия SH)",
        "Гидравлическая буровая машина JINT (серия SD)",
        "Горизонтальная буровая машина JuLi (серия JL)"
      ]
    },
    {
      id: "vibro-crane",
      title: "Вибропогружатели крановые",
      image: "https://cdn.poehali.dev/files/d148e800-1448-4288-bda0-4d9ffa4bcc8a.png",
      models: [
        "Вибропогружатели гидравлические крановые Yongan (серия YZ)",
        "Вибропогружатели гидравлические крановые Yongan (серия YZ-VM)",
        "Вибропогружатели электрические крановые Yongan (серия DZJ)"
      ]
    },
    {
      id: "vibro-excavator",
      title: "Вибропогружатели экскаваторные",
      image: "https://cdn.poehali.dev/files/9de47f8e-82f1-49ce-b46a-09736cce72a3.png",
      models: [
        "Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия SG)",
        "Гидравлические экскаваторные вибропогружатели с нижним зажимом (серия VH)"
      ]
    },
    {
      id: "heads",
      title: "Наголовники",
      image: "https://cdn.poehali.dev/files/6eb82e17-2842-459f-beb1-c9c6d3c96e32.png",
      models: [
        "Свайные наголовники от KGS"
      ]
    },
    {
      id: "cutters",
      title: "Сваескусыватели",
      image: "https://cdn.poehali.dev/files/80fab017-44fa-4d20-8ea0-2a2996b71c1f.png",
      models: [
        "Сваескусыватели для круглых свай",
        "Сваескусыватели для квадратных свай"
      ]
    },
    {
      id: "jacks",
      title: "Домкраты",
      image: "https://cdn.poehali.dev/files/5cf49725-e360-435c-8968-e7a658e38518.png",
      models: [
        "Домкраты для извлечения свай"
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
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Send" size={18} />
                </a>
                <a href="https://vk.com/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Share2" size={18} />
                </a>
              </div>
              <a href="tel:+78003006587" className="hidden lg:flex items-center text-white text-sm">
                <Icon name="Phone" className="mr-2" size={16} />
                +7 (800) 300-65-87
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

      <Breadcrumbs items={[{ label: 'Каталог оборудования', path: '/catalog' }]} />

      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90">
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

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 bg-white border-2 border-primary/10">
                <div className="aspect-[4/3] overflow-hidden bg-white relative group">
                  <OptimizedImage
                    src={category.image}
                    alt={category.title}
                    variant="hero"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    showWatermark={false}
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4">
                    {category.title}
                  </h2>
                  <ul className="space-y-2">
                    {category.models.map((model, idx) => (
                      <li key={idx}>
                        <a 
                          href="#contact" 
                          className="text-sm md:text-base text-muted-foreground hover:text-accent transition-colors flex items-start group"
                        >
                          <Icon name="ChevronRight" size={18} className="mr-1 mt-0.5 flex-shrink-0 text-accent/60 group-hover:text-accent" />
                          <span className="leading-snug">{model}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Получить консультацию
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Нужна консультация?
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8">
              Свяжитесь с нами для получения подробной информации о любой категории оборудования
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+78003006587" className="inline-block">
                <Button size="lg" className="btn-gradient-reverse text-white w-full sm:w-auto">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить нам
                </Button>
              </a>
              <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full sm:w-auto">
                  <Icon name="Send" className="mr-2" size={20} />
                  Написать в Telegram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-12 w-auto mb-4"
              />
              <p className="text-white/70 text-sm">
                Надёжный поставщик сваебойного оборудования
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4 text-accent">Навигация</h3>
              <nav className="space-y-2">
                <Link to="/about" className="block text-white/70 hover:text-accent transition-colors text-sm">О компании</Link>
                <Link to="/catalog" className="block text-white/70 hover:text-accent transition-colors text-sm">Оборудование</Link>
                <Link to="/parts" className="block text-white/70 hover:text-accent transition-colors text-sm">Запчасти</Link>
                <Link to="/services" className="block text-white/70 hover:text-accent transition-colors text-sm">Услуги</Link>
              </nav>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4 text-accent">Контакты</h3>
              <div className="space-y-2 text-sm">
                <a href="tel:+78003006587" className="block text-white/70 hover:text-accent transition-colors">
                  +7 (800) 300-65-87
                </a>
                <a href="mailto:info@kgs-ural.ru" className="block text-white/70 hover:text-accent transition-colors">
                  info@kgs-ural.ru
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4 text-accent">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Send" size={24} />
                </a>
                <a href="https://vk.com/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Share2" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 text-xs md:text-sm">
              © 2024 ООО «КГС». Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;