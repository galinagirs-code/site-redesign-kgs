import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { CartButton } from "@/components/CartButton";
import { useCart } from "@/components/CartContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PartImageGallery } from "@/components/PartImageGallery";

const Parts = () => {
  const { addToCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const parts = [
    { 
      id: 1, 
      title: "Болт стопорный DD", 
      description: "", 
      price: "По запросу",
      images: [
        "https://cdn.poehali.dev/files/1335ddfd-533e-45f5-9955-cf14d62f61e9.png",
        "https://cdn.poehali.dev/files/89f9e275-4b1e-4ba5-9dda-afb3d6e51158.jpg"
      ]
    },
    { 
      id: 2, 
      title: "Болт топливный DD-35 JL", 
      description: "", 
      price: "По запросу",
      images: [
        "https://cdn.poehali.dev/files/1603ef8e-c9d9-4874-b918-8e72dcdb0315.jpg",
        "https://cdn.poehali.dev/files/2ed0d6d1-3063-4da8-bb70-c511303bc89f.jpg"
      ]
    },
    { 
      id: 3, 
      title: "Болт топливный DD-35 JW", 
      description: "", 
      price: "По запросу",
      images: [
        "https://cdn.poehali.dev/files/7a52f301-faf0-43b2-b583-2a5a41da2fa8.jpg",
        "https://cdn.poehali.dev/files/e12c4352-ad00-47d2-8c5c-74a8b4c74a7b.png"
      ]
    },
    { 
      id: 4, 
      title: "Кривошип DD 25 JL", 
      description: "", 
      price: "По запросу",
      images: [
        "https://cdn.poehali.dev/files/b9a35e42-41f7-4204-884c-ce6c0d1bb668.jpg",
        "https://cdn.poehali.dev/files/bac0fa02-8788-49b6-b230-366724bb8545.jpg"
      ]
    },
    { 
      id: 5, 
      title: "Насос топливный DD 25", 
      description: "", 
      price: "По запросу",
      images: [
        "https://cdn.poehali.dev/files/9cba9c0b-bb36-4152-8117-3a8e96bd57e0.jpg",
        "https://cdn.poehali.dev/files/047fdeb8-045a-409d-a44d-797cd5d7b56c.jpg"
      ]
    },
    { 
      id: 6, 
      title: "Палец ударный DD 25", 
      description: "", 
      price: "По запросу",
      images: [
        "https://cdn.poehali.dev/files/6f56cbab-dae2-4cf2-b35b-03acdc21fdf6.jpg"
      ]
    },
    { 
      id: 7, 
      title: "Пружина скользящая JW", 
      description: "", 
      price: "По запросу",
      images: [
        "https://cdn.poehali.dev/files/774f08d1-2ba2-4d1d-bb14-50401563de11.jpg",
        "https://cdn.poehali.dev/files/4558f5df-01de-47e5-b7f2-5c706af72342.jpg"
      ]
    },
    { 
      id: 8, 
      title: "Ротор DD-25 Dнар-52мм", 
      description: "", 
      price: "По запросу",
      images: [
        "https://cdn.poehali.dev/files/aaa67ac4-54d7-4c60-8521-044f2a4fd0da.jpg",
        "https://cdn.poehali.dev/files/d8c285e2-0c4f-4d5a-836b-bb61873fce6b.jpg"
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Запчасти для сваебойного оборудования — оригинальные комплектующие | КГС"
        description="Большой склад запчастей для сваебойного оборудования. Оригинальные комплектующие для молотов, копровых мачт, буровых установок. Быстрая доставка по России. Консультация по подбору."
        keywords="запчасти для сваебойного оборудования, комплектующие для молотов, запчасти копровых мачт, детали буровых установок, купить запчасти"
        canonical="https://kgs-ural.ru/parts"
        ogTitle="Запчасти для сваебойного оборудования"
        ogDescription="Оригинальные запчасти, большой склад, быстрая доставка. Консультация по подбору."
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
              <Link to="/" className="text-white/90 hover:text-accent transition-colors text-sm">Главная</Link>
              <Link to="/about" className="text-white/90 hover:text-accent transition-colors text-sm">О компании</Link>
              <a href="/#catalog" className="text-white/90 hover:text-accent transition-colors text-sm">Каталог</a>
              <Link to="/parts" className="text-accent transition-colors text-sm font-medium">Запчасти</Link>
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
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Share2" size={18} />
                </a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Video" size={18} />
                </a>
              </div>
              <a href="tel:88006007465" className="text-white hover:text-accent transition-colors text-sm font-medium hidden lg:block">
                8 (800) 600-74-65
              </a>
              <CartButton />
              <Button size="sm" className="btn-gradient text-white hidden md:block">
                Заказать звонок
              </Button>
              <MobileMenu currentPath="/parts" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Запчасти', path: '/parts' }]} />

      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Запчасти
            </h1>
          </div>
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
              Запчасти для вашей техники — быстро, надёжно, точно в срок!
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  В КоперГруппСервис мы заботимся о вашей технике на каждом этапе её эксплуатации. Одним из ключевых элементов нашей поддержки является оперативная поставка запасных частей и расходных материалов.
                </p>
                <p>
                  Для максимальной скорости доставки мы организовали склад в Екатеринбурге, где всегда в наличии наиболее востребованные позиции.
                </p>
                <p>
                  Мы также развиваем альтернативные каналы поставок качественных аналоговых запчастей, позволяя владельцам импортной строительной техники получать надёжные детали по доступной цене, без простоев и задержек.
                </p>
              </div>
              <div>
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/89177cd4-9abe-4e8c-b6c0-56edc1b3b581.png"
                  alt="Гидравлические цилиндры и запчасти для сваебойного оборудования"
                  variant="content"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-primary">
                    Своевременные поставки без задержек
                  </h3>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="CheckCircle" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-primary">
                    Качественные оригинальные и аналоговые запчасти
                  </h3>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Users" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-primary">
                    Консультация опытных менеджеров при подборе нужных деталей
                  </h3>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Wrench" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-primary">
                    Запчасти как для импортной, так и отечественной техники
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Если у вас возникли вопросы или нужна помощь с выбором запчастей, свяжитесь с нами уже сегодня — наш менеджер подберёт оптимальное решение именно для вашей техники.
              </p>
              <p className="text-lg font-medium text-muted-foreground">
                КоперГруппСервис — надёжный партнёр в обслуживании вашей техники.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-lg border-l-4 border-accent text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">Горячая линия</h3>
                <a href="tel:88006007465" className="text-2xl font-bold text-accent hover:text-accent/80 transition-colors block mb-2">
                  8 (800) 600-74-65
                </a>
                <p className="text-sm text-muted-foreground mb-4">Звонок по России бесплатный</p>
                <Button size="lg" className="btn-gradient text-white w-full">
                  Заказать звонок
                </Button>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg border-l-4 border-primary text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">Email</h3>
                <a href="mailto:service@kgs-ural.ru" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors block mb-2">
                  service@kgs-ural.ru
                </a>
                <p className="text-sm text-muted-foreground mb-4">Ответим в течение 1 часа</p>
                <Button size="lg" className="btn-gradient-reverse text-white w-full">
                  Написать письмо
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parts Catalog Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Запчасти в наличии
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {parts.map((part) => (
              <Card key={part.id} className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
                <PartImageGallery 
                  images={part.images || []} 
                  alt={part.title}
                />
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-xl mb-3 text-primary">
                    {part.title}
                  </h3>
                  {part.description && (
                    <p className="text-muted-foreground mb-4 text-sm">
                      {part.description}
                    </p>
                  )}
                  <div className="mt-auto">
                    <p className="text-lg font-bold text-accent mb-4">
                      Цена: {part.price}
                    </p>
                    <Button 
                      className="w-full btn-gradient text-white"
                      onClick={() => addToCart({ id: part.id, title: part.title, price: part.price })}
                    >
                      Добавить в корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 text-center">
              Не нашли нужную запчасть в каталоге?
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-8">
              Оставьте заявку — менеджер «КоперГруппСервис» свяжется с вами и поможет подобрать оптимальное решение под ваши задачи.
            </p>
            <Card>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Имя
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-primary mb-2">
                      Комментарий к заказу
                    </label>
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Укажите детали заказа или дополнительные пожелания"
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full btn-gradient text-white text-lg py-6">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
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
                Производство и поставка оборудования для строительства свайных фундаментов
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/#catalog" className="text-white/70 hover:text-accent transition-colors">Буровое оборудование</a></li>
                <li><a href="/#catalog" className="text-white/70 hover:text-accent transition-colors">Спецтехника</a></li>
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
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  <Icon name="Share2" size={20} />
                </a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  <Icon name="Video" size={20} />
                </a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-accent transition-colors">Политика cookie</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Parts;