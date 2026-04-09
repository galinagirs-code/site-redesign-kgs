import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Construction",
    title: "Универсальная мачта из усиленного металла",
    description: "Два варианта исполнения: с одним рядом направляющих (под молот или вращатель); с двумя рядами направляющих (молот + вращатель).",
  },
  {
    icon: "ArrowLeftRight",
    title: "Увеличенный рабочий ход мачты — 1200 мм",
    description: "Пантограф позволяет погружать сваи как максимально близко к базе, так и с выносом от себя до 1200 мм без перемещения установки.",
  },
  {
    icon: "RotateCcw",
    title: "Поворот платформы 360°",
    description: "Сокращает время подачи и установки свай, повышая производительность до 50% по сравнению с гусеничными копрами типа СП49.",
  },
  {
    icon: "Timer",
    title: "Быстрый монтаж",
    description: "Перевод из транспортного положения в рабочее — менее 15 минут.",
  },
  {
    icon: "Truck",
    title: "Удобная транспортировка",
    description: "Разборная мачта (3 секции). Габариты: длина до 12 м, высота 3,5 м, ширина — от 3,4 м до 3,7 м.",
  },
  {
    icon: "ShieldCheck",
    title: "Электронная система безопасности",
    description: "Контроль наклонов и автоматическая остановка при отклонениях, звуковая и световая сигнализация, механические ограничители и кренометр, защита от ошибок оператора.",
  },
  {
    icon: "Cpu",
    title: "Электросхема контроля управления (IPS)",
    description: "Интеллектуальная система управления Intelligent Power Switches с защитой от перегрузок и коротких замыканий.",
  },
  {
    icon: "Settings",
    title: "Качественная гидравлика",
    description: "Гидравлическое оборудование Bosch Rexroth (Германия).",
  },
  {
    icon: "Anchor",
    title: "Грузоподъёмные лебёдки ZOLLERN (Германия)",
    description: "Тяговое усилие 8 т, до 16 т с полиспастами. Расположение лебёдок в районе противовеса экскаваторной базы увеличивает устойчивость всей установки и позволяет навешивать более тяжёлые дизель-молоты — что существенно отличает КБУРГ от копров других производителей в России.",
  },
  {
    icon: "Armchair",
    title: "Комфорт оператора",
    description: "Большая площадь остекления, удобное управление и регулируемое сиденье.",
  },
];

const KburgBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества копрово-бурильных установок КБУРГ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit.icon} size={24} className="text-accent" fallback="CheckCircle" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-heading font-bold text-primary mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-primary leading-relaxed text-base md:text-lg">
                        {benefit.description}
                      </p>
                    </div>
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

export default KburgBenefitsSection;