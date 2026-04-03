import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Award",
    title: "Запатентованная конструкция",
    description: "Оригинальный, запатентованный продукт с возможностью быстрого перемещения по объекту.",
  },
  {
    icon: "Layers",
    title: "Интегрированный подъём",
    description: "Встроенный механизм подъёма снижает трудозатраты и экономит время на каждом цикле извлечения.",
  },
  {
    icon: "TrendingUp",
    title: "Усилие до 700 тонн",
    description: "Мощное усилие растяжения обеспечивает эффективное вытягивание даже глубоко забитых свай.",
  },
  {
    icon: "ArrowUpDown",
    title: "Длинные балки до 40 м",
    description: "Мощный гидравлический цилиндр и насос позволяют работать с элементами длиной до 40 метров.",
  },
  {
    icon: "RotateCcw",
    title: "Дистанционное управление 360°",
    description: "Удалённое управление по всему периметру — для удобства и безопасности оператора.",
  },
  {
    icon: "Zap",
    title: "Двойной цилиндр",
    description: "Основной цилиндр — для вытягивания, дополнительный — для ускорения процесса извлечения.",
  },
];

const DomkratyBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Ключевые преимущества
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

export default DomkratyBenefitsSection;