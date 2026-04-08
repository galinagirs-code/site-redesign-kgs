import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const variants = [
  {
    name: "S250",
    specs: [
      { label: "Номинальная возбудительная сила", value: "250 кН" },
      { label: "Частота вибрации", value: "3200 об/мин" },
      { label: "Подходящий экскаватор", value: "15–20 т" },
    ],
    detailedSpecs: [
      { label: "Частота вибрации, об/мин", value: "3200" },
      { label: "Крутящий момент эксцентрика, Н·м", value: "22" },
      { label: "Номинальная возбудительная сила, кН", value: "250" },
      { label: "Давление гидросистемы, МПа", value: "32" },
      { label: "Расход гидросистемы, л/мин", value: "105" },
      { label: "Максимальная длина сваи, м", value: "6–9" },
      { label: "Масса вспомогательной стрелы, кг", value: "700" },
      { label: "Общий вес, кг", value: "1 250" },
      { label: "Подходящий экскаватор, т", value: "15–20" },
    ],
  },
  {
    name: "S350",
    specs: [
      { label: "Номинальная возбудительная сила", value: "360 кН" },
      { label: "Частота вибрации", value: "3000 об/мин" },
      { label: "Подходящий экскаватор", value: "18–25 т" },
    ],
    detailedSpecs: [
      { label: "Частота вибрации, об/мин", value: "3000" },
      { label: "Крутящий момент эксцентрика, Н·м", value: "36" },
      { label: "Номинальная возбудительная сила, кН", value: "360" },
      { label: "Давление гидросистемы, МПа", value: "32" },
      { label: "Расход гидросистемы, л/мин", value: "250" },
      { label: "Максимальная длина сваи, м", value: "6–9" },
      { label: "Масса вспомогательной стрелы, кг", value: "800" },
      { label: "Общий вес, кг", value: "1 750" },
      { label: "Подходящий экскаватор, т", value: "18–25" },
    ],
  },
  {
    name: "S500",
    specs: [
      { label: "Номинальная возбудительная сила", value: "450 кН" },
      { label: "Частота вибрации", value: "2800 об/мин" },
      { label: "Подходящий экскаватор", value: "27–37 т" },
    ],
    detailedSpecs: [
      { label: "Частота вибрации, об/мин", value: "2800" },
      { label: "Крутящий момент эксцентрика, Н·м", value: "52" },
      { label: "Номинальная возбудительная сила, кН", value: "450" },
      { label: "Давление гидросистемы, МПа", value: "32" },
      { label: "Расход гидросистемы, л/мин", value: "240" },
      { label: "Максимальная длина сваи, м", value: "6–15" },
      { label: "Масса вспомогательной стрелы, кг", value: "800" },
      { label: "Общий вес, кг", value: "2 750" },
      { label: "Подходящий экскаватор, т", value: "27–37" },
    ],
  },
  {
    name: "S600",
    specs: [
      { label: "Номинальная возбудительная сила", value: "600 кН" },
      { label: "Частота вибрации", value: "2800 об/мин" },
      { label: "Подходящий экскаватор", value: "36–50 т" },
    ],
    detailedSpecs: [
      { label: "Частота вибрации, об/мин", value: "2800" },
      { label: "Крутящий момент эксцентрика, Н·м", value: "70" },
      { label: "Номинальная возбудительная сила, кН", value: "600" },
      { label: "Давление гидросистемы, МПа", value: "32" },
      { label: "Расход гидросистемы, л/мин", value: "315" },
      { label: "Максимальная длина сваи, м", value: "6–18" },
      { label: "Масса вспомогательной стрелы, кг", value: "900" },
      { label: "Общий вес, кг", value: "3 200" },
      { label: "Подходящий экскаватор, т", value: "36–50" },
    ],
  },
  {
    name: "S650",
    specs: [
      { label: "Номинальная возбудительная сила", value: "650 кН" },
      { label: "Частота вибрации", value: "2700 об/мин" },
      { label: "Подходящий экскаватор", value: "42–50 т" },
    ],
    detailedSpecs: [
      { label: "Частота вибрации, об/мин", value: "2700" },
      { label: "Крутящий момент эксцентрика, Н·м", value: "83,5" },
      { label: "Номинальная возбудительная сила, кН", value: "650" },
      { label: "Давление гидросистемы, МПа", value: "32" },
      { label: "Расход гидросистемы, л/мин", value: "310" },
      { label: "Максимальная длина сваи, м", value: "6–18" },
      { label: "Масса вспомогательной стрелы, кг", value: "900" },
      { label: "Общий вес, кг", value: "3 200" },
      { label: "Подходящий экскаватор, т", value: "42–50" },
    ],
  },
  {
    name: "S800",
    specs: [
      { label: "Номинальная возбудительная сила", value: "800 кН" },
      { label: "Частота вибрации", value: "2400 об/мин" },
      { label: "Подходящий экскаватор", value: "50–70 т" },
    ],
    detailedSpecs: [
      { label: "Частота вибрации, об/мин", value: "2400" },
      { label: "Крутящий момент эксцентрика, Н·м", value: "126" },
      { label: "Номинальная возбудительная сила, кН", value: "800" },
      { label: "Давление гидросистемы, МПа", value: "32" },
      { label: "Расход гидросистемы, л/мин", value: "310" },
      { label: "Максимальная длина сваи, м", value: "6–22" },
      { label: "Масса вспомогательной стрелы, кг", value: "1 000" },
      { label: "Общий вес, кг", value: "3 600" },
      { label: "Подходящий экскаватор, т", value: "50–70" },
    ],
  },
  {
    name: "S1000",
    specs: [
      { label: "Номинальная возбудительная сила", value: "1050 кН" },
      { label: "Частота вибрации", value: "2300 об/мин" },
      { label: "Подходящий экскаватор", value: "70–90 т" },
    ],
    detailedSpecs: [
      { label: "Частота вибрации, об/мин", value: "2300" },
      { label: "Крутящий момент эксцентрика, Н·м", value: "175" },
      { label: "Номинальная возбудительная сила, кН", value: "1 050" },
      { label: "Давление гидросистемы, МПа", value: "32" },
      { label: "Расход гидросистемы, л/мин", value: "380" },
      { label: "Максимальная длина сваи, м", value: "6–30" },
      { label: "Масса вспомогательной стрелы, кг", value: "1 000" },
      { label: "Общий вес, кг", value: "3 300" },
      { label: "Подходящий экскаватор, т", value: "70–90" },
    ],
  },
  {
    name: "S1100",
    specs: [
      { label: "Номинальная возбудительная сила", value: "1100 кН" },
      { label: "Частота вибрации", value: "2300 об/мин" },
      { label: "Подходящий экскаватор", value: "70–90 т" },
    ],
    detailedSpecs: [
      { label: "Частота вибрации, об/мин", value: "2300" },
      { label: "Крутящий момент эксцентрика, Н·м", value: "180" },
      { label: "Номинальная возбудительная сила, кН", value: "1 100" },
      { label: "Давление гидросистемы, МПа", value: "32" },
      { label: "Расход гидросистемы, л/мин", value: "380" },
      { label: "Максимальная длина сваи, м", value: "6–36" },
      { label: "Масса вспомогательной стрелы, кг", value: "1 000" },
      { label: "Общий вес, кг", value: "4 200" },
      { label: "Подходящий экскаватор, т", value: "70–90" },
    ],
  },
];

const VibroSVariantsSection = () => {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              Модели вибропогружателей серии S
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {variants.map((variant) => (
                <Card
                  key={variant.name}
                  className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                        {variant.name}
                      </h3>
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                        нижний зажим
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                      {variant.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0"
                        >
                          <span className="text-base text-primary flex-1">{spec.label}</span>
                          <span className="text-base font-semibold text-primary text-right ml-4">
                            {spec.value}
                          </span>
                        </div>
                      ))}

                      {expandedVariant === variant.name && (
                        <>
                          {variant.detailedSpecs.map((spec, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0"
                            >
                              <span className="text-base text-primary">{spec.label}</span>
                              <span className="text-base font-semibold text-primary">{spec.value}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setExpandedVariant(expandedVariant === variant.name ? null : variant.name)
                        }
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
                            Подробнее
                          </>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibroSVariantsSection;
