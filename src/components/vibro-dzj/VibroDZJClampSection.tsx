import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

type Clamp = {
  model: string;
  specs: { label: string; value: string }[];
};

const clamps: Clamp[] = [
  {
    model: "Одинарный зажим D-40",
    specs: [
      { label: "Усилие зажима, кН", value: "600" },
      { label: "Вес, кг", value: "485" },
      { label: "Подходящий вибропогружатель", value: "DZ-45" },
      { label: "A, мм", value: "904" },
      { label: "B, мм", value: "1550" },
      { label: "F, мм", value: "0–45" },
    ],
  },
  {
    model: "Одинарный зажим D-60",
    specs: [
      { label: "Усилие зажима, кН", value: "700" },
      { label: "Вес, кг", value: "750" },
      { label: "Подходящий вибропогружатель", value: "DZJ-60" },
      { label: "A, мм", value: "1100" },
      { label: "B, мм", value: "1550" },
      { label: "F, мм", value: "0–50" },
    ],
  },
  {
    model: "Одинарный зажим D-85",
    specs: [
      { label: "Усилие зажима, кН", value: "850" },
      { label: "Вес, кг", value: "1050" },
      { label: "Подходящий вибропогружатель", value: "DZJ-90" },
      { label: "A, мм", value: "1100" },
      { label: "B, мм", value: "1500" },
      { label: "F, мм", value: "0–50" },
    ],
  },
  {
    model: "Одинарный зажим D-150",
    specs: [
      { label: "Усилие зажима, кН", value: "1500" },
      { label: "Вес, кг", value: "1650" },
      { label: "Подходящий вибропогружатель", value: "DZJ-120 / DZJ-135 / DZJ-150" },
      { label: "A, мм", value: "1130" },
      { label: "B, мм", value: "1700" },
      { label: "F, мм", value: "0–50" },
    ],
  },
  {
    model: "Двойной зажим XS-60B",
    specs: [
      { label: "Усилие зажима, кН", value: "600×2" },
      { label: "Вес, кг", value: "220" },
      { label: "Подходящий вибропогружатель", value: "DZJ-90" },
    ],
  },
  {
    model: "Двойной зажим XS-60A",
    specs: [
      { label: "Усилие зажима, кН", value: "600×2" },
      { label: "Вес, кг", value: "220" },
      { label: "Подходящий вибропогружатель", value: "DZJ-120 / DZJ-135" },
    ],
  },
  {
    model: "Двойной зажим QS-85",
    specs: [
      { label: "Усилие зажима, кН", value: "850×2" },
      { label: "Вес, кг", value: "270" },
      { label: "Подходящий вибропогружатель", value: "DZJ-150 / DZJ-180" },
    ],
  },
  {
    model: "Двойной зажим QS-150",
    specs: [
      { label: "Усилие зажима, кН", value: "1500×2" },
      { label: "Вес, кг", value: "270" },
      { label: "Подходящий вибропогружатель", value: "DZJ-200 / DZJ-240 / DZJ-300" },
    ],
  },
];

const VibroDZJClampSection = () => {
  return (
    <section id="clamps" className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center">
            Варианты зажимов
          </h2>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-8">
            <p className="text-primary/80 leading-relaxed">
              Для электрических крановых вибропогружателей серии DZJ предлагается широкий ассортимент зажимов — одинарные и двойные модели для работы с различными типами свай и профилей.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clamps.map((clamp) => (
              <Card
                key={clamp.model}
                className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base md:text-lg font-heading font-bold text-primary leading-tight">{clamp.model}</h3>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 ml-2 flex-shrink-0">
                      зажим
                    </Badge>
                  </div>
                  <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                    {clamp.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                        <span className="text-sm text-primary flex-1">{spec.label}</span>
                        <span className="text-sm font-semibold text-primary text-right ml-4">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#consultation" className="block mt-4">
                    <Button className="btn-gradient text-white w-full" size="sm">
                      <Icon name="MessageSquare" size={16} className="mr-2" />
                      Получить консультацию
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibroDZJClampSection;