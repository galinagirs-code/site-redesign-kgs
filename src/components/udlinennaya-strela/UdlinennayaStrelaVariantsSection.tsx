import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const variants = [
  {
    name: "Long Reach 18",
    range: "18–24 т",
    specs: [
      { label: "Общая длина (м)", value: "10–14" },
      { label: "Рабочий вылет (м)", value: "до 12–13" },
      { label: "Базовый экскаватор (т)", value: "18–24" },
      { label: "Материал", value: "Высокопрочная сталь" },
      { label: "Комплектация", value: "стрела, рукоять, гидролинии" },
    ],
  },
  {
    name: "Long Reach 30",
    range: "28–35 т",
    specs: [
      { label: "Общая длина (м)", value: "14–18" },
      { label: "Рабочий вылет (м)", value: "до 15–17" },
      { label: "Базовый экскаватор (т)", value: "28–35" },
      { label: "Материал", value: "Высокопрочная сталь" },
      { label: "Комплектация", value: "стрела, рукоять, гидролинии" },
    ],
  },
  {
    name: "Long Reach 45",
    range: "36–45 т",
    specs: [
      { label: "Общая длина (м)", value: "18–22" },
      { label: "Рабочий вылет (м)", value: "до 18–20" },
      { label: "Базовый экскаватор (т)", value: "36–45" },
      { label: "Материал", value: "Высокопрочная сталь" },
      { label: "Комплектация", value: "стрела, рукоять, гидролинии" },
    ],
  },
];

const UdlinennayaStrelaVariantsSection = () => {
  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 text-center">
            Технические характеристики
          </h2>
          <p className="text-center text-primary/60 text-sm mb-8">
            Типовые значения. Фактические параметры зависят от модели экскаватора и требуемой конфигурации.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {variants.map((variant, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-end mb-4">
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      {variant.range}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                    {variant.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                        <span className="text-sm text-primary flex-1">{spec.label}</span>
                        <span className="text-sm font-semibold text-primary text-right ml-4">{spec.value}</span>
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

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <p className="text-sm text-primary/70 text-center">
              Изготовление под индивидуальные требования — обратитесь к нашим специалистам для расчёта под конкретную модель экскаватора.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UdlinennayaStrelaVariantsSection;