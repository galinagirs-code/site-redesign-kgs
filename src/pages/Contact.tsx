import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";

const Contact = () => {
  const team = [
    {
      name: "Евгений Анатольевич Селезнев",
      position: "Генеральный директор ООО «КГС»",
      email: "info@kgs-ural.ru"
    },
    {
      name: "Ольга Александровна Жирова",
      position: "Исполнительный директор ООО «КГС»",
      email: "zhirova@kgs-ural.ru"
    },
    {
      name: "Юлия Александровна Плюхина",
      position: "Менеджер по продажам ООО «КГС»",
      email: "sales2@kgs-ural.ru"
    },
    {
      name: "Артур Фирдависович Муталлапов",
      position: "Сервисный инженер ООО «КГС»",
      email: "sales3@kgs-ural.ru"
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
              <Link to="/about" className="text-white/90 hover:text-accent transition-colors text-sm">О компании</Link>
              <Link to="/catalog" className="text-white/90 hover:text-accent transition-colors text-sm">Оборудование</Link>
              <Link to="/parts" className="text-white/90 hover:text-accent transition-colors text-sm">Запчасти</Link>
              <Link to="/services" className="text-white/90 hover:text-accent transition-colors text-sm">Услуги</Link>
              <Link to="/production" className="text-white/90 hover:text-accent transition-colors text-sm">Производство и доставка</Link>
              <a href="#" className="text-white/90 hover:text-accent transition-colors text-sm">Новости</a>
              <Link to="/contact" className="text-accent transition-colors text-sm font-medium">Контакты</Link>
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
              <MobileMenu currentPath="/contact" />
            </div>
          </div>
        </div>
      </header>

      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Контакты
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Свяжитесь с нами любым удобным способом — мы работаем с клиентами по всей России и всегда готовы помочь с подбором оборудования, консультацией или расчётом стоимости.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-4 rounded-lg flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-4">Телефоны</h2>
                    <div className="space-y-3">
                      <div>
                        <a 
                          href="tel:88006007465" 
                          className="text-lg font-medium text-primary hover:text-accent transition-colors"
                        >
                          8 (800) 600-74-65
                        </a>
                        <p className="text-sm text-muted-foreground">бесплатно по России</p>
                      </div>
                      <div>
                        <a 
                          href="tel:+73433467475" 
                          className="text-lg font-medium text-primary hover:text-accent transition-colors"
                        >
                          +7 (343) 346-74-75
                        </a>
                        <p className="text-sm text-muted-foreground">офис г. Екатеринбург</p>
                      </div>
                      <div>
                        <a 
                          href="tel:+79122410318" 
                          className="text-lg font-medium text-primary hover:text-accent transition-colors"
                        >
                          +7 (912) 241-03-18
                        </a>
                        <p className="text-sm text-muted-foreground">WhatsApp / Telegram</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-4 rounded-lg flex-shrink-0">
                    <Icon name="Mail" className="text-accent" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-4">E-mail</h2>
                    <a 
                      href="mailto:info@kgs-ural.ru"
                      className="text-lg font-medium text-primary hover:text-accent transition-colors"
                    >
                      info@kgs-ural.ru
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-4 rounded-lg flex-shrink-0">
                    <Icon name="Share2" className="text-accent" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-4">Мы в соцсетях</h2>
                    <div className="flex items-center space-x-4">
                      <a href="https://wa.me/79122410318" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                        <Icon name="MessageCircle" size={32} />
                      </a>
                      <a href="https://t.me/+79122410318" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                        <Icon name="Send" size={32} />
                      </a>
                      <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                        <Icon name="Share2" size={32} />
                      </a>
                      <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                        <Icon name="Video" size={32} />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-4 rounded-lg flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-4">Адрес офиса</h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      г. Екатеринбург, ул. 40-летия Комсомола, 38/Л, офис 503
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="font-semibold mb-2">График работы</p>
                      <p className="text-muted-foreground">Пн–Пт: 09:00 — 18:00</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Форма обратной связи</h2>
              <form className="space-y-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">E-mail</label>
                  <Input placeholder="email@example.com" type="email" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Комментарий / вопрос</label>
                  <Textarea placeholder="Опишите ваш вопрос или задачу..." rows={6} />
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="privacy" className="mt-1" />
                  <label 
                    htmlFor="privacy" 
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <a href="#" className="text-primary hover:text-accent underline">
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>
                <Button className="w-full btn-gradient text-white h-12" size="lg">
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">Сотрудники компании</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary to-accent/20 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="User" className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg mb-1">{member.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{member.position}</p>
                      <a 
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center space-x-2 text-sm text-primary hover:text-accent transition-colors"
                      >
                        <Icon name="Mail" size={16} />
                        <span>{member.email}</span>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-8 p-6 bg-gradient-to-br from-accent/5 to-primary/5 max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Icon name="Mail" className="text-accent" size={24} />
                <h3 className="font-heading font-semibold text-lg">По вопросам рекламы и сотрудничества</h3>
              </div>
              <a 
                href="mailto:marketing@kgs-ural.ru"
                className="text-primary hover:text-accent transition-colors font-medium text-lg"
              >
                marketing@kgs-ural.ru
              </a>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">Наш офис на карте</h2>
            <div className="relative rounded-lg overflow-hidden h-[500px] shadow-2xl max-w-6xl mx-auto">
              <iframe
                src="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=1169658096189&ll=60.597474%2C56.838011&pt=60.597474,56.838011,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                className="border-0"
                title="Карта офиса КГС"
              />
            </div>

            <Card className="mt-8 p-8 bg-gradient-to-br from-primary to-accent/20 text-white max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Как добраться
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <Icon name="Car" className="text-accent mx-auto mb-2" size={32} />
                    <p className="font-semibold mb-1">На автомобиле</p>
                    <p className="text-white/80">Удобная парковка рядом с офисом</p>
                  </div>
                  <div>
                    <Icon name="Bus" className="text-accent mx-auto mb-2" size={32} />
                    <p className="font-semibold mb-1">Общественный транспорт</p>
                    <p className="text-white/80">Остановка в 5 минутах ходьбы</p>
                  </div>
                  <div>
                    <Icon name="Navigation" className="text-accent mx-auto mb-2" size={32} />
                    <p className="font-semibold mb-1">Навигатор</p>
                    <p className="text-white/80">Координаты для GPS-навигации</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-center mb-8">Реквизиты</h2>
            <Card className="p-8 max-w-3xl mx-auto">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-accent/10 p-4 rounded-lg flex-shrink-0">
                  <Icon name="FileText" className="text-accent" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    ООО «КоперГруппСервис»
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center space-x-2">
                      <span className="font-semibold text-foreground w-20">ИНН:</span>
                      <span>6670440671</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="font-semibold text-foreground w-20">КПП:</span>
                      <span>66001001</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="font-semibold text-foreground w-20">ОГРН:</span>
                      <span>1169658096189</span>
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-full btn-gradient-reverse text-white" size="lg">
                <Icon name="Download" className="mr-2" size={18} />
                Скачать реквизиты (PDF)
              </Button>
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

export default Contact;