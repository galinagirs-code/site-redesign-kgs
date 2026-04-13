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

const VibroYZVMBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества вибропогружателей Yongan YZ-VM
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

          <div className="mt-10 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">Компоненты мирового уровня</h3>
            <p className="text-primary/80 mb-5 leading-relaxed">
              В конструкции вибропогружателей Yongan YZ-VM используются компоненты ведущих производителей, что обеспечивает стабильную работу, минимальный износ и длительный срок службы оборудования:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { brand: "Parker (США)", part: "Гидромоторы" },
                { brand: "FAG (Германия)", part: "Подшипники повышенной нагрузки и увеличенного ресурса" },
                { brand: "Rexroth / Kawasaki", part: "Насосы" },
                { brand: "Caterpillar / Cummins", part: "Двигатели" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">{item.brand}</p>
                    <p className="text-primary/70 text-sm mt-1">{item.part}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="general-info" className="mt-10 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Общая информация</h2>

            <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
              Гидравлические крановые вибропогружатели Yongan (серия YZ-VM) отлично подходят для морских и прибрежных работ, обеспечивая стабильную работу на глубине и устойчивость к подводным нагрузкам.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Усиленная грузоподъёмная секция (Heavy Duty Lifting Section) — обеспечивает надёжную работу при высоких нагрузках",
                "Двухступенчатая система виброизоляции (Double Stage Vibration Absorption) — снижает нагрузку на кран и повышает эффективность передачи усилия на сваю",
                "Интеграция функций подъёма, погружения и извлечения — повышает общую производительность работ",
                "Регулируемые эластомеры — позволяют адаптировать оборудование под различные типы грунта",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-accent font-bold text-base mt-0.5">&#10004;</span>
                  <span className="text-base text-primary">{item}</span>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-heading font-bold text-primary mb-3">Технология регулируемого эксцентрикового момента</h4>
            <p className="text-primary/80 leading-relaxed mb-6">
              Система регулируемого эксцентрикового момента позволяет изменять вибрационную силу за счёт взаимного положения эксцентриков, обеспечивая точную настройку амплитуды и стабильную работу вибропогружателя в различных условиях.
            </p>

            <h4 className="text-lg font-heading font-bold text-primary mb-3">Ключевые преимущества</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                "Плавный запуск и остановка — отсутствие ударных нагрузок",
                "Точная регулировка амплитуды — адаптация под любые задачи",
                "Гибкость применения — подходит для телескопических стрел автокранов",
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-accent" />
                  </div>
                  <p className="text-primary text-sm">{item}</p>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-heading font-bold text-primary mb-4">Принцип работы</h4>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Запуск и остановка",
                  text: "Нулевая амплитуда при запуске и остановке. Отсутствуют ударные нагрузки и рывки при пуске и остановке.",
                },
                {
                  title: "Гибкость применения",
                  text: "Подходит для работы с телескопическими стрелами автокранов. Обеспечивает более гибкое применение и снижает стоимость строительства.",
                },
                {
                  title: "Регулировка амплитуды",
                  text: "Амплитуда вибрации может регулироваться в любой момент за счёт изменения эксцентрикового момента. Максимальная амплитуда — до 100%.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-accent pl-4 py-1">
                  <p className="font-semibold text-primary mb-1">{item.title}</p>
                  <p className="text-primary/80 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-heading font-bold text-primary mb-3">Области применения</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Безрезонансные работы и испытания",
                "Устройство фундаментов зданий",
                "Работа вблизи существующей застройки",
                "Жилищное и коммерческое строительство",
                "Минимальное воздействие на водную среду",
                "Строительство объектов аквакультуры и морских сооружений",
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

export default VibroYZVMBenefitsSection;