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

const KvikKapler = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [activeTab, setActiveTab] = useState<"P" | "H">("P");

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Быстросъёмное соединение (квик-каплер)",
    "description": "Быстросъёмное соединение для оперативной замены навесного оборудования экскаватора без инструментов.",
    "brand": { "@type": "Brand", "name": "KGS" },
    "category": "Дополнительное оборудование",
    "manufacturer": { "@type": "Organization", "name": "КоперГруппСервис" }
  };

  const questions = [
    { question: "На какой экскаватор требуется квик-каплер?" },
    { question: "Класс (масса) экскаватора, тонн?" },
    { question: "Какой тип: P или H?" },
    { question: "С каким навесным оборудованием будете работать?", options: ["Ковш", "Гидромолот", "Рыхлитель", "Грейфер", "Другое"] },
    { question: "Требуется ли шефмонтаж?", options: ["Да", "Нет"] },
    { question: "В какой город осуществлять доставку?" },
  ];

  const specsP = [
    { param: "Длина", unit: "мм", mini: "300–450", jxk02: "550–595", jxk04: "590–630", jxk06: "795–825", jxk08: "888–980", jxk10: "980–1060" },
    { param: "Высота", unit: "мм", mini: "250–280", jxk02: "312", jxk04: "320", jxk06: "410", jxk08: "520", jxk10: "608" },
    { param: "Ширина", unit: "мм", mini: "170–230", jxk02: "270–300", jxk04: "300–355", jxk06: "365–420", jxk08: "460–500", jxk10: "510–590" },
    { param: "Вес", unit: "кг", mini: "30–50", jxk02: "50–80", jxk04: "70–100", jxk06: "220–290", jxk08: "370–420", jxk10: "500–600" },
    { param: "Экскаватор", unit: "т", mini: "1,5–4", jxk02: "4–6", jxk04: "6–10", jxk06: "10–16", jxk08: "16–24", jxk10: "24–32" },
  ];

  const specsH = [
    { param: "Длина", unit: "мм", jxk06: "795–855", jxk08: "950–1060", jxk10: "990–1200", jxk17: "1050–1300", jxk20: "1100–1300" },
    { param: "Высота", unit: "мм", jxk06: "430", jxk08: "480–550", jxk10: "560", jxk17: "560–600", jxk20: "620–650" },
    { param: "Ширина", unit: "мм", jxk06: "365–420", jxk08: "460–500", jxk10: "510–590", jxk17: "580–650", jxk20: "580–680" },
    { param: "Вес", unit: "кг", jxk06: "220–290", jxk08: "370–420", jxk10: "500–600", jxk17: "650–900", jxk20: "700–1000" },
    { param: "Экскаватор", unit: "т", jxk06: "10–16", jxk08: "16–24", jxk10: "24–32", jxk17: "34–42", jxk20: "45–52" },
  ];

  const benefits = [
    { icon: "Shield", title: "Высокопрочная сталь", desc: "Изготовлен из износостойкой стали, рассчитанной на интенсивную эксплуатацию" },
    { icon: "Zap", title: "Сокращение времени в 3–5 раз", desc: "Быстрая смена навески прямо из кабины оператора без выхода и инструментов" },
    { icon: "Settings", title: "Универсальная совместимость", desc: "Подходит для ковшей, гидромолотов, рыхлителей, грейферов и другого оборудования" },
    { icon: "Lock", title: "Двойная фиксация", desc: "Механическая блокировка + гидравлическая защита. Сохраняет работоспособность при сбоях гидросистемы" },
    { icon: "HardHat", title: "Тяжёлые условия", desc: "Подходит для стройки, демонтажа, карьеров и коммунальных служб" },
    { icon: "Users", title: "Без второго оператора", desc: "Вся работа выполняется одним человеком из кабины" },
  ];

  const applications = ["Строительство", "Демонтажные работы", "Дорожные работы", "Карьерная техника", "ЖКХ и коммунальные службы"];

  const compatibility = ["Ковши", "Гидромолоты", "Рыхлители", "Грейферы", "Другое навесное оборудование"];

  return (
    <div className="min-h-screen">
      <SEO
        title="Быстросъёмное соединение (квик-каплер) | KGS"
        description="Квик-каплер для оперативной замены навесного оборудования экскаватора. Сокращает время переоснащения в 3–5 раз. Типы P и H, класс экскаватора от 1,5 до 52 т."
        keywords="квик каплер купить, быстросъемное соединение экскаватор, quick coupler, квик каплер P тип H тип"
        canonical="https://kgs-ural.ru/catalog/kvik-kapler"
        ogTitle="Быстросъёмное соединение (квик-каплер) для экскаватора"
        ogDescription="Квик-каплер для быстрой замены навесного оборудования без выхода из кабины. Класс 1,5–52 т."
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
            { label: "Быстросъёмное соединение (квик-каплер)" }
          ]} />

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-10 mt-8">
            <div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/c6692cad-ace2-455d-b196-f5dae42c53ee.jpg"
                  alt="Быстросъёмное соединение (квик-каплер)"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <Badge className="mb-3 w-fit">Дополнительное оборудование</Badge>
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4 leading-tight">
                Быстросъёмное соединение<br />(квик-каплер)
              </h1>

              <p className="text-gray-600 mb-3 text-base leading-relaxed">
                Предназначено для быстрой замены навесного оборудования без выхода оператора из кабины. Позволяет существенно сократить время простоев и повысить эффективность работы техники.
              </p>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Подходит для экскаваторов различного класса и совместимо с большинством видов навесного оборудования.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Тип", value: "P / H" },
                  { label: "Масса", value: "от 30 до 1000 кг" },
                  { label: "Класс экскаватора", value: "1,5–52 т" },
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

          {/* Преимущества */}
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-8 text-center">Преимущества</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => (
                <Card key={b.title} className="border border-gray-100 hover:border-accent/40 hover:shadow-md transition-all">
                  <CardContent className="p-5 flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={b.icon} size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">{b.title}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{b.desc}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Надёжность */}
          <section className="mt-12">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="ShieldCheck" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold text-primary">Надёжность и безопасность</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Двойная система фиксации оборудования",
                      "Механическая блокировка + гидравлическая защита",
                      "Предохранительный стопорный палец",
                      "Исключает самопроизвольное отсоединение навески",
                      "Сохраняет работоспособность даже при сбоях гидросистемы",
                    ].map((item) => (
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
                    <Icon name="Zap" size={24} className="text-accent" />
                    <h3 className="text-xl font-bold text-primary">Удобство работы</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Управление прямо из кабины оператора",
                      "Не требуется помощь второго человека",
                      "Быстрая установка и снятие оборудования",
                      "Снижение нагрузки на оператора",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Технические характеристики */}
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-6 text-center">Технические характеристики</h2>

            {/* Общие */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Общие параметры</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      {[
                        { param: "Тип", value: "P / H" },
                        { param: "Материал", value: "Высокопрочная сталь" },
                        { param: "Рабочее давление", value: "40–200 бар" },
                        { param: "Масса", value: "от 30 до 1000 кг" },
                        { param: "Класс экскаватора", value: "от 1,5 до 52 тонн" },
                      ].map((row, i) => (
                        <tr key={row.param} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="py-2.5 px-4 text-gray-600 font-medium w-1/2">{row.param}</td>
                          <td className="py-2.5 px-4 text-primary font-semibold">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Таблицы P/H */}
            <div className="flex gap-2 mb-4">
              {(["P", "H"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${activeTab === tab ? "bg-primary text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  {tab}-тип
                </button>
              ))}
            </div>

            <Card>
              <CardContent className="p-0">
                {activeTab === "P" && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="py-3 px-4 text-left font-semibold">Параметр</th>
                          <th className="py-3 px-4 text-center font-semibold">Ед.</th>
                          <th className="py-3 px-4 text-center font-semibold">MINI</th>
                          <th className="py-3 px-4 text-center font-semibold">JXK-02</th>
                          <th className="py-3 px-4 text-center font-semibold">JXK-04</th>
                          <th className="py-3 px-4 text-center font-semibold">JXK-06</th>
                          <th className="py-3 px-4 text-center font-semibold">JXK-08</th>
                          <th className="py-3 px-4 text-center font-semibold">JXK-10</th>
                        </tr>
                      </thead>
                      <tbody>
                        {specsP.map((row, i) => (
                          <tr key={row.param} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="py-2.5 px-4 text-gray-700 font-medium">{row.param}</td>
                            <td className="py-2.5 px-4 text-center text-gray-500">{row.unit}</td>
                            <td className="py-2.5 px-4 text-center text-primary">{row.mini}</td>
                            <td className="py-2.5 px-4 text-center text-primary">{row.jxk02}</td>
                            <td className="py-2.5 px-4 text-center text-primary">{row.jxk04}</td>
                            <td className="py-2.5 px-4 text-center text-primary">{row.jxk06}</td>
                            <td className="py-2.5 px-4 text-center text-primary">{row.jxk08}</td>
                            <td className="py-2.5 px-4 text-center text-primary">{row.jxk10}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === "H" && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="py-3 px-4 text-left font-semibold">Параметр</th>
                          <th className="py-3 px-4 text-center font-semibold">Ед.</th>
                          <th className="py-3 px-4 text-center font-semibold">JXK-06</th>
                          <th className="py-3 px-4 text-center font-semibold">JXK-08</th>
                          <th className="py-3 px-4 text-center font-semibold">JXK-10</th>
                          <th className="py-3 px-4 text-center font-semibold">JXK-17</th>
                          <th className="py-3 px-4 text-center font-semibold">JXK-20</th>
                        </tr>
                      </thead>
                      <tbody>
                        {specsH.map((row, i) => (
                          <tr key={row.param} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="py-2.5 px-4 text-gray-700 font-medium">{row.param}</td>
                            <td className="py-2.5 px-4 text-center text-gray-500">{row.unit}</td>
                            <td className="py-2.5 px-4 text-center text-primary">{row.jxk06}</td>
                            <td className="py-2.5 px-4 text-center text-primary">{row.jxk08}</td>
                            <td className="py-2.5 px-4 text-center text-primary">{row.jxk10}</td>
                            <td className="py-2.5 px-4 text-center text-primary">{row.jxk17}</td>
                            <td className="py-2.5 px-4 text-center text-primary">{row.jxk20}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          {/* Применение и совместимость */}
          <section className="mt-12">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Building2" size={22} className="text-primary" />
                    <h3 className="text-xl font-bold text-primary">Область применения</h3>
                  </div>
                  <ul className="space-y-2">
                    {applications.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-700">
                        <Icon name="ChevronRight" size={16} className="text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Wrench" size={22} className="text-primary" />
                    <h3 className="text-xl font-bold text-primary">Совместимость</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Подходит для работы с:</p>
                  <ul className="space-y-2">
                    {compatibility.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-700">
                        <Icon name="CheckCircle" size={16} className="text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Форма консультации */}
          <Card className="mt-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Получить консультацию</h2>
              <EquipmentForm equipmentType="Быстросъёмное соединение (квик-каплер)" questions={questions} />
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
              <EquipmentForm equipmentType="Быстросъёмное соединение (квик-каплер)" questions={questions} onSuccess={() => setShowConsultationForm(false)} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default KvikKapler;
