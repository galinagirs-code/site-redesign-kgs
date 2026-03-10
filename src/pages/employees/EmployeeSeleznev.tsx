import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const EmployeeSeleznev = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Евгений Анатольевич Селезнев — Генеральный директор КГС"
        description="Контакты Евгения Анатольевича Селезнева, Генерального директора ООО КГС. Телефон, email, мессенджеры."
        canonical="https://kgs-ural.ru/contact/seleznev"
      />
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
              <Link to="/catalog" className="text-white/90 hover:text-accent transition-colors text-sm">Оборудование</Link>
              <Link to="/parts" className="text-white/90 hover:text-accent transition-colors text-sm">Запчасти</Link>
              <Link to="/services" className="text-white/90 hover:text-accent transition-colors text-sm">Услуги</Link>
              <Link to="/production" className="text-white/90 hover:text-accent transition-colors text-sm">Производство и доставка</Link>
              <Link to="/contact" className="text-accent transition-colors text-sm font-medium">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="tel:88006007465" className="text-white hover:text-accent transition-colors text-sm font-medium hidden lg:block">
                8 (800) 600-74-65
              </a>
              <MobileMenu currentPath="/contact" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: "Контакты", path: "/contact" },
        { label: "Евгений Анатольевич Селезнев", path: "/contact/seleznev" }
      ]} />

      <section className="relative pt-14 pb-10 md:pt-16 md:pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Icon name="User" className="text-white" size={48} />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
              Евгений Анатольевич Селезнев
            </h1>
            <p className="text-accent text-lg font-medium">Генеральный директор ООО «КГС»</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-xl">
          <Card className="p-8 space-y-5">
            <a
              href="mailto:info@kgs-ural.ru"
              className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon name="Mail" className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                <p className="font-medium text-primary">info@kgs-ural.ru</p>
              </div>
            </a>

            <a
              href="tel:88006007465"
              className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon name="Phone" className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Телефон (бесплатно)</p>
                <p className="font-medium text-primary">8 (800) 600-74-65</p>
              </div>
            </a>

            <a
              href="tel:+73433467475"
              className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon name="Phone" className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Телефон</p>
                <p className="font-medium text-primary">+7 (343) 346-74-75</p>
              </div>
            </a>

            <a
              href="https://t.me/kgs_ural"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted transition-colors group"
            >
              <div className="w-12 h-12 bg-[#2AABEE]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#2AABEE]/20 transition-colors">
                <Icon name="Send" className="text-[#2AABEE]" size={22} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Telegram</p>
                <p className="font-medium text-[#2AABEE]">@kgs_ural</p>
              </div>
            </a>

            <a
              href="https://vk.com/kgsural"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted transition-colors group"
            >
              <div className="w-12 h-12 bg-[#0077FF]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#0077FF]/20 transition-colors">
                <Icon name="Share2" className="text-[#0077FF]" size={22} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">ВКонтакте</p>
                <p className="font-medium text-[#0077FF]">vk.com/kgsural</p>
              </div>
            </a>

            <a
              href="https://web.max.ru/-70972866166995"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted transition-colors group"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                <Icon name="MessageCircle" className="text-orange-500" size={22} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">MAX</p>
                <p className="font-medium text-orange-500">Написать в MAX</p>
              </div>
            </a>
          </Card>

          <div className="mt-6 text-center">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center space-x-1">
              <Icon name="ChevronLeft" size={16} />
              <span>Все сотрудники</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeSeleznev;
