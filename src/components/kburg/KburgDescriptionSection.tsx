import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const KburgDescriptionSection = () => {
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
                Копрово-бурильные установки КБУРГ применяются в промышленном и гражданском строительстве. Навесное оборудование устанавливается на любые экскаваторы российского или импортного производства, подходящие по грузовому индексу.
              </p>
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Области применения</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                  <li>Погружение железобетонных и металлических свай длиной до 16 метров</li>
                  <li>Проведение шпунтовых работ</li>
                  <li>Устройство скважин строительного назначения</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Layers" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Особенности конструкции КБУРГ</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Сваепогружатели</p>
                  <p className="text-primary text-base mb-3 leading-relaxed">В качестве сваепогружателя используются сваебойные молоты как российского, так и импортного производства:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Молоты дизельные трубчатые — масса ударной части до 3 500 кг</li>
                    <li>Молоты дизельные штанговые — масса ударной части до 4 500 кг</li>
                    <li>Молоты гидравлические — масса ударной части до 5 000 кг</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Бурильное оборудование</p>
                  <p className="text-primary text-base mb-3 leading-relaxed">В качестве бурильного оборудования используются:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Гидравлические вращатели с крутящим моментом до 111 кН×м</li>
                    <li>Диаметр шнека до 1 200 мм</li>
                    <li>Российского и импортного производства</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Thermometer" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Условия эксплуатации</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-primary text-base">
                  <li>Диапазон рабочих температур: от −40°C до +40°C</li>
                  <li>Максимально допустимый уклон стройплощадки: 3 градуса</li>
                  <li>Максимально допустимая скорость ветра: 14 м/с</li>
                  <li>Полный ресурс работы: 10 000 часов (10 лет)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Сертификация</h3>
                </div>
                <p className="text-primary text-base md:text-lg leading-relaxed">
                  Техника прошла все этапы сертификации согласно требований Таможенного Союза и имеет <strong>Сертификат ТС</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KburgDescriptionSection;