import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HammerTypeCard } from "@/components/HammerTypeCard";
import { PhotoGallerySection } from "@/components/PhotoGallerySection";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ImageModal } from "@/components/ImageModal";
import { useState } from "react";

const SvaebojnyeMoloty = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Сваебойные молоты",
    "description": "Гидравлические, дизельные трубчатые и штанговые сваебойные молоты для забивки свай. Широкий модельный ряд для различных условий работы.",
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

  const questions = [
    {
      question: "Какой молот требуется?",
      options: ["Дизельный штанговый", "Дизельный трубчатый", "Гидравлический"]
    },
    {
      question: "На какую машину планируете навешивать?"
    },
    {
      question: "Какие сваи планируете забивать?",
      subfields: [
        { label: "Сечение", placeholder: "Укажите сечение свай" },
        { label: "Длина", placeholder: "Укажите длину свай" }
      ]
    },
    {
      question: "Какие требуются захваты?",
      options: ["Круглые", "Квадратные", "Плоские", "Под изготовление"]
    },
    {
      question: "Какой грунт?"
    },
    {
      question: "Требуется ли наголовник?",
      options: ["Да", "Нет"],
      conditionalFields: {
        "Да": [
          { label: "Какой наголовник", placeholder: "Укажите тип наголовника" },
          { label: "Сечение", placeholder: "Укажите сечение" }
        ]
      }
    },
    {
      question: "Требуется ли шефмонтаж?",
      options: ["Да", "Нет"]
    },
    {
      question: "В какой город осуществлять доставку?"
    }
  ];

  const photoGallery = [
    "https://cdn.poehali.dev/files/placeholder-hammer-1.jpg",
    "https://cdn.poehali.dev/files/placeholder-hammer-2.jpg",
    "https://cdn.poehali.dev/files/placeholder-hammer-3.jpg",
    "https://cdn.poehali.dev/files/placeholder-hammer-4.jpg"
  ];

  const yonganData = {
    title: "Гидравлические молоты Yongan (серия YC)",
    description: [
      "Компания Yongan Machinery основана в 1985 году, специализируется на производстве гидравлических ударных молотов. За 37 лет стала ведущим китайским предприятием по производству свайных молотов.",
      "Сваебойные молоты Yongan применяются при строительстве причалов, эстакад, морской ветроэнергетики и фундаментов зданий. Ассортимент включает более 30 моделей от YC-3 до YC-220."
    ],
    advantagesTitle: "Преимущества молотов серии YC",
    advantages: [
      "Широкая сфера применения для забивки стальных трубчатых, железобетонных свай, шпунтов",
      "Простота управления и обслуживания",
      "Низкий уровень шума",
      "Забивка свай без предварительного бурения даже в мерзлую почву",
      "Выносной пульт управления с автоматическим и ручным режимами работы",
      "Контроль энергии удара и частоты ударов"
    ],
    linkTo: "/catalog/moloty-yongan",
    linkText: "Подробнее о серии YC"
  };

  const starkeData = {
    title: "Дизельные трубчатые молоты Starke (серия HD)",
    description: [
      "Дизельные трубчатые молоты для забивки свай работают по принципу дизельного двигателя, обеспечивая непрерывную высокоэффективную работу. Используется независимая технология принудительной смазки насоса, значительно увеличивающая срок службы.",
      "Применение: установка железобетонных свай, свай из стальных труб, прямых и морских свай, наклонных свай."
    ],
    advantagesTitle: "Преимущества молотов Starke HD",
    advantages: [
      "Энергия удара на 30-50% больше, чем у штанговых молотов с аналогичными параметрами",
      "Оптимальное соотношение массы ударной части и силы удара — экономия топлива",
      "Регулировка силы удара в процессе работы без остановки молота",
      "Простая система воздушного охлаждения",
      "Ниже стоимость по сравнению с гидравлическими молотами",
      "Прочность, надежность, простота в эксплуатации и обслуживании"
    ],
    linkTo: "/catalog/moloty-starke-hd",
    linkText: "Подробнее о серии HD"
  };

  const dongtaiData = {
    title: "Дизельные штанговые молоты Dongtai Juli (серия DD)",
    description: [
      "Дизельный штанговый молот производства Dongtai Juli Machinery Manufacturing Co., LTD (Китай) отличается большой мощностью и стабильным качеством. Серия DD — самая современная продукция, производимая на основе многолетнего опыта и передовых технологий.",
      "Используя принцип и технологии дизельного двигателя, молоты имеют возможность непрерывно и эффективно работать длительное время благодаря высокой теплоотдаче воздушного охлаждения и передовой системе подачи топлива."
    ],
    advantagesTitle: "Преимущества молотов серии DD",
    advantages: [
      "Энергия удара на 70-80% больше, чем у молотов российского производства с таким же весом ударной части",
      "Высокая компрессия по сравнению с российскими аналогами",
      "Высокая мощность и низкий расход топлива",
      "Большой срок службы",
      "Хорошая теплоотдача, которая увеличивает производительность",
      "Компактная конструкция, удобная в эксплуатации"
    ],
    linkTo: "/catalog/moloty-dongtai-dd",
    linkText: "Подробнее о серии DD"
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Сваебойные молоты - гидравлические и дизельные | KGS"
        description="Сваебойные молоты Yongan, Starke, Dongtai Juli. Гидравлические, дизельные трубчатые и штанговые молоты для забивки свай. Поставка, монтаж, гарантия."
        keywords="сваебойные молоты, гидравлические молоты, дизельные молоты, молот для свай, забивка свай, молот трубчатый, молот штанговый"
        canonical="https://kgs-ural.ru/catalog/pile-hammers"
        ogTitle="Сваебойные молоты - надежное оборудование для забивки свай"
        ogDescription="Гидравлические молоты Yongan, дизельные трубчатые Starke и штанговые Dongtai Juli. Свайные наголовники в комплекте."
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />
      
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/5c1db9e3-d3bc-4fef-9e97-4e9fc1e1f1fc.png" 
                alt="KGS Logo" 
                className="h-8 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white/90 hover:text-white transition-colors">
                Главная
              </Link>
              <Link to="/catalog" className="text-white hover:text-white transition-colors">
                Оборудование
              </Link>
              <Link to="/about" className="text-white/90 hover:text-white transition-colors">
                О компании
              </Link>
              <Link to="/contacts" className="text-white/90 hover:text-white transition-colors">
                Контакты
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+73432888845" className="text-white hover:text-accent transition-colors">
                +7 (343) 288-88-45
              </a>
            </div>

            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs 
              items={[
                { label: "Главная", href: "/" },
                { label: "Каталог", href: "/catalog" },
                { label: "Сваебойные молоты" }
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
              Сваебойные молоты
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Гидравлические, дизельные трубчатые и штанговые молоты для забивки свай различных типов
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <HammerTypeCard {...yonganData} />
              <HammerTypeCard {...starkeData} />
              <HammerTypeCard {...dongtaiData} />
            </div>

            <div>
              <Card className="sticky top-24 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Нужна консультация?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Наши специалисты помогут подобрать оптимальное оборудование для ваших задач
                  </p>
                  <Button 
                    className="w-full mb-4"
                    onClick={() => setShowConsultationForm(true)}
                  >
                    <Icon name="message-circle" className="mr-2 h-4 w-4" />
                    Получить консультацию
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+73432888845">
                      <Icon name="phone" className="mr-2 h-4 w-4" />
                      +7 (343) 288-88-45
                    </a>
                  </Button>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-primary mb-3">
                      Основные типы молотов
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <Icon name="check" className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        <span>Гидравлические</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="check" className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        <span>Дизельные трубчатые</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="check" className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        <span>Дизельные штанговые</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-primary mb-3">
                      Наши услуги
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <Icon name="check" className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        <span>Поставка оборудования</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="check" className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        <span>Шефмонтаж и запуск</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="check" className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        <span>Гарантийное обслуживание</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="check" className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        <span>Поставка запчастей</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <PhotoGallerySection 
            images={photoGallery}
            onImageClick={setSelectedImage}
          />
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/5c1db9e3-d3bc-4fef-9e97-4e9fc1e1f1fc.png"
                alt="КоперГруппСервис"
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Поставка свайного оборудования и спецтехники
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/catalog" className="text-gray-400 hover:text-white transition-colors">Каталог</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Услуги</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О компании</Link></li>
                <li><Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="tel:+73432888845" className="hover:text-white transition-colors">
                    +7 (343) 288-88-45
                  </a>
                </li>
                <li>
                  <a href="mailto:kgs@kgs-ural.ru" className="hover:text-white transition-colors">
                    kgs@kgs-ural.ru
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Юридическая информация</h3>
              <p className="text-sm text-gray-400">
                ООО "КоперГруппСервис"<br />
                ИНН: 6686113105<br />
                ОГРН: 1196658042503
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
            © 2024 КоперГруппСервис. Все права защищены.
          </div>
        </div>
      </footer>

      <ConsultationModal
        show={showConsultationForm}
        onClose={() => setShowConsultationForm(false)}
        equipmentType="Сваебойные молоты"
        questions={questions}
      />

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default SvaebojnyeMoloty;
