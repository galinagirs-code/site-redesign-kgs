import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const VibroCSDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Общая информация
          </h2>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Назначение и применение</h3>
              </div>
              <p className="text-primary mb-6 text-base md:text-lg leading-relaxed">
                Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS) предназначены для погружения и извлечения шпунтовых свай, труб и других свайных элементов с использованием экскаватора. Оборудование монтируется на стрелу экскаватора и питается от его гидравлической системы.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Области применения</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Устройство шпунтовых ограждений</li>
                    <li>Возведение фундаментов зданий</li>
                    <li>Берегоукрепительные работы</li>
                    <li>Строительство мостов и гидротехнических сооружений</li>
                    <li>Монтаж временных ограждений котлованов</li>
                    <li>Погружение труб и металлических свай</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Типы погружаемых элементов</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Шпунтовые сваи (ларсены)</li>
                    <li>Стальные трубы</li>
                    <li>Двутавровые профили (H-beam)</li>
                    <li>Железобетонные сваи</li>
                    <li>Швеллер и уголок</li>
                    <li>Анкеры и арматура</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Layers" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Конструкция и основные узлы</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-3 text-base md:text-lg">Наклонно-поворотный механизм (Rototilt):</p>
                  <p className="text-primary text-base md:text-lg leading-relaxed">Обеспечивает наклон и вращение оборудования, упрощает захват и точную установку свай.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-3 text-base md:text-lg">Редуктор:</p>
                  <p className="text-primary text-base md:text-lg leading-relaxed">Обеспечивает стабильную работу вибрационного механизма. Эффективная система охлаждения увеличивает ресурс и надёжность.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-3 text-base md:text-lg">Основной зажим:</p>
                  <p className="text-primary text-base md:text-lg leading-relaxed">Оснащён мощным гидроцилиндром. Обеспечивает надёжную фиксацию сваи и стабильное удержание давления.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-3 text-base md:text-lg">Демпфирующие элементы (эластомер):</p>
                  <p className="text-primary text-base md:text-lg leading-relaxed">Снижают вибрационную нагрузку на экскаватор. Увеличивают срок службы оборудования.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-3 text-base md:text-lg">Боковой зажим:</p>
                  <p className="text-primary text-base md:text-lg leading-relaxed">Оснащён быстросменными челюстями. Позволяет адаптировать оборудование под различные условия работы.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-3 text-base md:text-lg">Захваты (челюсти):</p>
                  <p className="text-primary text-base md:text-lg leading-relaxed">Изготовлены из износостойкой импортной стали. Обработка на ЧПУ (CNC) обеспечивает высокую прочность и долговечность.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="RefreshCw" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Принцип работы</h3>
              </div>
              <ol className="list-decimal pl-5 space-y-1.5 text-primary text-base md:text-lg">
                <li>Вибропогружатель монтируется на стрелу экскаватора</li>
                <li>Подключается к гидравлической системе базовой машины</li>
                <li>Боковой зажим фиксирует сваю (быстросменные челюсти)</li>
                <li>Эксцентрики создают высокочастотные вибрации</li>
                <li>Вибрация снижает сопротивление грунта</li>
                <li>Свая погружается или извлекается под весом и давлением</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VibroCSDescriptionSection;
