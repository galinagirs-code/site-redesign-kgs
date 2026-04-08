import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const KburgDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Общая информация
          </h2>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Копрово-бурильная установка КБУРГ осуществляет погружение (забивку) железобетонных или металлических свай длиной до 16 метров с максимальным сечением 400×400 мм, а также устройство скважин строительного назначения и шпунтовые работы.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Области применения</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Погружение железобетонных и металлических свай длиной до 16 метров</li>
                    <li>Проведение шпунтовых работ</li>
                    <li>Устройство скважин строительного назначения</li>
                    <li>Промышленное и гражданское строительство</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Базовые машины</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Гусеничные экскаваторы от 18 тонн</li>
                    <li>Российского производства (серии 250–500)</li>
                    <li>Импортного производства</li>
                    <li>Подбор по грузовому индексу</li>
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
                    <Icon name="Hammer" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Сваепогружатели</h3>
                </div>
                <p className="text-primary mb-3 text-base md:text-lg leading-relaxed">
                  В качестве сваепогружателя используются молоты сваебойные российского и импортного производства:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                  <li>Молоты сваебойные дизельные трубчатые с массой ударной части до 3 500 кг</li>
                  <li>Молоты сваебойные дизельные штанговые с массой ударной части до 4 500 кг</li>
                  <li>Молоты сваебойные гидравлические с массой ударной части до 5 000 кг</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Drill" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Бурильное оборудование</h3>
                </div>
                <p className="text-primary mb-3 text-base md:text-lg leading-relaxed">
                  В качестве бурильного оборудования используются:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                  <li>Гидравлические вращатели с максимальным крутящим моментом на выходном валу до 111 кН×м</li>
                  <li>Диаметр шнека до 1 200 мм</li>
                </ul>
                <p className="text-primary mt-3 text-base md:text-lg leading-relaxed">
                  Навесное оборудование КБУРГ устанавливается на любые экскаваторы российского или импортного производства, подходящие по грузовому индексу.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Сертификация и эксплуатация</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-primary text-base md:text-lg leading-relaxed">
                    Техника прошла все этапы сертификации согласно требований Таможенного Союза и имеет <strong>Сертификат ТС</strong>, выданный органом по сертификации.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Условия эксплуатации</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Диапазон температур: от −40°C до +40°C</li>
                    <li>Максимальный уклон стройплощадки: 3 градуса</li>
                    <li>Максимальная скорость ветра: 14 м/с</li>
                    <li>Ресурс работы: 10 000 часов (10 лет)</li>
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

export default KburgDescriptionSection;
