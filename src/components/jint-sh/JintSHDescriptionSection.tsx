import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const JintSHDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Общая информация</h2>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Building2" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">О производителе</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Shanghai Jintai — государственная компания Китая, основана в 1921 году. С 1996 по 2003 год работала в партнёрстве с немецкой компанией Bauer. Это партнёрство обеспечило высокий уровень инженерной культуры и передовые технологии, заложенные в продуктовую линейку JINT.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Более 100 лет в машиностроении</li>
                    <li>1996–2003г — совместное производство с немецкой Bauer</li>
                    <li>Государственная компания, входящая в число крупнейших в КНР</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Передовые технологии немецкой инженерной школы</li>
                    <li>Широкая линейка буровых машин серий SD и SH</li>
                    <li>Поставки на международные рынки, в т.ч. в Россию</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Серия SH — тяжёлые роторные установки</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Серия SH (Heavy) — это мощные гидравлические роторные установки, предназначенные для мостостроения, гидротехнического строительства, крупных промышленных объектов и бурения свай большого диаметра. По характеристикам существенно превосходят серию SD.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Назначение и применение</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Мостостроение и гидротехническое строительство</li>
                    <li>Крупные промышленные объекты</li>
                    <li>Устройство свай большого диаметра (до 2 500 мм и более)</li>
                    <li>Бурение в скальных и мерзлых грунтах</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Когда нужна серия SH</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Глубина бурения более 60 метров (до 90+ м)</li>
                    <li>Скальные и мерзлые грунты, сложная геология</li>
                    <li>Сваи диаметром до 2 500 мм и более</li>
                    <li>Мосты, ГЭС, промышленные объекты</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Cog" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Конструктивные особенности</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Установки серии SH имеют усиленную по сравнению с серией SD конструкцию всех ключевых узлов: мачты, гусеничного шасси, гидравлической системы и противовеса.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Мачта и ходовая часть</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Усиленное сечение мачты с треугольной структурой</li>
                    <li>Усиленные направляющие каретки ротора</li>
                    <li>Эффективное гашение вибрации при бурении в твёрдых грунтах</li>
                    <li>Увеличенный размер гусеничных башмаков</li>
                    <li>Общий вес установки: 50–70+ тонн</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Гидравлика и управление</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Система LUDV (Load Sensing) — чувствительная к нагрузке</li>
                    <li>Плавное совмещение операций без потери мощности</li>
                    <li>Цифровая панель с расширенной самодиагностикой</li>
                    <li>Контроль глубины и вертикальности бурения</li>
                    <li>Противовес с механизмом откидывания/сдвига</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Двигатель и силовые характеристики</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Двигатель</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Cummins QSL9, QSM11 и аналоги</li>
                    <li>Мощность: от 300 до 450 л.с.</li>
                    <li>Экологический стандарт: Tier 3 / Stage IIIA (новые модели)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Бурение</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Крутящий момент: от 300 кНм до 460+ кНм</li>
                    <li>Глубина бурения: до 90+ метров</li>
                    <li>Диаметр сваи: до 2 500 мм и более</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Drill" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Особенности бурения и подбор оснастки</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Параметры бурения зависят от конфигурации оборудования и рассчитываются индивидуально под задачи проекта.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Расчёт глубины бурения</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Стандартная длина бура: 1,7 м</li>
                    <li>С келли-баром: (кол-во секций × длина секции) − 0,2 м</li>
                    <li>Возможна поставка келли-баров различной длины по запросу</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Подбор келли-бара</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Тип подбирается по глубине бурения</li>
                    <li>Учитывается требуемый крутящий момент</li>
                    <li>Учитывается усилие задавливания</li>
                    <li>Суммарный вес келли-бара и инструмента — в пределах мощности лебёдки</li>
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

export default JintSHDescriptionSection;