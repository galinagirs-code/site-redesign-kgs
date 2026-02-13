import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const variants = [
  {
    name: "DD-18",
    specs: [
      { label: "Масса ударной части", value: "1,8 т" },
      { label: "Максимальная энергия", value: "43 кДж" },
      { label: "Количество ударов в минуту", value: "40–60" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "1,8" },
      { label: "Максимальный ход цилиндра, м", value: "2,1" },
      { label: "Количество ударов в минуту", value: "40–60" },
      { label: "Максимальная энергия, кДж", value: "43" },
      { label: "Расход топлива, л/час", value: "6" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "596" },
      { label: "Максимальный вес сваи, т", value: "5" },
      { label: "Коэффициент компрессии", value: "18" },
      { label: "Масса молота, кг", value: "3300" }
    ]
  },
  {
    name: "DD-25",
    specs: [
      { label: "Масса ударной части", value: "2,5 т" },
      { label: "Максимальная энергия", value: "57,5 кДж" },
      { label: "Количество ударов в минуту", value: "40–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "2,5" },
      { label: "Максимальный ход цилиндра, м", value: "2,5" },
      { label: "Количество ударов в минуту", value: "40–50" },
      { label: "Максимальная энергия, кДж", value: "57,5" },
      { label: "Расход топлива, л/час", value: "10" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "968" },
      { label: "Максимальный вес сваи, т", value: "6" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "4600" }
    ]
  },
  {
    name: "DD-30",
    specs: [
      { label: "Масса ударной части", value: "3,0 т" },
      { label: "Максимальная энергия", value: "73,5 кДж" },
      { label: "Количество ударов в минуту", value: "35–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "3,0" },
      { label: "Максимальный ход цилиндра, м", value: "2,7" },
      { label: "Количество ударов в минуту", value: "35–50" },
      { label: "Максимальная энергия, кДж", value: "73,5" },
      { label: "Расход топлива, л/час", value: "11" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "1109" },
      { label: "Максимальный вес сваи, т", value: "6,5" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "5000" }
    ]
  },
  {
    name: "DD-35",
    specs: [
      { label: "Масса ударной части", value: "3,5 т" },
      { label: "Максимальная энергия", value: "87,5 кДж" },
      { label: "Количество ударов в минуту", value: "35–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "3,5" },
      { label: "Максимальный ход цилиндра, м", value: "2,85" },
      { label: "Количество ударов в минуту", value: "35–50" },
      { label: "Максимальная энергия, кДж", value: "87,5" },
      { label: "Расход топлива, л/час", value: "12,5" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "1268" },
      { label: "Максимальный вес сваи, т", value: "7,5" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "5600" }
    ]
  },
  {
    name: "DD-40",
    specs: [
      { label: "Масса ударной части", value: "4,0 т" },
      { label: "Максимальная энергия", value: "105 кДж" },
      { label: "Количество ударов в минуту", value: "35–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "4,0" },
      { label: "Максимальный ход цилиндра, м", value: "3,0" },
      { label: "Количество ударов в минуту", value: "35–50" },
      { label: "Максимальная энергия, кДж", value: "105" },
      { label: "Расход топлива, л/час", value: "14" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "1386" },
      { label: "Максимальный вес сваи, т", value: "9" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "6200" }
    ]
  },
  {
    name: "DD-50",
    specs: [
      { label: "Масса ударной части", value: "5,0 т" },
      { label: "Максимальная энергия", value: "131,2 кДж" },
      { label: "Количество ударов в минуту", value: "30–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "5,0" },
      { label: "Максимальный ход цилиндра, м", value: "3,0" },
      { label: "Количество ударов в минуту", value: "30–50" },
      { label: "Максимальная энергия, кДж", value: "131,2" },
      { label: "Расход топлива, л/час", value: "16" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "1746" },
      { label: "Максимальный вес сваи, т", value: "12" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "7500" }
    ]
  },
  {
    name: "DD-60",
    specs: [
      { label: "Масса ударной части", value: "6,0 т" },
      { label: "Максимальная энергия", value: "163,8 кДж" },
      { label: "Количество ударов в минуту", value: "30–45" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "6,0" },
      { label: "Максимальный ход цилиндра, м", value: "3,1" },
      { label: "Количество ударов в минуту", value: "30–45" },
      { label: "Максимальная энергия, кДж", value: "163,8" },
      { label: "Расход топлива, л/час", value: "18" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "2106" },
      { label: "Максимальный вес сваи, т", value: "15" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "9000" }
    ]
  },
  {
    name: "DD-75",
    specs: [
      { label: "Масса ударной части", value: "7,5 т" },
      { label: "Максимальная энергия", value: "206 кДж" },
      { label: "Количество ударов в минуту", value: "30–45" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "7,5" },
      { label: "Максимальный ход цилиндра, м", value: "3,2" },
      { label: "Количество ударов в минуту", value: "30–45" },
      { label: "Максимальная энергия, кДж", value: "206" },
      { label: "Расход топлива, л/час", value: "21" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "2535" },
      { label: "Максимальный вес сваи, т", value: "18" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "11000" }
    ]
  },
  {
    name: "DD-100",
    specs: [
      { label: "Масса ударной части", value: "10 т" },
      { label: "Максимальная энергия", value: "275 кДж" },
      { label: "Количество ударов в минуту", value: "30–45" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "10" },
      { label: "Максимальный ход цилиндра, м", value: "3,2" },
      { label: "Количество ударов в минуту", value: "30–45" },
      { label: "Максимальная энергия, кДж", value: "275" },
      { label: "Расход топлива, л/час", value: "27" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "3388" },
      { label: "Максимальный вес сваи, т", value: "24" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "14500" }
    ]
  }
];

const JuliVariantsSection = () => {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  return (
    <section id="variants" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              Модели молотов Dongtai Juli серии DD
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {variants.map((variant, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                        {variant.name}
                      </h3>
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                        штанговый
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                      {variant.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                          <span className="text-base text-gray-700 flex-1">{spec.label}</span>
                          <span className="text-base font-semibold text-gray-900 text-right ml-4">{spec.value}</span>
                        </div>
                      ))}
                      
                      {expandedVariant === variant.name && (
                        <>
                          {variant.detailedSpecs.map((spec, idx) => (
                            <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                              <span className="text-base text-gray-700">{spec.label}</span>
                              <span className="text-base font-semibold text-gray-900">{spec.value}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => setExpandedVariant(expandedVariant === variant.name ? null : variant.name)}
                        className="w-full"
                      >
                        {expandedVariant === variant.name ? (
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
      </div>
    </section>
  );
};

export default JuliVariantsSection;