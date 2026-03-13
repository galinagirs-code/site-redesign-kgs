import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const KvadratnyeDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-gray-50">
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
                Гидравлический сваескусыватель предназначен для разрушения и обрезки железобетонных свай, включая монолитные и сборные конструкции сечением от 250 до 650 мм.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Монтаж на технику</h4>
                  <p className="text-primary text-base md:text-lg">Устанавливается на экскаватор с весом от 15 тонн с гидросистемой.</p>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Производительность</h4>
                  <p className="text-primary text-base md:text-lg">Обрезка одной сваи занимает около 4 минут — высокая эффективность на строительной площадке.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Области применения</h3>
              </div>
              <p className="text-primary mb-2 text-base font-medium">Сваескусыватель для квадратных свай широко используется при:</p>
              <ul className="list-disc pl-5 space-y-1 text-primary text-base mb-4">
                <li>строительстве высокоскоростных железнодорожных мостов</li>
                <li>устройстве свайных фундаментов гражданских зданий</li>
                <li>устройстве свайных фундаментов промышленных зданий</li>
                <li>крупномасштабных инфраструктурных проектах</li>
              </ul>
              <p className="text-primary mb-2 text-base font-medium">Подходит для обработки следующих видов свай:</p>
              <ul className="list-disc pl-5 space-y-1 text-primary text-base">
                <li>монолитные железобетонные сваи</li>
                <li>сборные железобетонные сваи</li>
                <li>сваи сечением от 250×250 до 650×650 мм</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Конструктивные преимущества</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Конструкция разработана с высоким запасом прочности и безопасности, что обеспечивает длительный срок эксплуатации.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Гидравлическая система:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Усиленная защита гидроцилиндров</li>
                    <li>Импортные ключевые компоненты</li>
                    <li>Повышенная надёжность и стабильность</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Рабочие элементы:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Зубья из высокопрочного сплава</li>
                    <li>Современные технологии обработки</li>
                    <li>Увеличенный срок службы зубьев</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KvadratnyeDescriptionSection;
