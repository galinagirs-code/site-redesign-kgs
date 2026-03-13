import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ConsultationSection from "@/components/ConsultationSection";

const modularSpecs = [
  { modules: 4,  weight: 1600, diameter: "400–600",   excavator: "20–30" },
  { modules: 8,  weight: 2640, diameter: "600–800",   excavator: "20–30" },
  { modules: 9,  weight: 2970, diameter: "800–1000",  excavator: "20–30" },
  { modules: 10, weight: 3300, diameter: "1000–1150", excavator: "20–30" },
  { modules: 11, weight: 3630, diameter: "1150–1300", excavator: "30–40" },
  { modules: 12, weight: 3960, diameter: "1300–1500", excavator: "30–40" },
  { modules: 13, weight: 4290, diameter: "1500–1650", excavator: "30–40" },
  { modules: 14, weight: 4620, diameter: "1650–1800", excavator: "30–40" },
  { modules: 15, weight: 4950, diameter: "1800–1970", excavator: "30–40" },
  { modules: 16, weight: 5280, diameter: "1970–2200", excavator: "30–40" },
  { modules: 17, weight: 5610, diameter: "2200–2360", excavator: "30–40" },
  { modules: 18, weight: 5940, diameter: "2360–2500", excavator: "30–40" },
];

const commonSpecs = [
  { label: "Макс. осевая нагрузка (кН)", value: "300" },
  { label: "Макс. ход цилиндра (мм)", value: "300" },
  { label: "Макс. давление (бар)", value: "300" },
  { label: "Вес одного модуля (кг)", value: "335" },
  { label: "Размер одного модуля (мм)", value: "1015×865×340" },
  { label: "Макс. расход масла (л/мин)", value: "20" },
  { label: "Диаметр зуба (мм)", value: "110" },
  { label: "Макс. длина среза за один подъём (мм)", value: "500" },
];

const benefits = [
  "Модульная конструкция — удобная сборка и разборка",
  "Унифицированные модули одного размера для любого диаметра сваи",
  "Максимальный диаметр сваи до 2500 мм",
  "Подходит для фундаментных, дорожных, мостовых свай и свай ВСМ",
  "Монтаж на экскаватор, кран или другую строительную технику",
  "Возможность оснащения дистанционным управлением",
  "Экологически безопасный способ разрушения — статическое давление",
  "Обрезка одной сваи примерно за 10 минут",
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Сваескусыватели для круглых свай",
  description: "Модульные гидравлические сваескусыватели для обрезки круглых железобетонных свай диаметром 400–2500 мм.",
  brand: { "@type": "Brand", name: "KGS" },
  category: "Сваескусыватели",
  manufacturer: { "@type": "Organization", name: "КоперГруппСервис" },
};

const SvaeskusyvateliKruglye = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Сваескусыватели для круглых свай | KGS"
        description="Модульные гидравлические сваескусыватели для обрезки круглых ЖБ свай диаметром 400–2500 мм. Обрезка одной сваи за 10 минут."
        keywords="сваескусыватель для круглых свай, обрезка круглых свай, модульный сваескусыватель"
        canonical="https://kgs-ural.ru/catalog/svaeskusyvateli-kruglye"
        ogTitle="Сваескусыватели для круглых свай"
        ogDescription="Модульные гидравлические сваескусыватели для круглых свай диаметром 400–2500 мм."
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />

      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png" alt="КГС Логотип" className="h-12 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="text-white/90 hover:text-accent transition-colors text-sm">О компании</Link>
              <Link to="/catalog" className="text-accent transition-colors text-sm font-medium">Оборудование</Link>
              <Link to="/parts" className="text-white/90 hover:text-accent transition-colors text-sm">Запчасти</Link>
              <Link to="/services" className="text-white/90 hover:text-accent transition-colors text-sm">Услуги</Link>
              <Link to="/production" className="text-white/90 hover:text-accent transition-colors text-sm">Производство и доставка</Link>
              <Link to="/contact" className="text-white/90 hover:text-accent transition-colors text-sm">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="tel:88006007465" className="text-white hover:text-accent transition-colors text-sm font-medium hidden lg:block">8 (800) 600-74-65</a>
              <Button size="sm" className="btn-gradient text-white hidden md:block">Заказать звонок</Button>
              <MobileMenu currentPath="/catalog/svaeskusyvateli-kruglye" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: "Оборудование", path: "/catalog" },
        { label: "Сваескусыватели для круглых свай", path: "/catalog/svaeskusyvateli-kruglye" },
      ]} />

      {/* Hero */}
      <section className="relative pt-16 pb-10 md:pt-20 md:pb-14 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
              Сваескусыватели для круглых свай
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-6">
              Модульная гидравлическая система для обрезки круглых ЖБ свай диаметром от 400 до 2500 мм
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#description" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">Описание</a>
              <a href="#specs" className="px-6 py-3 bg-white/10 border border-white/30 text-white rounded-lg transition-all hover:bg-white/20 text-base font-medium">Характеристики</a>
              <a href="#consultation" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">Оставить заявку</a>
            </div>
          </div>
        </div>
      </section>

      {/* Описание + фото */}
      <section id="description" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-5">
                  О сваескусывателях для круглых свай
                </h2>
                <p className="text-base md:text-lg text-primary/80 leading-relaxed mb-4">
                  Оборудование предназначено для срезки железобетонных свай и устанавливается на экскаватор, кран или другую строительную технику.
                </p>
                <p className="text-base md:text-lg text-primary/80 leading-relaxed mb-6">
                  Разрушение происходит экологически безопасным способом: статическое давление разрушает бетонную часть, не повреждая арматурные стержни. Обрезка одной сваи занимает примерно 10 минут.
                </p>
                <div className="space-y-2.5">
                  {benefits.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-base text-primary/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://cdn.poehali.dev/files/21fd5b98-60de-433f-b2df-8a9a66973465.png"
                  alt="Сваескусыватель для круглых свай"
                  className="w-full max-w-sm rounded-2xl shadow-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Таблица характеристик */}
      <section id="specs" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3 text-center">
              Технические характеристики
            </h2>
            <p className="text-center text-primary/60 mb-8 text-sm">
              Количество модулей подбирается под диаметр сваи
            </p>

            {/* Фото таблицы */}
            <div className="mb-8 flex justify-center">
              <img
                src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/bucket/53e68bec-83d9-4595-91c1-09fc8036f385.png"
                alt="Технические характеристики сваескусывателей для круглых свай"
                className="w-full max-w-3xl rounded-xl shadow-md border border-gray-200"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Таблица по модулям */}
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="text-left py-3 px-4 font-heading font-semibold">Модулей</th>
                        <th className="text-left py-3 px-4 font-heading font-semibold">Вес (кг)</th>
                        <th className="text-left py-3 px-4 font-heading font-semibold">Диаметр (мм)</th>
                        <th className="text-left py-3 px-4 font-heading font-semibold">Экскав. (т)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modularSpecs.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="py-2 px-4 font-semibold text-primary">{row.modules}</td>
                          <td className="py-2 px-4 text-primary">{row.weight}</td>
                          <td className="py-2 px-4 text-primary">{row.diameter}</td>
                          <td className="py-2 px-4 text-primary">{row.excavator}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Общие характеристики */}
              <Card className="border-none shadow-lg overflow-hidden self-start">
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="text-left py-3 px-4 font-heading font-semibold" colSpan={2}>Общие параметры</th>
                      </tr>
                    </thead>
                    <tbody>
                      {commonSpecs.map((spec, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="py-2.5 px-4 text-primary/80">{spec.label}</td>
                          <td className="py-2.5 px-4 font-semibold text-primary">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ConsultationSection />

      <footer className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png" alt="КГС Логотип" className="h-16 w-auto mb-4" />
              <p className="text-white/70 text-sm leading-relaxed">Официальный дилер ведущих производителей сваебойного оборудования</p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-white/70 hover:text-accent transition-colors">О компании</Link></li>
                <li><Link to="/catalog" className="text-white/70 hover:text-accent transition-colors">Оборудование</Link></li>
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
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors"><Icon name="Send" size={22} /></a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors"><Icon name="Share2" size={22} /></a>
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

export default SvaeskusyvateliKruglye;
