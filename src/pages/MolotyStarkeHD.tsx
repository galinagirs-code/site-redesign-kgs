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
import { EquipmentForm } from "@/components/EquipmentForm";
import { useState } from "react";

const MolotyStarkeHD = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Молоты дизельные трубчатые Starke (серия HD)",
    "description": "Дизельные трубчатые молоты Starke серии HD для забивки железобетонных свай, стальных труб, прямых и морских свай. Высокая эффективность и экономия топлива.",
    "brand": {
      "@type": "Brand",
      "name": "Starke"
    },
    "category": "Сваебойные молоты",
    "manufacturer": {
      "@type": "Organization",
      "name": "Starke"
    }
  };

  const galleryImages = [
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png"
  ];

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

  return (
    <div className="min-h-screen">
      <SEO 
        title="Молоты дизельные трубчатые Starke (серия HD) | KGS"
        description="Дизельные трубчатые молоты Starke серии HD. Энергия удара на 30-50% больше штанговых аналогов. Регулировка силы удара без остановки молота."
        keywords="дизельные молоты, молоты Starke, серия HD, трубчатые молоты, сваебойные молоты, забивка свай"
        canonical="https://kgs-ural.ru/catalog/moloty-starke-hd"
        ogTitle="Молоты дизельные трубчатые Starke (серия HD) - мощное оборудование для свайных работ"
        ogDescription="Дизельные трубчатые молоты Starke HD. Оптимальное соотношение массы и силы удара, экономия топлива, простая система охлаждения."
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />
      
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/e28d33a0-39b3-47ca-8f8d-54ccfc65a97b.svg"
                alt="КоперГруппСервис"
                className="h-8 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/catalog" className="text-white/90 hover:text-white transition-colors">
                Каталог
              </Link>
              <Link to="/services" className="text-white/90 hover:text-white transition-colors">
                Услуги
              </Link>
              <Link to="/about" className="text-white/90 hover:text-white transition-colors">
                О компании
              </Link>
              <Link to="/contacts" className="text-white/90 hover:text-white transition-colors">
                Контакты
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+73432888499" className="text-white/90 hover:text-white transition-colors">
                +7 343 288-84-99
              </a>
            </div>

            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: "Главная", href: "/" },
              { label: "Каталог", href: "/catalog" },
              { label: "Сваебойные молоты", href: "/catalog#pile-hammers" },
              { label: "Молоты дизельные трубчатые Starke (серия HD)" }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
                <OptimizedImage
                  src={selectedImage || galleryImages[0]}
                  alt="Молоты дизельные трубчатые Starke (серия HD)"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === image || (!selectedImage && index === 0)
                        ? 'border-primary'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <OptimizedImage
                      src={image}
                      alt={`Вид ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Badge className="mb-4">Сваебойные молоты</Badge>
              <h1 className="text-3xl font-bold mb-4">Молоты дизельные трубчатые Starke (серия HD)</h1>
              
              <div className="prose max-w-none mb-6">
                <h2 className="text-xl font-semibold mb-3">Дизельные трубчатые молоты Starke (серия HD)</h2>
                <p className="text-gray-600 mb-4">
                  Дизельные трубчатые молоты для забивки свай работают по принципу дизельного двигателя, обеспечивая непрерывную высокоэффективную работу. Используется независимая технология принудительной смазки насоса, значительно увеличивающая срок службы.
                </p>
                <p className="text-gray-600 mb-4">
                  Применение: установка железобетонных свай, свай из стальных труб, прямых и морских свай, наклонных свай.
                </p>

                <h3 className="text-lg font-semibold mb-3 mt-6">Преимущества молотов Starke HD</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Энергия удара на 30-50% больше, чем у штанговых молотов с аналогичными параметрами</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Оптимальное соотношение массы ударной части и силы удара — экономия топлива</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Регулировка силы удара в процессе работы без остановки молота</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Простая система воздушного охлаждения</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ниже стоимость по сравнению с гидравлическими молотами</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Прочность, надежность, простота в эксплуатации и обслуживании</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="flex-1"
                  onClick={() => setShowConsultationForm(true)}
                >
                  Получить консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="flex-1"
                  asChild
                >
                  <a href="tel:+73432888499">
                    <Icon name="phone" className="w-5 h-5 mr-2" />
                    Позвонить
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <Card className="mt-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Получить консультацию</h2>
              <EquipmentForm 
                equipmentType="Молоты дизельные трубчатые Starke (серия HD)"
                questions={questions}
              />
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e28d33a0-39b3-47ca-8f8d-54ccfc65a97b.svg"
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
                  <a href="tel:+73432888499" className="hover:text-white transition-colors">
                    +7 343 288-84-99
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

      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Получить консультацию</h2>
                <button 
                  onClick={() => setShowConsultationForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Icon name="x" className="w-6 h-6" />
                </button>
              </div>
              <EquipmentForm 
                equipmentType="Молоты дизельные трубчатые Starke (серия HD)"
                questions={questions}
                onSuccess={() => setShowConsultationForm(false)}
              />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MolotyStarkeHD;
