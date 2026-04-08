import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Grip",
    title: "Мощный боковой зажим",
    description: "Равномерный и мощный зажим по всей длине хвостовика исключает проскальзывание и деформацию оснастки.",
  },
  {
    icon: "Zap",
    title: "Быстрая фиксация",
    description: "Мгновенная фиксация и освобождение оснастки сокращают цикл работ до 30% по сравнению с аналогами.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Универсальность",
    description: "Универсальная система адаптеров обеспечивает работу с различными типами свай и шпунта без замены базового оборудования.",
  },
  {
    icon: "RotateCcw",
    title: "Наклонно-поворотный механизм",
    description: "Механизм Rototilt обеспечивает наклон и вращение, упрощает захват и точную установку свай в любом положении.",
  },
  {
    icon: "Shield",
    title: "Демпфирующие элементы",
    description: "Эластомерные демпферы снижают вибрационную нагрузку на экскаватор и увеличивают срок службы оборудования.",
  },
  {
    icon: "Award",
    title: "Флагманское качество",
    description: "Производство с соблюдением высоких стандартов качества в специализированных цехах с контролируемыми условиями.",
  },
];

const VibroCSBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества гидравлических экскаваторных вибропогружателей с боковым зажимом (серия CS)
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
                  <p className="text-primary leading-relaxed text-sm">
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

export default VibroCSBenefitsSection;
