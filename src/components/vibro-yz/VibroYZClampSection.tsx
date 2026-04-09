import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const clamps = [
  { model: "YZJ120", force: 1200, pressure: 320, weight: 950, maxThickness: 55, dims: "1055×376×920" },
  { model: "YZJ160", force: 1200, pressure: 320, weight: 1050, maxThickness: 55, dims: "1055×376×920" },
  { model: "YZJ200", force: 2000, pressure: 320, weight: 1300, maxThickness: 77, dims: "1105×438×1030" },
  { model: "YZJ320", force: 3200, pressure: 320, weight: 1550, maxThickness: 77, dims: "1105×438×1030" },
  { model: "YZJ80DC", force: 800, pressure: 320, weight: 580, maxThickness: 55, dims: "865×300×650" },
  { model: "YZJ120DC", force: 1200, pressure: 320, weight: 920, maxThickness: 55, dims: "800×382×880" },
  { model: "YZJ160DC", force: 1600, pressure: 320, weight: 1120, maxThickness: 65, dims: "860×382×920" },
  { model: "YZJ200DC", force: 2000, pressure: 320, weight: 1420, maxThickness: 85, dims: "970×440×920" },
  { model: "YZJ320DC", force: 3200, pressure: 320, weight: 2980, maxThickness: 95, dims: "1170×520×125" },
];

const specs = [
  { label: "Усилие зажима (кН)", key: "force" },
  { label: "Рабочее давление (бар)", key: "pressure" },
  { label: "Вес (кг)", key: "weight" },
  { label: "Макс. удерживающая толщина (мм)", key: "maxThickness" },
  { label: "Габариты (мм)", key: "dims" },
];

type Clamp = typeof clamps[0];

const VibroYZClampSection = () => {
  return (
    <section id="clamps" className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Модели зажимов
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {clamps.map((clamp) => (
              <Card
                key={clamp.model}
                className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-5">
                  <h3 className="text-lg font-heading font-bold text-primary mb-3">{clamp.model}</h3>
                  <div className="space-y-1.5 bg-white rounded-lg p-3 mb-3">
                    {specs.map((s) => (
                      <div key={s.key} className="flex justify-between items-start py-0.5 border-b border-gray-100 last:border-0">
                        <span className="text-xs text-primary/70 flex-1 pr-2">{s.label}</span>
                        <span className="text-xs font-semibold text-primary text-right">
                          {clamp[s.key as keyof Clamp]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a href="#consultation" className="block">
                    <button className="w-full btn-gradient text-white text-xs py-2 rounded-lg font-medium transition-all hover:scale-105">
                      <Icon name="MessageSquare" size={13} className="inline mr-1.5 mb-0.5" />
                      Запросить цену
                    </button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibroYZClampSection;
