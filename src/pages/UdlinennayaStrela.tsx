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

const UdlinennayaStrela = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Удлинённая стрела для экскаватора",
    "description": "Удлинённая стрела для увеличения рабочего радиуса и зоны выполнения работ. Изготавливается под конкретную модель экскаватора.",
    "brand": { "@type": "Brand", "name": "KGS" },
    "category": "Дополнительное оборудование",
    "manufacturer": { "@type": "Organization", "name": "КоперГруппСервис" }
  };

  const questions = [
    { question: "Модель базового экскаватора?" },
    { question: "Масса (класс) экскаватора, тонн?" },
    { question: "Требуемая общая длина стрелы, м?" },
    { question: "Требуемый вылет (рабочий радиус), м?" },
    { question: "Какое навесное оборудование планируете использовать?", options: ["Ковш", "Гидромолот", "Рыхлитель", "Грейфер", "Другое"] },
    { question: "Требуется ли шефмонтаж?", options: ["Да", "Нет"] },
    { question: "В какой город осуществлять доставку?" },
  ];

  const specs = [
    { param: "Тип", value: "Удлинённая стрела" },
    { param: "Общая длина", value: "10–22 м" },
    { param: "Рабочий вылет", value: "до 18–20 м" },
    { param: "Базовый экскаватор", value: "18–45 т" },
    { param: "Материал", value: "Высокопрочная конструкционная сталь" },
    { param: "Комплектация", value: "стрела, рукоять, гидролинии" },
  ];

  const construction = [
    "Коробчатая сварная конструкция",
    "Изготовление из высокопрочных сталей",
    "Усиленные зоны в местах максимальных нагрузок",
  ];

  const purposes = [
    "Увеличение рабочего радиуса экскаватора",
    "Выполнение работ на удалении от базовой машины",
    "Работа с различными видами навесного оборудования",
    "Применение в условиях ограниченного доступа",
  ];

  const compatibility = ["Ковши", "Гидромолоты", "Рыхлители", "Грейферы", "Другое навесное оборудование"];

  return (
    <div className="min-h-screen">
      <SEO
        title="Удлинённая стрела для экскаватора | KGS"
        description="Удлинённая стрела для экскаватора. Увеличение рабочего радиуса до 18–20 м. Изготовление под конкретную модель. Класс базовой машины 18–45 т."
        keywords="удлиненная стрела экскаватора купить, длинная стрела экскаватора, long reach boom экскаватор"
        canonical="https://kgs-ural.ru/catalog/udlinennaya-strela"
        ogTitle="Удлинённая стрела для экскаватора — увеличение рабочего радиуса"
        ogDescription="Удлинённая стрела под вашу модель экскаватора. Рабочий вылет до 20 м, класс 18–45 т."
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />

      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://cdn.poehali.dev/files/e28d33a0-39b3-47ca-8f8d-54ccfc65a97b.svg" alt="КоперГруппСервис" className="h-8 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/catalog" className="text-white/90 hover:text-white transition-colors">Каталог</Link>
              <Link to="/services" className="text-white/90 hover:text-white transition-colors">Услуги</Link>
              <Link to="/about" className="text-white/90 hover:text-white transition-colors">О компании</Link>
              <Link to="/contacts" className="text-white/90 hover:text-white transition-colors">Контакты</Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+73432888499" className="text-white/90 hover:text-white transition-colors">+7 343 288-84-99</a>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: "Главная", href: "/" },
            { label: "Каталог", href: "/catalog" },
            { label: "Удлинённая стрела для экскаватора" }
          ]} />

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-10 mt-8">
            <div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/9d7e926e-ff1f-4df7-8971-b9560338ec62.jpg"
                  alt="Удлинённая стрела для экскаватора"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <Badge className="mb-3 w-fit">Дополнительное оборудование</Badge>
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4 leading-tight">
                Удлинённая стрела<br />для экскаватора
              </h1>

              <p className="text-gray-600 mb-3 text-base leading-relaxed">
                Устанавливается на экскаватор для увеличения рабочего радиуса и зоны выполнения работ. Позволяет эффективно выполнять задачи на удалении от техники, когда использование стандартной стрелы затруднено или невозможно.
              </p>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Изделие изготавливается под конкретную модель экскаватора с учётом требуемого вылета, массы навесного оборудования и условий эксплуатации.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Общая длина", value: "10–22 м" },
                  { label: "Рабочий вылет", value: "до 20 м" },
                  { label: "Класс экскаватора", value: "18–45 т" },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                    <div className="text-sm font-semibold text-primary">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="btn-gradient text-white flex-1" onClick={() => setShowConsultationForm(true)}>
                  <Icon name="MessageSquare" size={18} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="flex-1" asChild>
                  <a href="tel:+73432888499">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Назначение и конструкция */}
          <section className="mt-16">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Target" size={22} className="text-primary" />
                    <h3 className="text-xl font-bold text-primary">Назначение</h3>
                  </div>
                  <ul className="space-y-2">
                    {purposes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <Icon name="CheckCircle" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Layers" size={22} className="text-accent" />
                    <h3 className="text-xl font-bold text-primary">Конструкция и производство</h3>
                  </div>
                  <ul className="space-y-2">
                    {construction.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-accent/5 rounded-lg border border-accent/20">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-primary">Совместимость:</span> возможна работа с различными видами навесного оборудования — выбор зависит от задач и параметров базовой машины.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Технические характеристики */}
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-2 text-center">Технические характеристики</h2>
            <p className="text-center text-gray-500 text-sm mb-6">Ниже приведены типовые значения. Фактические параметры зависят от модели экскаватора и требуемой конфигурации.</p>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="py-3 px-6 text-left font-semibold w-1/2">Параметр</th>
                        <th className="py-3 px-6 text-left font-semibold w-1/2">Значение</th>
                      </tr>
                    </thead>
                    <tbody>
                      {specs.map((row, i) => (
                        <tr key={row.param} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="py-3 px-6 text-gray-600 font-medium">{row.param}</td>
                          <td className="py-3 px-6 text-primary font-semibold">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Совместимость */}
          <section className="mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Wrench" size={22} className="text-primary" />
                  <h3 className="text-xl font-bold text-primary">Совместимость с навесным оборудованием</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {compatibility.map((item) => (
                    <div key={item} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
                      <Icon name="CheckCircle" size={14} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Форма консультации */}
          <Card className="mt-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Получить консультацию</h2>
              <EquipmentForm equipmentType="Удлинённая стрела для экскаватора" questions={questions} />
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="https://cdn.poehali.dev/files/e28d33a0-39b3-47ca-8f8d-54ccfc65a97b.svg" alt="КоперГруппСервис" className="h-8 w-auto mb-4" />
              <p className="text-gray-400 text-sm">Поставка свайного оборудования и спецтехники</p>
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
              <p className="text-sm text-gray-400">ООО "КоперГруппСервис"<br />ИНН: 6686113105<br />ОГРН: 1196658042503</p>
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
                <button onClick={() => setShowConsultationForm(false)} className="text-gray-400 hover:text-primary">
                  <Icon name="X" size={24} />
                </button>
              </div>
              <EquipmentForm equipmentType="Удлинённая стрела для экскаватора" questions={questions} onSuccess={() => setShowConsultationForm(false)} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default UdlinennayaStrela;
