import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const variants = [
  {
    name: "ZYS 180В",
    totalMass: "180 т",
    maxForce: "1800 кН",
    pileSize: "до 300×300 мм",
    specs: [
      { label: "Усилие вдавливания (III пер.)", value: "1800 кН" },
      { label: "Ход вдавливания", value: "1,6 м" },
      { label: "Общая масса", value: "180 т" },
      { label: "Поддерживаемые сваи", value: "Ø300 / 300×300 мм" },
    ],
    detailedSpecs: [
      { group: "Габариты и масса", rows: [
        { label: "Рабочие габариты (Д×Ш×В)", value: "10 × 5,4 × 5,6 м" },
        { label: "Транспортная масса (мин.)", value: "30 т" },
        { label: "Транспортные габариты", value: "10 × 2 × 3,2 м" },
        { label: "Общая масса установки", value: "180 т" },
        { label: "Масса основной машины", value: "75 т" },
        { label: "Противовес", value: "110 т" },
      ]},
      { group: "Ходовая часть", rows: [
        { label: "Длинная база — давление на грунт", value: "95 кН/м²" },
        { label: "Длинная база — габариты", value: "9 × 1 м" },
        { label: "Длинная база — ход", value: "1,6 м" },
        { label: "Короткая база — давление на грунт", value: "104 кН/м²" },
        { label: "Короткая база — габариты", value: "3,2 × 2,4 м" },
        { label: "Короткая база — ход", value: "0,4 м" },
      ]},
      { group: "Параметры вдавливания", rows: [
        { label: "Усилие I передача", value: "282,1 кН" },
        { label: "Усилие II передача", value: "900 кН" },
        { label: "Усилие III передача", value: "1800 кН" },
        { label: "Ход вдавливания", value: "1,6 м" },
        { label: "Скорость I передача", value: "4,29 м/мин" },
        { label: "Скорость II передача", value: "2,15 м/мин" },
        { label: "Расстояние от центра до края (бок. свая)", value: "0,9 м" },
      ]},
      { group: "Гидравлика и питание", rows: [
        { label: "Мощность двигателя", value: "60 + 15 = 75 кВт" },
        { label: "Расход гидросистемы", value: "323 л/мин" },
        { label: "Макс. рабочее давление", value: "24 МПа" },
      ]},
      { group: "Кран", rows: [
        { label: "Грузоподъёмность", value: "8 т" },
        { label: "Макс. длина поднимаемой сваи", value: "9 м" },
      ]},
      { group: "Поддерживаемые сваи", rows: [
        { label: "Круглые сваи", value: "до Ø300 мм" },
        { label: "Квадратные сваи", value: "до 300×300 мм" },
      ]},
      { group: "Гидроцилиндры", rows: [
        { label: "Осн. цилиндр вдавливания", value: "Φ200/140–1600, 2 шт." },
        { label: "Цилиндры зажима", value: "Φ220/180–35, 4 шт." },
        { label: "Цилиндры опор", value: "Φ200/160–1100, 4 шт." },
        { label: "Цилиндры длинной базы", value: "Φ110/80–1600, 2 шт." },
        { label: "Цилиндры короткой базы", value: "Φ110/80–400, 2 шт." },
        { label: "Цилиндры стрелы крана", value: "Φ160/110–1650, 2 шт." },
      ]},
    ],
  },
  {
    name: "ZYS 240В",
    totalMass: "240 т",
    maxForce: "2400 кН",
    pileSize: "до 400×400 мм",
    specs: [
      { label: "Усилие вдавливания (III пер.)", value: "2400 кН" },
      { label: "Ход вдавливания", value: "2,0 м" },
      { label: "Общая масса", value: "240 т" },
      { label: "Поддерживаемые сваи", value: "Ø400 / 400×400 мм" },
    ],
    detailedSpecs: [
      { group: "Габариты и масса", rows: [
        { label: "Рабочие габариты (Д×Ш×В)", value: "11,8 × 5,9 × 6 м" },
        { label: "Транспортная масса (мин.)", value: "32 т" },
        { label: "Транспортные габариты", value: "11,8 × 3,1 × 2,9 м" },
        { label: "Общая масса установки", value: "240 т" },
        { label: "Масса основной машины", value: "90 т" },
        { label: "С боковой рамой", value: "95 т" },
      ]},
      { group: "Ходовая часть", rows: [
        { label: "Длинная база — давление на грунт", value: "102 кН/м²" },
        { label: "Длинная база — габариты", value: "11,8 × 1 м" },
        { label: "Длинная база — ход", value: "1,6 м" },
        { label: "Короткая база — давление на грунт", value: "102 кН/м²" },
        { label: "Короткая база — габариты", value: "2,8 × 4,2 м" },
        { label: "Короткая база — ход", value: "0,4 м" },
      ]},
      { group: "Параметры вдавливания", rows: [
        { label: "Усилие I передача", value: "564,2 кН" },
        { label: "Усилие II передача", value: "1170 кН" },
        { label: "Усилие III передача", value: "2400 кН" },
        { label: "Ход вдавливания", value: "2,0 м" },
        { label: "Скорость I передача", value: "3,57 м/мин" },
        { label: "Скорость II передача", value: "1,8 м/мин" },
        { label: "Расстояние до края (бок. свая)", value: "1,1 м" },
      ]},
      { group: "Гидравлика и питание", rows: [
        { label: "Мощность двигателя", value: "60 + 22 = 82 кВт" },
        { label: "Расход гидросистемы", value: "439 л/мин" },
        { label: "Макс. рабочее давление", value: "25 МПа" },
      ]},
      { group: "Кран", rows: [
        { label: "Грузоподъёмность", value: "8 т" },
        { label: "Макс. длина сваи", value: "11 м" },
      ]},
      { group: "Поддерживаемые сваи", rows: [
        { label: "Круглые сваи", value: "до Ø400 мм" },
        { label: "Квадратные сваи", value: "до 400×400 мм" },
      ]},
      { group: "Гидроцилиндры", rows: [
        { label: "Осн. цилиндр вдавливания", value: "Φ200/140–1600, 2 шт." },
        { label: "Цилиндры зажима", value: "Φ220/180–35, 4 шт." },
        { label: "Цилиндры опор", value: "Φ220/160–1100, 4 шт." },
        { label: "Цилиндры длинной базы", value: "Φ120/80–1600, 2 шт." },
        { label: "Цилиндры короткой базы", value: "Φ120/80–400, 2 шт." },
        { label: "Цилиндры стрелы крана", value: "Φ160/110–1650, 2 шт." },
      ]},
      { group: "Механизм крайних свай", rows: [
        { label: "Макс. усилие", value: "1200 кН" },
      ]},
    ],
  },
  {
    name: "ZYS 360B",
    totalMass: "360 т",
    maxForce: "3200 кН",
    pileSize: "до 500×500 мм",
    specs: [
      { label: "Усилие вдавливания (III пер.)", value: "3200 кН" },
      { label: "Ход вдавливания", value: "1,8 м" },
      { label: "Общая масса", value: "360 т" },
      { label: "Поддерживаемые сваи", value: "Ø500 / 500×500 мм" },
    ],
    detailedSpecs: [
      { group: "Габариты и масса", rows: [
        { label: "Рабочие габариты (Д×Ш×В)", value: "12,8 × 6,9 × 6,3 м" },
        { label: "Транспортная масса (мин.)", value: "38 т" },
        { label: "Транспортные габариты", value: "12,8 × 3,3 × 3,1 м" },
        { label: "Общая масса установки", value: "360 т" },
        { label: "Масса основной машины", value: "125 т" },
        { label: "С боковой рамой", value: "130 т" },
      ]},
      { group: "Ходовая часть", rows: [
        { label: "Длинная база — давление на грунт", value: "109 кН/м²" },
        { label: "Длинная база — габариты", value: "12 × 1,3 м" },
        { label: "Длинная база — ход", value: "3,0 м" },
        { label: "Короткая база — давление на грунт", value: "111 кН/м²" },
        { label: "Короткая база — габариты", value: "3 × 4,8 м" },
        { label: "Короткая база — ход", value: "0,65 м" },
      ]},
      { group: "Параметры вдавливания", rows: [
        { label: "Усилие I передача", value: "1000 кН" },
        { label: "Усилие II передача", value: "1500 кН" },
        { label: "Усилие III передача", value: "3200 кН" },
        { label: "Ход вдавливания", value: "1,8 м" },
        { label: "Скорость I передача", value: "3,7 м/мин" },
        { label: "Скорость II передача", value: "1,85 м/мин" },
        { label: "Расстояние до края (бок. свая)", value: "1,3 м" },
      ]},
      { group: "Гидравлика и питание", rows: [
        { label: "Мощность двигателя", value: "104 + 30 = 134 кВт" },
        { label: "Расход гидросистемы", value: "580 л/мин" },
        { label: "Макс. рабочее давление", value: "25 МПа" },
      ]},
      { group: "Кран", rows: [
        { label: "Грузоподъёмность", value: "12 т" },
        { label: "Макс. длина сваи", value: "13 м" },
      ]},
      { group: "Поддерживаемые сваи", rows: [
        { label: "Круглые сваи", value: "до Ø500 мм" },
        { label: "Квадратные сваи", value: "до 500×500 мм" },
      ]},
      { group: "Гидроцилиндры", rows: [
        { label: "Осн. цилиндры вдавливания", value: "Φ220/160–1800, 2 шт." },
        { label: "Доп. цилиндры вдавливания", value: "Φ200/125–1800, 2 шт." },
        { label: "Цилиндры зажима", value: "Φ280/220–35, 8 шт." },
        { label: "Цилиндры опор", value: "Φ250/160–1100, 4 шт." },
        { label: "Цилиндры длинной базы", value: "Φ160/100–3000, 2 шт." },
        { label: "Цилиндры короткой базы", value: "Φ160/100–650, 2 шт." },
        { label: "Цилиндры стрелы крана", value: "Φ160/110–1710, 2 шт." },
      ]},
      { group: "Механизм крайних свай", rows: [
        { label: "Макс. усилие", value: "1600 кН" },
      ]},
    ],
  },
];

const JuliZYSVariantsSection = () => {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Модели сваевдавливающих установок серии ZYS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      {variant.totalMass}
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
                        {variant.detailedSpecs.map((group, gIdx) => (
                          <div key={gIdx} className="mt-3">
                            <p className="text-xs font-bold text-accent uppercase tracking-wide mb-2">{group.group}</p>
                            {group.rows.map((row, rIdx) => (
                              <div
                                key={rIdx}
                                className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0"
                              >
                                <span className="text-sm text-primary flex-1">{row.label}</span>
                                <span className="text-sm font-semibold text-primary text-right ml-4">{row.value}</span>
                              </div>
                            ))}
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
                          Все характеристики
                        </>
                      )}
                    </Button>
                    <Button size="sm" className="w-full btn-gradient text-white" asChild>
                      <a href="#consultation">Запросить цену</a>
                    </Button>
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

export default JuliZYSVariantsSection;