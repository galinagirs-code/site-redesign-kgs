import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const workSteps = [
  { num: "1", title: "Фиксация сваи", desc: "Установка захватывает сваю гидравлическими зажимами (гриппером)" },
  { num: "2", title: "Статическое давление", desc: "Создаётся статическое усилие вдавливания до 1000+ тонн" },
  { num: "3", title: "Плавное вдавливание", desc: "Свая плавно погружается в грунт без ударов и вибраций" },
  { num: "4", title: "Перемещение", desc: "Установка самоходно перемещается к следующей свае" },
];

const JuliZYSDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Общая информация
          </h2>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                  Назначение установок Dongtai Juli (серия ZYS)
                </h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Принцип работы сваевдавливающих установок (серия ZYS) основан на использовании собственного веса установки и противовесов, которые создают усилие для плавного погружения свай в грунт. В отличие от вибропогружателей и молотов — нет вибрации, нет шума, минимальное воздействие на окружающую застройку.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Поддерживаемые типы свай</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Железобетонные сваи квадратного сечения</li>
                    <li>Железобетонные круглые сваи</li>
                    <li>Стальные трубчатые сваи</li>
                    <li>Стальной шпунт</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Области применения</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Жилое и промышленное строительство</li>
                    <li>Фундаменты в городской застройке</li>
                    <li>Работы рядом с существующими зданиями</li>
                    <li>Мосты, инфраструктура, плотная застройка</li>
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
                    <Icon name="Cog" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Принцип работы</h3>
                </div>
                <p className="text-primary mb-3 text-base md:text-lg leading-relaxed">
                  Установка последовательно выполняет четыре операции для погружения каждой сваи:
                </p>
                <ol className="list-decimal pl-5 space-y-1.5 text-primary text-base md:text-lg mb-3">
                  {workSteps.map((s) => (
                    <li key={s.num}>
                      <span className="font-medium">{s.title}</span> — {s.desc}
                    </li>
                  ))}
                </ol>
                <p className="text-primary text-base md:text-lg leading-relaxed">
                  Усилие создаётся за счёт собственного веса машины, гидравлических цилиндров и системы противовесов.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Info" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Конструктивные особенности</h3>
                </div>
                <p className="text-primary mb-3 text-base md:text-lg leading-relaxed">
                  Ключевые конструктивные решения установок серии ZYS:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                  <li>Гидравлическая система вдавливания</li>
                  <li>Зажимной механизм (гриппер) для фиксации сваи</li>
                  <li>Система противовесов</li>
                  <li>Самоходная платформа (шагающий тип)</li>
                  <li>Мачта / направляющая для сваи</li>
                  <li>Система бокового и углового вдавливания (для крайних свай)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JuliZYSDescriptionSection;
