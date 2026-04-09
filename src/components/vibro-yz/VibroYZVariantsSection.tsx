import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const models = [
  {
    name: "YZ-90D",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "26" },
      { label: "Максимальная частота (об/мин)", value: "1800" },
      { label: "Центробежная сила (кН)", value: "920" },
      { label: "Макс. усилие при извлечении (кН)", value: "400" },
      { label: "Максимальная амплитуда (мм)", value: "32" },
      { label: "Максимальный поток масла (л/мин)", value: "350" },
      { label: "Габариты (мм)", value: "1800×500×1760" },
      { label: "Вес (кг)", value: "2800" },
      { label: "Зажим для трубы", value: "YZJ-80DC×2" },
      { label: "Зажим для шпунта", value: "YZJ-120" },
      { label: "Гидравлическая станция", value: "400P" },
    ],
  },
  {
    name: "YZ-110D",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "32" },
      { label: "Максимальная частота (об/мин)", value: "1800" },
      { label: "Центробежная сила (кН)", value: "1140" },
      { label: "Макс. усилие при извлечении (кН)", value: "600" },
      { label: "Максимальная амплитуда (мм)", value: "33" },
      { label: "Максимальный поток масла (л/мин)", value: "480" },
      { label: "Габариты (мм)", value: "1950×600×2100" },
      { label: "Вес (кг)", value: "4000" },
      { label: "Зажим для трубы", value: "YZJ-80DC×2" },
      { label: "Зажим для шпунта", value: "YZJ-160" },
      { label: "Гидравлическая станция", value: "500P" },
    ],
  },
  {
    name: "YZ-180B",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "51" },
      { label: "Максимальная частота (об/мин)", value: "1800" },
      { label: "Центробежная сила (кН)", value: "1810" },
      { label: "Макс. усилие при извлечении (кН)", value: "600" },
      { label: "Максимальная амплитуда (мм)", value: "32" },
      { label: "Максимальный поток масла (л/мин)", value: "680" },
      { label: "Габариты (мм)", value: "2845×530×1880" },
      { label: "Вес (кг)", value: "5900" },
      { label: "Зажим для трубы", value: "YZJ-120DC×2" },
      { label: "Зажим для шпунта", value: "YZJ-200" },
      { label: "Гидравлическая станция", value: "600P" },
    ],
  },
  {
    name: "YZ-230F",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "33,5" },
      { label: "Максимальная частота (об/мин)", value: "2500" },
      { label: "Центробежная сила (кН)", value: "2300" },
      { label: "Макс. усилие при извлечении (кН)", value: "800" },
      { label: "Максимальная амплитуда (мм)", value: "20" },
      { label: "Максимальный поток масла (л/мин)", value: "800" },
      { label: "Габариты (мм)", value: "2600×785×2410" },
      { label: "Вес (кг)", value: "6700" },
      { label: "Зажим для трубы", value: "YZJ-160DC×2" },
      { label: "Зажим для шпунта", value: "YZJ-320" },
      { label: "Гидравлическая станция", value: "800P" },
    ],
  },
  {
    name: "YZ-230B",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "76" },
      { label: "Максимальная частота (об/мин)", value: "1700" },
      { label: "Центробежная сила (кН)", value: "2410" },
      { label: "Макс. усилие при извлечении (кН)", value: "800" },
      { label: "Максимальная амплитуда (мм)", value: "32" },
      { label: "Максимальный поток масла (л/мин)", value: "880" },
      { label: "Габариты (мм)", value: "2400×530×2380" },
      { label: "Вес (кг)", value: "8180" },
      { label: "Зажим для трубы", value: "YZJ-160DC×2" },
      { label: "Зажим для шпунта", value: "YZJ-320" },
      { label: "Гидравлическая станция", value: "800P" },
    ],
  },
  {
    name: "YZ-280L",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "92" },
      { label: "Максимальная частота (об/мин)", value: "1700" },
      { label: "Центробежная сила (кН)", value: "2920" },
      { label: "Макс. усилие при извлечении (кН)", value: "800" },
      { label: "Максимальная амплитуда (мм)", value: "30" },
      { label: "Максимальный поток масла (л/мин)", value: "890" },
      { label: "Габариты (мм)", value: "3855×705×2035" },
      { label: "Вес (кг)", value: "9600" },
      { label: "Зажим для трубы", value: "YZJ-160DC×2" },
      { label: "Зажим для шпунта", value: "YZJ-320" },
      { label: "Гидравлическая станция", value: "800P" },
    ],
  },
  {
    name: "YZ-300",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "137" },
      { label: "Максимальная частота (об/мин)", value: "1410" },
      { label: "Центробежная сила (кН)", value: "3000" },
      { label: "Макс. усилие при извлечении (кН)", value: "2000" },
      { label: "Максимальная амплитуда (мм)", value: "37" },
      { label: "Максимальный поток масла (л/мин)", value: "1015" },
      { label: "Габариты (мм)", value: "2650×1150×4030" },
      { label: "Вес (кг)", value: "16300" },
      { label: "Зажим для трубы", value: "YZJ-160DC×2" },
      { label: "Зажим для шпунта", value: "YZJ-320" },
      { label: "Гидравлическая станция", value: "1200P" },
    ],
  },
  {
    name: "YZ-300F",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "52" },
      { label: "Максимальная частота (об/мин)", value: "2300" },
      { label: "Центробежная сила (кН)", value: "3020" },
      { label: "Макс. усилие при извлечении (кН)", value: "800" },
      { label: "Максимальная амплитуда (мм)", value: "16" },
      { label: "Максимальный поток масла (л/мин)", value: "1200" },
      { label: "Габариты (мм)", value: "3855×705×2035" },
      { label: "Вес (кг)", value: "9600" },
      { label: "Зажим для трубы", value: "YZJ-200DC×2" },
      { label: "Зажим для шпунта", value: "YZJ-320" },
      { label: "Гидравлическая станция", value: "1200P" },
    ],
  },
  {
    name: "YZ-300L",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "133" },
      { label: "Максимальная частота (об/мин)", value: "1400" },
      { label: "Центробежная сила (кН)", value: "2860" },
      { label: "Макс. усилие при извлечении (кН)", value: "1600" },
      { label: "Максимальная амплитуда (мм)", value: "30" },
      { label: "Максимальный поток масла (л/мин)", value: "1040" },
      { label: "Габариты (мм)", value: "3460×850×2480" },
      { label: "Вес (кг)", value: "14800" },
      { label: "Зажим для трубы", value: "YZJ-160DC×2" },
      { label: "Зажим для шпунта", value: "YZJ-320" },
      { label: "Гидравлическая станция", value: "1200P" },
    ],
  },
  {
    name: "YZ-360B",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "102" },
      { label: "Максимальная частота (об/мин)", value: "1800" },
      { label: "Центробежная сила (кН)", value: "3630" },
      { label: "Макс. усилие при извлечении (кН)", value: "1000" },
      { label: "Максимальная амплитуда (мм)", value: "29" },
      { label: "Максимальный поток масла (л/мин)", value: "1200" },
      { label: "Габариты (мм)", value: "3150×2430×650" },
      { label: "Вес (кг)", value: "10300" },
      { label: "Зажим для трубы", value: "YZJ-200DC×2" },
      { label: "Зажим для шпунта", value: "YZJ-320" },
      { label: "Гидравлическая станция", value: "1200P" },
    ],
  },
  {
    name: "YZ-400",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "226" },
      { label: "Максимальная частота (об/мин)", value: "1300" },
      { label: "Центробежная сила (кН)", value: "4185" },
      { label: "Макс. усилие при извлечении (кН)", value: "2500" },
      { label: "Максимальная амплитуда (мм)", value: "40" },
      { label: "Максимальный поток масла (л/мин)", value: "1300" },
      { label: "Габариты (мм)", value: "2700×160×3980" },
      { label: "Вес (кг)", value: "18500" },
      { label: "Зажим для трубы", value: "YZJ-200DC×2" },
      { label: "Зажим для шпунта", value: "YZJ-320" },
      { label: "Гидравлическая станция", value: "1200P" },
    ],
  },
  {
    name: "YZ-400L",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "200" },
      { label: "Максимальная частота (об/мин)", value: "1400" },
      { label: "Центробежная сила (кН)", value: "4300" },
      { label: "Макс. усилие при извлечении (кН)", value: "2500" },
      { label: "Максимальная амплитуда (мм)", value: "37" },
      { label: "Максимальный поток масла (л/мин)", value: "1220" },
      { label: "Габариты (мм)", value: "4600×940×2650" },
      { label: "Вес (кг)", value: "21000" },
      { label: "Зажим для трубы", value: "YZJ-200DC×2" },
      { label: "Гидравлическая станция", value: "1200P" },
    ],
  },
  {
    name: "YZ-500B",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "250" },
      { label: "Максимальная частота (об/мин)", value: "1400" },
      { label: "Центробежная сила (кН)", value: "5270" },
      { label: "Макс. усилие при извлечении (кН)", value: "3200" },
      { label: "Максимальная амплитуда (мм)", value: "33" },
      { label: "Максимальный поток масла (л/мин)", value: "1600" },
      { label: "Габариты (мм)", value: "3590×1280×4180" },
      { label: "Вес (кг)", value: "24800" },
      { label: "Зажим для трубы", value: "YZJ-160DC×4" },
      { label: "Гидравлическая станция", value: "1600P" },
    ],
  },
  {
    name: "YZ-600",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "300" },
      { label: "Максимальная частота (об/мин)", value: "1400" },
      { label: "Центробежная сила (кН)", value: "6450" },
      { label: "Макс. усилие при извлечении (кН)", value: "3500/5000" },
      { label: "Максимальная амплитуда (мм)", value: "30" },
      { label: "Максимальный поток масла (л/мин)", value: "2400" },
      { label: "Габариты (мм)", value: "3400×1300×4200" },
      { label: "Вес (кг)", value: "35000" },
      { label: "Зажим для трубы", value: "YZJ-200DC×4" },
      { label: "Гидравлическая станция", value: "2600P" },
    ],
  },
  {
    name: "YZ-800B",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "550" },
      { label: "Максимальная частота (об/мин)", value: "1350" },
      { label: "Центробежная сила (кН)", value: "11000" },
      { label: "Макс. усилие при извлечении (кН)", value: "6000" },
      { label: "Максимальная амплитуда (мм)", value: "35" },
      { label: "Максимальный поток масла (л/мин)", value: "3000" },
      { label: "Габариты (мм)", value: "5400×2000×4510" },
      { label: "Вес (кг)", value: "66300" },
      { label: "Зажим для трубы", value: "YZJ-320DC×4" },
      { label: "Гидравлическая станция", value: "3500P" },
    ],
  },
  {
    name: "YZ-300X2",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "274" },
      { label: "Максимальная частота (об/мин)", value: "1410" },
      { label: "Центробежная сила (кН)", value: "6000" },
      { label: "Макс. усилие при извлечении (кН)", value: "4000" },
      { label: "Максимальная амплитуда (мм)", value: "37" },
      { label: "Максимальный поток масла (л/мин)", value: "2030" },
      { label: "Габариты (мм)", value: "2650×2670×4270" },
      { label: "Вес (кг)", value: "32000" },
      { label: "Зажим для трубы", value: "YZJ-200DC×4" },
      { label: "Гидравлическая станция", value: "1200PX2" },
    ],
  },
  {
    name: "YZ-400LX2",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "400" },
      { label: "Максимальная частота (об/мин)", value: "1400" },
      { label: "Центробежная сила (кН)", value: "8600" },
      { label: "Макс. усилие при извлечении (кН)", value: "4800" },
      { label: "Максимальная амплитуда (мм)", value: "37" },
      { label: "Максимальный поток масла (л/мин)", value: "2440" },
      { label: "Габариты (мм)", value: "4600×3300×4380" },
      { label: "Вес (кг)", value: "63060" },
      { label: "Зажим для трубы", value: "YZJ-200DC×4" },
      { label: "Гидравлическая станция", value: "1200PX2" },
    ],
  },
  {
    name: "YZ-400X2",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "452" },
      { label: "Максимальная частота (об/мин)", value: "1300" },
      { label: "Центробежная сила (кН)", value: "8370" },
      { label: "Макс. усилие при извлечении (кН)", value: "5000" },
      { label: "Максимальная амплитуда (мм)", value: "40" },
      { label: "Максимальный поток масла (л/мин)", value: "2600" },
      { label: "Габариты (мм)", value: "3460×3100×4470" },
      { label: "Вес (кг)", value: "59060" },
      { label: "Зажим для трубы", value: "YZJ-200DC×4" },
      { label: "Гидравлическая станция", value: "1200PX2" },
    ],
  },
  {
    name: "YZ-500BX2",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "500" },
      { label: "Максимальная частота (об/мин)", value: "1400" },
      { label: "Центробежная сила (кН)", value: "10740" },
      { label: "Макс. усилие при извлечении (кН)", value: "6400" },
      { label: "Максимальная амплитуда (мм)", value: "33" },
      { label: "Максимальный поток масла (л/мин)", value: "3200" },
      { label: "Габариты (мм)", value: "3820×3280×4060" },
      { label: "Вес (кг)", value: "6950" },
      { label: "Зажим для трубы", value: "YZJ-200DC×4" },
      { label: "Гидравлическая станция", value: "1600PX2" },
    ],
  },
  {
    name: "YZ-800BX2",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "1100" },
      { label: "Максимальная частота (об/мин)", value: "1350" },
      { label: "Центробежная сила (кН)", value: "22000" },
      { label: "Макс. усилие при извлечении (кН)", value: "12000" },
      { label: "Максимальная амплитуда (мм)", value: "35" },
      { label: "Максимальный поток масла (л/мин)", value: "6000" },
      { label: "Габариты (мм)", value: "7100×5400×7140" },
      { label: "Вес (кг)", value: "268800" },
      { label: "Зажим для трубы", value: "YZJ-320DC×8" },
      { label: "Гидравлическая станция", value: "3500PX2" },
    ],
  },
  {
    name: "YZ-400LX4",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "800" },
      { label: "Максимальная частота (об/мин)", value: "1400" },
      { label: "Центробежная сила (кН)", value: "17200" },
      { label: "Макс. усилие при извлечении (кН)", value: "10000" },
      { label: "Максимальная амплитуда (мм)", value: "11" },
      { label: "Максимальный поток масла (л/мин)", value: "4880" },
      { label: "Габариты (мм)", value: "9500×9500×760" },
      { label: "Вес (кг)", value: "218980" },
      { label: "Зажим для трубы", value: "YZJ-200DC×8" },
      { label: "Гидравлическая станция", value: "1200PX4" },
    ],
  },
  {
    name: "YZ-400LX12",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "2400" },
      { label: "Максимальная частота (об/мин)", value: "1400" },
      { label: "Центробежная сила (кН)", value: "51600" },
      { label: "Макс. усилие при извлечении (кН)", value: "28800" },
      { label: "Максимальная амплитуда (мм)", value: "10,8" },
      { label: "Максимальный поток масла (л/мин)", value: "14640" },
      { label: "Габариты (мм)", value: "24100×24100×7510" },
      { label: "Вес (кг)", value: "728000" },
      { label: "Зажим для трубы", value: "YZJ-160DC×36" },
      { label: "Гидравлическая станция", value: "1200PX12" },
    ],
  },
  {
    name: "YZ-800BX4",
    specs: [
      { label: "Эксцентриковый момент (кг/м)", value: "2200" },
      { label: "Максимальная частота (об/мин)", value: "1350" },
      { label: "Центробежная сила (кН)", value: "44000" },
      { label: "Макс. усилие при извлечении (кН)", value: "24000" },
      { label: "Максимальная амплитуда (мм)", value: "35" },
      { label: "Максимальный поток масла (л/мин)", value: "13500" },
      { label: "Габариты (мм)", value: "8600×8600×10050" },
      { label: "Вес (кг)", value: "470000" },
      { label: "Зажим для трубы", value: "YZJ-320DC×16" },
      { label: "Гидравлическая станция", value: "3500PX4" },
    ],
  },
];

const VibroYZVariantsSection = () => {
  const [expandedModel, setExpandedModel] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 text-center">
            Модели гидравлических крановых вибропогружателей (серия YZ)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {models.map((model) => (
              <Card
                key={model.name}
                className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-heading font-bold text-primary">
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

export default VibroYZVariantsSection;