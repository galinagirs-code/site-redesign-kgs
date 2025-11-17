import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { CartButton } from "@/components/CartButton";
import { useCart } from "@/components/CartContext";
import { useState } from "react";

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
    { id: 1, title: "Запчасть 1", description: "Описание запчасти и её технические характеристики", price: "По запросу" },
    { id: 2, title: "Запчасть 2", description: "Описание запчасти и её технические характеристики", price: "По запросу" },
    { id: 3, title: "Запчасть 3", description: "Описание запчасти и её технические характеристики", price: "По запросу" },
    { id: 4, title: "Запчасть 4", description: "Описание запчасти и её технические характеристики", price: "По запросу" },
    { id: 5, title: "Запчасть 5", description: "Описание запчасти и её технические характеристики", price: "По запросу" },
    { id: 6, title: "Запчасть 6", description: "Описание запчасти и её технические характеристики", price: "По запросу" },
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
              <Link to="/parts" className="text-accent transition-colors text-sm font-medium">Запчасти</Link>
              <Link to="/services" className="text-white/90 hover:text-accent transition-colors text-sm">Услуги</Link>
              <Link to="/production" className="text-white/90 hover:text-accent transition-colors text-sm">Производство и доставка</Link>
              <a href="#" className="text-white/90 hover:text-accent transition-colors text-sm">Новости</a>
              <Link to="/contact" className="text-white/90 hover:text-accent transition-colors text-sm">Контакты</Link>
            </nav>

            <div className="flex items-center space-x-4">
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

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90">
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
              Запчасти для вашей техники — быстро, надёжно, точно в срок!
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                В КоперГруппСервис мы заботимся о вашей технике на каждом этапе её эксплуатации. Одним из ключевых элементов нашей поддержки является оперативная поставка запасных частей и расходных материалов.
              </p>
              <p>
                Для максимальной скорости доставки мы организовали склад в Екатеринбурге, где всегда в наличии наиболее востребованные позиции.
              </p>
              <p>
                Мы также развиваем альтернативные каналы поставок качественных аналоговых запчастей, позволяя владельцам импортной сельскохозяйственной, строительной и коммунальной техники получать надёжные детали по доступной цене, без простоев и задержек.
              </p>
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
                    Поддержка как для импортной, так и отечественной техники
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
            <Card className="bg-gradient-to-br from-primary to-primary/90 text-white shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">
                    Свяжитесь с нами
                  </h2>
                  <p className="text-lg leading-relaxed text-white/90">
                    Если у вас возникли вопросы или нужна помощь с выбором запчастей, свяжитесь с нами уже сегодня — наш менеджер подберёт оптимальное решение именно для вашей техники.
                  </p>
                  <p className="text-lg font-medium text-white/90">
                    КоперГруппСервис — надёжный партнёр в обслуживании вашей техники.
                  </p>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={24} className="text-accent" />
                      <div className="text-left">
                        <p className="text-sm text-white/70">Горячая линия:</p>
                        <a href="tel:88006007465" className="text-xl font-bold hover:text-accent transition-colors">
                          8 (800) 600-74-65
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={24} className="text-accent" />
                      <div className="text-left">
                        <p className="text-sm text-white/70">E-mail:</p>
                        <a href="mailto:info@kgs-ural.ru" className="text-xl font-bold hover:text-accent transition-colors">
                          info@kgs-ural.ru
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              <Card key={part.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <Icon name="Package" size={64} className="text-gray-400" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 text-primary">
                    {part.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {part.description}
                  </p>
                  <p className="text-lg font-bold text-accent mb-4">
                    Цена: {part.price}
                  </p>
                  <Button 
                    className="w-full btn-gradient text-white"
                    onClick={() => addToCart({ id: part.id, title: part.title, price: part.price })}
                  >
                    Добавить в корзину
                  </Button>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
              Оформление заказа
            </h2>
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
                Поставка буровой и спецтехники из Китая с 2015 года
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
              <h3 className="font-heading font-bold text-lg mb-4">Компания</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-white/70 hover:text-accent transition-colors">О нас</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-accent transition-colors">Услуги</Link></li>
                <li><Link to="/production" className="text-white/70 hover:text-accent transition-colors">Производство</Link></li>
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

export default Parts;