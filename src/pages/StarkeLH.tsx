import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ConsultationSection from "@/components/ConsultationSection";
import StarkeHeroSection from "@/components/starke-lh/StarkeHeroSection";
import StarkeVariantsSection from "@/components/starke-lh/StarkeVariantsSection";
import StarkeBenefitsSection from "@/components/starke-lh/StarkeBenefitsSection";
import StarkeDescriptionSection from "@/components/starke-lh/StarkeDescriptionSection";
import StarkeGallerySection from "@/components/starke-lh/StarkeGallerySection";

const StarkeLH = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Сваебойные установки STARKE (серия LH)",
    "description": "Сваебойные установки STARKE серии LH на гусеничном ходу. Высокая мощность, надёжная гидравлическая система, интеллектуальный контроль вертикальности мачты.",
    "brand": { "@type": "Brand", "name": "STARKE" },
    "category": "Сваебойные машины",
    "manufacturer": {
      "@type": "Organization",
      "name": "Guangdong Liyuan Hydraulic Machinery Co. Ltd"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Сваебойные установки STARKE (серия LH) | KGS"
        description="Сваебойные установки STARKE серии LH на гусеничном ходу. Модели LH50, LH65, LH86, LH90, LH130, LH145. Гидравлическая система, высокая мощность, контроль вертикальности."
        keywords="сваебойные установки STARKE, серия LH, копровая машина, LH50, LH65, LH86, LH90, LH130, LH145, сваебойная техника"
        canonical="https://kgs-ural.ru/catalog/starke-lh"
        ogTitle="Сваебойные установки STARKE серия LH"
        ogDescription="Копровые машины на гусеничном ходу STARKE LH. Модели от LH50 до LH145. Технологии Guangdong Liyuan с 1993 года."
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />

      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://cdn.poehali.dev/files/4a8cdfcd-d84b-4bda-b7ca-c8ca1ab6a835.svg" alt="KGS" className="h-8" />
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white/80 hover:text-accent transition-colors">Главная</Link>
              <Link to="/catalog" className="text-white hover:text-accent transition-colors">Оборудование</Link>
              <Link to="/services" className="text-white/80 hover:text-accent transition-colors">Услуги</Link>
              <Link to="/production" className="text-white/80 hover:text-accent transition-colors">Производство</Link>
              <Link to="/about" className="text-white/80 hover:text-accent transition-colors">О компании</Link>
              <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-3">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors"><Icon name="Send" size={18} /></a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors"><Icon name="Share2" size={18} /></a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors"><Icon name="Video" size={18} /></a>
              </div>
              <a href="tel:88006007465" className="text-white hover:text-accent transition-colors text-sm font-medium hidden lg:block">8 (800) 600-74-65</a>
              <Button size="sm" className="btn-gradient text-white hidden md:block">Заказать звонок</Button>
              <MobileMenu currentPath="/catalog/starke-lh" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: 'Оборудование', path: '/catalog' },
        { label: 'Сваебойные установки STARKE серия LH', path: '/catalog/starke-lh' }
      ]} />

      <StarkeHeroSection />
      <StarkeVariantsSection />
      <StarkeBenefitsSection />
      <StarkeDescriptionSection />
      <StarkeGallerySection />

      <div id="consultation">
        <ConsultationSection />
      </div>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://cdn.poehali.dev/files/4a8cdfcd-d84b-4bda-b7ca-c8ca1ab6a835.svg" alt="KGS" className="h-8" />
            </Link>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
              <Link to="/catalog" className="hover:text-accent transition-colors">Оборудование</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Услуги</Link>
              <Link to="/about" className="hover:text-accent transition-colors">О компании</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Контакты</Link>
            </div>
            <a href="tel:88006007465" className="text-accent font-semibold">8 (800) 600-74-65</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StarkeLH;
