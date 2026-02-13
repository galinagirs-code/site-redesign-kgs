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
import { EquipmentForm } from "@/components/EquipmentForm";
import { OptimizedImage } from "@/components/OptimizedImage";
import { useState } from "react";

interface VariantSpec {
  label: string;
  onBoom: string;
  onFrame: string;
}

interface Variant {
  id: string;
  name: string;
  specs: { label: string; value: string }[];
  detailedSpecs: VariantSpec[];
}

const pilingVariants: Variant[] = [
  {
    id: "piling-20-25",
    name: "Экскаватор 20–25 т",
    specs: [
      { label: "Макс. длина сваи", value: "6 / 10 м" },
      { label: "Сечение сваи", value: "до 300 мм" },
      { label: "Рекомендуемый молот", value: "DD-12 / DD-18" },
    ],
    detailedSpecs: [
      { label: "Длина забиваемой сваи, не более (м)", onBoom: "6", onFrame: "10" },
      { label: "Сечение сваи, не более (мм)", onBoom: "300", onFrame: "300" },
      { label: "Высота мачты (м)", onBoom: "12", onFrame: "17" },
      { label: "Масса молота, не более (т)", onBoom: "3", onFrame: "5" },
      { label: "Рабочие наклоны мачты (град.)", onBoom: "4", onFrame: "4" },
      { label: "Основная лебёдка (т)", onBoom: "5", onFrame: "По запросу" },
      { label: "Вспомогательная лебёдка (т)", onBoom: "3", onFrame: "По запросу" },
      { label: "Навешиваемые молота", onBoom: "DD-12", onFrame: "DD-18" },
    ],
  },
  {
    id: "piling-25-30",
    name: "Экскаватор 25–30 т",
    specs: [
      { label: "Макс. длина сваи", value: "8 / 10 м" },
      { label: "Сечение сваи", value: "до 350 мм" },
      { label: "Рекомендуемый молот", value: "DD-18 / DD-25" },
    ],
    detailedSpecs: [
      { label: "Длина забиваемой сваи, не более (м)", onBoom: "8", onFrame: "10" },
      { label: "Сечение сваи, не более (мм)", onBoom: "300", onFrame: "350" },
      { label: "Высота мачты (м)", onBoom: "14", onFrame: "16" },
      { label: "Масса молота, не более (т)", onBoom: "5", onFrame: "5" },
      { label: "Рабочие наклоны мачты (град.)", onBoom: "4", onFrame: "4" },
      { label: "Основная лебёдка (т)", onBoom: "По запросу", onFrame: "По запросу" },
      { label: "Вспомогательная лебёдка (т)", onBoom: "По запросу", onFrame: "По запросу" },
      { label: "Навешиваемые молота", onBoom: "DD-18", onFrame: "DD-25" },
    ],
  },
  {
    id: "piling-30-35",
    name: "Экскаватор 30–35 т",
    specs: [
      { label: "Макс. длина сваи", value: "12 / 14 м" },
      { label: "Сечение сваи", value: "до 400 мм" },
      { label: "Рекомендуемый молот", value: "DD-25 / DD-35" },
    ],
    detailedSpecs: [
      { label: "Длина забиваемой сваи, не более (м)", onBoom: "12", onFrame: "14" },
      { label: "Сечение сваи, не более (мм)", onBoom: "300", onFrame: "400" },
      { label: "Высота мачты (м)", onBoom: "18", onFrame: "18" },
      { label: "Масса молота, не более (т)", onBoom: "6", onFrame: "6" },
      { label: "Рабочие наклоны мачты (град.)", onBoom: "4", onFrame: "4" },
      { label: "Основная лебёдка (т)", onBoom: "По запросу", onFrame: "По запросу" },
      { label: "Вспомогательная лебёдка (т)", onBoom: "По запросу", onFrame: "По запросу" },
      { label: "Навешиваемые молота", onBoom: "DD-25", onFrame: "DD-35" },
    ],
  },
  {
    id: "piling-35plus",
    name: "Экскаватор 35+ т",
    specs: [
      { label: "Макс. длина сваи", value: "14 / 16 м" },
      { label: "Сечение сваи", value: "до 400 мм" },
      { label: "Рекомендуемый молот", value: "DD-35 / DD-45" },
    ],
    detailedSpecs: [
      { label: "Длина забиваемой сваи, не более (м)", onBoom: "14", onFrame: "16" },
      { label: "Сечение сваи, не более (мм)", onBoom: "400", onFrame: "400" },
      { label: "Высота мачты (м)", onBoom: "20", onFrame: "22" },
      { label: "Масса молота, не более (т)", onBoom: "7", onFrame: "8" },
      { label: "Рабочие наклоны мачты (град.)", onBoom: "4", onFrame: "4" },
      { label: "Основная лебёдка (т)", onBoom: "По запросу", onFrame: "По запросу" },
      { label: "Вспомогательная лебёдка (т)", onBoom: "По запросу", onFrame: "По запросу" },
      { label: "Навешиваемые молота", onBoom: "DD-35", onFrame: "DD-45" },
    ],
  },
];

const drillingVariants: Variant[] = [
  {
    id: "drilling-20-25",
    name: "Экскаватор 20–25 т",
    specs: [
      { label: "Макс. глубина бурения", value: "10 / 12 м" },
      { label: "Диаметр бурения", value: "до 500 мм" },
      { label: "Крутящий момент", value: "500 об/мин" },
    ],
    detailedSpecs: [
      { label: "Макс. высота шнековой колонны (м)", onBoom: "10", onFrame: "12" },
      { label: "Диаметр бурения (мм)", onBoom: "500", onFrame: "500" },
      { label: "Макс. глубина бурения (м)", onBoom: "10", onFrame: "12" },
      { label: "Макс. крутящий момент (об/мин)", onBoom: "500", onFrame: "500" },
      { label: "Макс. осевая нагрузка (т)", onBoom: "5", onFrame: "5" },
      { label: "Макс. грузоподъёмность крана (т)", onBoom: "3", onFrame: "3" },
      { label: "Высота мачты (м)", onBoom: "12", onFrame: "14" },
      { label: "Направляющие мачты (мм)", onBoom: "500×80", onFrame: "500×80" },
    ],
  },
  {
    id: "drilling-25-30",
    name: "Экскаватор 25–30 т",
    specs: [
      { label: "Макс. глубина бурения", value: "12 / 14 м" },
      { label: "Диаметр бурения", value: "до 500 мм" },
      { label: "Крутящий момент", value: "700 об/мин" },
    ],
    detailedSpecs: [
      { label: "Макс. высота шнековой колонны (м)", onBoom: "12", onFrame: "14" },
      { label: "Диаметр бурения (мм)", onBoom: "500", onFrame: "500" },
      { label: "Макс. глубина бурения (м)", onBoom: "12", onFrame: "14" },
      { label: "Макс. крутящий момент (об/мин)", onBoom: "700", onFrame: "700" },
      { label: "Макс. осевая нагрузка (т)", onBoom: "5", onFrame: "5" },
      { label: "Макс. грузоподъёмность крана (т)", onBoom: "3", onFrame: "3" },
      { label: "Высота мачты (м)", onBoom: "14", onFrame: "16" },
      { label: "Направляющие мачты (мм)", onBoom: "500×80", onFrame: "500×80" },
    ],
  },
  {
    id: "drilling-30-35",
    name: "Экскаватор 30–35 т",
    specs: [
      { label: "Макс. глубина бурения", value: "14 / 16 м" },
      { label: "Диаметр бурения", value: "до 800 мм" },
      { label: "Крутящий момент", value: "1000 об/мин" },
    ],
    detailedSpecs: [
      { label: "Макс. высота шнековой колонны (м)", onBoom: "14", onFrame: "16" },
      { label: "Диаметр бурения (мм)", onBoom: "800", onFrame: "800" },
      { label: "Макс. глубина бурения (м)", onBoom: "14", onFrame: "16" },
      { label: "Макс. крутящий момент (об/мин)", onBoom: "1000", onFrame: "1000" },
      { label: "Макс. осевая нагрузка (т)", onBoom: "5", onFrame: "5" },
      { label: "Макс. грузоподъёмность крана (т)", onBoom: "3", onFrame: "3" },
      { label: "Высота мачты (м)", onBoom: "16", onFrame: "18" },
      { label: "Направляющие мачты (мм)", onBoom: "600×100", onFrame: "600×100" },
    ],
  },
  {
    id: "drilling-35plus",
    name: "Экскаватор 35+ т",
    specs: [
      { label: "Макс. глубина бурения", value: "16 / 18 м" },
      { label: "Диаметр бурения", value: "до 1000 мм" },
      { label: "Крутящий момент", value: "1500 об/мин" },
    ],
    detailedSpecs: [
      { label: "Макс. высота шнековой колонны (м)", onBoom: "16", onFrame: "18" },
      { label: "Диаметр бурения (мм)", onBoom: "1000", onFrame: "1000" },
      { label: "Макс. глубина бурения (м)", onBoom: "16", onFrame: "18" },
      { label: "Макс. крутящий момент (об/мин)", onBoom: "1500", onFrame: "1500" },
      { label: "Макс. осевая нагрузка (т)", onBoom: "5", onFrame: "5" },
      { label: "Макс. грузоподъёмность крана (т)", onBoom: "3", onFrame: "3" },
      { label: "Высота мачты (м)", onBoom: "18", onFrame: "20" },
      { label: "Направляющие мачты (мм)", onBoom: "600×100", onFrame: "600×100" },
    ],
  },
];

const galleryImages: { src: string; alt: string }[] = [];

const MachtyMsEx = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [activeTab, setActiveTab] = useState<"piling" | "drilling">("piling");
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentVariants = activeTab === "piling" ? pilingVariants : drillingVariants;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Мачты копровые экскаваторные (серия MS-EX)",
    description: "Копровые мачты MS-EX — навесное оборудование на экскаватор для забивки свай и бурения. До 4 раз дешевле импортных аналогов.",
    brand: { "@type": "Brand", name: "KGS" },
    category: "Копровые мачты",
    manufacturer: { "@type": "Organization", name: "КоперГруппСервис" },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Мачты копровые экскаваторные (серия MS-EX) | KGS"
        description="Копровые мачты MS-EX для экскаваторов. Превращают экскаватор в сваебойную или буровую установку. До 4 раз дешевле импортных аналогов. Российское производство."
        keywords="мачты копровые экскаваторные, мачты MS-EX, копровая мачта на экскаватор, навесное оборудование экскаватор, сваебойная установка"
        canonical="https://kgs-ural.ru/catalog/machty-ms-ex"
        ogTitle="Мачты копровые экскаваторные MS-EX — превратите экскаватор в копровую установку"
        ogDescription="Навесное копровое оборудование на экскаватор. Забивка свай, лидерное бурение. Экономия до 4 раз по сравнению с импортом."
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
              <MobileMenu currentPath="/catalog/machty-ms-ex" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: "Оборудование", path: "/catalog" },
        { label: "Мачты копровые экскаваторные (серия MS-EX)", path: "/catalog/machty-ms-ex" },
      ]} />

      {/* Hero */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Копровые мачты экскаваторные
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Мачты копровые экскаваторные (серия MS-EX)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Варианты исполнения
              </a>
              <a href="#info" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Общая информация
              </a>
              <a href="#gallery" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Фотогалерея
              </a>
              <a href="#consultation" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Описание продукта */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-10 text-center">
              Мачты копровые экскаваторные (серия MS-EX)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  Копровые мачты MS-EX — это направляющее навесное оборудование, устанавливаемое на экскаватор для расширения его функционала. С их помощью базовая машина превращается в полноповоротную установку для забивки свай, буровых и фундаментных работ.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed">
                  Благодаря надёжной конструкции, гидравлическим цилиндрам и системе электроуправления из кабины оператора все операции выполняются точно, безопасно и эффективно.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-xl max-w-md w-full">
                  <OptimizedImage
                    src="https://cdn.poehali.dev/files/105d2bb4-29a9-4951-a811-b3e5257a0cf9.png"
                    alt="Мачты копровые экскаваторные серии MS-EX"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4">Особенности конструкции</h3>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-4">Мачты MS-EX работают:</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                  <span className="text-base md:text-lg text-primary"><strong>с гидромолотом</strong> — для забивки свай</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                  <span className="text-base md:text-lg text-primary"><strong>с вращателем</strong> — для лидерного бурения глубиной до 14 м и диаметром до 500 мм, в том числе в труднодоступных местах</span>
                </div>
              </div>

              <p className="text-base md:text-lg text-primary leading-relaxed mb-4">Конструктивно мачта состоит из:</p>
              <div className="space-y-3 mb-6">
                {["секций с направляющими", "оголовка", "крепёжных элементов", "гидроузлов", "системы управления"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                    <span className="text-base md:text-lg text-primary">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-base md:text-lg text-primary leading-relaxed mb-4">В зависимости от исполнения мачта комплектуется:</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                  <span className="text-base md:text-lg text-primary"><strong>захватом для свай</strong> (сваебойное исполнение)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                  <span className="text-base md:text-lg text-primary"><strong>люнетом</strong> (буровое исполнение)</span>
                </div>
              </div>

              <p className="text-base md:text-lg text-primary leading-relaxed font-medium">
                Оборудование совместимо с российскими и импортными экскаваторами.
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">Ключевые преимущества</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="RefreshCw" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Универсальность</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Превращение экскаватора в полноповоротную копровую машину и обратно — без изменения базовой конструкции.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="DollarSign" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Экономия до 4 раз</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Мачты MS-EX в среднем до 4 раз дешевле импортных аналогов при сопоставимом качестве.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Быстрое переоборудование</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Переоборудование в сваебойную установку — от 2–3 часов (на стреле) до 1–2 смен (на жёсткой раме).</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Shield" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Надёжность</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Комплектующие мировых производителей. Оборудование адаптировано к российским условиям эксплуатации.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Wrench" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Доступное обслуживание</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Низкие эксплуатационные затраты, наличие запчастей на складе, мобильная сервисная служба KGS.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Truck" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Удобная транспортировка</h4>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Мачта складывается в транспортное положение на экскаваторную базу, снижая затраты при перебазировке.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Варианты исполнения */}
      <section id="variants" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 text-center">
              Варианты исполнения мачт MS-EX
            </h2>
            <p className="text-muted-foreground text-center mb-8 text-base md:text-lg">
              Значения указаны: на стреле / на жёсткой раме
            </p>

            <div className="flex justify-center gap-3 mb-8">
              <Button
                variant={activeTab === "piling" ? "default" : "outline"}
                onClick={() => { setActiveTab("piling"); setExpandedVariant(null); }}
                className={activeTab === "piling" ? "btn-gradient text-white" : ""}
              >
                <Icon name="ArrowDown" size={16} className="mr-2" />
                Сваебойное исполнение
              </Button>
              <Button
                variant={activeTab === "drilling" ? "default" : "outline"}
                onClick={() => { setActiveTab("drilling"); setExpandedVariant(null); }}
                className={activeTab === "drilling" ? "btn-gradient text-white" : ""}
              >
                <Icon name="CircleDot" size={16} className="mr-2" />
                Буровое исполнение
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {currentVariants.map((variant) => {
                const isExpanded = expandedVariant === variant.id;
                return (
                  <Card key={variant.id} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-lg md:text-xl font-heading font-bold text-primary">{variant.name}</h3>
                        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 flex-shrink-0">
                          {activeTab === "piling" ? "сваебойное" : "буровое"}
                        </Badge>
                      </div>

                      <div className="space-y-2 mb-4">
                        {variant.specs.map((spec) => (
                          <div key={spec.label} className="flex justify-between items-center text-base">
                            <span className="text-muted-foreground">{spec.label}</span>
                            <span className="font-semibold text-primary">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedVariant(isExpanded ? null : variant.id)}
                        className="w-full mb-3 text-accent hover:text-accent/80"
                      >
                        <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} className="mr-2" />
                        {isExpanded ? "Скрыть характеристики" : "Подробнее"}
                      </Button>

                      {isExpanded && (
                        <div className="border-t pt-4 mb-4 animate-fade-in">
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-gray-200">
                                  <th className="text-left py-2 pr-3 text-muted-foreground font-medium">Характеристика</th>
                                  <th className="text-center py-2 px-2 text-muted-foreground font-medium min-w-[90px]">На стреле</th>
                                  <th className="text-center py-2 pl-2 text-muted-foreground font-medium min-w-[90px]">На раме</th>
                                </tr>
                              </thead>
                              <tbody>
                                {variant.detailedSpecs.map((spec, idx) => (
                                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                                    <td className="py-2 pr-3 text-primary">{spec.label}</td>
                                    <td className="py-2 px-2 text-center font-semibold text-primary">{spec.onBoom}</td>
                                    <td className="py-2 pl-2 text-center font-semibold text-primary">{spec.onFrame}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      <a href="#consultation">
                        <Button className="btn-gradient text-white w-full" size="sm">
                          <Icon name="MessageSquare" size={16} className="mr-2" />
                          Получить консультацию
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4 text-center">Области применения</h3>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-4 text-center">
                Копровое оборудование применяется при строительстве:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <Icon name="Building2" size={28} className="text-accent mx-auto mb-2" />
                  <span className="text-base text-primary font-medium">Здания</span>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <Icon name="Landmark" size={28} className="text-accent mx-auto mb-2" />
                  <span className="text-base text-primary font-medium">Мосты</span>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <Icon name="Pipette" size={28} className="text-accent mx-auto mb-2" />
                  <span className="text-base text-primary font-medium">Нефтепроводы</span>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <Icon name="Factory" size={28} className="text-accent mx-auto mb-2" />
                  <span className="text-base text-primary font-medium">Промышленные объекты</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Общая информация */}
      <section id="info" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Общая информация</h2>

            <Card className="border-none shadow-lg mb-6">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="RefreshCw" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Переоборудование</h3>
                </div>
                <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                  Экскаваторная база сохраняет свои функции. В зависимости от задач машина может использоваться как:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-xl p-5 text-center">
                    <Icon name="Shovel" size={32} className="text-accent mx-auto mb-3" />
                    <h4 className="text-primary font-semibold text-base md:text-lg">Экскаватор</h4>
                    <p className="text-muted-foreground text-sm mt-1">Основная функция базовой машины</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 text-center">
                    <Icon name="ArrowDown" size={32} className="text-accent mx-auto mb-3" />
                    <h4 className="text-primary font-semibold text-base md:text-lg">Сваебойная установка</h4>
                    <p className="text-muted-foreground text-sm mt-1">Полноповоротная забивка свай</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 text-center">
                    <Icon name="CircleDot" size={32} className="text-accent mx-auto mb-3" />
                    <h4 className="text-primary font-semibold text-base md:text-lg">Буровая установка</h4>
                    <p className="text-muted-foreground text-sm mt-1">Лидерное бурение до 14 м</p>
                  </div>
                </div>
                <p className="text-primary mt-4 text-base md:text-lg leading-relaxed">
                  Среднее время переоборудования — <strong>1 рабочая смена</strong> (в зависимости от исполнения).
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="DollarSign" size={20} className="text-accent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Экономичность</h3>
                  </div>
                  <p className="text-primary mb-3 text-base md:text-lg leading-relaxed">
                    Мачты MS-EX (KGS) в среднем <strong>до 4 раз дешевле</strong> импортных аналогов при сопоставимом качестве.
                  </p>
                  <p className="text-primary text-base md:text-lg leading-relaxed">
                    При сравнении покупки новой импортной сваебойной машины с приобретением экскаватора и мачты MS-EX экономия может составлять <strong>от 3 до 5 раз</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Wrench" size={20} className="text-accent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Доступность обслуживания</h3>
                  </div>
                  <ul className="space-y-2 text-primary text-base md:text-lg">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">&#10004;</span>
                      <span>Низкие эксплуатационные затраты</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">&#10004;</span>
                      <span>Наличие запасных частей на складе</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">&#10004;</span>
                      <span>Мобильная сервисная служба KGS</span>
                    </li>
                  </ul>
                  <p className="text-primary mt-3 text-base md:text-lg leading-relaxed">
                    Это существенно снижает стоимость и время обслуживания оборудования.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Shield" size={20} className="text-accent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Надёжность</h3>
                  </div>
                  <p className="text-primary text-base md:text-lg leading-relaxed">
                    В конструкции используются комплектующие известных мировых производителей. Оборудование адаптировано к российским условиям эксплуатации и рассчитано на длительную интенсивную работу.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Monitor" size={20} className="text-accent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Простота эксплуатации</h3>
                  </div>
                  <p className="text-primary text-base md:text-lg leading-relaxed">
                    Продуманная система управления, звуковая и световая сигнализация обеспечивают удобство и безопасность работы оператора непосредственно из кабины.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Фотогалерея */}
      {galleryImages.length === 0 ? (
        <section id="gallery" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
                Фотогалерея
              </h2>
              <div className="text-center py-12 bg-gray-50 rounded-2xl">
                <Icon name="ImageIcon" size={48} className="text-gray-300 mx-auto mb-4" />
                <p className="text-muted-foreground text-base md:text-lg">Фотографии будут добавлены в ближайшее время</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="gallery" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
                Фотогалерея
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-base md:text-lg font-medium">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[70] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Фото в полном размере"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA */}
      <section id="consultation" className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
              Нужна консультация по выбору мачты MS-EX?
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-8">
              Оставьте заявку и наши специалисты помогут подобрать оптимальную модель под ваши задачи и базовую машину
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setShowConsultationForm(true)}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Link to="/catalog">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full"
                >
                  <Icon name="ArrowLeft" className="mr-2" size={20} />
                  Вернуться в каталог
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex items-center justify-between">
              <h3 className="font-heading font-semibold text-lg">Консультация: Мачты MS-EX</h3>
              <button
                onClick={() => setShowConsultationForm(false)}
                className="text-muted-foreground hover:text-primary"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
            <div className="p-4">
              <EquipmentForm
                categoryTitle="Мачты копровые экскаваторные (серия MS-EX)"
                categoryId="machty-ms-ex"
                questions={[
                  {
                    question: "Какой вариант исполнения интересует?",
                    options: ["На жёсткой раме", "На стреле", "Нужна консультация"],
                  },
                  { question: "Модель экскаватора?" },
                  {
                    question: "Что планируете навешивать?",
                    options: ["Гидромолот (забивка свай)", "Вращатель (бурение)", "И молот, и вращатель"],
                  },
                  {
                    question: "Какие сваи планируете забивать?",
                    columns: [
                      { label: "Сечение", placeholder: "Укажите сечение свай" },
                      { label: "Длина", placeholder: "Укажите длину свай" },
                    ],
                  },
                  { question: "Когда планируется закупка (объект)?" },
                  { question: "В какой город осуществлять доставку?" },
                ]}
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
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

export default MachtyMsEx;
