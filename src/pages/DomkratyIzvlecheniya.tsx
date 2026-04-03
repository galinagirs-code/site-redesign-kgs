import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ConsultationSection from "@/components/ConsultationSection";
import DomkratyHeroSection from "@/components/domkraty-izvlecheniya/DomkratyHeroSection";
import DomkratyBenefitsSection from "@/components/domkraty-izvlecheniya/DomkratyBenefitsSection";
import DomkratyDescriptionSection from "@/components/domkraty-izvlecheniya/DomkratyDescriptionSection";
import DomkratySpecsSection from "@/components/domkraty-izvlecheniya/DomkratySpecsSection";

const DomkratyIzvlecheniya = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Домкраты для извлечения свай",
    description: "Гидравлические домкраты серии PTM для извлечения свай из грунта. Усилие вытягивания до 700 тонн.",
    brand: { "@type": "Brand", name: "KGS" },
    category: "Домкраты",
    manufacturer: { "@type": "Organization", name: "КоперГруппСервис" },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Домкраты для извлечения свай серия PTM | KGS"
        description="Гидравлические домкраты для извлечения свай серии PTM. Усилие вытягивания до 700 т. Извлечение трубчатых свай, шпунта Ларсена, двутавровых балок до 40 м."
        keywords="домкрат для извлечения свай, PTM850, PTM920, выдёргивание свай, гидравлический домкрат сваи, шпунт Ларсена извлечение"
        canonical="https://kgs-ural.ru/catalog/domkraty-izvlecheniya"
        ogTitle="Домкраты для извлечения свай серия PTM"
        ogDescription="Гидравлические домкраты для извлечения свай. Усилие вытягивания до 700 тонн. Работа с трубчатыми сваями, шпунтом Ларсена, двутавровыми балками до 40 м."
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
              <Link to="/contact" className="text-white/90 hover:text-accent transition-colors text-sm">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="tel:88006007465" className="text-white hover:text-accent transition-colors text-sm font-medium hidden lg:block">8 (800) 600-74-65</a>
              <Button size="sm" className="btn-gradient text-white hidden md:block">Заказать звонок</Button>
              <MobileMenu currentPath="/catalog/domkraty-izvlecheniya" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: "Оборудование", path: "/catalog" },
        { label: "Домкраты для извлечения свай", path: "/catalog/domkraty-izvlecheniya" },
      ]} />

      <DomkratyHeroSection />
      <DomkratyBenefitsSection />
      <DomkratyDescriptionSection />
      <DomkratySpecsSection />

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
                <li><Link to="/production" className="text-white/70 hover:text-accent transition-colors">Производство и доставка</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-accent transition-colors">Контакты</Link></li>
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
                  <span>г. Екатеринбург</span>
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
                  <Icon name="Users" size={22} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">© 2024 КоперГруппСервис. Все права защищены.</p>
            <p className="text-white/50 text-sm">ООО «КГС» | ИНН: 6670473100</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DomkratyIzvlecheniya;
