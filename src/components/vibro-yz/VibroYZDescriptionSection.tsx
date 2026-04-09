import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const stations = [
  {
    name: "400P",
    specs: [
      { label: "Тип двигателя", value: "Cummins C360" },
      { label: "Макс. мощность, кВт/лс", value: "265 / 360" },
      { label: "Макс. частота, об/мин", value: "2100" },
      { label: "Рабочее давление, бар", value: "350" },
      { label: "Макс. расход масла, л/мин", value: "400" },
      { label: "Вес, кг", value: "5300" },
      { label: "Размер, мм", value: "3520×1520×2100" },
      { label: "Объём диз. бака, л", value: "450" },
      { label: "Объём масл. бака, л", value: "1400" },
      { label: "Модель вибропогружателя", value: "YZ-70, YZ-90" },
    ],
  },
  {
    name: "500P",
    specs: [
      { label: "Тип двигателя", value: "CAT C13" },
      { label: "Макс. мощность, кВт/лс", value: "328 / 440" },
      { label: "Макс. частота, об/мин", value: "2100" },
      { label: "Рабочее давление, бар", value: "350" },
      { label: "Макс. расход масла, л/мин", value: "520" },
      { label: "Вес, кг", value: "6000" },
      { label: "Размер, мм", value: "3820×1520×2250" },
      { label: "Объём диз. бака, л", value: "500" },
      { label: "Объём масл. бака, л", value: "1600" },
      { label: "Модель вибропогружателя", value: "YZ-100" },
    ],
  },
  {
    name: "600P",
    specs: [
      { label: "Тип двигателя", value: "CAT C15" },
      { label: "Макс. мощность, кВт/лс", value: "403 / 540" },
      { label: "Макс. частота, об/мин", value: "2100" },
      { label: "Рабочее давление, бар", value: "350" },
      { label: "Макс. расход масла, л/мин", value: "630" },
      { label: "Вес, кг", value: "8000" },
      { label: "Размер, мм", value: "4370×1820×2400" },
      { label: "Объём диз. бака, л", value: "600" },
      { label: "Объём масл. бака, л", value: "2000" },
      { label: "Модель вибропогружателя", value: "YZ-130, YZ-180" },
    ],
  },
  {
    name: "800P",
    specs: [
      { label: "Тип двигателя", value: "CAT C18" },
      { label: "Макс. мощность, кВт/лс", value: "522 / 700" },
      { label: "Макс. частота, об/мин", value: "2100" },
      { label: "Рабочее давление, бар", value: "350" },
      { label: "Макс. расход масла, л/мин", value: "830" },
      { label: "Вес, кг", value: "8500" },
      { label: "Размер, мм", value: "4370×1820×2550" },
      { label: "Объём диз. бака, л", value: "600" },
      { label: "Объём масл. бака, л", value: "2000" },
      { label: "Модель вибропогружателя", value: "YZ-230" },
    ],
  },
  {
    name: "1200P",
    specs: [
      { label: "Тип двигателя", value: "CAT C15 ×2" },
      { label: "Макс. мощность, кВт/лс", value: "806 / 1080" },
      { label: "Макс. частота, об/мин", value: "2100" },
      { label: "Рабочее давление, бар", value: "350" },
      { label: "Макс. расход масла, л/мин", value: "1250" },
      { label: "Вес, кг", value: "15200" },
      { label: "Размер, мм", value: "4370×2920×2650" },
      { label: "Объём диз. бака, л", value: "1000" },
      { label: "Объём масл. бака, л", value: "4200" },
      { label: "Модель вибропогружателя", value: "YZ-300, YZ-300L" },
    ],
  },
  {
    name: "1400P",
    specs: [
      { label: "Тип двигателя", value: "CAT C18 ×2" },
      { label: "Макс. мощность, кВт/лс", value: "1044 / 1400" },
      { label: "Макс. частота, об/мин", value: "2100" },
      { label: "Рабочее давление, бар", value: "350" },
      { label: "Макс. расход масла, л/мин", value: "1600" },
      { label: "Вес, кг", value: "16900" },
      { label: "Размер, мм", value: "4370×2920×2650" },
      { label: "Объём диз. бака, л", value: "1000" },
      { label: "Объём масл. бака, л", value: "4200" },
      { label: "Модель вибропогружателя", value: "YZ-400" },
    ],
  },
  {
    name: "2600P",
    specs: [
      { label: "Тип двигателя", value: "KTTA50-C2000" },
      { label: "Макс. мощность, кВт/лс", value: "1492 / 2014" },
      { label: "Макс. частота, об/мин", value: "1900" },
      { label: "Рабочее давление, бар", value: "350" },
      { label: "Макс. расход масла, л/мин", value: "2600" },
      { label: "Размер, мм", value: "7306×2362×2745" },
      { label: "Объём диз. бака, л", value: "1400" },
      { label: "Объём масл. бака, л", value: "5200" },
      { label: "Модель вибропогружателя", value: "YZ-800B" },
    ],
  },
];

const VibroYZDescriptionSection = () => {
  const [expandedStation, setExpandedStation] = useState<string | null>(null);

  return (
    <section id="stations" className="py-10 md:py-16 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center">
            Модели гидравлических станций
          </h2>

          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
              Yongan Machinery предлагает комплексные решения: вибропогружатели и гидравлические станции, совместимые как между собой, так и с другим гидравлическим оборудованием.
            </p>
            <p className="text-base md:text-lg text-primary leading-relaxed mb-5">
              Гидростанции Yongan — универсальное решение для питания вибропогружателей и другого гидравлического оборудования.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Высокая стабильность работы",
                "Качественная система фильтрации",
                "Надёжные насосы и двигатели",
                "Адаптация к тяжёлым условиям эксплуатации",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-accent" />
                  </div>
                  <span className="text-sm text-primary/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {stations.map((station) => (
                <Card
                  key={station.name}
                  className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-heading font-bold text-primary">{station.name}</h3>
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                        станция
                      </Badge>
                    </div>
                    <div className="space-y-2 mb-4 bg-white rounded-lg p-4">
                      {station.specs.slice(0, 3).map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                          <span className="text-sm text-primary flex-1">{spec.label}</span>
                          <span className="text-sm font-semibold text-primary text-right ml-4">{spec.value}</span>
                        </div>
                      ))}
                      {expandedStation === station.name && (
                        <>
                          {station.specs.slice(3).map((spec, idx) => (
                            <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                              <span className="text-sm text-primary flex-1">{spec.label}</span>
                              <span className="text-sm font-semibold text-primary text-right ml-4">{spec.value}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setExpandedStation(expandedStation === station.name ? null : station.name)}
                        className="w-full"
                      >
                        {expandedStation === station.name ? (
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

export default VibroYZDescriptionSection;