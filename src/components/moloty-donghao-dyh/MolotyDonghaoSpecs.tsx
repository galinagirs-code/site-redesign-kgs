import { Card, CardContent } from "@/components/ui/card";

const group1Models = ["DYH-3", "DYH-5", "DYH-8", "DYH-11", "DYH-14"];
const group2Models = ["DYH-16", "DYH-20", "DYH-25", "DYH-30", "DYH-35", "DYH-40"];

const hammerParams1 = [
  { label: "Энергия удара (кН·м)", values: ["24", "60", "120", "165", "210"] },
  { label: "Рабочий ход (мм)", values: ["800", "1200", "1500", "1500", "1500"] },
  { label: "Частота ударов (уд/мин)", values: ["50/100", "40/100", "35/90", "35/90", "30/90"] },
  { label: "Масса ударной части (кг)", values: ["3 000", "5 000", "8 000", "11 000", "14 000"] },
  { label: "Способ подъёма", values: ["Подъём одним гидравлическим цилиндром", "", "", "", ""] },
];
const hammerDims1 = [
  { label: "Длина (мм)", values: ["3 800", "5 050", "6 100", "6 700", "6 780"] },
  { label: "Ширина (мм)", values: ["920", "920", "980", "980", "1 300"] },
  { label: "Высота (мм)", values: ["1 100", "1 100", "1 250", "1 250", "1 520"] },
  { label: "Масса (кг)", values: ["5 800", "8 500", "12 000", "16 000", "22 000"] },
];
const stationParams1 = [
  { label: "Модель станции", values: ["V120", "V180", "V260", "V400", "V400"] },
  { label: "Мощность двигателя (кВт)", values: ["50", "50", "90", "132", "185"] },
  { label: "Рабочее давление (МПа)", values: ["21", "24", "24", "24", "26"] },
  { label: "Расход масла (л/мин)", values: ["140", "200", "260", "380", "520"] },
  { label: "Объём гидравлического масла (л)", values: ["400", "800", "1 200", "1 300", "1 400"] },
];
const stationDims1 = [
  { label: "Габариты (Д×Ш×В), мм", values: ["2600×1500×1950", "2600×1500×1950", "3300×1500×2050", "3300×1500×2050", "3500×1550×2050"] },
  { label: "Масса (кг)", values: ["3 000", "3 000", "4 200", "4 600", "6 000"] },
];

const hammerParams2 = [
  { label: "Энергия удара (кН·м)", values: ["240", "300", "375", "450", "525", "680"] },
  { label: "Рабочий ход (мм)", values: ["1500", "1500", "1500", "1500", "1500", "1500"] },
  { label: "Частота ударов (уд/мин)", values: ["30/90", "30/85", "28/85", "25/75", "25/75", "25/70"] },
  { label: "Масса ударной части (кг)", values: ["16 000", "20 000", "25 000", "30 000", "35 000", "40 000"] },
  { label: "Способ подъёма", values: ["Подъём одним гидравлическим цилиндром", "", "", "", "", ""] },
];
const hammerDims2 = [
  { label: "Длина (мм)", values: ["7 080", "7 450", "7 900", "7 900", "8 120", "8 520"] },
  { label: "Ширина (мм)", values: ["1 300", "1 400", "1 400", "1 500", "1 550", "1 620"] },
  { label: "Высота (мм)", values: ["1 520", "1 450", "1 450", "1 900", "1 900", "1 860"] },
  { label: "Масса (кг)", values: ["24 000", "31 000", "36 000", "41 000", "47 000", "53 000"] },
];
const stationParams2 = [
  { label: "Модель станции", values: ["V400", "P500", "P600", "P800", "P900", "P1200"] },
  { label: "Мощность двигателя (л.с.)", values: ["—", "500", "600", "800", "900", "1200"] },
  { label: "Мощность электродвигателя (кВт)", values: ["200", "—", "—", "—", "—", "—"] },
  { label: "Рабочее давление (МПа)", values: ["26", "26", "26", "26", "28", "28"] },
  { label: "Расход масла (л/мин)", values: ["520", "760", "760", "810", "910", "1500"] },
  { label: "Объём гидравлического масла (л)", values: ["1 400", "1 800", "1 800", "2 000", "2 200", "2 500"] },
  { label: "Объём топливного бака (л)", values: ["—", "650", "650", "750", "800", "800"] },
];
const stationDims2 = [
  { label: "Габариты (Д×Ш×В), мм", values: ["3500×1550×2050", "4450×1800×2250", "4350×1800×2250", "4550×1800×2400", "4650×1800×2400", "5800×2450×2700"] },
  { label: "Масса (кг)", values: ["6 000", "7 500", "8 000", "8 500", "12 000", "16 000"] },
];

interface SectionRows { label: string; values: string[] }
interface TableSection { title: string; rows: SectionRows[] }

const SpecTable = ({ models, sections }: { models: string[]; sections: TableSection[] }) => {
  let rowGlobalIdx = 0;
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left py-3 px-6 font-heading font-semibold text-base w-56">Параметр</th>
                {models.map((m) => (
                  <th key={m} className="py-3 px-4 font-heading font-semibold text-base text-center">{m}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sections.map((section, si) => (
                <>
                  <tr key={`s${si}`} className="bg-accent/10">
                    <td colSpan={models.length + 1} className="py-2 px-6 font-heading font-bold text-primary text-sm uppercase tracking-wide">
                      {section.title}
                    </td>
                  </tr>
                  {section.rows.map((row) => {
                    const isSpanning = row.values.length > 1 && row.values.slice(1).every((v) => v === "");
                    const bg = rowGlobalIdx++ % 2 === 0 ? "bg-white" : "bg-gray-50";
                    return (
                      <tr key={row.label} className={bg}>
                        <td className="py-2.5 px-6 text-primary text-base">{row.label}</td>
                        {isSpanning ? (
                          <td colSpan={models.length} className="py-2.5 px-6 text-primary text-base text-center italic">
                            {row.values[0]}
                          </td>
                        ) : (
                          row.values.map((val, vi) => (
                            <td key={vi} className="py-2.5 px-4 font-semibold text-primary text-base text-center">
                              {val}
                            </td>
                          ))
                        )}
                      </tr>
                    );
                  })}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

const MolotyDonghaoSpecs = () => {
  return (
    <section id="specs" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Технические характеристики
          </h2>

          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-heading font-bold text-primary flex items-center gap-2">
              <span className="inline-block w-1.5 h-6 bg-accent rounded-full"></span>
              Модели DYH-3 — DYH-14
            </h3>
            <SpecTable
              models={group1Models}
              sections={[
                { title: "Параметры молота", rows: hammerParams1 },
                { title: "Габариты молота (без наголовника)", rows: hammerDims1 },
                { title: "Параметры гидростанции", rows: stationParams1 },
                { title: "Габариты и масса гидростанции", rows: stationDims1 },
              ]}
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-heading font-bold text-primary flex items-center gap-2">
              <span className="inline-block w-1.5 h-6 bg-accent rounded-full"></span>
              Модели DYH-16 — DYH-40
            </h3>
            <SpecTable
              models={group2Models}
              sections={[
                { title: "Параметры молота", rows: hammerParams2 },
                { title: "Габариты молота (без наголовника)", rows: hammerDims2 },
                { title: "Параметры гидростанции", rows: stationParams2 },
                { title: "Габариты и масса гидростанции", rows: stationDims2 },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MolotyDonghaoSpecs;
