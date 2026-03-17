import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <span className="text-accent font-bold text-base md:text-lg mt-0.5 flex-shrink-0">✓</span>
    <span className="text-base md:text-lg text-primary">{text}</span>
  </div>
);

const MolotyDonghaoDescription = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-8">
            Общая информация
          </h2>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">О гидравлическом молоте DongHao</h3>
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-3">
                Гидравлический молот DongHao — профессиональное оборудование для забивки свай при строительстве мостов, зданий, промышленных и инфраструктурных объектов. Это современная альтернатива дизельным молотам.
              </p>
              <p className="text-base md:text-lg text-primary leading-relaxed">
                Замкнутая гидравлическая система обеспечивает стабильную работу и точность регулировки давления и скорости. Питание осуществляется от гидросистемы базовой машины либо от отдельной гидростанции DongHao.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Leaf" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Ключевые преимущества</h3>
              </div>
              <div className="space-y-2">
                <CheckItem text="Экологичность — не образует выхлопных газов, соответствует современным экологическим требованиям" />
                <CheckItem text="Низкий уровень шума (~70 дБ) — подходит для работы в городской среде и вблизи жилой застройки" />
                <CheckItem text="Энергия удара 24–680 кН·м — 11 моделей серии DYH-3 — DYH-40 для задач любого масштаба" />
                <CheckItem text="Эффективность в плотных грунтах — увеличенный ход поршня обеспечивает стабильное погружение свай" />
                <CheckItem text="Контроль параметров в реальном времени — регулировка через панель управления или дистанционный контроллер" />
                <CheckItem text="Адаптация к технике заказчика — установка на крановую или копровую установку, интеграция с базовой машиной" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Типы свай и сферы применения</h3>
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
                Оборудование предназначено для работы с различными типами свай:
              </p>
              <div className="space-y-2 mb-5">
                <CheckItem text="Круглые и квадратные железобетонные сваи" />
                <CheckItem text="Цементно-песчаные сваи" />
                <CheckItem text="Стальные H-сваи" />
                <CheckItem text="Шпунтовые сваи" />
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
                Сферы применения:
              </p>
              <div className="space-y-2">
                <CheckItem text="Строительство мостов и путепроводов" />
                <CheckItem text="Устройство свайных фундаментов" />
                <CheckItem text="Портовое и береговое строительство" />
                <CheckItem text="Реализация энергетических проектов" />
                <CheckItem text="Промышленное строительство" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Принцип работы</h3>
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
                Рабочая жидкость подаётся под высоким давлением к цилиндру молота, поднимая ударную часть на заданную высоту. После выравнивания давления поршень свободно падает и передаёт энергию на сваю. Процесс повторяется автоматически.
              </p>
              <div className="space-y-2">
                <CheckItem text="Стабильная энергия удара" />
                <CheckItem text="Высокая производительность" />
                <CheckItem text="Снижение динамических нагрузок на оборудование" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Layers" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Основные компоненты</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Гидравлический цилиндр", desc: "Отвечает за подъём ударной части" },
                  { title: "Гидроаккумулятор", desc: "Снижает отдачу и обеспечивает корректную работу системы" },
                  { title: "Поршневой шток", desc: "Передаёт ударную нагрузку на наголовник" },
                  { title: "Система регулировки хода", desc: "Позволяет контролировать высоту падения" },
                  { title: "Рама усиленной конструкции", desc: "Проходит контроль качества и испытания на прочность" },
                  { title: "Наголовник с амортизацией", desc: "Снижает нагрузку на конструкцию и уровень шума" },
                ].map((comp, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base md:text-lg mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-base md:text-lg text-primary">
                      <span className="font-semibold">{comp.title}</span> — {comp.desc}
                    </span>
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

export default MolotyDonghaoDescription;
