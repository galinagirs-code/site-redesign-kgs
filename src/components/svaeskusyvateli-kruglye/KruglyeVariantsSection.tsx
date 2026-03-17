import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const modularSpecs = [
  { modules: 4,  weight: 1600, diameter: "400–600",   excavator: "20–30" },
  { modules: 8,  weight: 2640, diameter: "600–800",   excavator: "20–30" },
  { modules: 9,  weight: 2970, diameter: "800–1000",  excavator: "20–30" },
  { modules: 10, weight: 3300, diameter: "1000–1150", excavator: "20–30" },
  { modules: 11, weight: 3630, diameter: "1150–1300", excavator: "30–40" },
  { modules: 12, weight: 3960, diameter: "1300–1500", excavator: "30–40" },
  { modules: 13, weight: 4290, diameter: "1500–1650", excavator: "30–40" },
  { modules: 14, weight: 4620, diameter: "1650–1800", excavator: "30–40" },
  { modules: 15, weight: 4950, diameter: "1800–1970", excavator: "30–40" },
  { modules: 16, weight: 5280, diameter: "1970–2200", excavator: "30–40" },
  { modules: 17, weight: 5610, diameter: "2200–2360", excavator: "30–40" },
  { modules: 18, weight: 5940, diameter: "2360–2500", excavator: "30–40" },
];

const commonSpecs = [
  { label: "Макс. осевая нагрузка (кН)", value: "300" },
  { label: "Макс. ход цилиндра (мм)", value: "300" },
  { label: "Макс. давление (бар)", value: "300" },
  { label: "Вес одного модуля (кг)", value: "335" },
  { label: "Размер одного модуля (мм)", value: "1015×865×340" },
  { label: "Макс. расход масла (л/мин)", value: "20" },
  { label: "Диаметр зуба (мм)", value: "110" },
  { label: "Макс. длина среза за один подъём (мм)", value: "500" },
];

const KruglyeVariantsSection = () => {
  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3 text-center">
            Варианты оборудования
          </h2>
          <p className="text-center text-primary/60 mb-8 text-sm">
            Количество модулей подбирается под диаметр сваи
          </p>

          <div className="flex flex-col gap-6 mb-8">
            {/* 1. Общие параметры — первая */}
            <Card className="border-2 border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-primary px-5 py-3">
                <h3 className="font-heading font-bold text-white text-lg">Общие параметры</h3>
              </div>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <tbody>
                    {commonSpecs.map((spec, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="py-3 px-5 text-primary/80 leading-snug">{spec.label}</td>
                        <td className="py-3 px-5 font-semibold text-primary whitespace-nowrap">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* 2. Комплектация по модулям — вторая, раскрытая и шире */}
            <Card className="border-2 border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-primary px-5 py-3 flex items-center justify-between">
                <h3 className="font-heading font-bold text-white text-lg">Комплектация по модулям</h3>
                <Badge className="bg-accent/20 text-accent border-accent/50">модульная</Badge>
              </div>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-3 px-5 font-semibold text-primary">Кол-во модулей</th>
                      <th className="text-left py-3 px-5 font-semibold text-primary">Вес (кг)</th>
                      <th className="text-left py-3 px-5 font-semibold text-primary">Диаметр сваи (мм)</th>
                      <th className="text-left py-3 px-5 font-semibold text-primary">Экскаватор (т)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modularSpecs.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="py-3 px-5 font-semibold text-primary">{row.modules}</td>
                        <td className="py-3 px-5 text-primary">{row.weight}</td>
                        <td className="py-3 px-5 text-primary">{row.diameter}</td>
                        <td className="py-3 px-5 text-primary">{row.excavator}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          <a href="#consultation">
            <Button className="btn-gradient text-white w-full" size="lg">
              <Icon name="MessageSquare" size={18} className="mr-2" />
              Получить консультацию
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default KruglyeVariantsSection;
