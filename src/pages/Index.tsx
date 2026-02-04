import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeEquipment } from "@/components/home/HomeEquipment";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeContact } from "@/components/home/HomeContact";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "КоперГруппСервис",
    "alternateName": "КГС",
    "url": "https://kgs-ural.ru",
    "logo": "https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png",
    "description": "Производство и поставка сваебойного оборудования, буровых установок, копровых мачт. Шефмонтаж и техобслуживание по всей России и СНГ.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Екатеринбург",
      "addressCountry": "RU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-800-600-74-65",
      "contactType": "customer service",
      "email": "service@kgs-ural.ru",
      "availableLanguage": "Russian"
    },
    "sameAs": [
      "https://vk.com/kgsural",
      "https://t.me/kgs_ural"
    ],
    "foundingDate": "2013",
    "areaServed": ["RU", "KZ", "BY"],
    "knowsAbout": ["сваебойное оборудование", "копровые мачты", "буровые установки", "шефмонтаж"]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="КГС — Сваебойное оборудование | Производство, шефмонтаж, сервис"
        description="Производство и поставка сваебойного оборудования, буровых установок, копровых мачт. Шефмонтаж, техобслуживание. Работаем по всей России и СНГ. 10+ лет опыта. 350+ клиентов."
        keywords="сваебойное оборудование, копровые мачты, буровые установки, сваебойные молоты, шефмонтаж оборудования, купить сваебойное оборудование, производство свайного оборудования"
        canonical="https://kgs-ural.ru/"
        ogImage="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/og-image-1763364751842.png"
      />
      <SchemaOrg data={organizationSchema} />
      <ScrollToTop />
      
      <HomeHero />
      <HomeEquipment />
      <HomeServices />
      <HomeContact />
    </div>
  );
};

export default Index;
