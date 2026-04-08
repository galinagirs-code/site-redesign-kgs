import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const specsP = [
  {
    name: "MINI",
    excavator: "1,5–4 т",
    specs: [
      { label: "Длина (мм)", value: "300–450" },
      { label: "Высота (мм)", value: "250–280" },
      { label: "Ширина (мм)", value: "170–230" },
      { label: "Вес (кг)", value: "30–50" },
      { label: "Класс экскаватора (т)", value: "1,5–4" },
    ],
  },
  {
    name: "JXK-02",
    excavator: "4–6 т",
    specs: [
      { label: "Длина (мм)", value: "550–595" },
      { label: "Высота (мм)", value: "312" },
      { label: "Ширина (мм)", value: "270–300" },
      { label: "Вес (кг)", value: "50–80" },
      { label: "Класс экскаватора (т)", value: "4–6" },
    ],
  },
  {
    name: "JXK-04",
    excavator: "6–10 т",
    specs: [
      { label: "Длина (мм)", value: "590–630" },
      { label: "Высота (мм)", value: "320" },
      { label: "Ширина (мм)", value: "300–355" },
      { label: "Вес (кг)", value: "70–100" },
      { label: "Класс экскаватора (т)", value: "6–10" },
    ],
  },
  {
    name: "JXK-06",
    excavator: "10–16 т",
    specs: [
      { label: "Длина (мм)", value: "795–825" },
      { label: "Высота (мм)", value: "410" },
      { label: "Ширина (мм)", value: "365–420" },
      { label: "Вес (кг)", value: "220–290" },
      { label: "Класс экскаватора (т)", value: "10–16" },
    ],
  },
  {
    name: "JXK-08",
    excavator: "16–24 т",
    specs: [
      { label: "Длина (мм)", value: "888–980" },
      { label: "Высота (мм)", value: "520" },
      { label: "Ширина (мм)", value: "460–500" },
      { label: "Вес (кг)", value: "370–420" },
      { label: "Класс экскаватора (т)", value: "16–24" },
    ],
  },
  {
    name: "JXK-10",
    excavator: "24–32 т",
    specs: [
      { label: "Длина (мм)", value: "980–1060" },
      { label: "Высота (мм)", value: "608" },
      { label: "Ширина (мм)", value: "510–590" },
      { label: "Вес (кг)", value: "500–600" },
      { label: "Класс экскаватора (т)", value: "24–32" },
    ],
  },
];

const specsH = [
  {
    name: "JXK-06",
    excavator: "10–16 т",
    specs: [
      { label: "Длина (мм)", value: "795–855" },
      { label: "Высота (мм)", value: "430" },
      { label: "Ширина (мм)", value: "365–420" },
      { label: "Вес (кг)", value: "220–290" },
      { label: "Класс экскаватора (т)", value: "10–16" },
    ],
  },
  {
    name: "JXK-08",
    excavator: "16–24 т",
    specs: [
      { label: "Длина (мм)", value: "950–1060" },
      { label: "Высота (мм)", value: "480–550" },
      { label: "Ширина (мм)", value: "460–500" },
      { label: "Вес (кг)", value: "370–420" },
      { label: "Класс экскаватора (т)", value: "16–24" },
    ],
  },
  {
    name: "JXK-10",
    excavator: "24–32 т",
    specs: [
      { label: "Длина (мм)", value: "990–1200" },
      { label: "Высота (мм)", value: "560" },
      { label: "Ширина (мм)", value: "510–590" },
      { label: "Вес (кг)", value: "500–600" },
      { label: "Класс экскаватора (т)", value: "24–32" },
    ],
  },
  {
    name: "JXK-17",
    excavator: "34–42 т",
    specs: [
      { label: "Длина (мм)", value: "1050–1300" },
      { label: "Высота (мм)", value: "560–600" },
      { label: "Ширина (мм)", value: "580–650" },
      { label: "Вес (кг)", value: "650–900" },
      { label: "Класс экскаватора (т)", value: "34–42" },
    ],
  },
  {
    name: "JXK-20",
    excavator: "45–52 т",
    specs: [
      { label: "Длина (мм)", value: "1100–1300" },
      { label: "Высота (мм)", value: "620–650" },
      { label: "Ширина (мм)", value: "580–680" },
      { label: "Вес (кг)", value: "700–1000" },
      { label: "Класс экскаватора (т)", value: "45–52" },
    ],
  },
];

const KvikKaplerVariantsSection = () => {
  const [activeType, setActiveType] = useState<"P" | "H">("P");
  const variants = activeType === "P" ? specsP : specsH;

  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Модели квик-каплера
          </h2>

          <div className="flex justify-center gap-3 mb-8">
            {(["P", "H"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-8 py-2.5 rounded-lg font-semibold text-sm transition-all border ${
                  activeType === type
                    ? "bg-primary text-white border-primary shadow"
                    : "bg-white text-primary border-gray-200 hover:border-primary/40"
                }`}
              >
                {type}-тип
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {variants.map((variant, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                      {variant.name}
                    </h3>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      {variant.excavator}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                    {variant.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                        <span className="text-sm text-primary flex-1">{spec.label}</span>
                        <span className="text-sm font-semibold text-primary text-right ml-4">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#consultation" className="block">
                    <Button className="btn-gradient text-white w-full" size="sm">
                      <Icon name="MessageSquare" size={16} className="mr-2" />
                      Получить консультацию
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {[
                { label: "Тип", value: "P / H" },
                { label: "Материал", value: "Высокопрочная сталь" },
                { label: "Рабочее давление", value: "40–200 бар" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                  <div className="text-base font-semibold text-primary">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KvikKaplerVariantsSection;