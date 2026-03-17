import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const variants = [
  {
    name: "PB350S",
    sectionRange: "250–300 мм",
    specs: [
      { label: "Сечение сваи (мм)", value: "250–300" },
      { label: "Общий вес (кг)", value: "700" },
      { label: "Вес экскаватора (т)", value: "≥15" },
      { label: "Макс. расход масла (л/мин)", value: "20" },
      { label: "Макс. длина среза за один подъём (мм)", value: "300" },
      { label: "Макс. осевая нагрузка (кН)", value: "300" },
      { label: "Макс. ход цилиндра (мм)", value: "300" },
      { label: "Макс. давление (бар)", value: "300" },
    ],
  },
  {
    name: "PB500S",
    sectionRange: "400–550 мм",
    specs: [
      { label: "Сечение сваи (мм)", value: "400–550" },
      { label: "Общий вес (кг)", value: "1240" },
      { label: "Вес экскаватора (т)", value: "≥20" },
      { label: "Макс. расход масла (л/мин)", value: "20" },
      { label: "Макс. длина среза за один подъём (мм)", value: "300" },
      { label: "Макс. осевая нагрузка (кН)", value: "300" },
      { label: "Макс. ход цилиндра (мм)", value: "300" },
      { label: "Макс. давление (бар)", value: "300" },
    ],
  },
  {
    name: "PB600S",
    sectionRange: "550–650 мм",
    specs: [
      { label: "Сечение сваи (мм)", value: "550–650" },
      { label: "Общий вес (кг)", value: "1400" },
      { label: "Вес экскаватора (т)", value: "≥20" },
      { label: "Макс. расход масла (л/мин)", value: "20" },
      { label: "Макс. длина среза за один подъём (мм)", value: "300" },
      { label: "Макс. осевая нагрузка (кН)", value: "300" },
      { label: "Макс. ход цилиндра (мм)", value: "300" },
      { label: "Макс. давление (бар)", value: "300" },
    ],
  },
];

const KvadratnyeVariantsSection = () => {
  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Варианты оборудования
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {variants.map((variant, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                      {variant.name}
                    </h3>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      {variant.sectionRange}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                    {variant.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                        <span className="text-base text-primary flex-1">{spec.label}</span>
                        <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
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
        </div>
      </div>
    </section>
  );
};

export default KvadratnyeVariantsSection;
