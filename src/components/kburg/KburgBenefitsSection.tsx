import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "FlaskConical",
    title: "Первая отечественная разработка",
    description: "КБУРГ — инновационное российское решение, впервые обеспечивающее совместное использование сваебойного и бурильного оборудования на одной копровой мачте.",
  },
  {
    icon: "Tractor",
    title: "Совместимость с любыми экскаваторами",
    description: "Навесное оборудование легко интегрируется с гусеничными экскаваторами российского и импортного производства. Рабочая масса базовой машины — от 18 тонн. Это позволяет использовать уже имеющийся парк техники без дополнительных инвестиций.",
  },
  {
    icon: "Hammer",
    title: "Широкий выбор молотов",
    description: "Установка работает с дизельными трубчатыми, дизельными штанговыми и гидравлическими молотами. Масса ударной части — до 5 000 кг, что обеспечивает высокую производительность при забивке свай.",
  },
  {
    icon: "Drill",
    title: "Мощное бурильное оборудование",
    description: "КБУРГ оснащается гидравлическими вращателями с крутящим моментом до 111 кН×м и диаметром шнека до 1 200 мм. Это позволяет эффективно выполнять бурение скважин для различных строительных задач.",
  },
  {
    icon: "Award",
    title: "Официальная сертификация",
    description: "Оборудование полностью соответствует требованиям Таможенного союза и прошло все этапы сертификации. Имеет официальный Сертификат ТС, выданный органом по сертификации.",
  },
  {
    icon: "Layers",
    title: "Линейка моделей под любые задачи",
    description: "В ассортименте три модели: КБУРГ-12, КБУРГ-14, КБУРГ-16 — с забивкой свай от 12 до 16 метров. Цифра в названии обозначает максимальную длину сваи, что упрощает подбор под конкретный проект.",
  },
];

const KburgBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества копрово-бурильных установок КБУРГ
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

export default KburgBenefitsSection;
