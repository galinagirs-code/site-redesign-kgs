import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Shield",
    title: "Высокая устойчивость",
    description: "Обеспечивает надёжную устойчивость при выполнении свайных работ на строительных площадках.",
  },
  {
    icon: "Layers",
    title: "Низкое давление на грунт",
    description: "Шагающий механизм с гидравлическим приводом обеспечивает низкое давление на грунт (можно работать на слабых основаниях).",
  },
  {
    icon: "Settings",
    title: "Многофункциональность",
    description: "Возможность установки дизель-молота, гидромолота, вибропогружателя или бурового вращателя — для задач любой сложности.",
  },
  {
    icon: "Navigation",
    title: "Отличная маневренность",
    description: "Шагающая система передвижения с гидравлическим приводом обеспечивает высокую маневренность на строительной площадке.",
  },
  {
    icon: "Truck",
    title: "Удобство транспортировки",
    description: "Компактные транспортные габариты позволяют легко перемещать установку между объектами.",
  },
  {
    icon: "Leaf",
    title: "Экологичность",
    description: "Электрическая силовая установка снижает уровень шума и не загрязняет окружающую среду.",
  },
];

const KlbBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Ключевые преимущества серии KLB
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

export default KlbBenefitsSection;