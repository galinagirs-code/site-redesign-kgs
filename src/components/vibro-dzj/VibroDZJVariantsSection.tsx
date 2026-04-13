import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const models = [
  {
    name: "DZ-45",
    specs: [
      { label: "Мощность двигателя", value: "45 кВт" },
      { label: "Эксцентриковый момент", value: "0–29 кг·м" },
      { label: "Центробежная сила", value: "380 кН" },
      { label: "Частота", value: "1100 об/мин" },
      { label: "Макс. амплитуда", value: "8,5 мм" },
      { label: "Макс. натяжение троса", value: "180 кН" },
      { label: "Габариты", value: "1650×1200×2300 мм" },
      { label: "Вес без зажима", value: "3300 кг" },
      { label: "Сечение кабеля", value: "25 мм²" },
      { label: "Зажим", value: "одинарный" },
      { label: "Диапазон зажима", value: "/" },
      { label: "Мощность генератора", value: "150 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "25 т" },
    ],
  },
  {
    name: "DZJ-60",
    specs: [
      { label: "Мощность двигателя", value: "60 кВт" },
      { label: "Эксцентриковый момент", value: "0–49 кг·м" },
      { label: "Центробежная сила", value: "0–492 кН" },
      { label: "Частота", value: "960 об/мин" },
      { label: "Макс. амплитуда", value: "12 мм" },
      { label: "Макс. натяжение троса", value: "215 кН" },
      { label: "Габариты", value: "1750×1250×2400 мм" },
      { label: "Вес без зажима", value: "4500 кг" },
      { label: "Сечение кабеля", value: "35 мм²" },
      { label: "Зажим", value: "одинарный" },
      { label: "Диапазон зажима", value: "/" },
      { label: "Мощность генератора", value: "200 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "35 т" },
    ],
  },
  {
    name: "DZJ-90",
    specs: [
      { label: "Мощность двигателя", value: "90 кВт" },
      { label: "Эксцентриковый момент", value: "0–58 кг·м" },
      { label: "Центробежная сила", value: "0–579 кН" },
      { label: "Частота", value: "0–960 об/мин" },
      { label: "Макс. амплитуда", value: "11,5 мм" },
      { label: "Макс. натяжение троса", value: "254 кН" },
      { label: "Габариты", value: "1850×1300×2500 мм" },
      { label: "Вес без зажима", value: "5700 кг" },
      { label: "Сечение кабеля", value: "50 мм²" },
      { label: "Зажим", value: "одинарный/двойной" },
      { label: "Диапазон зажима", value: "530–1500 мм" },
      { label: "Мощность генератора", value: "250 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "50 т" },
    ],
  },
  {
    name: "DZJ-90B",
    specs: [
      { label: "Мощность двигателя", value: "90 кВт" },
      { label: "Эксцентриковый момент", value: "0–47 кг·м" },
      { label: "Центробежная сила", value: "0–580 кН" },
      { label: "Частота", value: "0–1060 об/мин" },
      { label: "Макс. амплитуда", value: "11 мм" },
      { label: "Макс. натяжение троса", value: "300 кН" },
      { label: "Габариты", value: "1600×1200×2200 мм" },
      { label: "Вес без зажима", value: "5200 кг" },
      { label: "Сечение кабеля", value: "50 мм²" },
      { label: "Зажим", value: "одинарный/двойной" },
      { label: "Диапазон зажима", value: "530–1500 мм" },
      { label: "Мощность генератора", value: "250 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "50 т" },
    ],
  },
  {
    name: "DZJ-120",
    specs: [
      { label: "Мощность двигателя", value: "120 кВт" },
      { label: "Эксцентриковый момент", value: "0–76 кг·м" },
      { label: "Центробежная сила", value: "0–823 кН" },
      { label: "Частота", value: "0–1000 об/мин" },
      { label: "Макс. амплитуда", value: "12 мм" },
      { label: "Макс. натяжение троса", value: "392 кН" },
      { label: "Габариты", value: "2100×1400×2600 мм" },
      { label: "Вес без зажима", value: "7000 кг" },
      { label: "Сечение кабеля", value: "70 мм²" },
      { label: "Зажим", value: "одинарный/двойной" },
      { label: "Диапазон зажима", value: "600–2000 мм" },
      { label: "Мощность генератора", value: "300 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "70 т" },
    ],
  },
  {
    name: "DZJ-135",
    specs: [
      { label: "Мощность двигателя", value: "135 кВт" },
      { label: "Эксцентриковый момент", value: "0–82 кг·м" },
      { label: "Центробежная сила", value: "0–883 кН" },
      { label: "Частота", value: "0–1000 об/мин" },
      { label: "Макс. амплитуда", value: "13 мм" },
      { label: "Макс. натяжение троса", value: "420 кН" },
      { label: "Габариты", value: "2100×1450×3000 мм" },
      { label: "Вес без зажима", value: "7200 кг" },
      { label: "Сечение кабеля", value: "70 мм²" },
      { label: "Зажим", value: "одинарный/двойной" },
      { label: "Диапазон зажима", value: "600–2000 мм" },
      { label: "Мощность генератора", value: "300 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "70 т" },
    ],
  },
  {
    name: "DZJ-150",
    specs: [
      { label: "Мощность двигателя", value: "150 кВт" },
      { label: "Эксцентриковый момент", value: "0–114 кг·м" },
      { label: "Центробежная сила", value: "0–1150 кН" },
      { label: "Частота", value: "0–960 об/мин" },
      { label: "Макс. амплитуда", value: "15 мм" },
      { label: "Макс. натяжение троса", value: "450 кН" },
      { label: "Габариты", value: "2200×1500×3300 мм" },
      { label: "Вес без зажима", value: "8700 кг" },
      { label: "Сечение кабеля", value: "70 мм²" },
      { label: "Зажим", value: "одинарный/двойной" },
      { label: "Диапазон зажима", value: "600–2500 мм" },
      { label: "Мощность генератора", value: "350 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "80 т" },
    ],
  },
  {
    name: "DZJ-180",
    specs: [
      { label: "Мощность двигателя", value: "180 кВт" },
      { label: "Эксцентриковый момент", value: "0–126 кг·м" },
      { label: "Центробежная сила", value: "0–1390 кН" },
      { label: "Частота", value: "0–1000 об/мин" },
      { label: "Макс. амплитуда", value: "12,7 мм" },
      { label: "Макс. натяжение троса", value: "530 кН" },
      { label: "Габариты", value: "2250×1550×3300 мм" },
      { label: "Вес без зажима", value: "11000 кг" },
      { label: "Сечение кабеля", value: "90 мм²" },
      { label: "Зажим", value: "одинарный/двойной" },
      { label: "Диапазон зажима", value: "600–2500 мм" },
      { label: "Мощность генератора", value: "400 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "100 т" },
    ],
  },
  {
    name: "DZJ-200",
    specs: [
      { label: "Мощность двигателя", value: "200 кВт" },
      { label: "Эксцентриковый момент", value: "0–163 кг·м" },
      { label: "Центробежная сила", value: "0–1600 кН" },
      { label: "Частота", value: "0–960 об/мин" },
      { label: "Макс. амплитуда", value: "0–16 мм" },
      { label: "Макс. натяжение троса", value: "588 кН" },
      { label: "Габариты", value: "2200×1700×3500 мм" },
      { label: "Вес без зажима", value: "11500 кг" },
      { label: "Сечение кабеля", value: "120 мм²" },
      { label: "Зажим", value: "одинарный/двойной" },
      { label: "Диапазон зажима", value: "800–3000 мм" },
      { label: "Мощность генератора", value: "450 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "120 т" },
    ],
  },
  {
    name: "DZJ-240",
    specs: [
      { label: "Мощность двигателя", value: "240 кВт" },
      { label: "Эксцентриковый момент", value: "0–184 кг·м" },
      { label: "Центробежная сила", value: "0–1822 кН" },
      { label: "Частота", value: "0–960 об/мин" },
      { label: "Макс. амплитуда", value: "0–14 мм" },
      { label: "Макс. натяжение троса", value: "638 кН" },
      { label: "Габариты", value: "2000×1900×3500 мм" },
      { label: "Вес без зажима", value: "14500 кг" },
      { label: "Сечение кабеля", value: "120 мм²" },
      { label: "Зажим", value: "одинарный/двойной" },
      { label: "Диапазон зажима", value: "800–3000 мм" },
      { label: "Мощность генератора", value: "600 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "130 т" },
    ],
  },
  {
    name: "DZJ-300",
    specs: [
      { label: "Мощность двигателя", value: "300 кВт" },
      { label: "Эксцентриковый момент", value: "0–220 кг·м" },
      { label: "Центробежная сила", value: "0–2185 кН" },
      { label: "Частота", value: "0–960 об/мин" },
      { label: "Макс. амплитуда", value: "0–16,5 мм" },
      { label: "Макс. натяжение троса", value: "686 кН" },
      { label: "Габариты", value: "2200×2200×3500 мм" },
      { label: "Вес без зажима", value: "15000 кг" },
      { label: "Сечение кабеля", value: "120 мм²" },
      { label: "Зажим", value: "одинарный/двойной" },
      { label: "Диапазон зажима", value: "800–3000 мм" },
      { label: "Мощность генератора", value: "600 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "130 т" },
    ],
  },
  {
    name: "DZJ-400",
    specs: [
      { label: "Мощность двигателя", value: "400 кВт" },
      { label: "Эксцентриковый момент", value: "0–324 кг·м" },
      { label: "Центробежная сила", value: "0–3250 кН" },
      { label: "Частота", value: "0–960 об/мин" },
      { label: "Макс. амплитуда", value: "0–16 мм" },
      { label: "Макс. натяжение троса", value: "850 кН" },
      { label: "Габариты", value: "2300×1750×3900 мм" },
      { label: "Вес без зажима", value: "22000 кг" },
      { label: "Сечение кабеля", value: "120 мм²" },
      { label: "Зажим", value: "одинарный/двойной" },
      { label: "Диапазон зажима", value: "800–3000 мм" },
      { label: "Мощность генератора", value: "800 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "200 т" },
    ],
  },
  {
    name: "DZJ-480",
    specs: [
      { label: "Мощность двигателя", value: "480 кВт" },
      { label: "Эксцентриковый момент", value: "0–367 кг·м" },
      { label: "Центробежная сила", value: "0–3644 кН" },
      { label: "Частота", value: "0–960 об/мин" },
      { label: "Макс. амплитуда", value: "0–14 мм" },
      { label: "Макс. натяжение троса", value: "1176 кН" },
      { label: "Габариты", value: "2700×2700×3500 мм" },
      { label: "Вес без зажима", value: "29000 кг" },
      { label: "Сечение кабеля", value: "120 мм²" },
      { label: "Зажим", value: "четверной" },
      { label: "Диапазон зажима", value: "/" },
      { label: "Мощность генератора", value: "800 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "130 т" },
    ],
  },
  {
    name: "DZJ-600",
    specs: [
      { label: "Мощность двигателя", value: "600 кВт" },
      { label: "Эксцентриковый момент", value: "0–441 кг·м" },
      { label: "Центробежная сила", value: "0–4370 кН" },
      { label: "Частота", value: "0–960 об/мин" },
      { label: "Макс. амплитуда", value: "0–16,5 мм" },
      { label: "Макс. натяжение троса", value: "1352 кН" },
      { label: "Габариты", value: "2700×3000×3500 мм" },
      { label: "Вес без зажима", value: "30000 кг" },
      { label: "Сечение кабеля", value: "150 мм²" },
      { label: "Зажим", value: "четверной" },
      { label: "Диапазон зажима", value: "/" },
      { label: "Мощность генератора", value: "800 кВт" },
      { label: "Мин. грузоподъёмность крана", value: "130 т" },
    ],
  },
];

const VibroDZJVariantsSection = () => {
  const [expandedModel, setExpandedModel] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 text-center">
            Модели электрических крановых вибропогружателей<br />(серия DZJ)
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
                      электрический
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

export default VibroDZJVariantsSection;