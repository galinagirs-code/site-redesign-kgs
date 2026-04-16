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
                Shanghai Jintai Construction Machinery Co., Ltd. — государственная машиностроительная компания Китая, основанная в 1921 году и входящая в число крупнейших производителей строительной техники в стране.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Более 100 лет в машиностроении</li>
                    <li>С 1996 по 2003 год — совместное производство с немецкой Bauer</li>
                    <li>Входит в число крупнейших производителей строительной техники Китая</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Высокий уровень качества и передовые технологии</li>
                    <li>Широкая линейка буровых машин для различных задач</li>
                    <li>Продукция поставляется на международные рынки</li>
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Описание серии SH</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Буровые установки серии SH — новое поколение гидравлических машин с усиленной треугольной конструкцией, разработанных с применением современных технологий и инженерных решений. По своим характеристикам установки превосходят мировые аналоги.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Оборудование обеспечивает</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Высокую производительность бурения</li>
                    <li>Надёжную работу в сложных условиях</li>
                    <li>Простоту эксплуатации</li>
                    <li>Универсальность применения</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Область применения</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Строительство высотных зданий</li>
                    <li>Мостовое строительство</li>
                    <li>Инфраструктурные проекты</li>
                    <li>Устройство свайных фундаментов</li>
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
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Усиленная треугольная конструкция мачты</li>
                    <li>Гидравлическая система нового поколения</li>
                    <li>Возможность работы с различными типами келли-баров</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Совместимость с навесным оборудованием мировых брендов</li>
                    <li>Высокая эффективность при глубоком бурении</li>
                    <li>Работа в водонасыщенных и нестабильных грунтах</li>
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Особенности бурения</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Параметры бурения зависят от конфигурации оборудования и рассчитываются индивидуально под задачи проекта.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Расчёт глубины бурения</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Стандартная длина бура: 1,7 м</li>
                    <li>При использовании келли-баров: (кол-во секций × длина секции) − 0,2 м</li>
                    <li>Возможна поставка келли-баров различной длины по запросу</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Подбор келли-бара</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Тип подбирается по глубине бурения</li>
                    <li>Учитывается требуемый крутящий момент</li>
                    <li>Учитывается усилие задавливания</li>
                    <li>Суммарный вес келли-бара и бурового инструмента должен соответствовать мощности лебёдки</li>
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
