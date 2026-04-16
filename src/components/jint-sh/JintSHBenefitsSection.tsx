import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Zap",
    title: "Высокая производительность",
    description: "Установки серии SH обеспечивают высокую эффективность бурения на большую глубину и превосходят мировые аналоги по характеристикам.",
  },
  {
    icon: "Shield",
    title: "Надёжная конструкция",
    description: "Усиленная треугольная конструкция мачты нового поколения обеспечивает стабильную работу в сложных геологических условиях.",
  },
  {
    icon: "Settings",
    title: "Простота эксплуатации",
    description: "Современная гидравлическая система с централизованным управлением упрощает работу оператора и снижает трудозатраты на обслуживание.",
  },
  {
    icon: "Layers",
    title: "Универсальность",
    description: "Совместимость с навесным оборудованием ведущих мировых брендов и различными типами келли-баров для задач любой сложности.",
  },
  {
    icon: "Building2",
    title: "Широкая область применения",
    description: "Высотные здания, мосты, инфраструктурные проекты, свайные фундаменты — оборудование эффективно в водонасыщенных и нестабильных грунтах.",
  },
  {
    icon: "Award",
    title: "Проверенный производитель",
    description: "Shanghai Jintai — государственная компания Китая, основана в 1921 году. С 1996 по 2003 год работала в партнёрстве с немецкой Bauer.",
  },
];

const JintSHBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Ключевые преимущества серии SH
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-primary leading-relaxed text-base">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JintSHBenefitsSection;
