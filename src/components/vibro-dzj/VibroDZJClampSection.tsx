import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

type Clamp = {
  model: string;
  specs: { label: string; value: string }[];
};

const singleClamps: Clamp[] = [
  {
    model: "D-40",
    specs: [
      { label: "Усилие зажима, кН", value: "600" },
      { label: "A, мм", value: "904" },
      { label: "B, мм", value: "1550" },
      { label: "ФС, мм", value: "540" },
      { label: "F, мм", value: "0–45" },
      { label: "G, мм", value: "180" },
      { label: "Вес, кг", value: "485" },
      { label: "Подходящий вибропогружатель", value: "DZ-45" },
    ],
  },
  {
    model: "D-60",
    specs: [
      { label: "Усилие зажима, кН", value: "700" },
      { label: "A, мм", value: "1100" },
      { label: "B, мм", value: "1550" },
      { label: "ФС, мм", value: "540" },
      { label: "F, мм", value: "0–50" },
      { label: "G, мм", value: "225" },
      { label: "Вес, кг", value: "750" },
      { label: "Подходящий вибропогружатель", value: "DZJ-60" },
    ],
  },
  {
    model: "D-85",
    specs: [
      { label: "Усилие зажима, кН", value: "850" },
      { label: "A, мм", value: "1100" },
      { label: "B, мм", value: "1500" },
      { label: "ФС, мм", value: "715" },
      { label: "F, мм", value: "0–50" },
      { label: "G, мм", value: "250" },
      { label: "Вес, кг", value: "1050" },
      { label: "Подходящий вибропогружатель", value: "DZJ-90" },
    ],
  },
  {
    model: "D-150",
    specs: [
      { label: "Усилие зажима, кН", value: "1500" },
      { label: "A, мм", value: "1130" },
      { label: "B, мм", value: "1700" },
      { label: "ФС, мм", value: "800" },
      { label: "F, мм", value: "0–50" },
      { label: "G, мм", value: "250" },
      { label: "Вес, кг", value: "1650" },
      { label: "Подходящий вибропогружатель", value: "DZJ-120 / DZJ-135 / DZJ-150" },
    ],
  },
];

const doubleClamps: Clamp[] = [
  {
    model: "XS-60B",
    specs: [
      { label: "Усилие зажима, кН", value: "600×2" },
      { label: "A, мм", value: "2400" },
      { label: "B, мм", value: "1550" },
      { label: "ФС, мм", value: "900" },
      { label: "F, мм", value: "530–1500" },
      { label: "G, мм", value: "0–50" },
      { label: "Вес, кг", value: "220" },
      { label: "Подходящий вибропогружатель", value: "DZJ-90" },
    ],
  },
  {
    model: "XS-60A",
    specs: [
      { label: "Усилие зажима, кН", value: "600×2" },
      { label: "A, мм", value: "2900" },
      { label: "B, мм", value: "1550" },
      { label: "ФС, мм", value: "900" },
      { label: "F, мм", value: "600–2000" },
      { label: "G, мм", value: "0–50" },
      { label: "Вес, кг", value: "220" },
      { label: "Подходящий вибропогружатель", value: "DZJ-120 / DZJ-135" },
    ],
  },
  {
    model: "QS-85",
    specs: [
      { label: "Усилие зажима, кН", value: "850×2" },
      { label: "A, мм", value: "3400" },
      { label: "B, мм", value: "1500" },
      { label: "ФС, мм", value: "900" },
      { label: "F, мм", value: "600–2500" },
      { label: "G, мм", value: "0–50" },
      { label: "Вес, кг", value: "270" },
      { label: "Подходящий вибропогружатель", value: "DZJ-150 / DZJ-180" },
    ],
  },
  {
    model: "QS-150",
    specs: [
      { label: "Усилие зажима, кН", value: "1500×2" },
      { label: "A, мм", value: "3950" },
      { label: "B, мм", value: "1700" },
      { label: "ФС, мм", value: "1100" },
      { label: "F, мм", value: "800–3000" },
      { label: "G, мм", value: "0–50" },
      { label: "Вес, кг", value: "270" },
      { label: "Подходящий вибропогружатель", value: "DZJ-200 / DZJ-240 / DZJ-300" },
    ],
  },
];

const ClampGrid = ({ clamps }: { clamps: Clamp[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {clamps.map((clamp) => (
      <Card
        key={clamp.model}
        className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl"
      >
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base md:text-lg font-heading font-bold text-primary leading-tight">{clamp.model}</h3>
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 ml-2 flex-shrink-0">
              зажим
            </Badge>
          </div>
          <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4 flex-1">
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
);

const VibroDZJClampSection = () => {
  return (
    <section id="clamps" className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center">
            Модели зажимов
          </h2>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-10">
            <p className="text-primary/80 leading-relaxed">
              Для электрических крановых вибропогружателей серии DZJ предлагается широкий ассортимент зажимов — одинарные и двойные модели для работы с различными типами свай и профилей.
            </p>
          </div>

          {/* Одинарный зажим */}
          <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-5 text-center">
            Одинарный гидравлический зажим
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <div className="bg-white rounded-2xl overflow-hidden shadow flex flex-col items-center p-4 sm:w-80">
              <img
                src="https://cdn.poehali.dev/files/a72506a9-e3d3-4c7a-9c89-8d1412e6a227.jpg"
                alt="Одинарный гидравлический зажим DZJ"
                className="object-contain max-h-64 w-full"
              />
              <p className="mt-3 text-sm font-semibold text-primary/70 tracking-wide">Одинарный зажим</p>
            </div>
          </div>
          <div className="mb-12">
            <ClampGrid clamps={singleClamps} />
            <p className="text-sm text-primary/60 mt-4 italic">
              Дуговая зажимная балка (опционально) для трубных свай небольшого размера
            </p>
          </div>

          {/* Двойной зажим */}
          <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-5 text-center">
            Двойной гидравлический зажим
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <div className="bg-white rounded-2xl overflow-hidden shadow flex flex-col items-center p-4 sm:w-80">
              <img
                src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/bucket/607c34a0-43af-43ce-b935-f6996f609e5c.png"
                alt="Двойной гидравлический зажим DZJ"
                className="object-contain max-h-64 w-full"
              />
              <p className="mt-3 text-sm font-semibold text-primary/70 tracking-wide">Двойной зажим</p>
            </div>
          </div>
          <div>
            <ClampGrid clamps={doubleClamps} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibroDZJClampSection;
