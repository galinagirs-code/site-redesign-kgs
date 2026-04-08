import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

type ModelRow = { label: string; values: (string | number)[] };

const modelsLight = ["D8", "D16", "D19", "D25", "D30", "D36", "D46", "D62", "D72", "D80", "D100"];
const modelsHeavy = ["D128", "D138", "D160", "D180", "D220", "D250", "D260"];

const summaryLight: ModelRow[] = [
  { label: "Масса поршня (т)", values: [0.8, 1.6, 1.8, 2.5, 3.0, 3.6, 4.6, 6.2, 7.2, 8.0, 10] },
  { label: "Энергия удара (кДж)", values: ["до 24", "до 53", "до 58", "до 79", "до 95", "до 114", "до 145", "до 219", "до 238", "до 267", "до 334"] },
  { label: "Частота (уд/мин)", values: ["≥38", "≥36", "≥37", "≥37", "≥37", "≥37", "≥37", "≥36", "≥36", "≥36", "≥36"] },
  { label: "Масса молота (кг)", values: [1950, 3250, 3550, 5330, 5830, 7800, 8800, 11870, 12670, 16350, 19820] },
  { label: "Давление удара (кН)", values: [505, 686, 686, 1304, 1304, 1695, 1695, 1800, 1800, 2600, 2600] },
  { label: "Расход топлива (л/ч)", values: [4, 5.5, 6.6, 8, 10, 11.5, 16, 20, 20, 25, 30] },
];

const summaryHeavy: ModelRow[] = [
  { label: "Масса поршня (т)", values: [12.8, 13.8, 16, 18, 22, 25, 26] },
  { label: "Энергия удара (кДж)", values: ["~400–430", "~450", "~500–530", "384–610", "~700+", "~830", "550–866"] },
  { label: "Частота (уд/мин)", values: ["~36–45", "~36–45", "~36–45", "36–46", "~36–45", "~36–45", "36–45"] },
  { label: "Масса молота (кг)", values: ["~26000", "~28000", "~30000+", "~34000", "~40000+", "~45000+", "~53000"] },
  { label: "Расход топлива (л/ч)", values: ["~35–40", "~40", "~46", "~54", "~70", "~80", "~85"] },
];

const detailGroups: { title: string; rows: ModelRow[] }[] = [
  {
    title: "Основные параметры",
    rows: [
      { label: "Масса поршня, кг", values: [800, 1600, 1800, 2500, 3000, 3600, 4600, 6200, 7200, 8000, 10000] },
      { label: "Энергия удара, Дж", values: ["≤23940", "≤53460", "≤57585", "≤78700", "≤94765", "≤113720", "≤145305", "≤218960", "≤238000", "≤266830", "≤333540"] },
      { label: "Частота ударов, 1/мин", values: ["≥38", "≥36", "≥37", "≥37", "≥37", "≥37", "≥37", "≥36", "≥36", "≥36", "≥36"] },
      { label: "Сила удара, кН", values: [505, 686, 686, 1304, 1304, 1695, 1695, 1800, 1800, 2600, 2600] },
    ],
  },
  {
    title: "Масса сваи и канат",
    rows: [
      { label: "Рекомендуемая масса сваи, кг", values: [2500, 5000, 6000, 7000, 8000, 10000, 15000, 25000, 26000, 30000, 40000] },
      { label: "Диаметр каната, мм", values: [20, 20, 20, 22, 22, 28, 28, 28, 28, 30, 30] },
    ],
  },
  {
    title: "Расход топлива и масла",
    rows: [
      { label: "Расход топлива, л/ч", values: [4, 5.5, 6.6, 8, 10, 11.5, 16, 20, 20, 25, 30] },
      { label: "Расход масла, л/ч", values: [1, 1, 1, 1, 1, 2, 2, 2.3, 2.3, 2.9, 2.9] },
      { label: "Топливный бак, л", values: [20, 32, 32, 67, 67, 89, 89, 98, 98, 155, 155] },
      { label: "Масляный бак, л", values: [6, 9, 9, 19, 19, 17, 17, 31.5, 31.5, 32, 32] },
    ],
  },
  {
    title: "Масса компонентов",
    rows: [
      { label: "Масса молота, кг", values: [1950, 3250, 3550, 5330, 5830, 7800, 8800, 11870, 12670, 16350, 19820] },
      { label: "Подъёмное устройство, кг", values: [100, 100, 100, 180, 180, 400, 400, 400, 400, 750, 750] },
      { label: "Транспортная скоба, кг", values: [11, 11, 11, 20, 20, 31.5, 31.5, 72, 72, 135, 135] },
      { label: "Наголовник, кг", values: [15, 15, 15, 23, 23, 25, 25, 34, 34, 220, 220] },
      { label: "Инструмент, кг", values: [75, 75, 75, 100, 100, 125, 125, 125, 125, 125, 125] },
    ],
  },
  {
    title: "Габаритные размеры",
    rows: [
      { label: "Длина молота, мм", values: [4954, 4984, 4984, 5514, 5514, 5539, 5539, 6146, 6146, 6454, 6612] },
      { label: "Диаметр ударного блока, мм", values: [350, 440, 440, 560, 560, 660, 660, 710, 710, 820, 820] },
      { label: "Ширина молота, мм", values: [410, 485, 485, 640, 640, 785, 785, 800, 800, 890, 890] },
      { label: "Ширина направляющих, мм", values: [320, 320, 320, 540, 540, 640, 640, 800, 800, 800, 800] },
      { label: "Глубина, мм", values: [590, 665, 665, 715, 715, 848, 848, 970, 970, 1110, 1110] },
    ],
  },
];

const detailGroupsHeavy: { title: string; rows: ModelRow[] }[] = [
  {
    title: "Основные параметры",
    rows: [
      { label: "Масса поршня, кг", values: [12800, 13800, 16000, 18000, 22000, 25000, 26000] },
      { label: "Энергия удара, Дж", values: ["≤426500", "≤459800", "≤533000", "≤590000", "≤733000", "≤833000", "≤866000"] },
      { label: "Частота ударов, 1/мин", values: ["≥36", "≥36", "≥36", "≥36", "≥36", "≥36", "≥36"] },
      { label: "Сила удара, кН", values: [3600, 3900, 4500, 5000, 6200, 7000, 7000] },
      { label: "Диаметр каната, мм", values: ["Ø32", "Ø32", "Ø37", "Ø37", "Ø42", "Ø42", "Ø42"] },
    ],
  },
  {
    title: "Расход топлива и масла",
    rows: [
      { label: "Расход топлива, л/ч", values: [36.6, 40.5, 46, 54, 70, 80, 85] },
      { label: "Расход масла, л/ч", values: [2.9, 2.9, 4.5, 4.5, 6.5, 6.5, 6.5] },
      { label: "Топливный бак, л", values: [200, 200, 240, 240, 360, 360, 360] },
      { label: "Масляный бак, л", values: [28.6, 28.6, 40.3, 40.3, 100, 100, 100] },
    ],
  },
  {
    title: "Масса компонентов",
    rows: [
      { label: "Масса молота, кг", values: [26300, 27300, 35000, 37500, 45400, 49000, 51500] },
      { label: "Подъёмное устройство, кг", values: [770, 770, 1700, 1700, 2400, 2400, 2400] },
      { label: "Транспортная скоба, кг", values: [950, 950, 950, 950, 950, 950, 950] },
      { label: "Инструмент, кг", values: [125, 125, 125, 125, 125, 125, 125] },
    ],
  },
  {
    title: "Габаритные размеры",
    rows: [
      { label: "Длина молота, мм", values: [7600, 7600, 8020, 8150, 7900, 8020, 8020] },
      { label: "Диаметр ударного блока, мм", values: [960, 960, 1070, 1070, 1200, 1200, 1200] },
      { label: "Общая ширина, мм", values: [1200, 1200, 1400, 1400, 1480, 1480, 1480] },
      { label: "Ширина молота, мм", values: [1040, 1040, 1160, 1160, 1300, 1300, 1300] },
      { label: "Ширина направляющих, мм", values: [910, 910, 1020, 1020, 1100, 1100, 1100] },
      { label: "Расстояние центр–край, мм", values: [625, 625, 700, 700, 820, 820, 820] },
      { label: "Центр молота – центр направляющих, мм", values: [420, 420, 465, 465, 500, 500, 500] },
      { label: "Мин. высота установки, мм", values: [795, 795, "—", "—", "—", "—", "—"] },
      { label: "Шаг направляющих", values: ["600×102", "600×102", "—", "—", "—", "—", "—"] },
    ],
  },
];

function SpecTable({ models, rows }: { models: string[]; rows: ModelRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="text-left py-3 px-4 font-heading font-semibold min-w-[200px] border-r border-white/10">
              Параметр
            </th>
            {models.map((m) => (
              <th key={m} className="text-center py-3 px-3 font-heading font-semibold text-accent whitespace-nowrap border-r border-white/10 last:border-0">
                {m}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="py-2.5 px-4 text-primary border-r border-gray-200 font-medium">{row.label}</td>
              {row.values.map((val, j) => (
                <td key={j} className="py-2.5 px-3 text-center font-semibold text-primary border-r border-gray-100 last:border-0 whitespace-nowrap">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const SemwDVariantsSection = () => {
  const [activeTab, setActiveTab] = useState<"light" | "heavy">("light");
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Технические характеристики серии D
          </h2>

          {/* Class info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { cls: "Лёгкие", range: "D8–D30", use: "Малоэтажное строительство", color: "bg-blue-50 border-blue-200" },
              { cls: "Средние", range: "D36–D62", use: "Универсальные", color: "bg-green-50 border-green-200" },
              { cls: "Тяжёлые", range: "D80–D180", use: "Мосты, порты", color: "bg-orange-50 border-orange-200" },
              { cls: "Сверхтяжёлые", range: "D220+", use: "Специальные проекты", color: "bg-red-50 border-red-200" },
            ].map((item) => (
              <Card key={item.cls} className={`border-2 ${item.color}`}>
                <CardContent className="p-4 text-center">
                  <div className="font-heading font-bold text-primary text-base mb-1">{item.cls}</div>
                  <div className="font-heading font-bold text-accent text-lg mb-1">{item.range}</div>
                  <div className="text-primary text-sm">{item.use}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("light")}
              className={`px-6 py-2.5 rounded-lg font-heading font-semibold text-sm transition-all ${activeTab === "light" ? "bg-primary text-white shadow-md" : "bg-gray-100 text-primary hover:bg-gray-200"}`}
            >
              Серия D8–D100
            </button>
            <button
              onClick={() => setActiveTab("heavy")}
              className={`px-6 py-2.5 rounded-lg font-heading font-semibold text-sm transition-all ${activeTab === "heavy" ? "bg-primary text-white shadow-md" : "bg-gray-100 text-primary hover:bg-gray-200"}`}
            >
              Серия D128–D260
            </button>
          </div>

          {/* Summary table */}
          {activeTab === "light" && (
            <>
              <Card className="border-2 border-gray-200 mb-6 overflow-hidden">
                <div className="px-5 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="font-heading font-bold text-primary">Сводная таблица D8–D100</h3>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">лёгкие и средние</Badge>
                </div>
                <SpecTable models={modelsLight} rows={summaryLight} />
              </Card>

              <button
                onClick={() => setShowDetail(!showDetail)}
                className="flex items-center gap-2 text-accent hover:text-accent/80 font-medium mb-6 transition-colors"
              >
                <Icon name={showDetail ? "ChevronUp" : "ChevronDown"} size={18} />
                {showDetail ? "Скрыть детальные таблицы" : "Показать детальные таблицы"}
              </button>

              {showDetail && (
                <div className="space-y-6">
                  {detailGroups.map((group) => (
                    <Card key={group.title} className="border-2 border-gray-200 overflow-hidden">
                      <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
                        <h3 className="font-heading font-bold text-primary">{group.title}</h3>
                      </div>
                      <SpecTable models={modelsLight} rows={group.rows} />
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}

          {activeTab === "heavy" && (
            <>
              <Card className="border-2 border-gray-200 mb-6 overflow-hidden">
                <div className="px-5 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="font-heading font-bold text-primary">Сводная таблица D128–D260</h3>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">тяжёлые и сверхтяжёлые</Badge>
                </div>
                <SpecTable models={modelsHeavy} rows={summaryHeavy} />
              </Card>

              <button
                onClick={() => setShowDetail(!showDetail)}
                className="flex items-center gap-2 text-accent hover:text-accent/80 font-medium mb-6 transition-colors"
              >
                <Icon name={showDetail ? "ChevronUp" : "ChevronDown"} size={18} />
                {showDetail ? "Скрыть детальные таблицы" : "Показать детальные таблицы"}
              </button>

              {showDetail && (
                <div className="space-y-6">
                  {detailGroupsHeavy.map((group) => (
                    <Card key={group.title} className="border-2 border-gray-200 overflow-hidden">
                      <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
                        <h3 className="font-heading font-bold text-primary">{group.title}</h3>
                      </div>
                      <SpecTable models={modelsHeavy} rows={group.rows} />
                    </Card>
                  ))}

                  {/* D300/D400 */}
                  <Card className="border-2 border-gray-200 overflow-hidden">
                    <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
                      <h3 className="font-heading font-bold text-primary">Сверхтяжёлые модели D300–D400</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-primary text-white">
                            <th className="text-left py-3 px-4 font-heading font-semibold border-r border-white/10">Параметр</th>
                            <th className="text-center py-3 px-4 font-heading text-accent border-r border-white/10">D300</th>
                            <th className="text-center py-3 px-4 font-heading text-accent">D400</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { label: "Масса поршня, кг", vals: ["30 000", "40 000"] },
                            { label: "Энергия удара, Дж", vals: ["~640 000–1 000 000", "~850 000–1 300 000"] },
                            { label: "Масса молота, кг", vals: ["~59 500", "~79 500"] },
                          ].map((row, i) => (
                            <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="py-2.5 px-4 text-primary border-r border-gray-200 font-medium">{row.label}</td>
                              {row.vals.map((v, j) => (
                                <td key={j} className="py-2.5 px-4 text-center font-semibold text-primary border-r border-gray-100 last:border-0">{v}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              )}
            </>
          )}

          {/* Note */}
          <Card className="border-2 border-amber-200 bg-amber-50 mt-6">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Icon name="Lightbulb" size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-bold text-primary mb-2">Как читать характеристики</p>
                  <ul className="space-y-1.5 text-primary text-sm">
                    <li><strong>Масса поршня ≠ масса молота.</strong> Поршень — это энергия. Молот — вся конструкция. Например, D80: поршень 8 т, но весь молот ~16–17 т.</li>
                    <li><strong>Энергия удара — диапазон.</strong> Зависит от подачи топлива и сопротивления грунта.</li>
                    <li><strong>Частота снижается при росте мощности:</strong> лёгкие — до 50+ уд/мин, тяжёлые — ~35–40 уд/мин.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SemwDVariantsSection;
