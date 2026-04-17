import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Wrench",
    title: "Надёжная силовая установка",
    description: "Двигатели Cummins обеспечивают стабильную работу, высокую тягу и экономичный расход топлива даже при интенсивной эксплуатации.",
  },
  {
    icon: "Settings2",
    title: "Эффективная система подачи и протяжки",
    description: "Обеспечивает стабильную передачу усилия, высокую производительность и надёжность в различных условиях работы.",
  },
  {
    icon: "Construction",
    title: "Автоматизация и удобство работы",
    description: "Система автоматического монтажа и демонтажа буровых труб. Двойной зажим буровых штанг повышает скорость, эффективность и безопасность работы.",
  },
  {
    icon: "Anchor",
    title: "Устойчивость в сложных условиях",
    description: "Низкий центр тяжести и гидравлическое анкерное устройство обеспечивают надёжную фиксацию при работе на различных типах грунта.",
  },
  {
    icon: "Droplets",
    title: "Стабильная гидравлическая система",
    description: "Равномерная подача бурового раствора со стабильным давлением обеспечивает высокую эффективность бурения.",
  },
  {
    icon: "Shield",
    title: "Долговечность конструкции",
    description: "Использование износостойких материалов обеспечивает длительный срок службы оборудования при интенсивной эксплуатации.",
  },
  {
    icon: "Monitor",
    title: "Комфорт оператора",
    description: "Эргономичная кабина с системой мониторинга: удобное управление и контроль всех параметров работы в режиме реального времени.",
  },
  {
    icon: "Gauge",
    title: "Высокая производительность",
    description: "Тяговое усилие до 250 кН, крутящий момент до 8000 Н·м, скорость вращения до 120 об/мин. Диаметр расширения до Ø600 мм.",
  },
  {
    icon: "MapPin",
    title: "Компактная конструкция для работы в ограниченном пространстве",
    description: "Интегрированная компоновка обеспечивает удобство транспортировки и эффективную работу на объектах с плотной застройкой.",
  },
];

const DongtaiJLBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества буровых установок JuLi серии JL
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

export default DongtaiJLBenefitsSection;