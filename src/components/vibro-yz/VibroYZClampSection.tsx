import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  const [expandedClamp, setExpandedClamp] = useState<string | null>(null);

  return (
    <section id="clamps" className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center">
            Модели зажимов
          </h2>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-8">
            <p className="text-primary/80 leading-relaxed">
              Для гидравлических крановых вибропогружателей (серия YZ) предлагается широкий ассортимент зажимов, предназначенных для шпунтовых свай, Н-балок и других профилей. Надёжная конструкция и мощный зажимной цилиндр обеспечивает стабильную и безопасную фиксацию свай.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mb-8 justify-center">
            <div className="bg-white rounded-2xl overflow-hidden shadow flex flex-col items-center p-4 sm:w-72">
              <img
                src="https://cdn.poehali.dev/files/33abfdf8-8a0f-4940-b749-a919d0c8c527.jpg"
                alt="Зажим YZJ120-320"
                className="object-contain max-h-64 w-full"
              />
              <p className="mt-3 text-sm font-semibold text-primary/70 tracking-wide">YZJ120-320</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow flex flex-col items-center p-4 sm:w-72">
              <img
                src="https://cdn.poehali.dev/files/4a389767-3b46-4602-acb2-7a297ce94f49.jpg"
                alt="Зажим YZJ80DC-320DC"
                className="object-contain max-h-64 w-full"
              />
              <p className="mt-3 text-sm font-semibold text-primary/70 tracking-wide">YZJ80DC-320DC</p>
            </div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clamps.map((clamp) => (
              <Card
                key={clamp.model}
                className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">{clamp.model}</h3>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      зажим
                    </Badge>
                  </div>
                  <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                    {specs.slice(0, 3).map((s) => (
                      <div key={s.key} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                        <span className="text-sm text-primary flex-1">{s.label}</span>
                        <span className="text-sm font-semibold text-primary text-right ml-4">
                          {clamp[s.key as keyof Clamp]}
                        </span>
                      </div>
                    ))}
                    {expandedClamp === clamp.model && (
                      <>
                        {specs.slice(3).map((s) => (
                          <div key={s.key} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                            <span className="text-sm text-primary flex-1">{s.label}</span>
                            <span className="text-sm font-semibold text-primary text-right ml-4">
                              {clamp[s.key as keyof Clamp]}
                            </span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setExpandedClamp(expandedClamp === clamp.model ? null : clamp.model)}
                      className="w-full"
                    >
                      {expandedClamp === clamp.model ? (
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

export default VibroYZClampSection;