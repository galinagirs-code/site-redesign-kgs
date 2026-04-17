import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const JintSDDescriptionSection = () => {
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Серия SD — универсальные роторные установки</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Серия SD — это универсальные гидравлические роторные установки, оптимизированные под задачи фундаментостроения, строительства многоэтажных зданий, возведения мостов и гидротехнических проектов. Доступны различные конфигурации по шасси, высоте мачты и крутящему моменту.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Назначение и применение</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Устройство свайных фундаментов большого диаметра</li>
                    <li>Строительство многоэтажных зданий</li>
                    <li>Возведение мостов</li>
                    <li>Гидротехнические проекты</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Когда выбирают серию SD</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Глубина бурения до 56–60 метров</li>
                    <li>Песок, глина, грунты средней твёрдости</li>
                    <li>Сваи диаметром до 2 000 мм</li>
                    <li>Городское строительство и инфраструктура</li>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Мачта и ходовая часть</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Компактный хвост и низкий центр тяжести</li>
                    <li>Отличная устойчивость и безопасность при работе</li>
                    <li>Выдвижные гусеницы для работы в ограниченном пространстве</li>
                    <li>Вес установки: 45–86 тонн</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Гидравлика и управление</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Гидравлическая система</li>
                    <li>Оптимальное распределение мощности</li>
                    <li>Многоскоростное управление силовой головкой</li>
                    <li>Двойная система защиты и амортизации ротора</li>
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
                    <li>Cummins 6BTAA5.9-C, C8.3, QSL9, QSM11-C</li>
                    <li>Мощность: от 133 до 263 кВт</li>
                    <li>Экологический стандарт: Euro III</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Бурение</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Крутящий момент: от 150 до 320 кНм</li>
                    <li>Глубина бурения: до 56–60 метров</li>
                    <li>Диаметр сваи: до 2 600 мм</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="GitCompare" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Сравнение серий SD и SH</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Серия SD</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Крутящий момент: до 320 кНм</li>
                    <li>Глубина: до 56–60 м</li>
                    <li>Диаметр: до ~2 000–2 600 мм</li>
                    <li>Вес: 45–86 т</li>
                    <li>Гражданское и коммерческое строительство</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Серия SH</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Крутящий момент: от 300 до 460+ кНм</li>
                    <li>Глубина: до 90+ м</li>
                    <li>Диаметр: до 2 500 мм и более</li>
                    <li>Вес: 50–70+ т</li>
                    <li>Мосты, ГЭС, промышленные объекты</li>
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

export default JintSDDescriptionSection;