import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Zap",
    title: "Высокая мощность и производительность",
    description: "Современные двигатели обеспечивают высокую производительность при работе в тяжёлых грунтовых условиях.",
  },
  {
    icon: "Settings",
    title: "Надёжная гидравлическая система",
    description: "Пропорциональное управление обеспечивает плавность, точность операций и комфорт оператора.",
  },
  {
    icon: "TrendingDown",
    title: "Энергоэффективность",
    description: "Оптимальный расход топлива снижает эксплуатационные затраты без потери производительности.",
  },
  {
    icon: "Shield",
    title: "Устойчивость и безопасность",
    description: "Раздвижная гусеничная база и низкий центр тяжести обеспечивают стабильную работу на сложных грунтах.",
  },
  {
    icon: "Truck",
    title: "Высокая мобильность",
    description: "Компактные транспортные габариты и быстрый перевод в рабочее положение ускоряют перемещение между объектами.",
  },
  {
    icon: "Clock",
    title: "Долговечность",
    description: "Конструкция обеспечивает стабильную работу в самых тяжёлых грунтовых условиях.",
  },
];

const StarkeBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Ключевые преимущества STARKE (серия LH)
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

export default StarkeBenefitsSection;