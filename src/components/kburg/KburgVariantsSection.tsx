import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const variants = [
  {
    name: "КБУРГ-12",
    maxPileLength: "12 м",
    maxLiftCapacity: "12 000 кг",
    specs: [
      { label: "Наибольшая грузоподъёмность на канате подъёма погружателя", value: "12 000 кг" },
      { label: "Наибольшая грузоподъёмность на канате подъёма сваи", value: "12 000 кг" },
      { label: "Максимальная длина забиваемых свай", value: "12 м" },
    ],
    detailedSpecs: [
      { label: "Базовая машина", value: "Экскаваторы серии от 250 до 500" },
      { label: "Максимальное сечение забиваемых свай, мм", value: "400×400" },
      { label: "Максимальная масса забиваемых свай, кг", value: "7 500" },
      { label: "Ширина направляющих мачты, мм", value: "500×83" },
      { label: "Угол поворота платформы, град", value: "360" },
      { label: "Вылет мачты, мм", value: "3500…4300" },
      { label: "Наклон мачты вправо-влево, град", value: "±7" },
      { label: "Наклон мачты вперёд, град", value: "3" },
      { label: "Наклон мачты назад, град", value: "14" },
      { label: "Максимальная частота вращения платформы, об/мин", value: "3" },
      { label: "Кратность полиспаста подъёма сваи", value: "1" },
      { label: "Кратность полиспаста подъёма навесного оборудования", value: "1" },
      { label: "Максимальная скорость подъёма навесного оборудования и сваи, м/мин", value: "16" },
      { label: "Максимально допустимая скорость ветра, м/с", value: "14" },
      { label: "Максимально допустимый уклон стройплощадки, град", value: "3" },
      { label: "Максимальная масса навесного оборудования, кг", value: "12 000" },
      { label: "Масса КБУРГ без молота и сваи, кг", value: "43 000" },
      { label: "Высота в рабочем положении, мм", value: "20 300" },
      { label: "Длина в рабочем положении, мм", value: "5 200" },
      { label: "Ширина в рабочем положении, мм", value: "3 420" },
      { label: "Длина в транспортном положении, мм", value: "12 300" },
      { label: "Ширина в транспортном положении, мм", value: "3 420" },
      { label: "Высота в транспортном положении, мм", value: "3 400" },
      { label: "Ширина гусеничного хода, мм", value: "3 420" },
      { label: "Максимальное удельное давление на грунт, кг/см²", value: "1,15" },
      { label: "Полный ресурс работы, час (лет)", value: "10 000 (10)" },
    ],
  },
  {
    name: "КБУРГ-14",
    maxPileLength: "14 м",
    maxLiftCapacity: "12 000 кг",
    specs: [
      { label: "Наибольшая грузоподъёмность на канате подъёма погружателя", value: "12 000 кг" },
      { label: "Наибольшая грузоподъёмность на канате подъёма сваи", value: "12 000 кг" },
      { label: "Максимальная длина забиваемых свай", value: "14 м" },
    ],
    detailedSpecs: [
      { label: "Базовая машина", value: "Экскаваторы серии от 250 до 500" },
      { label: "Максимальное сечение забиваемых свай, мм", value: "400×400" },
      { label: "Максимальная масса забиваемых свай, кг", value: "7 500" },
      { label: "Ширина направляющих мачты, мм", value: "500×83" },
      { label: "Угол поворота платформы, град", value: "360" },
      { label: "Вылет мачты, мм", value: "3450…4550" },
      { label: "Наклон мачты вправо-влево, град", value: "±7" },
      { label: "Наклон мачты вперёд, град", value: "3" },
      { label: "Наклон мачты назад, град", value: "14" },
      { label: "Максимальная частота вращения платформы, об/мин", value: "3" },
      { label: "Кратность полиспаста подъёма сваи", value: "1" },
      { label: "Кратность полиспаста подъёма навесного оборудования", value: "1" },
      { label: "Максимальная скорость подъёма навесного оборудования и сваи, м/мин", value: "16" },
      { label: "Максимально допустимая скорость ветра, м/с", value: "14" },
      { label: "Максимально допустимый уклон стройплощадки, град", value: "3" },
      { label: "Максимальная масса навесного оборудования, кг", value: "12 000" },
      { label: "Масса КБУРГ без молота и сваи, кг", value: "45 000" },
      { label: "Высота в рабочем положении, мм", value: "22 300" },
      { label: "Длина в рабочем положении, мм", value: "5 200" },
      { label: "Ширина в рабочем положении, мм", value: "3 420" },
      { label: "Длина в транспортном положении, мм", value: "12 300" },
      { label: "Ширина в транспортном положении, мм", value: "3 420" },
      { label: "Высота в транспортном положении, мм", value: "3 400" },
      { label: "Ширина гусеничного хода, мм", value: "3 420" },
      { label: "Максимальное удельное давление на грунт, кг/см²", value: "1,15" },
      { label: "Полный ресурс работы, час (лет)", value: "10 000 (10)" },
    ],
  },
  {
    name: "КБУРГ-16",
    maxPileLength: "16 м",
    maxLiftCapacity: "16 000 кг",
    specs: [
      { label: "Наибольшая грузоподъёмность на канате подъёма погружателя", value: "16 000 кг" },
      { label: "Наибольшая грузоподъёмность на канате подъёма сваи", value: "16 000 кг" },
      { label: "Максимальная длина забиваемых свай", value: "16 м" },
    ],
    detailedSpecs: [
      { label: "Базовая машина", value: "Экскаваторы серии от 250 до 500" },
      { label: "Максимальное сечение забиваемых свай, мм", value: "400×400" },
      { label: "Максимальная масса забиваемых свай, кг", value: "9 000" },
      { label: "Ширина направляющих мачты, мм", value: "500×83" },
      { label: "Угол поворота платформы, град", value: "360" },
      { label: "Вылет мачты, мм", value: "3450…4550" },
      { label: "Наклон мачты вправо-влево, град", value: "±7" },
      { label: "Наклон мачты вперёд, град", value: "5" },
      { label: "Наклон мачты назад, град", value: "18" },
      { label: "Максимальная частота вращения платформы, об/мин", value: "3" },
      { label: "Кратность полиспаста подъёма сваи", value: "1" },
      { label: "Кратность полиспаста подъёма навесного оборудования", value: "1" },
      { label: "Максимальная скорость подъёма навесного оборудования и сваи, м/мин", value: "16" },
      { label: "Максимально допустимая скорость ветра, м/с", value: "14" },
      { label: "Максимально допустимый уклон стройплощадки, град", value: "3" },
      { label: "Максимальная масса навесного оборудования, кг", value: "14 500" },
      { label: "Масса КБУРГ без молота и сваи, кг", value: "55 500" },
      { label: "Высота в рабочем положении, мм", value: "24 930" },
      { label: "Длина в рабочем положении, мм", value: "7 040" },
      { label: "Ширина в рабочем положении, мм", value: "3 550" },
      { label: "Длина в транспортном положении, мм", value: "12 300" },
      { label: "Ширина в транспортном положении, мм", value: "3 550" },
      { label: "Высота в транспортном положении, мм", value: "3 500" },
      { label: "Ширина гусеничного хода, мм", value: "3 550" },
      { label: "Максимальное удельное давление на грунт, кг/см²", value: "1,15" },
      { label: "Полный ресурс работы, час (лет)", value: "10 000 (10)" },
    ],
  },
];

const KburgVariantsSection = () => {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Технические характеристики установок КБУРГ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {variants.map((variant, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                      {variant.name}
                    </h3>
                  </div>

                  <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                    {variant.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                        <span className="text-sm text-primary flex-1 pr-2">{spec.label}</span>
                        <span className="text-sm font-semibold text-primary text-right whitespace-nowrap">{spec.value}</span>
                      </div>
                    ))}

                    {expandedVariant === variant.name && (
                      <>
                        {variant.detailedSpecs.map((spec, idx) => (
                          <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                            <span className="text-sm text-primary flex-1 pr-2">{spec.label}</span>
                            <span className="text-sm font-semibold text-primary text-right whitespace-nowrap">{spec.value}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setExpandedVariant(expandedVariant === variant.name ? null : variant.name)}
                    className="w-full"
                  >
                    {expandedVariant === variant.name ? (
                      <>
                        <Icon name="ChevronUp" size={16} className="mr-2" />
                        Скрыть характеристики
                      </>
                    ) : (
                      <>
                        <Icon name="ChevronDown" size={16} className="mr-2" />
                        Полные характеристики
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KburgVariantsSection;
