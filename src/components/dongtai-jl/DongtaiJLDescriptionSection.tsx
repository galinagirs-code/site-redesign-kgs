import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DongtaiJLDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Общая информация</h2>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary">О серии JL</h3>
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed">
                Буровые установки JuLi серии JL — это надёжное и экономически эффективное решение для выполнения задач горизонтально-направленного бурения, особенно в условиях городской застройки и ограниченного пространства.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Settings" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary">Технические особенности</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Полностью гидравлическая система управления",
                    "Гусеничное шасси с низким центром тяжести",
                    "Дизельные двигатели Cummins мощностью 60–130 кВт",
                    "Регулируемый угол бурения 10–21°",
                    "Интегрированная компоновка узлов для компактности и удобства транспортировки",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-0.5">&#10004;</span>
                      <span className="text-base text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Gauge" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary">Производительность</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Тяговое усилие (push/pull): 100–250 кН",
                    "Крутящий момент: 2400–8000 Н·м",
                    "Скорость вращения: до 120 об/мин",
                    "Производительность насоса: 200–240 л/мин",
                    "Длина буровых труб: 2–3 м",
                    "Диаметр расширения: до Ø600 мм",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-0.5">&#10004;</span>
                      <span className="text-base text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="HardHat" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary">Область применения</h3>
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
                Установки серии JL применяются для бестраншейной прокладки коммуникаций в самых разных условиях:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Железные и автомобильные дороги",
                  "Городские инженерные сети",
                  "Переходы под реками и водоёмами",
                  "Плотная городская застройка",
                  "Трубопроводы (вода, газ, нефть)",
                  "Линии электроснабжения и телекоммуникаций",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-0.5">&#10004;</span>
                    <span className="text-base text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DongtaiJLDescriptionSection;