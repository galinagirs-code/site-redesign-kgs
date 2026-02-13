import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
            Модели молотов Dongtai Juli серии DD
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {variants.map((variant) => (
              <Card key={variant.name} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">{variant.name}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    {variant.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-start text-sm border-b border-muted pb-2">
                        <span className="text-muted-foreground">{spec.label}:</span>
                        <span className="font-medium text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group"
                    onClick={() => setExpandedVariant(expandedVariant === variant.name ? null : variant.name)}
                  >
                    {expandedVariant === variant.name ? 'Скрыть' : 'Все характеристики'}
                    <Icon 
                      name={expandedVariant === variant.name ? "ChevronUp" : "ChevronDown"} 
                      className="ml-2 group-hover:translate-y-1 transition-transform" 
                      size={16} 
                    />
                  </Button>

                  {expandedVariant === variant.name && (
                    <div className="mt-4 pt-4 border-t space-y-2 animate-fade-in">
                      {variant.detailedSpecs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{spec.label}:</span>
                          <span className="font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JuliVariantsSection;
