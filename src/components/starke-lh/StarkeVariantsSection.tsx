import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const cards = [
  {
    name: "LH50",
    specs: [
      { label: "Гидравлический молот", value: "≤HHP5" },
      { label: "Дизельный молот", value: "≤HD36" },
      { label: "Мощность двигателя", value: "133 kW @2100rpm" },
      { label: "Высота мачты", value: "21 м" },
      { label: "Основная лебёдка", value: "70 kN" },
      { label: "Вспомогательная лебёдка", value: "60 kN" },
      { label: "Ширина ходовой части", value: "3200~4200 мм" },
      { label: "Колея", value: "4283 мм" },
      { label: "Ширина гусеничной ленты", value: "800 мм" },
      { label: "Габариты установки", value: "7965×4200×22705 мм" },
      { label: "Транспортные габариты", value: "16042×3200×3192 мм" },
      { label: "Масса нетто", value: "41 т" },
      { label: "Противовес", value: "/" },
      { label: "Общий рабочий вес", value: "≤50 т" },
    ],
  },
  {
    name: "LH65",
    specs: [
      { label: "Гидравлический молот", value: "≤HHP8" },
      { label: "Дизельный молот", value: "≤HD62" },
      { label: "Мощность двигателя", value: "186.5 kW @2200rpm" },
      { label: "Высота мачты", value: "24.5/19.5 м" },
      { label: "Основная лебёдка", value: "150 kN ×2sets" },
      { label: "Вспомогательная лебёдка", value: "40 kN" },
      { label: "Ширина ходовой части", value: "3400~4400 мм" },
      { label: "Колея", value: "4330 мм" },
      { label: "Ширина гусеничной ленты", value: "900 мм" },
      { label: "Габариты установки", value: "8360×4400×26775 мм" },
      { label: "Транспортные габариты", value: "19225×3400×3830 мм" },
      { label: "Масса нетто", value: "55 т" },
      { label: "Противовес", value: "9 т" },
      { label: "Общий рабочий вес", value: "≤88 т" },
    ],
  },
  {
    name: "LH86",
    specs: [
      { label: "Гидравлический молот", value: "≤HHP14" },
      { label: "Дизельный молот", value: "≤HD80" },
      { label: "Мощность двигателя", value: "240 kW @2100rpm" },
      { label: "Высота мачты", value: "21 м" },
      { label: "Основная лебёдка", value: "70 kN" },
      { label: "Вспомогательная лебёдка", value: "50 kN" },
      { label: "Ширина ходовой части", value: "3450~4350 мм" },
      { label: "Колея", value: "4575 мм" },
      { label: "Ширина гусеничной ленты", value: "800 мм" },
      { label: "Габариты установки", value: "8840×4350×21833 мм" },
      { label: "Транспортные габариты", value: "15115×3450×3500 мм" },
      { label: "Масса нетто", value: "51 т" },
      { label: "Противовес", value: "11 т" },
      { label: "Общий рабочий вес", value: "≤90 т" },
    ],
  },
  {
    name: "LH90",
    specs: [
      { label: "Гидравлический молот", value: "≤HHP14" },
      { label: "Дизельный молот", value: "≤HD80" },
      { label: "Мощность двигателя", value: "194 kW @2200rpm" },
      { label: "Высота мачты", value: "21/24/27/30 м" },
      { label: "Основная лебёдка ×2", value: "80 kN ×2sets" },
      { label: "Вспомогательная лебёдка", value: "48 kN" },
      { label: "Ширина ходовой части", value: "3298/4098 мм" },
      { label: "Колея", value: "4486 мм" },
      { label: "Ширина гусеничной ленты", value: "762 мм" },
      { label: "Габариты установки", value: "9600×5500×26500 мм" },
      { label: "Транспортные габариты", value: "7600×3298×3600 мм" },
      { label: "Масса нетто", value: "52 т (@21m)" },
      { label: "Противовес", value: "12 т" },
      { label: "Общий рабочий вес", value: "≤95 т" },
    ],
  },
  {
    name: "LH130",
    specs: [
      { label: "Гидравлический молот", value: "≤HHP20" },
      { label: "Дизельный молот", value: "≤HD138" },
      { label: "Мощность двигателя", value: "298 kW @2100rpm" },
      { label: "Высота мачты", value: "20/23/26/29 м" },
      { label: "Основная лебёдка ×2", value: "80 kN ×2sets" },
      { label: "Вспомогательная лебёдка", value: "48 kN ×2sets" },
      { label: "Ширина ходовой части", value: "3610/4410 мм" },
      { label: "Колея", value: "4950 мм" },
      { label: "Ширина гусеничной ленты", value: "810 мм" },
      { label: "Габариты установки", value: "9580×5200×28950 мм" },
      { label: "Транспортные габариты", value: "10840×3610×3268 мм" },
      { label: "Масса нетто", value: "58 т (@20m)" },
      { label: "Противовес", value: "15 т" },
      { label: "Общий рабочий вес", value: "≤130 т" },
    ],
  },
  {
    name: "LH145",
    specs: [
      { label: "Гидравлический молот", value: "≤HHP25" },
      { label: "Дизельный молот", value: "≤HD160" },
      { label: "Мощность двигателя", value: "298 kW @2100rpm" },
      { label: "Высота мачты", value: "20/23/26/29 м" },
      { label: "Основная лебёдка ×2", value: "80 kN ×2sets" },
      { label: "Вспомогательная лебёдка", value: "48 kN ×2sets" },
      { label: "Ширина ходовой части", value: "3730/4610 мм" },
      { label: "Колея", value: "5068 мм" },
      { label: "Ширина гусеничной ленты", value: "880 мм" },
      { label: "Габариты установки", value: "9770×5200×29482 мм" },
      { label: "Транспортные габариты", value: "10840×3730×3290 мм" },
      { label: "Масса нетто", value: "63 т (@20m)" },
      { label: "Противовес", value: "15 т" },
      { label: "Общий рабочий вес", value: "≤145 т" },
    ],
  },
];

const StarkeVariantsSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Модели установок (серии LH)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => {
              const isExpanded = expandedCard === card.name;
              const previewSpecs = card.specs.slice(0, 3);
              const extraSpecs = card.specs.slice(3);

              return (
                <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">STARKE {card.name}</h3>
                    </div>

                    <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4 flex-1">
                      {previewSpecs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                          <span className="text-base text-primary flex-1">{spec.label}</span>
                          <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
                        </div>
                      ))}

                      {isExpanded && extraSpecs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                          <span className="text-base text-primary flex-1">{spec.label}</span>
                          <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setExpandedCard(isExpanded ? null : card.name)}
                        className="w-full"
                      >
                        {isExpanded ? (
                          <><Icon name="ChevronUp" size={16} className="mr-2" />Скрыть характеристики</>
                        ) : (
                          <><Icon name="ChevronDown" size={16} className="mr-2" />Подробнее</>
                        )}
                      </Button>
                      <a href="#consultation" className="block">
                        <Button className="btn-gradient text-white w-full" size="sm">
                          <Icon name="MessageSquare" size={16} className="mr-2" />
                          Получить консультацию
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarkeVariantsSection;