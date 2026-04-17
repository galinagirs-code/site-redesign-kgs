import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Wrench",
    title: "Современная конструкция",
    description: "Многофункциональное роторное буровое оборудование нового поколения. Высокая мощность, соответствие стандартам Euro III, компактный хвост и низкий центр тяжести — отличная устойчивость и безопасность при работе.",
  },
  {
    icon: "Settings2",
    title: "Эффективная силовая головка",
    description: "Многоскоростное управление для точной настройки работы. Высокая производительность бурения, усиленная износостойкая конструкция, точное вертикальное бурение и двойная система защиты и амортизации.",
  },
  {
    icon: "Construction",
    title: "Лебедка повышенной производительности",
    description: "Высокая скорость подъема — до 70 м/мин. Двухрежимная работа (высокая и низкая скорость), система быстрого срабатывания, повышенный ресурс каната и надежность.",
  },
  {
    icon: "Leaf",
    title: "Экономичность и экологичность",
    description: "Гидравлическая система с оптимальным распределением мощности. Сниженное энергопотребление и повышенная эффективность работы.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Гибкость и адаптация под задачи",
    description: "Регулируемый противовес под разные условия работы. Возможность настройки под тип грунта, эффективная работа в сложных и твердых породах, улучшенное качество бурения.",
  },
  {
    icon: "Award",
    title: "Проверенный производитель",
    description: "Shanghai Jintai — государственная компания Китая, основана в 1921 году. С 1996 по 2003 год работала в партнёрстве с немецкой компанией Bauer.",
  },
];

const JintSDBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества гидравлических буровых машин JINT SD
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

export default JintSDBenefitsSection;