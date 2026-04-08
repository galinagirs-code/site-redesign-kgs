import Icon from "@/components/ui/icon";

const workSteps = [
  { icon: "Lock", title: "Фиксация сваи", desc: "Установка фиксирует сваю гидравлическими зажимами (гриппером)" },
  { icon: "ArrowDown", title: "Статическое давление", desc: "Создаётся статическое давление до 1000+ тонн" },
  { icon: "ChevronsDown", title: "Плавное вдавливание", desc: "Свая плавно вдавливается в грунт без ударов и вибраций" },
  { icon: "MoveRight", title: "Перемещение", desc: "Установка самоходно перемещается к следующей свае" },
];

const forceSources = [
  { icon: "Package", label: "Собственный вес машины" },
  { icon: "Gauge", label: "Гидравлические цилиндры" },
  { icon: "BarChart2", label: "Система противовесов" },
];

const applications = [
  "Жилое и промышленное строительство",
  "Фундаменты в городской застройке",
  "Работы рядом с существующими зданиями",
  "Мосты и инфраструктура",
  "Плотная застройка и чувствительные зоны",
];

const structuralFeatures = [
  "Гидравлическая система вдавливания",
  "Зажимной механизм (гриппер) для фиксации сваи",
  "Система противовесов",
  "Самоходная платформа (шагающий тип)",
  "Мачта / направляющая для сваи",
  "Система бокового и углового вдавливания (для крайних свай)",
];

const JuliZYSDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center">
            Общая информация
          </h2>

          <p className="text-base md:text-lg text-primary leading-relaxed mb-8 max-w-4xl mx-auto text-center">
            Принцип работы сваевдавливающих установок (серия ZYS) основан на использовании собственного веса установки и противовесов, которые создают усилие для плавного погружения свай в грунт. В отличие от вибропогружателей и молотов — нет вибрации, нет шума, минимальное воздействие на окружающую застройку.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Принцип работы</h3>
              <div className="space-y-4">
                {workSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={step.icon} size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">{step.title}</p>
                      <p className="text-sm text-primary/70">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-heading font-bold text-primary mt-8 mb-4">Источники усилия</h3>
              <div className="grid grid-cols-3 gap-3">
                {forceSources.map((src, idx) => (
                  <div key={idx} className="text-center p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <Icon name={src.icon} size={28} className="text-accent mx-auto mb-2" />
                    <p className="text-sm font-medium text-primary">{src.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Конструктивные особенности</h3>
              <div className="space-y-2 mb-8">
                {structuralFeatures.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                    <span className="text-accent font-bold mt-0.5">&#10004;</span>
                    <span className="text-primary">{f}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-heading font-bold text-primary mb-4">Области применения</h3>
              <div className="space-y-2">
                {applications.map((app, idx) => (
                  <div key={idx} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                    <Icon name="MapPin" size={16} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-primary">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JuliZYSDescriptionSection;