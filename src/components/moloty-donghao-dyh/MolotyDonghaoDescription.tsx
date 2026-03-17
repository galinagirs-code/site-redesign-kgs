import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CheckItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2 text-sm text-primary/80">
    <span className="text-accent font-bold mt-0.5 flex-shrink-0">✓</span>
    <span>{text}</span>
  </li>
);

const MolotyDonghaoDescription = () => {
  return (
    <section id="description" className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Общая информация
          </h2>

          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Info" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary">О гидравлическом молоте DongHao</h3>
                </div>
                <p className="text-primary/80 text-base leading-relaxed mb-3">
                  Гидравлический молот DongHao — оборудование для забивки свай при строительстве мостов, зданий, промышленных и инфраструктурных объектов. Это современная альтернатива дизельным молотам с замкнутой гидравлической системой, обеспечивающей стабильную работу и точность регулировки давления и скорости.
                </p>
                <p className="text-primary/80 text-base leading-relaxed">
                  Питание осуществляется от гидросистемы базовой машины либо от отдельной гидростанции DongHao. Возможна установка на крановую или копровую установку, а также интеграция с базовой машиной.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Leaf" size={20} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-primary">Ключевые преимущества</h3>
                  </div>
                  <ul className="space-y-2">
                    <CheckItem text="Экологичность — не образует выхлопных газов, соответствует современным экологическим требованиям" />
                    <CheckItem text="Низкий уровень шума (~70 дБ) — подходит для работы в городской среде и вблизи жилой застройки" />
                    <CheckItem text="Энергия удара 24–680 кН·м — 11 моделей серии DYH-3 — DYH-40 для задач любого масштаба" />
                    <CheckItem text="Эффективность в плотных грунтах — увеличенный ход поршня обеспечивает стабильное погружение" />
                    <CheckItem text="Контроль параметров в реальном времени через панель управления или дистанционный контроллер" />
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={20} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-primary">Типы свай и применение</h3>
                  </div>
                  <p className="text-primary/70 text-sm mb-3">Работает со всеми основными типами свай:</p>
                  <ul className="space-y-2 mb-4">
                    <CheckItem text="Круглые и квадратные железобетонные сваи" />
                    <CheckItem text="Цементно-песчаные сваи" />
                    <CheckItem text="Стальные H-сваи" />
                    <CheckItem text="Шпунтовые сваи" />
                  </ul>
                  <p className="text-primary/70 text-sm mb-2 font-medium">Сферы применения:</p>
                  <ul className="space-y-2">
                    <CheckItem text="Строительство мостов и путепроводов" />
                    <CheckItem text="Устройство свайных фундаментов" />
                    <CheckItem text="Портовое и береговое строительство" />
                    <CheckItem text="Энергетические и промышленные проекты" />
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary">Принцип работы</h3>
                </div>
                <p className="text-primary/80 text-base leading-relaxed mb-4">
                  Рабочая жидкость подаётся под высоким давлением к цилиндру молота, поднимая ударную часть на заданную высоту. После выравнивания давления поршень свободно падает и передаёт энергию на сваю. Процесс повторяется автоматически.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { icon: "Activity", text: "Стабильная энергия удара" },
                    { icon: "TrendingUp", text: "Высокая производительность" },
                    { icon: "Shield", text: "Снижение динамических нагрузок" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-accent/5 rounded-lg px-4 py-3">
                      <Icon name={item.icon as "Activity"} size={18} className="text-accent flex-shrink-0" />
                      <span className="text-sm text-primary font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Layers" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary">Основные компоненты</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { title: "Гидравлический цилиндр", desc: "Отвечает за подъём ударной части" },
                    { title: "Гидроаккумулятор", desc: "Снижает отдачу и обеспечивает корректную работу системы" },
                    { title: "Поршневой шток", desc: "Передаёт ударную нагрузку на наголовник" },
                    { title: "Система регулировки хода", desc: "Позволяет контролировать высоту падения" },
                    { title: "Рама усиленной конструкции", desc: "Проходит контроль качества и испытания на прочность" },
                    { title: "Наголовник с амортизацией", desc: "Снижает нагрузку на конструкцию и уровень шума" },
                  ].map((comp, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      <div>
                        <p className="text-sm font-semibold text-primary">{comp.title}</p>
                        <p className="text-xs text-primary/60 mt-0.5">{comp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MolotyDonghaoDescription;
