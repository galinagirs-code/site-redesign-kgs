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
import { useState } from "react";

const SvajnyeNagolovniki = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Свайные наголовники",
    description:
      "Свайные наголовники для защиты свай от разрушения при забивке. Для круглых и квадратных свай различных сечений.",
    brand: { "@type": "Brand", name: "KGS" },
    category: "Свайное оборудование",
    manufacturer: {
      "@type": "Organization",
      name: "КоперГруппСервис",
    },
  };

  const questions = [
    {
      question: "На какой молот требуется наголовник?",
      options: ["Дизельный штанговый", "Дизельный трубчатый", "Гидравлический"],
    },
    { question: "Тип сваи?", options: ["Круглая", "Квадратная", "Труба", "Двутавр", "Шпунт"] },
    {
      question: "Сечение сваи",
      subfields: [
        { label: "Сечение / диаметр", placeholder: "Например: 300×300 мм или ∅400 мм" },
      ],
    },
    { question: "В какой город осуществлять доставку?" },
  ];

  const types = [
    { icon: "Circle", title: "Для круглых свай", desc: "Различные диаметры под любые типоразмеры" },
    { icon: "Square", title: "Для квадратных свай", desc: "От 200×200 до 400×400 мм и более" },
    { icon: "Cylinder", title: "Для труб", desc: "Под конкретный диаметр трубы" },
    { icon: "Settings2", title: "Универсальные", desc: "С регулируемым размером" },
  ];

  const functions = [
    "Защита оголовка сваи от разрушения",
    "Равномерное распределение ударной нагрузки",
    "Предотвращение сколов бетона",
    "Сохранение арматурного каркаса",
    "Увеличение срока службы сваи",
    "Повышение эффективности забивки",
  ];

  const assortment = [
    "Сварные и литые наголовники",
    "Для железобетонных свай",
    "Для труб",
    "Для электротехнических свай",
    "Для шпунтовых элементов",
    "Для двутавров",
  ];

  const warnings = [
    "Нельзя использовать наголовник большего сечения, чем свая",
    "Запрещено наваривать пластины для уменьшения размера — это ослабляет конструкцию",
    "Неправильный зазор приводит к сколам и разрушению сваи",
  ];

  const mountingSteps = [
    { step: "01", text: "Поднять молот на 1–1,5 м" },
    { step: "02", text: "Установить наголовник с амортизирующей прокладкой" },
    { step: "03", text: "Закрепить с помощью тросов" },
    { step: "04", text: "Контролировать зазор (не более 5 см)" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Свайные наголовники | КоперГруппСервис"
        description="Свайные наголовники для защиты свай от разрушения при ударах молота. Для круглых, квадратных свай и труб. Сварные и литые. Консультация и подбор."
        keywords="свайные наголовники, наголовники для свай, защита свай, забивка свай, свайное оборудование"
        canonical="https://kgs-ural.ru/catalog/svajnye-nagolovniki"
        ogTitle="Свайные наголовники — защита свай при забивке"
        ogDescription="Наголовники из высокопрочной стали с амортизирующими вставками. Для круглых и квадратных свай, труб."
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />

      {/* Header */}
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
              <Link to="/catalog" className="text-white/90 hover:text-white transition-colors">Каталог</Link>
              <Link to="/services" className="text-white/90 hover:text-white transition-colors">Услуги</Link>
              <Link to="/about" className="text-white/90 hover:text-white transition-colors">О компании</Link>
              <Link to="/contacts" className="text-white/90 hover:text-white transition-colors">Контакты</Link>
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
        {/* Hero */}
        <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/80 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Каталог", href: "/catalog" },
                { label: "Свайные наголовники" },
              ]}
            />
            <div className="grid lg:grid-cols-2 gap-10 items-center mt-6">
              <div>
                <Badge className="mb-4 bg-accent/20 text-accent border-accent/40">Свайное оборудование</Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
                  Свайные наголовники
                </h1>
                <p className="text-lg text-white/85 mb-8 leading-relaxed">
                  Ключевой элемент свайного оборудования. Защищают сваю от разрушения при ударах молота
                  и обеспечивают равномерное распределение нагрузки.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="btn-gradient text-white"
                    onClick={() => setShowConsultationForm(true)}
                  >
                    <Icon name="MessageSquare" size={18} className="mr-2" />
                    Получить консультацию
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                    <a href="tel:+73432888499">
                      <Icon name="Phone" size={18} className="mr-2" />
                      Позвонить
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm w-full max-w-md">
                  <img
                    src="https://cdn.poehali.dev/files/2fa61f38-2457-4de3-beb7-0f03c3abf159.png"
                    alt="Свайный наголовник"
                    className="w-full h-72 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 space-y-12">

          {/* Виды наголовников */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">Виды наголовников</h2>
            <p className="text-primary/60 mb-8">Производим и поставляем для всех типов свай</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {types.map((t, i) => (
                <Card key={i} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Icon name={t.icon} size={24} className="text-accent" fallback="Package" />
                    </div>
                    <h3 className="font-heading font-bold text-primary mb-1">{t.title}</h3>
                    <p className="text-sm text-primary/65">{t.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Основные функции + Конструкция */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Основные функции</h2>
                <ul className="space-y-3">
                  {functions.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-primary">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Конструкция</h2>
                <p className="text-primary/80 mb-5">Стандартный наголовник включает:</p>
                <ul className="space-y-3 mb-5">
                  {["Стальной корпус", "Амортизирующую подушку (дерево или композит)", "Систему крепления"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="ChevronRight" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-primary/65 bg-gray-50 rounded-lg p-4 border border-gray-200">
                  Дополнительно может оснащаться механизмом центрирования для точной установки на сваю.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Ассортимент */}
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">Ассортимент</h2>
              <p className="text-primary/65 mb-6">
                Производим и поставляем наголовники для молотов отечественного и зарубежного производства
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {assortment.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                    <Icon name="CheckCircle" size={18} className="text-accent flex-shrink-0" />
                    <span className="text-primary text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Как правильно выбрать */}
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Как правильно выбрать</h2>
              <p className="text-primary/80 mb-5">
                Наголовник подбирается под тип и размер сваи, а также энергию удара молота.
                Важно учитывать:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Зазор между сваей и наголовником", value: "5–10 мм" },
                  { label: "Соответствие размера наголовника", value: "Сечению сваи" },
                  { label: "Недопустимость использования", value: "Наголовника большего размера" },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                    <div className="text-accent font-bold text-lg mb-1">{item.value}</div>
                    <div className="text-primary/70 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                <Icon name="AlertTriangle" size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-red-700 text-sm font-medium">
                  Ошибки при подборе приводят к разрушению оголовка и снижению качества погружения.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Важные рекомендации */}
          <Card className="border-red-200 bg-red-50/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                <Icon name="AlertOctagon" size={24} className="text-red-500" />
                Важные рекомендации
              </h2>
              <ul className="space-y-3">
                {warnings.map((w, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="XCircle" size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-primary">{w}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Амортизирующая подкладка */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Амортизирующая подкладка</h2>
                <p className="text-primary/80 mb-5">
                  Перед погружением в наголовник устанавливается амортизирующая подушка, которая:
                </p>
                <ul className="space-y-2 mb-6">
                  {["Снижает пиковую нагрузку", "Защищает бетон от контакта с металлом", "Обеспечивает равномерную передачу энергии"].map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-primary text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="font-semibold text-primary mb-3">Рекомендуемые материалы:</h3>
                <div className="flex gap-3 mb-5">
                  {["Древесина (оптимальный вариант)", "Композитные материалы"].map((m, i) => (
                    <span key={i} className="bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full border border-accent/30">{m}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-primary mb-3">Толщина подкладки:</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-2 border border-gray-200">
                    <span className="text-sm text-primary/80">Стандартные условия</span>
                    <span className="font-bold text-primary text-sm">50–80 мм</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-2 border border-gray-200">
                    <span className="text-sm text-primary/80">Мягкие грунты (картон, кратковременно)</span>
                    <span className="font-bold text-primary text-sm">100–150 мм</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Монтаж */}
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Монтаж наголовника</h2>
                <div className="space-y-5">
                  {mountingSteps.map((s, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{s.step}</span>
                      </div>
                      <div className="pt-3">
                        <p className="text-primary font-medium">{s.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Форма консультации */}
          <Card className="border-primary/20" id="consultation">
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">Подобрать наголовник</h2>
              <p className="text-primary/65 mb-6">Ответьте на несколько вопросов — мы подберём оптимальный вариант</p>
              <EquipmentForm equipmentType="Свайные наголовники" questions={questions} />
            </CardContent>
          </Card>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-8">
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
                <li><a href="tel:+73432888499" className="hover:text-white transition-colors">+7 343 288-84-99</a></li>
                <li><a href="mailto:kgs@kgs-ural.ru" className="hover:text-white transition-colors">kgs@kgs-ural.ru</a></li>
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

      {/* Модалка */}
      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Подобрать наголовник</h2>
                <button onClick={() => setShowConsultationForm(false)} className="text-gray-400 hover:text-primary">
                  <Icon name="X" size={24} />
                </button>
              </div>
              <EquipmentForm
                equipmentType="Свайные наголовники"
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

export default SvajnyeNagolovniki;
