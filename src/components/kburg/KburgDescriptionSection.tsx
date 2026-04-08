import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const KburgDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center">
            Копрово-бурильные установки КБУРГ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Hammer" size={18} className="text-accent" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-primary">Сваепогружатели</h4>
                </div>
                <p className="text-primary text-sm leading-relaxed mb-3">
                  В качестве сваепогружателя используются молоты сваебойные российского и импортного производства:
                </p>
                <ul className="space-y-2">
                  {[
                    "Молоты сваебойные дизельные трубчатые с массой ударной части до 3 500 кг",
                    "Молоты сваебойные дизельные штанговые с массой ударной части до 4 500 кг",
                    "Молоты сваебойные гидравлические с массой ударной части до 5 000 кг",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5 flex-shrink-0">✔</span>
                      <span className="text-sm text-primary leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Drill" size={18} className="text-accent" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-primary">Бурильное оборудование</h4>
                </div>
                <p className="text-primary text-sm leading-relaxed mb-3">
                  В качестве бурильного оборудования используются:
                </p>
                <ul className="space-y-2 mb-3">
                  {[
                    "Гидравлические вращатели с максимальным крутящим моментом на выходном валу до 111 кН×м",
                    "Диаметр шнека до 1 200 мм",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5 flex-shrink-0">✔</span>
                      <span className="text-sm text-primary leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-primary leading-relaxed">
                  Навесное оборудование КБУРГ устанавливается на любые экскаваторы российского или импортного производства, подходящие по грузовому индексу.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Thermometer" size={18} className="text-accent" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-primary">Условия эксплуатации</h4>
                </div>
                <ul className="space-y-2">
                  {[
                    "Диапазон рабочих температур: от −40°C до +40°C",
                    "Максимально допустимый уклон стройплощадки: 3 градуса",
                    "Максимально допустимая скорость ветра при работе: 14 м/с",
                    "Полный ресурс работы: 10 000 часов (10 лет)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5 flex-shrink-0">✔</span>
                      <span className="text-sm text-primary leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={18} className="text-accent" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-primary">Сертификация</h4>
                </div>
                <p className="text-primary text-sm leading-relaxed">
                  Техника прошла все этапы сертификации согласно требований Таможенного Союза и имеет <strong>Сертификат ТС</strong>, выданный органом по Сертификации.
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
