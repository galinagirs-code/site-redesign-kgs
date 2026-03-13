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

const models = [
  {
    id: "pb350s",
    name: "PB350S",
    specs: [
      { label: "Сечение сваи (мм)", value: "250–300" },
      { label: "Общий вес (кг)", value: "700" },
      { label: "Макс. расход масла (л/мин)", value: "20" },
      { label: "Макс. длина среза за один подъём (мм)", value: "300" },
      { label: "Макс. осевая нагрузка (кН)", value: "300" },
      { label: "Вес экскаватора (т)", value: "≥15" },
      { label: "Макс. ход цилиндра (мм)", value: "300" },
      { label: "Макс. давление (бар)", value: "300" },
    ],
  },
  {
    id: "pb500s",
    name: "PB500S",
    specs: [
      { label: "Сечение сваи (мм)", value: "400–550" },
      { label: "Общий вес (кг)", value: "1240" },
      { label: "Макс. расход масла (л/мин)", value: "20" },
      { label: "Макс. длина среза за один подъём (мм)", value: "300" },
      { label: "Макс. осевая нагрузка (кН)", value: "300" },
      { label: "Вес экскаватора (т)", value: "≥20" },
      { label: "Макс. ход цилиндра (мм)", value: "300" },
      { label: "Макс. давление (бар)", value: "300" },
    ],
  },
  {
    id: "pb600s",
    name: "PB600S",
    specs: [
      { label: "Сечение сваи (мм)", value: "550–650" },
      { label: "Общий вес (кг)", value: "1400" },
      { label: "Макс. расход масла (л/мин)", value: "20" },
      { label: "Макс. длина среза за один подъём (мм)", value: "300" },
      { label: "Макс. осевая нагрузка (кН)", value: "300" },
      { label: "Вес экскаватора (т)", value: "≥20" },
      { label: "Макс. ход цилиндра (мм)", value: "300" },
      { label: "Макс. давление (бар)", value: "300" },
    ],
  },
];

const benefits = [
  "Высокий запас прочности и безопасности — длительный срок эксплуатации",
  "Усиленная защита гидроцилиндров в сложных строительных условиях",
  "Ключевые элементы гидравлики — импортные компоненты повышенной надёжности",
  "Режущие зубья из высокопрочного сплава с увеличенным сроком службы",
  "Обрезка одной сваи примерно за 4 минуты",
  "Сечение от 250 до 650 мм — подходит для крупных инфраструктурных проектов",
  "Применяется при строительстве ВСМ-мостов и свайных фундаментов",
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Сваескусыватели для квадратных свай PB600S",
  description: "Гидравлические сваескусыватели для обрезки квадратных ЖБ свай сечением 250–650 мм. Модели PB350S, PB500S, PB600S.",
  brand: { "@type": "Brand", name: "KGS" },
  category: "Сваескусыватели",
  manufacturer: { "@type": "Organization", name: "КоперГруппСервис" },
};

const SvaeskusyvateliKvadratnye = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Сваескусыватели для квадратных свай PB350S/PB500S/PB600S | KGS"
        description="Гидравлические сваескусыватели для квадратных ЖБ свай сечением 250–650 мм. Модели PB350S, PB500S, PB600S. Обрезка за 4 минуты."
        keywords="сваескусыватель для квадратных свай, PB350S, PB500S, PB600S, обрезка свай"
        canonical="https://kgs-ural.ru/catalog/svaeskusyvateli-kvadratnye"
        ogTitle="Сваескусыватели для квадратных свай"
        ogDescription="Гидравлические сваескусыватели для квадратных свай 250–650 мм. PB350S, PB500S, PB600S."
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
              <MobileMenu currentPath="/catalog/svaeskusyvateli-kvadratnye" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: "Оборудование", path: "/catalog" },
        { label: "Сваескусыватели для квадратных свай", path: "/catalog/svaeskusyvateli-kvadratnye" },
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
              Сваескусыватели для квадратных свай
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-6">
              Гидравлические модели PB350S, PB500S, PB600S для обрезки монолитных и сборных ЖБ свай сечением 250–650 мм
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#description" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">Описание</a>
              <a href="#models" className="px-6 py-3 bg-white/10 border border-white/30 text-white rounded-lg transition-all hover:bg-white/20 text-base font-medium">Модели</a>
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
                  Описание
                </h2>
                <p className="text-base md:text-lg text-primary/80 leading-relaxed mb-4">
                  Гидравлический сваескусыватель предназначен для разрушения и обрезки железобетонных свай, включая монолитные и сборные конструкции.
                </p>
                <p className="text-base md:text-lg text-primary/80 leading-relaxed mb-6">
                  Широко используется при строительстве высокоскоростных железнодорожных мостов, а также при устройстве свайных фундаментов гражданских и промышленных зданий. Обрезка одной сваи занимает около 4 минут.
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
                  src="https://cdn.poehali.dev/files/ddceb4ad-66c3-4f27-b98c-705584d8fc0a.png"
                  alt="Сваескусыватель для квадратных свай"
                  className="w-full max-w-sm rounded-2xl shadow-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Модели */}
      <section id="models" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3 text-center">
              Технические характеристики
            </h2>
            <p className="text-center text-primary/60 mb-10 text-sm">
              Выберите модель под ваш диапазон сечений
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {models.map((model) => (
                <Card key={model.id} className="border-none shadow-lg overflow-hidden">
                  <div className="bg-primary px-5 py-3">
                    <h3 className="font-heading font-bold text-white text-lg">{model.name}</h3>
                  </div>
                  <CardContent className="p-0">
                    <table className="w-full text-sm">
                      <tbody>
                        {model.specs.map((spec, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="py-2.5 px-4 text-primary/80 leading-snug">{spec.label}</td>
                            <td className="py-2.5 px-4 font-semibold text-primary whitespace-nowrap">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              ))}
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

export default SvaeskusyvateliKvadratnye;
