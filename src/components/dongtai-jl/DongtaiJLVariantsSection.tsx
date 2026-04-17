import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

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
  const [activeVariant, setActiveVariant] = useState(0);

  return (
    <section id="variants" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2 text-center">
            Модельный ряд JuLi серии JL
          </h2>
          <p className="text-center text-primary/70 mb-8 text-base">
            Выберите модель для просмотра технических характеристик
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {variants.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveVariant(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  activeVariant === i
                    ? "bg-accent text-white border-accent shadow-md"
                    : "bg-white text-primary border-primary/20 hover:border-accent hover:text-accent"
                }`}
              >
                {v.name}
              </button>
            ))}
          </div>

          <Card className="border-none shadow-xl">
            <CardContent className="p-0">
              <div className="bg-primary rounded-t-xl px-6 py-4 flex items-center justify-between">
                <h3 className="text-xl font-heading font-bold text-white">
                  Технические характеристики {variants[activeVariant].name}
                </h3>
                <Badge className="bg-accent/20 text-accent border-accent/50 text-sm">
                  Серия JL
                </Badge>
              </div>
              <div className="divide-y divide-gray-100">
                {variants[activeVariant].specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-6 py-3 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <span className="text-sm md:text-base text-primary/70 font-medium">
                      {spec.label}
                    </span>
                    <span className="text-sm md:text-base text-primary font-semibold text-right ml-4">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DongtaiJLVariantsSection;
