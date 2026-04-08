import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Zap",
    title: "Высокая эффективность",
    description: "Высокая энергия удара и производительность забивки обеспечивают быстрое выполнение свайных работ.",
  },
  {
    icon: "TrendingDown",
    title: "Экономичность",
    description: "Низкий расход топлива и минимальные требования к обслуживанию снижают эксплуатационные затраты.",
  },
  {
    icon: "Settings",
    title: "Простота эксплуатации",
    description: "Удобное обслуживание и надёжная конструкция обеспечивают бесперебойную работу на объекте.",
  },
  {
    icon: "History",
    title: "100+ лет опыта SEMW",
    description: "Компания SEMW — производитель с вековой историей, чья продукция экспортируется по всему миру.",
  },
  {
    icon: "Globe",
    title: "Мировой экспорт",
    description: "Проверенные решения для тяжёлых проектов: мосты, порты, энергетика. Признанная альтернатива DELMAG.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Широкий модельный ряд",
    description: "Диапазон от D8 до D260 — универсальное решение для любых задач: от малоэтажного строительства до сверхтяжёлых проектов.",
  },
];

const SemwDBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества молотов SEMW серии D
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

export default SemwDBenefitsSection;