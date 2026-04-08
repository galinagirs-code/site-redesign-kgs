import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const variants = [
  {
    name: "CS350",
    specs: [
      { label: "Центробежная сила", value: "353 кН" },
      { label: "Частота вибрации", value: "2800 об/мин" },
      { label: "Базовый экскаватор", value: "18–25 т" },
    ],
    detailedSpecs: [
      { label: "Частота вибрации, об/мин", value: "2800" },
      { label: "Крутящий момент, Н·м", value: "40" },
      { label: "Центробежная сила, кН", value: "353" },
      { label: "Масса, кг", value: "2600" },
      { label: "Рабочее давление, бар", value: "280" },
      { label: "Расход масла, л/мин", value: "220" },
      { label: "Базовый экскаватор, т", value: "18–25" },
    ],
  },
  {
    name: "CS500",
    specs: [
      { label: "Центробежная сила", value: "441 кН" },
      { label: "Частота вибрации", value: "2800 об/мин" },
      { label: "Базовый экскаватор", value: "35–45 т" },
    ],
    detailedSpecs: [
      { label: "Частота вибрации, об/мин", value: "2800" },
      { label: "Крутящий момент, Н·м", value: "50" },
      { label: "Центробежная сила, кН", value: "441" },
      { label: "Масса, кг", value: "3100" },
      { label: "Рабочее давление, бар", value: "320" },
      { label: "Расход масла, л/мин", value: "250" },
      { label: "Базовый экскаватор, т", value: "35–45" },
    ],
  },
];

const VibroCSVariantsSection = () => {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              Модели гидравлических экскаваторных вибропогружателей с боковым зажимом (серия CS)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
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
                        боковой зажим
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                      {variant.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0"
                        >
                          <span className="text-sm text-primary flex-1">{spec.label}</span>
                          <span className="text-sm font-semibold text-primary text-right ml-4">
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
                              <span className="text-sm text-primary flex-1">{spec.label}</span>
                              <span className="text-sm font-semibold text-primary text-right ml-4">{spec.value}</span>
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

export default VibroCSVariantsSection;
