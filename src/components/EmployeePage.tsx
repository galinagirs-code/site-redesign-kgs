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
  company?: string;
}

const contactStyle: Record<ContactItem["type"], { icon: string; color: string; bg: string }> = {
  email:    { icon: "Mail",          color: "text-primary",      bg: "bg-primary/10 group-hover:bg-primary/20" },
  phone:    { icon: "Phone",         color: "text-primary",      bg: "bg-primary/10 group-hover:bg-primary/20" },
  telegram: { icon: "Send",          color: "text-[#2AABEE]",    bg: "bg-[#2AABEE]/10 group-hover:bg-[#2AABEE]/20" },
  vk:       { icon: "Share2",        color: "text-[#0077FF]",    bg: "bg-[#0077FF]/10 group-hover:bg-[#0077FF]/20" },
  max:      { icon: "MessageCircle", color: "text-orange-500",   bg: "bg-orange-100 group-hover:bg-orange-200" },
};

const buildVCard = (name: string, position: string, company: string, contacts: ContactItem[]) => {
  const nameParts = name.trim().split(" ");
  const lastName = nameParts[0] ?? "";
  const firstName = nameParts.slice(1).join(" ");

  const phones = contacts.filter(c => c.type === "phone").map(c => `TEL;TYPE=CELL:${c.href.replace("tel:", "")}`).join("\r\n");
  const emails = contacts.filter(c => c.type === "email").map(c => `EMAIL:${c.value}`).join("\r\n");

  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${lastName};${firstName};;;`,
    `FN:${name}`,
    `ORG:${company}`,
    `TITLE:${position}`,
    phones,
    emails,
    "END:VCARD",
  ].filter(Boolean).join("\r\n");
};

const EmployeePage = ({ name, position, slug, seoTitle, seoDescription, contacts, company = "ООО КоперГруппСервис" }: EmployeePageProps) => {
  const pageUrl = `https://kgs-ural.ru${slug}`;
  const vCard = buildVCard(name, position, company, contacts);

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

      <section className="relative pt-14 pb-12 md:pt-16 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px'}} />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="relative inline-block mb-5">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-white/30 shadow-xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/10ffe6b3-855a-4e05-bccb-8bfbb1b6ff54.png"
                  alt="КГС"
                  className="w-full h-full object-cover"
                />
              </div>
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

          <Card className="mb-6 shadow-xl border-t-4 border-t-accent overflow-hidden relative">
            {/* Декоративная фото-полоса справа */}
            <div className="absolute top-0 right-0 w-1/3 h-full hidden sm:block">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: 'url(https://cdn.poehali.dev/files/d2abf384-7c66-44d9-834b-ddaa3f323fb1.jpg)'}}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
            </div>
            <div className="relative p-4 md:p-8 space-y-2 sm:pr-[38%]">
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
            </div>
          </Card>

          <Card className="p-6 md:p-8 text-center mb-6 shadow-xl backdrop-blur-sm bg-white/95">
            <h2 className="font-heading font-semibold text-base mb-1">Электронная визитка</h2>
            <p className="text-sm text-muted-foreground mb-5">Отсканируйте QR-код камерой телефона — контакт добавится автоматически</p>
            <div className="flex justify-center">
              <div className="p-4 bg-white rounded-2xl shadow-md inline-block">
                <QRCodeSVG
                  value={vCard}
                  size={180}
                  bgColor="#ffffff"
                  fgColor="#0f2356"
                  level="M"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">{name} · {position}</p>
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