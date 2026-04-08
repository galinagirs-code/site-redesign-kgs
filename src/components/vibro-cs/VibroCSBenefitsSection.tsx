import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Building2",
    title: "Работа в стеснённых условиях",
    description: "Боковой зажим позволяет устанавливать сваи без перестановки экскаватора — идеально для городской застройки.",
  },
  {
    icon: "Crosshair",
    title: "Высокая точность",
    description: "Обеспечивает точное позиционирование сваи даже рядом с существующими конструкциями и фундаментами.",
  },
  {
    icon: "ArrowDownUp",
    title: "Работа с длинными сваями",
    description: "Боковой захват позволяет работать со сваями, длина которых превышает вылет стрелы экскаватора.",
  },
  {
    icon: "TrendingDown",
    title: "Снижение перемещений техники",
    description: "Меньше манёвров экскаватора — выше производительность на объекте и меньше простоев.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Универсальность",
    description: "Подходит для шпунта, труб, двутавров и железобетонных свай без смены базового оборудования.",
  },
  {
    icon: "RotateCcw",
    title: "Поворотный механизм до 360°",
    description: "Наклонный механизм до 45° и поворот до 360° обеспечивают работу в любом положении.",
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
