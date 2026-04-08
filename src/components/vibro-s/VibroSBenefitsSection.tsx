import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Zap",
    title: "Высокая производительность",
    description: "Высокочастотная вибрация обеспечивает быстрое погружение свай и высокую скорость работы на объекте.",
  },
  {
    icon: "Layers",
    title: "Эффективность в сложных грунтах",
    description: "Работает в песчаных, глинистых, болотистых и других грунтах. Вибрация снижает сопротивление и погружает сваи без ударных нагрузок.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Универсальность",
    description: "Совместим с различными типами свай: шпунт, трубы, металлические сваи. Нижний зажим обеспечивает надёжную фиксацию любых профилей.",
  },
  {
    icon: "Wrench",
    title: "Простая установка",
    description: "Быстрое подключение к гидросистеме экскаватора. Не требует специального переоборудования базовой машины.",
  },
  {
    icon: "Shield",
    title: "Надёжная конструкция",
    description: "Резиновые амортизаторы снижают нагрузку на экскаватор. Долговечные материалы и проверенные технические решения.",
  },
  {
    icon: "Award",
    title: "Соответствие стандартам",
    description: "Оборудование сертифицировано по международным стандартам качества ISO и CE, что подтверждает его надёжность и безопасность.",
  },
];

const VibroSBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества гидравлических экскаваторных вибропогружателей с нижним зажимом (серия S)
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

export default VibroSBenefitsSection;