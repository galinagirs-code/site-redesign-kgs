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
import { useState } from "react";

const MachtyKoprovye = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://cdn.poehali.dev/files/f50bcd3e-120c-4036-9648-3b8a985947a3.png",
      title: "Копровая мачта МК в работе"
    },
    {
      url: "https://cdn.poehali.dev/files/0e4eb50d-5afd-4176-96cd-cedd837ed88d.png",
      title: "Производство копровых мачт КГС"
    },
    {
      url: "https://cdn.poehali.dev/files/d8c30d2a-b0e0-4b54-89b9-a26cf30c24cc.png",
      title: "Монтаж копровой мачты на объекте"
    },
    {
      url: "https://cdn.poehali.dev/files/5bdd34b4-6fba-4783-85d8-e4801f75ad94.jpeg",
      title: "Копровая установка в работе"
    }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Мачты копровые крановые серия МК",
    "description": "Копровые мачты серии МК для гусеничных кранов 25-36 тонн. Превращают кран в сваебойную или буровую установку.",
    "brand": {
      "@type": "Brand",
      "name": "KGS"
    },
    "category": "Свайное оборудование",
    "manufacturer": {
      "@type": "Organization",
      "name": "КоперГруппСервис"
    }
  };

  const variants = [
    {
      name: "МК-12С",
      type: "сваебойная",
      specs: [
        { label: "Длина погружаемой сваи", value: "12 м" },
        { label: "Максимальное сечение сваи", value: "400 × 400 мм" },
        { label: "Масса навесного оборудования", value: "не более 16 т" }
      ]
    },
    {
      name: "МК-14С",
      type: "сваебойная",
      specs: [
        { label: "Длина погружаемой сваи", value: "14 м" },
        { label: "Максимальное сечение сваи", value: "400 × 400 мм" },
        { label: "Масса навесного оборудования", value: "не более 18 т" }
      ]
    },
    {
      name: "МК-16С",
      type: "сваебойная",
      specs: [
        { label: "Длина погружаемой сваи", value: "16 м" },
        { label: "Максимальное сечение сваи", value: "400 × 400 мм" },
        { label: "Масса навесного оборудования", value: "не более 19 т" }
      ]
    },
    {
      name: "МК-12Б",
      type: "буровая",
      specs: [
        { label: "Глубина бурения", value: "12 м" },
        { label: "Максимальный диаметр бурения", value: "600 мм" },
        { label: "Масса навесного оборудования", value: "не более 10 т" }
      ]
    },
    {
      name: "МК-14Б",
      type: "буровая",
      specs: [
        { label: "Глубина бурения", value: "14 м" },
        { label: "Максимальный диаметр бурения", value: "600 мм" },
        { label: "Масса навесного оборудования", value: "не более 12 т" }
      ]
    },
    {
      name: "МК-16Б",
      type: "буровая",
      specs: [
        { label: "Глубина бурения", value: "16 м" },
        { label: "Максимальный диаметр бурения", value: "600 мм" },
        { label: "Масса навесного оборудования", value: "не более 14 т" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Мачты копровые крановые серия МК | KGS"
        description="Копровые мачты МК для гусеничных кранов 25-36 тонн. Превращают кран в сваебойную или буровую установку. Стоимость в 10-20 раз ниже импортных аналогов."
        keywords="копровые мачты, мачты МК, сваебойная установка на кран, буровая мачта, навесное оборудование для крана"
        canonical="https://kgs-ural.ru/catalog/machty-koprovye"
        ogTitle="Копровые мачты серии МК - превратите кран в сваебойную установку"
        ogDescription="Навесное оборудование для гусеничных кранов 25-36 т. Сваебойные и буровые мачты длиной от 12 до 16 метров."
      />
      <SchemaOrg data={productSchema} />
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
              <Button size="sm" className="btn-gradient text-white hidden md:block">
                Заказать звонок
              </Button>
              <MobileMenu currentPath="/catalog/machty-koprovye" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: 'Оборудование', path: '/catalog' },
        { label: 'Мачты копровые крановые серия МК', path: '/catalog/machty-koprovye' }
      ]} />

      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Серия МК
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Мачты копровые крановые (серия МК)
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Превратите гусеничный кран в полноценную сваебойную или буровую установку
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-xl mb-12 animate-fade-in">
              <CardContent className="p-6 md:p-10">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Во многих строительных организациях в парке техники имеются гусеничные краны грузоподъёмностью 25, 30 и 36 тонн, которые нередко простаивают из-за отсутствия профильных задач, вместо того чтобы приносить компании прибыль.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Копровые мачты серии МК KGS позволяют задействовать гусеничные краны в работах по строительству свайных фундаментов, эффективно расширяя их функционал и обеспечивая дополнительный источник дохода. При этом все базовые функции крана полностью сохраняются — оборудование легко демонтируется, и кран может быть оперативно возвращён к стандартным грузоподъёмным работам.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Дополнительным преимуществом является возможность превратить гусеничный кран в полноповоротную сваебойную или буровую установку с помощью доступного навесного оборудования KGS. Стоимость такого решения в 10–20 раз ниже, чем приобретение импортных копровых установок. Оборудование отличается простотой управления и обслуживания, что снижает эксплуатационные затраты.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Высокое качество и надёжность копровых мачт достигаются за счёт применения технологий и инженерных решений ведущих европейских производителей.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">
                Принцип работы копровых мачт МК
              </h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Копровая мачта МК KGS представляет собой металлоконструкцию, обеспечивающую перемещение сваи и рабочего оборудования, её центрирование по оси и точное наведение на точку погружения. Крепление мачты к крану осуществляется с помощью специальных устройств (цапф) и раскосов.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Копровая установка (гусеничный кран + мачта) поднимает сваю, подвозит или подтаскивает её к месту установки и выставляет в проектное положение. После совмещения сваи с проектной осью производится её погружение в грунт с помощью сваебойного или бурового оборудования. По завершении операции установка перемещается к следующей точке.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">
                Управление копровой мачтой МК
              </h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Управление копровой мачтой осуществляется оператором с помощью пульта, установленного в кабине крана. При нажатии кнопок пульта срабатывают электромагнитные клапаны гидрораспределителя, открывающие необходимые гидролинии цилиндров коррекции и опоры мачты.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Остальные операции выполняются стандартными органами управления крана:
                  </p>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>главной лебёдкой</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>вспомогательной лебёдкой</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>поворотом платформы</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>ходом крана</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>подъёмом и опусканием стрелы</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
                Варианты копровых мачт серии МК
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {variants.map((variant, index) => (
                  <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-heading font-bold text-primary">
                          {variant.name}
                        </h3>
                        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                          {variant.type}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        {variant.specs.map((spec, idx) => (
                          <div key={idx} className="border-l-2 border-accent/30 pl-3">
                            <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                            <p className="font-medium text-gray-800">{spec.value}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">
                    Нужна консультация по выбору мачты?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Наши специалисты помогут подобрать оптимальную модель под ваши задачи и базовую машину
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button className="btn-gradient text-white">
                      <Icon name="Phone" size={18} className="mr-2" />
                      Заказать консультацию
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/catalog">
                        <Icon name="ArrowLeft" size={18} className="mr-2" />
                        Вернуться в каталог
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
              Фотогалерея
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Копровые мачты серии МК в производстве и на объектах
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <OptimizedImage
                      src={image.url}
                      alt={image.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Icon 
                        name="Maximize2" 
                        size={32} 
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-700 font-medium">{image.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors p-2 hover:bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
            aria-label="Закрыть"
          >
            <Icon name="X" size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Увеличенное изображение" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <footer className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-16 w-auto mb-4"
              />
              <p className="text-white/70 text-sm leading-relaxed">
                Официальный дилер ведущих производителей сваебойного оборудования
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-white/70 hover:text-accent transition-colors">О компании</Link></li>
                <li><Link to="/catalog" className="text-white/70 hover:text-accent transition-colors">Оборудование</Link></li>
                <li><Link to="/parts" className="text-white/70 hover:text-accent transition-colors">Запчасти</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-accent transition-colors">Услуги</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start text-white/70">
                  <Icon name="Phone" size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <a href="tel:88006007465" className="hover:text-accent transition-colors">8 (800) 600-74-65</a>
                </li>
                <li className="flex items-start text-white/70">
                  <Icon name="Mail" size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@kgs-ural.ru" className="hover:text-accent transition-colors">info@kgs-ural.ru</a>
                </li>
                <li className="flex items-start text-white/70">
                  <Icon name="MapPin" size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <span>Екатеринбург, ул. Победы, 5</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Send" size={22} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Share2" size={22} />
                </a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Video" size={22} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} КоперГруппСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MachtyKoprovye;