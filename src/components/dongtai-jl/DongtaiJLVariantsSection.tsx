import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const variants = [
  {
    name: "JuLi JL-10",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "60" },
      { label: "Двухтактный каскад", value: "Цепь" },
      { label: "Макс. сила тяги / толкания, кН", value: "100 / 100" },
      { label: "Макс. крутящий момент вала, Н·м", value: "2 400" },
      { label: "Скорость вращения вала, об/мин", value: "0–120" },
      { label: "Скорость силовой головки, м/мин", value: "0–22" },
      { label: "Макс. диаметр расширителя, мм", value: "ø400" },
      { label: "Длина трубы, мм", value: "2 000" },
      { label: "Диаметр трубы, мм", value: "ø50" },
      { label: "Угол входа, °", value: "10–22" },
      { label: "Макс. поток бурового раствора, л/мин", value: "200" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "5" },
      { label: "Размеры (Д×Ш×В), мм", value: "5000 × 1800 × 2100" },
    ],
  },
  {
    name: "JuLi JL-12",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "75" },
      { label: "Двухтактный каскад", value: "Цепь" },
      { label: "Макс. сила тяги / толкания, кН", value: "120 / 120" },
      { label: "Макс. крутящий момент вала, Н·м", value: "4 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–120" },
      { label: "Скорость силовой головки, м/мин", value: "0–21" },
      { label: "Макс. диаметр расширителя, мм", value: "ø500" },
      { label: "Длина трубы, мм", value: "2 000" },
      { label: "Диаметр трубы, мм", value: "ø50" },
      { label: "Угол входа, °", value: "10–22" },
      { label: "Макс. поток бурового раствора, л/мин", value: "200" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "5.5" },
      { label: "Размеры (Д×Ш×В), мм", value: "5200 × 1800 × 2100" },
    ],
  },
  {
    name: "JuLi JL-15",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "75" },
      { label: "Двухтактный каскад", value: "Цепь" },
      { label: "Макс. сила тяги / толкания, кН", value: "150 / 150" },
      { label: "Макс. крутящий момент вала, Н·м", value: "5 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–110" },
      { label: "Скорость силовой головки, м/мин", value: "0–30" },
      { label: "Макс. диаметр расширителя, мм", value: "ø600" },
      { label: "Длина трубы, мм", value: "2 500" },
      { label: "Диаметр трубы, мм", value: "ø60" },
      { label: "Угол входа, °", value: "10–23" },
      { label: "Макс. поток бурового раствора, л/мин", value: "250" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "7" },
      { label: "Размеры (Д×Ш×В), мм", value: "5800 × 2170 × 2100" },
    ],
  },
  {
    name: "JuLi JL-18",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "110" },
      { label: "Двухтактный каскад", value: "Цепь" },
      { label: "Макс. сила тяги / толкания, кН", value: "180 / 180" },
      { label: "Макс. крутящий момент вала, Н·м", value: "6 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–110" },
      { label: "Скорость силовой головки, м/мин", value: "0–21" },
      { label: "Макс. диаметр расширителя, мм", value: "ø700" },
      { label: "Длина трубы, мм", value: "3 000" },
      { label: "Диаметр трубы, мм", value: "ø60" },
      { label: "Угол входа, °", value: "10–22" },
      { label: "Макс. поток бурового раствора, л/мин", value: "250" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "7.5" },
      { label: "Размеры (Д×Ш×В), мм", value: "5800 × 2100 × 2100" },
    ],
  },
  {
    name: "JuLi JL-25",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "125" },
      { label: "Двухтактный каскад", value: "Реечный механизм" },
      { label: "Макс. сила тяги / толкания, кН", value: "250 / 250" },
      { label: "Макс. крутящий момент вала, Н·м", value: "8 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–125" },
      { label: "Скорость силовой головки, м/мин", value: "0–20" },
      { label: "Макс. диаметр расширителя, мм", value: "ø800" },
      { label: "Длина трубы, мм", value: "3 000" },
      { label: "Диаметр трубы, мм", value: "ø73" },
      { label: "Угол входа, °", value: "10–22" },
      { label: "Макс. поток бурового раствора, л/мин", value: "250" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "8" },
      { label: "Размеры (Д×Ш×В), мм", value: "6100 × 2100 × 2100" },
    ],
  },
  {
    name: "JuLi JL-33",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "132" },
      { label: "Двухтактный каскад", value: "Реечный механизм" },
      { label: "Макс. сила тяги / толкания, кН", value: "330 / 330" },
      { label: "Макс. крутящий момент вала, Н·м", value: "12 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–125" },
      { label: "Скорость силовой головки, м/мин", value: "0–22" },
      { label: "Макс. диаметр расширителя, мм", value: "ø800" },
      { label: "Длина трубы, мм", value: "3 000" },
      { label: "Диаметр трубы, мм", value: "ø73" },
      { label: "Угол входа, °", value: "10–20" },
      { label: "Макс. поток бурового раствора, л/мин", value: "320" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "9.5" },
      { label: "Размеры (Д×Ш×В), мм", value: "6200 × 2180 × 2450" },
    ],
  },
  {
    name: "JuLi JL-36",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "160" },
      { label: "Двухтактный каскад", value: "Реечный механизм" },
      { label: "Макс. сила тяги / толкания, кН", value: "360 / 360" },
      { label: "Макс. крутящий момент вала, Н·м", value: "14 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–70–120" },
      { label: "Скорость силовой головки, м/мин", value: "0–28" },
      { label: "Макс. диаметр расширителя, мм", value: "ø900" },
      { label: "Длина трубы, мм", value: "3 000" },
      { label: "Диаметр трубы, мм", value: "ø76" },
      { label: "Угол входа, °", value: "10–20" },
      { label: "Макс. поток бурового раствора, л/мин", value: "320" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "10.5" },
      { label: "Размеры (Д×Ш×В), мм", value: "6200 × 2280 × 2500" },
    ],
  },
  {
    name: "JuLi JL-40",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "179" },
      { label: "Двухтактный каскад", value: "Реечный механизм" },
      { label: "Макс. сила тяги / толкания, кН", value: "400 / 400" },
      { label: "Макс. крутящий момент вала, Н·м", value: "16 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–65–100" },
      { label: "Скорость силовой головки, м/мин", value: "0–28" },
      { label: "Макс. диаметр расширителя, мм", value: "ø900" },
      { label: "Длина трубы, мм", value: "3 000" },
      { label: "Диаметр трубы, мм", value: "ø76" },
      { label: "Угол входа, °", value: "10–23" },
      { label: "Макс. поток бурового раствора, л/мин", value: "320" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "13" },
      { label: "Размеры (Д×Ш×В), мм", value: "6900 × 2250 × 2500" },
    ],
  },
  {
    name: "JuLi JL-45",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "179" },
      { label: "Двухтактный каскад", value: "Реечный механизм" },
      { label: "Макс. сила тяги / толкания, кН", value: "450 / 450" },
      { label: "Макс. крутящий момент вала, Н·м", value: "18 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–50–90" },
      { label: "Скорость силовой головки, м/мин", value: "0–38" },
      { label: "Макс. диаметр расширителя, мм", value: "ø980" },
      { label: "Длина трубы, мм", value: "4 500" },
      { label: "Диаметр трубы, мм", value: "ø89" },
      { label: "Угол входа, °", value: "10–22" },
      { label: "Макс. поток бурового раствора, л/мин", value: "500" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "15" },
      { label: "Размеры (Д×Ш×В), мм", value: "8000 × 2180 × 2500" },
    ],
  },
  {
    name: "JuLi JL-68/85",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "239" },
      { label: "Двухтактный каскад", value: "Реечный механизм" },
      { label: "Макс. сила тяги / толкания, кН", value: "850 / 680" },
      { label: "Макс. крутящий момент вала, Н·м", value: "26 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–50–94" },
      { label: "Скорость силовой головки, м/мин", value: "0–30" },
      { label: "Макс. диаметр расширителя, мм", value: "ø1200" },
      { label: "Длина трубы, мм", value: "Опционно" },
      { label: "Диаметр трубы, мм", value: "Опционно" },
      { label: "Угол входа, °", value: "10–18" },
      { label: "Макс. поток бурового раствора, л/мин", value: "500" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "26" },
      { label: "Размеры (Д×Ш×В), мм", value: "10500 × 2500 × 2950" },
    ],
  },
  {
    name: "JuLi JL-80/105",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "338" },
      { label: "Двухтактный каскад", value: "Реечный механизм" },
      { label: "Макс. сила тяги / толкания, кН", value: "1050 / 800" },
      { label: "Макс. крутящий момент вала, Н·м", value: "36 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–37–80" },
      { label: "Скорость силовой головки, м/мин", value: "0–32" },
      { label: "Макс. диаметр расширителя, мм", value: "ø1200" },
      { label: "Длина трубы, мм", value: "Опционно" },
      { label: "Диаметр трубы, мм", value: "Опционно" },
      { label: "Угол входа, °", value: "10–18" },
      { label: "Макс. поток бурового раствора, л/мин", value: "600" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "27" },
      { label: "Размеры (Д×Ш×В), мм", value: "11000 × 2500 × 3450" },
    ],
  },
  {
    name: "JuLi JL-150",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "392" },
      { label: "Двухтактный каскад", value: "Реечный механизм" },
      { label: "Макс. сила тяги / толкания, кН", value: "1500 / 1500" },
      { label: "Макс. крутящий момент вала, Н·м", value: "66 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–40–80" },
      { label: "Скорость силовой головки, м/мин", value: "0–23" },
      { label: "Макс. диаметр расширителя, мм", value: "ø1200" },
      { label: "Длина трубы, мм", value: "Опционно" },
      { label: "Диаметр трубы, мм", value: "Опционно" },
      { label: "Угол входа, °", value: "8–18" },
      { label: "Макс. поток бурового раствора, л/мин", value: "Внешняя" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "43" },
      { label: "Размеры (Д×Ш×В), мм", value: "17000 × 2660 × 3450" },
    ],
  },
  {
    name: "JuLi JL-240",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "264 × 2" },
      { label: "Двухтактный каскад", value: "Реечный механизм" },
      { label: "Макс. сила тяги / толкания, кН", value: "2400 / 2400" },
      { label: "Макс. крутящий момент вала, Н·м", value: "90 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–95" },
      { label: "Скорость силовой головки, м/мин", value: "0–35" },
      { label: "Макс. диаметр расширителя, мм", value: "ø1400" },
      { label: "Длина трубы, мм", value: "Опционно" },
      { label: "Диаметр трубы, мм", value: "Опционно" },
      { label: "Угол входа, °", value: "8–16" },
      { label: "Макс. поток бурового раствора, л/мин", value: "Внешняя" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "50" },
      { label: "Размеры (Д×Ш×В), мм", value: "18500 × 2500 × 3600" },
    ],
  },
  {
    name: "JuLi JL-300",
    specs: [
      { label: "Двигатель", value: "CUMMINS" },
      { label: "Номинальная мощность, кВт", value: "298 × 2" },
      { label: "Двухтактный каскад", value: "Реечный механизм" },
      { label: "Макс. сила тяги / толкания, кН", value: "3000 / 3000" },
      { label: "Макс. крутящий момент вала, Н·м", value: "120 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–30–60–90" },
      { label: "Скорость силовой головки, м/мин", value: "0–26" },
      { label: "Макс. диаметр расширителя, мм", value: "ø1600" },
      { label: "Длина трубы, мм", value: "Опционно" },
      { label: "Диаметр трубы, мм", value: "Опционно" },
      { label: "Угол входа, °", value: "8–18" },
      { label: "Макс. поток бурового раствора, л/мин", value: "Внешняя" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "47" },
      { label: "Размеры (Д×Ш×В), мм", value: "17000 × 3100 × 3450" },
    ],
  },
  {
    name: "JuLi JL-500",
    specs: [
      { label: "Двигатель", value: "VOLVO" },
      { label: "Номинальная мощность, кВт", value: "394 × 2" },
      { label: "Двухтактный каскад", value: "Реечный механизм" },
      { label: "Макс. сила тяги / толкания, кН", value: "5000 / 5000" },
      { label: "Макс. крутящий момент вала, Н·м", value: "160 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–90" },
      { label: "Скорость силовой головки, м/мин", value: "0–28" },
      { label: "Макс. диаметр расширителя, мм", value: "ø2000" },
      { label: "Длина трубы, мм", value: "Опционно" },
      { label: "Диаметр трубы, мм", value: "Опционно" },
      { label: "Угол входа, °", value: "8–16" },
      { label: "Макс. поток бурового раствора, л/мин", value: "Внешняя" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "55" },
      { label: "Размеры (Д×Ш×В), мм", value: "18500 × 2500 × 3600" },
    ],
  },
  {
    name: "JuLi JL-660",
    specs: [
      { label: "Двигатель", value: "VOLVO" },
      { label: "Номинальная мощность, кВт", value: "565 × 2" },
      { label: "Двухтактный каскад", value: "Реечный механизм" },
      { label: "Макс. сила тяги / толкания, кН", value: "6600 / 6600" },
      { label: "Макс. крутящий момент вала, Н·м", value: "160 000" },
      { label: "Скорость вращения вала, об/мин", value: "0–90" },
      { label: "Скорость силовой головки, м/мин", value: "0–28" },
      { label: "Макс. диаметр расширителя, мм", value: "ø2000" },
      { label: "Длина трубы, мм", value: "Опционно" },
      { label: "Диаметр трубы, мм", value: "Опционно" },
      { label: "Угол входа, °", value: "8–16" },
      { label: "Макс. поток бурового раствора, л/мин", value: "Внешняя" },
      { label: "Макс. давление раствора, МПа", value: "8" },
      { label: "Вес, т", value: "58" },
      { label: "Размеры (Д×Ш×В), мм", value: "18500 × 2500 × 3600" },
    ],
  },
];

const DongtaiJLVariantsSection = () => {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              Модели горизонтально-направленных буровых установок JuLi (серия JL)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {variants.map((variant, index) => {
                const shortSpecs = variant.specs.slice(0, 4);
                const detailedSpecs = variant.specs.slice(4);
                return (
                  <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                          {variant.name}
                        </h3>
                        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 text-xs">
                          Серия JL
                        </Badge>
                      </div>

                      <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                        {shortSpecs.map((spec, idx) => (
                          <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                            <span className="text-base text-primary flex-1">{spec.label}</span>
                            <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
                          </div>
                        ))}

                        {expandedVariant === variant.name && (
                          <>
                            {detailedSpecs.map((spec, idx) => (
                              <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                                <span className="text-base text-primary flex-1">{spec.label}</span>
                                <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
                              </div>
                            ))}
                          </>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 mt-auto pt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setExpandedVariant(expandedVariant === variant.name ? null : variant.name)}
                          className="w-full"
                        >
                          {expandedVariant === variant.name ? (
                            <>
                              <Icon name="ChevronUp" size={16} className="mr-2" />
                              Скрыть
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DongtaiJLVariantsSection;