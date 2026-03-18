import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "ShieldCheck",
    title: "Защита оголовка",
    description: "Предотвращает разрушение бетона и арматурного каркаса при ударах молота.",
  },
  {
    icon: "Layers",
    title: "Равномерная нагрузка",
    description: "Амортизирующая вставка распределяет ударную энергию по всему сечению сваи.",
  },
  {
    icon: "Repeat",
    title: "Повторное использование",
    description: "Наголовник сохраняет свай в целостности — сваю можно повторно использовать.",
  },
  {
    icon: "Gauge",
    title: "Эффективность забивки",
    description: "Правильно подобранный наголовник снижает потери энергии удара и ускоряет погружение.",
  },
  {
    icon: "Wrench",
    title: "Простая замена вставки",
    description: "Амортизирующая подушка меняется по мере износа без замены корпуса наголовника.",
  },
  {
    icon: "Ruler",
    title: "Точный подбор под сваю",
    description: "Изготавливаем под конкретное сечение: круглые, квадратные сваи, трубы, двутавры, шпунт.",
  },
];

const NagolovnikiFunctionsSection = () => {
  return (
    <section id="functions" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Функции свайного наголовника
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

export default NagolovnikiFunctionsSection;
