import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { OptimizedImage } from "@/components/OptimizedImage";

const table1 = {
  headers: ["Модель", "Ед. изм.", "LH50", "LH65", "LH86"],
  rows: [
    { label: "Совместимость с моделями гидравлического сваезабивного молота", unit: "", values: ["≤HHP5", "≤HHP8", "≤HHP14"] },
    { label: "Совместимость с моделями дизельного молота", unit: "", values: ["≤HD36", "≤HD62", "≤HD80"] },
    { label: "Мощность двигателя", unit: "kW", values: ["133 @2100rpm", "186.5 @2200rpm", "240 @2100rpm"] },
    { label: "Высота мачты", unit: "m", values: ["21", "24.5/19.5", "21"] },
    { label: "Конфигурация лебёдки — Основная лебёдка", unit: "kN", values: ["70", "150 ×2sets", "70"], subrow: true },
    { label: "Конфигурация лебёдки — Вспомогательная лебёдка", unit: "kN", values: ["60", "40", "50"], subrow: true },
    { label: "Ширина ходовой части — Ширина ходовой части", unit: "mm", values: ["3200~4200", "3400~4400", "3450~4350"], subrow: true },
    { label: "Ширина ходовой части — Колея", unit: "mm", values: ["4283", "4330", "4575"], subrow: true },
    { label: "Ширина ходовой части — Ширина гусеничной ленты", unit: "mm", values: ["800", "900", "800"], subrow: true },
    { label: "Внешние габариты — Габариты всей установки", unit: "mm", values: ["7965×4200×22705", "8360×4400×26775", "8840×4350×21833"], subrow: true },
    { label: "Внешние габариты — Транспортные габариты", unit: "mm", values: ["16042×3200×3192", "19225×3400×3830", "15115×3450×3500"], subrow: true },
    { label: "Масса нетто (без учёта противовеса)", unit: "t", values: ["41", "55", "51"] },
    { label: "Противовес", unit: "t", values: ["/", "9", "11"] },
    { label: "Общий рабочий вес", unit: "t", values: ["≤50", "≤88", "≤90"] },
  ]
};

const table2 = {
  headers: ["Модель", "Ед. изм.", "LH90", "LH130", "LH145"],
  rows: [
    { label: "Совместимость с моделями гидравлического сваезабивного молота", unit: "", values: ["≤HHP14", "≤HHP20", "≤HHP25"] },
    { label: "Совместимость с моделями дизельного молота", unit: "", values: ["≤HD80", "≤HD138", "≤HD160"] },
    { label: "Мощность двигателя", unit: "kW", values: ["194kw @2200rpm", "298kw @2100rpm", "298kw @2100rpm"] },
    { label: "Высота мачты", unit: "m", values: ["21/24/27/30", "20/23/26/29", "20/23/26/29"] },
    { label: "Конфигурация лебёдки — Основная лебёдка × 2 комплекта", unit: "kN", values: ["80 ×2sets", "80 ×2sets", "80 ×2sets"], subrow: true },
    { label: "Конфигурация лебёдки — Вспомогательная лебёдка", unit: "kN", values: ["48", "48 ×2sets", "48 ×2sets"], subrow: true },
    { label: "Гусеничная ходовая часть — Ширина ходовой части", unit: "mm", values: ["3298/4098", "3610/4410", "3730/4610"], subrow: true },
    { label: "Гусеничная ходовая часть — Колея", unit: "mm", values: ["4486", "4950", "5068"], subrow: true },
    { label: "Гусеничная ходовая часть — Ширина гусеничной ленты", unit: "mm", values: ["762", "810", "880"], subrow: true },
    { label: "Внешние габариты — Габариты всей установки", unit: "mm", values: ["9600×5500×26500", "9580×5200×28950", "9770×5200×29482"], subrow: true },
    { label: "Внешние габариты — Транспортные габариты", unit: "mm", values: ["7600×3298×3600", "10840×3610×3268", "10840×3730×3290"], subrow: true },
    { label: "Масса нетто (без учёта противовеса)", unit: "t", values: ["52 @21m", "58 @20m", "63 @20m"] },
    { label: "Противовес", unit: "t", values: ["12", "15", "15"] },
    { label: "Общий рабочий вес", unit: "t", values: ["≤95", "≤130", "≤145"] },
  ]
};

const cards = [
  {
    name: "LH50",
    specs: [
      { label: "Гидравлический молот", value: "≤HHP5" },
      { label: "Дизельный молот", value: "≤HD36" },
      { label: "Мощность двигателя", value: "133 kW" },
    ],
  },
  {
    name: "LH65",
    specs: [
      { label: "Гидравлический молот", value: "≤HHP8" },
      { label: "Дизельный молот", value: "≤HD62" },
      { label: "Мощность двигателя", value: "186.5 kW" },
    ],
  },
  {
    name: "LH86",
    specs: [
      { label: "Гидравлический молот", value: "≤HHP14" },
      { label: "Дизельный молот", value: "≤HD80" },
      { label: "Мощность двигателя", value: "240 kW" },
    ],
  },
  {
    name: "LH90",
    specs: [
      { label: "Гидравлический молот", value: "≤HHP14" },
      { label: "Дизельный молот", value: "≤HD80" },
      { label: "Мощность двигателя", value: "194 kW" },
    ],
  },
  {
    name: "LH130",
    specs: [
      { label: "Гидравлический молот", value: "≤HHP20" },
      { label: "Дизельный молот", value: "≤HD138" },
      { label: "Мощность двигателя", value: "298 kW" },
    ],
  },
  {
    name: "LH145",
    specs: [
      { label: "Гидравлический молот", value: "≤HHP25" },
      { label: "Дизельный молот", value: "≤HD160" },
      { label: "Мощность двигателя", value: "298 kW" },
    ],
  },
];

const SpecTable = ({ table }: { table: typeof table1 }) => (
  <div className="overflow-x-auto rounded-xl shadow mb-8">
    <table className="w-full text-sm border-collapse min-w-[640px]">
      <thead>
        <tr className="bg-primary text-white">
          {table.headers.map((h, i) => (
            <th key={i} className={`py-3 px-4 font-semibold text-left ${i === 0 ? "min-w-[220px]" : "min-w-[100px]"}`}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, ri) => {
          const isGroupHeader = row.label.includes(" — ");
          const displayLabel = isGroupHeader ? row.label.split(" — ")[1] : row.label;
          const isParent = !isGroupHeader && table.rows.some((r, j) => j > ri && r.label.startsWith(row.label + " — "));
          return (
            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-[#e8f4f8]"}>
              <td className={`py-2 px-4 text-primary ${isGroupHeader ? "pl-8 text-primary/80" : "font-medium"}`}>
                {displayLabel}
              </td>
              <td className="py-2 px-4 text-primary/70">{row.unit}</td>
              {row.values.map((v, vi) => (
                <td key={vi} className="py-2 px-4 text-primary font-medium">{v}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

const StarkeVariantsSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 text-center">
            Технические параметры сваебойных установок серии LH
          </h2>
          <p className="text-center text-primary/70 text-base mb-8">Копровая установка на гусеничном ходу</p>

          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-lg px-4 py-2 mb-4 text-sm font-semibold">
              Модели LH50 · LH65 · LH86
            </div>
          </div>
          <SpecTable table={table1} />

          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-lg px-4 py-2 mb-4 text-sm font-semibold">
              Модели LH90 · LH130 · LH145
            </div>
          </div>
          <SpecTable table={table2} />

          <h3 className="text-xl font-heading font-bold text-primary mb-6 text-center">Карточки моделей</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">STARKE {card.name}</h3>
                  </div>
                  <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                    {card.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                        <span className="text-base text-primary flex-1">{spec.label}</span>
                        <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
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

export default StarkeVariantsSection;
