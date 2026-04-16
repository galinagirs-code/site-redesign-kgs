import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const variants = [
  {
    name: "KLB6T-15C",
    type: "шагающая",
    specs: [
      { label: "Тип передвижения", value: "гидравлический шагающий механизм" },
      { label: "Угол поворота", value: "360°" },
      { label: "Макс. длина сваи", value: "15 м" },
      { label: "Общий вес", value: "37 т" },
    ],
    detailedSpecs: [
      { label: "Модель", value: "KLB6T-15C" },
      { label: "Тип передвижения", value: "гидравлический шагающий механизм" },
      { label: "Угол поворота", value: "360°" },
      { label: "Лебедки", value: "" },
      { label: "Главная лебедка — тип", value: "однобарабанная, ручная", indent: true },
      { label: "Главная лебедка — тяговое усилие (1 канат)", value: "6 000 кг", indent: true },
      { label: "Главная лебедка — скорость подъема", value: "20 м/мин", indent: true },
      { label: "Вспомогательная лебедка — тип", value: "однобарабанная, электрическая", indent: true },
      { label: "Вспомогательная лебедка — тяговое усилие (1 канат)", value: "6 000 кг", indent: true },
      { label: "Вспомогательная лебедка — скорость подъема", value: "15 м/мин", indent: true },
      { label: "Рабочие параметры", value: "" },
      { label: "Макс. модель дизель-молота", value: "DD65", indent: true },
      { label: "Макс. длина поднимаемой сваи", value: "15 м", indent: true },
      { label: "Допустимый уклон площадки", value: "≤ 2°", indent: true },
      { label: "Габариты (рабочее положение, Д×Ш×В)", value: "14 × 5,6 × 25 м" },
      { label: "Габариты (транспортное положение, Д×Ш×В)", value: "15,5 × 2,9 × 3,2 м" },
      { label: "Общий вес установки", value: "37 т" },
    ],
  },
  {
    name: "KLB6T-15L",
    type: "гусеничная",
    specs: [
      { label: "Тип передвижения", value: "гусеничный" },
      { label: "Угол поворота", value: "360°" },
      { label: "Макс. длина сваи", value: "15 м" },
      { label: "Общий вес", value: "40 т" },
    ],
    detailedSpecs: [
      { label: "Модель", value: "KLB6T-15L" },
      { label: "Тип передвижения", value: "гусеничный" },
      { label: "Длина гусеничной плиты", value: "800 мм" },
      { label: "Угол поворота", value: "360°" },
      { label: "Лебедки", value: "" },
      { label: "Главная лебедка — тяговое усилие (1 канат)", value: "6 000 кг", indent: true },
      { label: "Главная лебедка — скорость подъема", value: "20 м/мин", indent: true },
      { label: "Вспомогательная лебедка — тяговое усилие (1 канат)", value: "6 000 кг", indent: true },
      { label: "Вспомогательная лебедка — скорость подъема", value: "15 м/мин", indent: true },
      { label: "Рабочие параметры", value: "" },
      { label: "Макс. модель дизель-молота", value: "DD65", indent: true },
      { label: "Макс. длина поднимаемой сваи", value: "15 м", indent: true },
      { label: "Допустимый уклон площадки", value: "≤ 2°", indent: true },
      { label: "Габариты (рабочее положение, Д×Ш×В)", value: "14 × 5,6 × 25 м" },
      { label: "Габариты (транспортное положение, Д×Ш×В)", value: "15,5 × 3,2 × 3,2 м" },
      { label: "Общий вес установки", value: "40 т" },
    ],
  },
];

const KlbVariantsSection = () => {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              Технические характеристики
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {variants.map((variant, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                        {variant.name}
                      </h3>
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                        {variant.type}
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                      {variant.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                          <span className="text-base text-primary flex-1">{spec.label}</span>
                          <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
                        </div>
                      ))}

                      {expandedVariant === variant.name && (
                        <>
                          {variant.detailedSpecs.map((spec, idx) => (
                            <div
                              key={idx}
                              className={
                                spec.indent
                                  ? "flex justify-between items-center py-1 border-b border-gray-200 last:border-0 ml-4"
                                  : "flex justify-between items-center py-1 border-b border-gray-200 last:border-0"
                              }
                            >
                              {spec.value ? (
                                <>
                                  <span className="text-base text-primary">{spec.label}</span>
                                  <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
                                </>
                              ) : (
                                <span className="text-base font-semibold text-primary w-full">{spec.label}</span>
                              )}
                            </div>
                          ))}
                        </>
                      )}
                    </div>

                    <button
                      onClick={() =>
                        setExpandedVariant(expandedVariant === variant.name ? null : variant.name)
                      }
                      className="w-full flex items-center justify-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                    >
                      {expandedVariant === variant.name ? (
                        <>
                          <Icon name="ChevronUp" size={16} />
                          Свернуть характеристики
                        </>
                      ) : (
                        <>
                          <Icon name="ChevronDown" size={16} />
                          Все характеристики
                        </>
                      )}
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlbVariantsSection;
