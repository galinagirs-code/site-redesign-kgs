import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "FlaskConical",
    title: "Первая отечественная разработка",
    description: "КБУРГ — первая российская разработка, совмещающая сваебойное и бурильное оборудование на одной копровой мачте.",
  },
  {
    icon: "Tractor",
    title: "Совместимость с любым экскаватором",
    description: "Навесное оборудование устанавливается на любые гусеничные экскаваторы российского и импортного производства от 18 тонн.",
  },
  {
    icon: "Hammer",
    title: "Универсальное сваебойное оборудование",
    description: "Поддерживаются дизельные трубчатые, штанговые и гидравлические молоты с массой ударной части до 5 000 кг.",
  },
  {
    icon: "Drill",
    title: "Бурильное оборудование в комплекте",
    description: "Гидравлические вращатели с крутящим моментом до 111 кН×м и диаметром шнека до 1 200 мм для буровых работ.",
  },
  {
    icon: "Award",
    title: "Сертификат Таможенного Союза",
    description: "Техника прошла все этапы сертификации согласно требованиям ТС и имеет официальный сертификат соответствия.",
  },
  {
    icon: "Thermometer",
    title: "Широкий температурный диапазон",
    description: "Эксплуатация КБУРГ производится при температурах от −40°C до +40°C, что позволяет работать в любых климатических условиях России.",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-primary/70 leading-relaxed">{benefit.description}</p>
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
