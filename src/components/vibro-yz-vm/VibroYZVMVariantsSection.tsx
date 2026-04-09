import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const models = [
  {
    name: "YZ-100VM",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "0–15" },
      { label: "Максимальная частота (об/мин)", value: "2500" },
      { label: "Центробежная сила (кН)", value: "1030" },
      { label: "Макс. усилие при извлечении (кН)", value: "300" },
      { label: "Максимальная амплитуда (мм)", value: "13" },
      { label: "Максимальный поток масла (л/мин)", value: "495" },
      { label: "Габариты (мм)", value: "3460×3100×4470" },
      { label: "Вес без зажима (кг)", value: "4800" },
      { label: "Зажим для шпунта", value: "YZJ-120" },
      { label: "Зажим для трубы", value: "YZJ-80DC×2" },
      { label: "Гидравлическая станция", value: "500P" },
    ],
  },
  {
    name: "YZ-130VM",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "0–23" },
      { label: "Максимальная частота (об/мин)", value: "2300" },
      { label: "Центробежная сила (кН)", value: "1340" },
      { label: "Макс. усилие при извлечении (кН)", value: "400" },
      { label: "Максимальная амплитуда (мм)", value: "15" },
      { label: "Максимальный поток масла (л/мин)", value: "620" },
      { label: "Габариты (мм)", value: "3460×3100×4470" },
      { label: "Вес без зажима (кг)", value: "5320" },
      { label: "Зажим для шпунта", value: "YZJ-160" },
      { label: "Зажим для трубы", value: "YZJ-80DC×2" },
      { label: "Гидравлическая станция", value: "600P" },
    ],
  },
  {
    name: "YZ-180VM",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "0–30" },
      { label: "Максимальная частота (об/мин)", value: "2300" },
      { label: "Центробежная сила (кН)", value: "1750" },
      { label: "Макс. усилие при извлечении (кН)", value: "600" },
      { label: "Максимальная амплитуда (мм)", value: "15" },
      { label: "Максимальный поток масла (л/мин)", value: "805" },
      { label: "Габариты (мм)", value: "3460×3100×4470" },
      { label: "Вес без зажима (кг)", value: "5980" },
      { label: "Зажим для шпунта", value: "YZJ-160" },
      { label: "Зажим для трубы", value: "YZJ-120DC×2" },
      { label: "Гидравлическая станция", value: "800P" },
    ],
  },
  {
    name: "YZ-250VM",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "0–42" },
      { label: "Максимальная частота (об/мин)", value: "2300" },
      { label: "Центробежная сила (кН)", value: "2430" },
      { label: "Макс. усилие при извлечении (кН)", value: "800" },
      { label: "Максимальная амплитуда (мм)", value: "19" },
      { label: "Максимальный поток масла (л/мин)", value: "1060" },
      { label: "Габариты (мм)", value: "3460×3100×4470" },
      { label: "Вес без зажима (кг)", value: "7600" },
      { label: "Зажим для шпунта", value: "YZJ-200" },
      { label: "Зажим для трубы", value: "YZJ-160DC×2" },
      { label: "Гидравлическая станция", value: "1000P" },
    ],
  },
  {
    name: "YZ-300VM",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "0–52" },
      { label: "Максимальная частота (об/мин)", value: "2300" },
      { label: "Центробежная сила (кН)", value: "3020" },
      { label: "Макс. усилие при извлечении (кН)", value: "800" },
      { label: "Максимальная амплитуда (мм)", value: "18" },
      { label: "Максимальный поток масла (л/мин)", value: "1210" },
      { label: "Габариты (мм)", value: "3460×3100×4470" },
      { label: "Вес без зажима (кг)", value: "10800" },
      { label: "Зажим для шпунта", value: "YZJ-320" },
      { label: "Зажим для трубы", value: "YZJ-200DC×2" },
      { label: "Гидравлическая станция", value: "1200P" },
    ],
  },
  {
    name: "YZ-360VM",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "0–62" },
      { label: "Максимальная частота (об/мин)", value: "2300" },
      { label: "Центробежная сила (кН)", value: "3600" },
      { label: "Макс. усилие при извлечении (кН)", value: "1000" },
      { label: "Максимальная амплитуда (мм)", value: "18,5" },
      { label: "Максимальный поток масла (л/мин)", value: "1598" },
      { label: "Габариты (мм)", value: "3460×3100×4470" },
      { label: "Вес без зажима (кг)", value: "11500" },
      { label: "Зажим для шпунта", value: "YZJ-320" },
      { label: "Зажим для трубы", value: "YZJ-200DC×2" },
      { label: "Гидравлическая станция", value: "1600P" },
    ],
  },
  {
    name: "YZ-400VM",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "0–90" },
      { label: "Максимальная частота (об/мин)", value: "2100" },
      { label: "Центробежная сила (кН)", value: "4350" },
      { label: "Макс. усилие при извлечении (кН)", value: "1000" },
      { label: "Максимальная амплитуда (мм)", value: "21,5" },
      { label: "Максимальный поток масла (л/мин)", value: "2050" },
      { label: "Габариты (мм)", value: "3460×3100×4470" },
      { label: "Вес без зажима (кг)", value: "12200" },
      { label: "Зажим для шпунта", value: "YZJ-320" },
      { label: "Зажим для трубы", value: "YZJ-320DC×2" },
      { label: "Гидравлическая станция", value: "2000P" },
    ],
  },
];

const VibroYZVMVariantsSection = () => {
  const [expandedModel, setExpandedModel] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 text-center">
            Модели гидравлических крановых вибропогружателей<br />(серия YZ-VM)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {models.map((model) => (
              <Card
                key={model.name}
                className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                      {model.name}
                    </h3>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      крановый
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                    {model.specs.slice(0, 3).map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                        <span className="text-sm text-primary flex-1">{spec.label}</span>
                        <span className="text-sm font-semibold text-primary text-right ml-4">{spec.value}</span>
                      </div>
                    ))}
                    {expandedModel === model.name && (
                      <>
                        {model.specs.slice(3).map((spec, idx) => (
                          <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
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
                      onClick={() => setExpandedModel(expandedModel === model.name ? null : model.name)}
                      className="w-full"
                    >
                      {expandedModel === model.name ? (
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
    </section>
  );
};

export default VibroYZVMVariantsSection;