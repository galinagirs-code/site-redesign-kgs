import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StarkeDescriptionSection = () => {
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Конструктивные особенности</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Телескопическая мачта", desc: "Облегчает подъём и установку свай, обеспечивает регулируемую высоту под различные задачи." },
                  { title: "Горизонтальное перемещение направляющей", desc: "Даёт возможность точного и удобного позиционирования свай." },
                  { title: "Раздвижная гусеничная база", desc: "Обеспечивает устойчивость на сложных и неровных грунтах." },
                  { title: "Компактные размеры", desc: "Упрощают транспортировку между объектами и перемещение по площадке." },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5">
                    <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">{item.title}</h4>
                    <p className="text-primary text-base md:text-lg">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Cpu" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Технологии и оснащение</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Гидравлическая система с пропорциональным управлением</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>плавность и точность операций</li>
                    <li>высокая чувствительность управления</li>
                    <li>комфорт и безопасность оператора</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Интеллектуальная система контроля</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>автоматический контроль вертикальности мачты</li>
                    <li>мониторинг рабочих параметров в реальном времени</li>
                    <li>повышение точности выполнения работ</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Область применения</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Сваебойные установки STARKE LH предназначены для выполнения следующих работ:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Забивка свай",
                  "Установка опор различных типов",
                  "Строительство фундаментов",
                  "Инфраструктурные проекты",
                  "Промышленное строительство",
                  "Работы в сложных грунтовых условиях",
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={12} className="text-accent" />
                    </div>
                    <p className="font-semibold text-primary text-base">{item}</p>
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

export default StarkeDescriptionSection;