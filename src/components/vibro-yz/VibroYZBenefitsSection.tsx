import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Zap",
    title: "Повышенная производительность",
    items: [
      "Усиленная грузоподъёмная конструкция",
      "Регулируемое количество эластомеров под любой тип грунта",
      "Подшипники FAG с увеличенным ресурсом",
    ],
  },
  {
    icon: "Shield",
    title: "Надёжность и долговечность",
    items: [
      "Редукторы устойчивы к экстремальным вибрациям",
      "Подшипники рассчитаны на тяжёлые условия эксплуатации",
      "Гидромоторы защищены от механических повреждений",
    ],
  },
  {
    icon: "Droplets",
    title: "Эффективное охлаждение и смазка",
    items: [
      "Комбинированная система смазки (разбрызгивание + принудительная подача)",
      "Циркуляция масла через корпус снижает рабочую температуру",
      "Увеличенный объём масла предотвращает перегрев",
    ],
  },
  {
    icon: "Settings",
    title: "Продуманная гидравлика",
    items: [
      "Гидравлические компоненты мирового уровня",
      "Рациональная разводка шлангов снижает риск повреждений",
      "До 75% гидролиний защищены внутри конструкции",
    ],
  },
  {
    icon: "Lock",
    title: "Надёжная система зажима",
    items: [
      "Выполнена из цельнолитых блоков",
      "Снижает риск поломок и повышает безопасность работы",
    ],
  },
  {
    icon: "TrendingDown",
    title: "Экономическая выгода",
    items: [
      "Стоимость до 30% ниже европейских аналогов",
      "Сопоставимая надёжность и производительность",
      "Снижение затрат на обслуживание",
    ],
  },
];

const VibroYZBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества вибропогружателей Yongan YZ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-primary/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibroYZBenefitsSection;
