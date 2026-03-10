import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

interface ContactItem {
  type: "email" | "phone" | "telegram" | "vk" | "max";
  label: string;
  value: string;
  href: string;
}

interface EmployeePageProps {
  name: string;
  position: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  contacts: ContactItem[];
}

const contactStyle: Record<ContactItem["type"], { icon: string; color: string; bg: string }> = {
  email:    { icon: "Mail",          color: "text-primary",      bg: "bg-primary/10 group-hover:bg-primary/20" },
  phone:    { icon: "Phone",         color: "text-primary",      bg: "bg-primary/10 group-hover:bg-primary/20" },
  telegram: { icon: "Send",          color: "text-[#2AABEE]",    bg: "bg-[#2AABEE]/10 group-hover:bg-[#2AABEE]/20" },
  vk:       { icon: "Share2",        color: "text-[#0077FF]",    bg: "bg-[#0077FF]/10 group-hover:bg-[#0077FF]/20" },
  max:      { icon: "MessageCircle", color: "text-orange-500",   bg: "bg-orange-100 group-hover:bg-orange-200" },
};

const EmployeePage = ({ name, position, slug, seoTitle, seoDescription, contacts }: EmployeePageProps) => {
  const pageUrl = `https://kgs-ural.ru${slug}`;

  return (
    <div className="min-h-screen bg-background">
      <SEO title={seoTitle} description={seoDescription} canonical={pageUrl} />
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
        { label: name, path: slug }
      ]} />

      <section className="relative pt-14 pb-10 md:pt-16 md:pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
              <Icon name="User" className="text-white" size={40} />
            </div>
            <h1 className="text-2xl md:text-4xl font-heading font-bold text-white mb-3 leading-tight">
              {name}
            </h1>
            <p className="text-accent text-base md:text-lg font-medium">{position}</p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-xl">

          <Card className="p-4 md:p-8 mb-6 space-y-2">
            {contacts.map((c, i) => {
              const style = contactStyle[c.type];
              return (
                <a
                  key={i}
                  href={c.href}
                  target={c.type !== "email" && c.type !== "phone" ? "_blank" : undefined}
                  rel={c.type !== "email" && c.type !== "phone" ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-4 p-3 md:p-4 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className={`w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${style.bg}`}>
                    <Icon name={style.icon} className={style.color} size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground mb-0.5">{c.label}</p>
                    <p className={`font-medium text-sm md:text-base truncate ${style.color}`}>{c.value}</p>
                  </div>
                  <Icon name="ChevronRight" className="text-muted-foreground/40 group-hover:text-muted-foreground flex-shrink-0 transition-colors" size={18} />
                </a>
              );
            })}
          </Card>

          <Card className="p-6 md:p-8 text-center mb-6">
            <h2 className="font-heading font-semibold text-base mb-1">Электронная визитка</h2>
            <p className="text-sm text-muted-foreground mb-5">Отсканируйте QR-код для быстрого доступа к контактам</p>
            <div className="flex justify-center">
              <div className="p-4 bg-white rounded-2xl shadow-md inline-block">
                <QRCodeSVG
                  value={pageUrl}
                  size={180}
                  bgColor="#ffffff"
                  fgColor="#0f2356"
                  level="M"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 break-all">{pageUrl}</p>
          </Card>

          <div className="text-center">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/contact#team">
                <Icon name="ChevronLeft" size={16} />
                Все сотрудники
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeePage;
