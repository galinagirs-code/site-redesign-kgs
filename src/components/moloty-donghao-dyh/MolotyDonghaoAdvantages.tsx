import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Leaf",
    title: "Экологичность",
    description: "Не образует выхлопных газов, соответствует современным экологическим требованиям.",
  },
  {
    icon: "Volume2",
    title: "Низкий уровень шума",
    description: "Уровень шума ~70 дБ — подходит для работы в городской среде и вблизи жилой застройки.",
  },
  {
    icon: "Zap",
    title: "Энергия удара 24–680 кН·м",
    description: "11 моделей серии DYH-3 — DYH-40 для задач любого масштаба.",
  },
  {
    icon: "TrendingUp",
    title: "Эффективность в плотных грунтах",
    description: "Увеличенный ход поршня обеспечивает стабильное погружение свай в тяжёлых условиях.",
  },
  {
    icon: "Sliders",
    title: "Контроль параметров",
    description: "Регулировка через панель управления или дистанционный контроллер в реальном времени.",
  },
  {
    icon: "Settings",
    title: "Адаптация к технике заказчика",
    description: "Установка на крановую или копровую установку, интеграция с гидросистемой базовой машины.",
  },
];

const MolotyDonghaoAdvantages = () => {
  return (
    <section id="advantages" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества гидравлических молотов DongHao
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-primary leading-relaxed text-base">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MolotyDonghaoAdvantages;
