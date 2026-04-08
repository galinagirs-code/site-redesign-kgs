import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "VolumeX",
    title: "Без вибрации и шума",
    description: "Ключевое преимущество технологии — полное отсутствие ударных нагрузок и вибраций при погружении свай.",
  },
  {
    icon: "Building2",
    title: "Минимальное воздействие на соседние здания",
    description: "Статический метод не создаёт сейсмических волн, безопасен для фундаментов и коммуникаций рядом.",
  },
  {
    icon: "Target",
    title: "Высокая точность установки свай",
    description: "Гидравлический зажим и направляющая система обеспечивают точное вертикальное вдавливание.",
  },
  {
    icon: "Leaf",
    title: "Экологичность",
    description: "Без загрязнения почвы, без ударного шума — соответствует требованиям экологических норм в городах.",
  },
  {
    icon: "Layers",
    title: "Подходит для сложных грунтов",
    description: "Эффективно работает в мягких, обводнённых и слабонесущих грунтах благодаря большому усилию вдавливания.",
  },
  {
    icon: "Timer",
    title: "Высокая производительность",
    description: "Самоходная шагающая платформа и быстрый переход между сваями обеспечивают высокий темп работ.",
  },
];

const JuliZYSBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества сваевдавливающих установок (серия ZYS)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-primary/70 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JuliZYSBenefitsSection;