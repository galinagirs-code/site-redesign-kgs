import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ConsultationSection from "@/components/ConsultationSection";
import DongtaiJLHeroSection from "@/components/dongtai-jl/DongtaiJLHeroSection";
import DongtaiJLVariantsSection from "@/components/dongtai-jl/DongtaiJLVariantsSection";
import DongtaiJLBenefitsSection from "@/components/dongtai-jl/DongtaiJLBenefitsSection";
import DongtaiJLDescriptionSection from "@/components/dongtai-jl/DongtaiJLDescriptionSection";

const DongtaiJL = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Горизонтально-направленные буровые установки Dongtai JuLi (серия JL)",
    "description": "Гидравлические буровые установки JuLi серии JL для бестраншейной прокладки коммуникаций. Надёжная конструкция, высокая производительность, оптимальное соотношение цены и эффективности.",
    "brand": {
      "@type": "Brand",
      "name": "Dongtai JuLi"
    },
    "category": "Горизонтально-направленные буровые установки",
    "manufacturer": {
      "@type": "Organization",
      "name": "Dongtai JuLi"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Горизонтально-направленные буровые установки Dongtai JuLi (серия JL) | KGS"
        description="Буровые установки JuLi серии JL — гидравлические ГНБ-установки для бестраншейной прокладки коммуникаций. Тяга 100–250 кН, момент 2400–8000 Н·м, двигатели Cummins."
        keywords="ГНБ установки, Dongtai JuLi, серия JL, горизонтально-направленное бурение, бестраншейная прокладка, буровые установки"
        canonical="https://kgs-ural.ru/catalog/dongtai-jl"
        ogTitle="Горизонтально-направленные буровые установки Dongtai JuLi (серия JL)"
        ogDescription="Гидравлические ГНБ-установки JuLi серии JL. Надёжная конструкция, двигатели Cummins, работа в городских условиях и ограниченном пространстве."
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
              <MobileMenu currentPath="/catalog/dongtai-jl" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: 'Оборудование', path: '/catalog' },
        { label: 'Горизонтально-направленные буровые установки Dongtai JuLi (серия JL)', path: '/catalog/dongtai-jl' }
      ]} />

      <DongtaiJLHeroSection />
      <DongtaiJLVariantsSection />
      <DongtaiJLBenefitsSection />
      <DongtaiJLDescriptionSection />

      <section id="gallery" className="py-10 md:py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Фотогалерея</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square rounded-xl bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                  Фото {i}
                </div>
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

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
              <p>&copy; 2024 КГС. Все права защищены.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy" className="hover:text-accent transition-colors">Политика конфиденциальности</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DongtaiJL;