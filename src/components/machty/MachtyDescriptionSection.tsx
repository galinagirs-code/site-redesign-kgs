import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MachtyDescriptionSection = () => {
  return (
    <section id="description" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">Общая информация</h2>
          
          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary">Назначение и возможности</h3>
              </div>
              <p className="text-primary mb-6 text-lg leading-relaxed">
                Копровая мачта — это направляющий элемент для навесного оборудования, который существенно расширяет функциональные возможности базовой строительной техники. Она позволяет эффективно использовать имеющиеся машины для выполнения свайных и буровых работ без потери их основного назначения.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2">Монтаж на базовую технику</h4>
                  <p className="text-primary mb-2">Копровая мачта устанавливается на:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary">
                    <li>гусеничные краны</li>
                    <li>экскаваторы</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2">Совместимое навесное оборудование</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary">
                    <li>сваебойные молоты для забивки свай</li>
                    <li>вращатели для буровых работ</li>
                    <li>оборудование для лидерного бурения</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary">Области применения</h3>
                </div>
                <p className="text-primary mb-3">Копровая мачта МК применяется для:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-primary mb-4">
                  <li>забивки железобетонных свай, труб и шпунта</li>
                  <li>устройства буронабивных свай</li>
                  <li>лидерного бурения скважин под ж/б сваи</li>
                </ul>
                <p className="text-primary mb-3">Используется при строительстве фундаментов в отраслях:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-primary">
                  <li><strong>ПГС</strong> — заводы, жилые дома, офисные здания</li>
                  <li><strong>Нефтегазовая отрасль</strong> — трубопроводы, НПЗ и ГПЗ</li>
                  <li><strong>Мостостроение</strong> — эстакады, транспортные переходы</li>
                  <li><strong>Энергетика</strong> — ЛЭП, подстанции</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Cog" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary">Принцип работы</h3>
                </div>
                <p className="text-primary mb-3">Копровая мачта МК KGS — металлоконструкция, обеспечивающая:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-primary mb-4">
                  <li>перемещение сваи и рабочего оборудования</li>
                  <li>точное центрирование по оси</li>
                  <li>наведение сваи на точку погружения</li>
                </ul>
                <p className="text-primary mb-3">Крепление мачты осуществляется с помощью специальных устройств (цапф) и раскосов.</p>
                <p className="text-primary font-semibold mb-2">Копровая установка (кран + мачта):</p>
                <ol className="list-decimal pl-5 space-y-1.5 text-primary">
                  <li>Поднимает сваю</li>
                  <li>Подвозит или подтаскивает к месту установки</li>
                  <li>Устанавливает сваю в проектное положение</li>
                  <li>Погружает сваю в грунт сваебойным оборудованием</li>
                  <li>Перемещается к следующей свае</li>
                </ol>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Gamepad2" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary">Управление копровой мачтой</h3>
              </div>
              <p className="text-primary mb-4">
                Управление осуществляется оператором из кабины крана с помощью пульта управления.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2">Пульт управления — гидролинии:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary">
                    <li>цилиндров коррекции</li>
                    <li>цилиндра опоры мачты</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2">Стандартные органы управления крана:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary">
                    <li>главная и вспомогательная лебёдки</li>
                    <li>поворот платформы</li>
                    <li>ход крана</li>
                    <li>подъём и опускание стрелы</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MachtyDescriptionSection;
