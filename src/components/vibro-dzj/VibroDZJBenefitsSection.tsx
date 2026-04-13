import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Shield",
    title: "Прочная грузоподъёмная рама",
    items: [
      "Высокая надёжность конструкции",
      "Рассчитана на тяжёлые нагрузки",
    ],
  },
  {
    icon: "Zap",
    title: "Усиленные пружины",
    items: [
      "Стабильная работа в различных типах грунта",
    ],
  },
  {
    icon: "Settings",
    title: "Электродвигатели Siemens",
    items: [
      "Защита от короткого замыкания и вибрации",
      "Длительный срок службы",
    ],
  },
  {
    icon: "Cog",
    title: "Износостойкие редукторы",
    items: [
      "Рассчитаны на высокие вибрационные нагрузки",
    ],
  },
  {
    icon: "Lock",
    title: "Надёжная система зажима",
    items: [
      "Литые блоки предотвращают поломки",
      "Повышенная безопасность работы",
    ],
  },
  {
    icon: "TrendingDown",
    title: "Экономичность",
    items: [
      "До 60% дешевле гидравлических аналогов",
      "Без потери качества и производительности",
    ],
  },
];

const VibroDZJBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества электрических крановых вибропогружателей (серия DZJ)
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

          <div id="general-info" className="mt-10 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Общая информация</h2>

            <h4 className="text-lg font-heading font-bold text-primary mb-3">Ключевые особенности оборудования</h4>
            <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
              Вибропогружатели электрические крановые Yongan (серия DZJ) доступны в двух исполнениях — со стандартной и регулируемой частотой (инверторные модели), что позволяет:
            </p>
            <div className="space-y-2 mb-8">
              {[
                "облегчить запуск под нагрузкой",
                "снизить требования к мощности генератора",
                "адаптировать работу под конкретные грунтовые условия",
                "сократить сроки выполнения работ и снизить затраты",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-accent font-bold text-base mt-0.5">&#10004;</span>
                  <span className="text-base text-primary">{item}</span>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-heading font-bold text-primary mb-3">Принцип работы</h4>
            <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
              Электрические вибропогружатели Yongan работают на основе теории резонанса. Когда частота вибрации оборудования совпадает с частотой грунта:
            </p>
            <div className="space-y-2 mb-4">
              {[
                "возникает резонанс",
                "увеличивается амплитуда колебаний",
                "разрушается сцепление между сваей и грунтом",
                "сопротивление грунта резко снижается",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-accent font-bold text-base mt-0.5">&#10004;</span>
                  <span className="text-base text-primary">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-base md:text-lg text-primary leading-relaxed mb-8">
              В результате свая погружается в грунт под действием собственного веса с минимальным дополнительным усилием.
            </p>

            <h4 className="text-lg font-heading font-bold text-primary mb-3">Область применения</h4>
            <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
              Вибропогружатели серии DZJ используются для:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Погружения шпунта",
                "Установки свай",
                "Строительства причалов и мостов",
                "Укрепления котлованов",
                "Реализации инфраструктурных проектов",
                "Промышленного строительства",
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={12} className="text-accent" />
                  </div>
                  <p className="font-semibold text-primary text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibroDZJBenefitsSection;