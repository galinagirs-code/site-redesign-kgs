import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const KruglyeDescriptionSection = () => {
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Назначение и принцип работы</h3>
              </div>
              <p className="text-primary mb-6 text-base md:text-lg leading-relaxed">
                Сваескусыватель для круглых свай — навесное гидравлическое оборудование, предназначенное для срезки верхней части круглых железобетонных свай до проектной отметки. Устанавливается на экскаватор с гидросистемой. Статическое давление разрушает бетонную часть сваи, не повреждая арматурные стержни.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Модульная система</h4>
                  <p className="text-primary text-base md:text-lg">Все модули унифицированы и имеют одинаковый размер. Количество модулей определяет рабочий диаметр — от 400 до 2500 мм.</p>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Дополнительные возможности</h4>
                  <ul className="list-disc pl-5 space-y-1 text-primary text-base md:text-lg">
                    <li>Дистанционное управление (опция)</li>
                    <li>Простая замена рабочих элементов</li>
                    <li>Длительный срок службы</li>
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Области применения</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-primary mb-2 text-base font-medium">Применяется при строительстве:</p>
                  <ul className="list-disc pl-5 space-y-1 text-primary text-base">
                    <li>фундаментов гражданских и промышленных зданий</li>
                    <li>высокоскоростных железнодорожных мостов</li>
                    <li>дорожных и мостовых конструкций</li>
                    <li>крупных инфраструктурных объектов</li>
                  </ul>
                </div>
                <div>
                  <p className="text-primary mb-2 text-base font-medium">Подходит для типов свай:</p>
                  <ul className="list-disc pl-5 space-y-1 text-primary text-base">
                    <li>фундаментные сваи</li>
                    <li>дорожные и мостовые сваи</li>
                    <li>сваи для высокоскоростных железных дорог</li>
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

export default KruglyeDescriptionSection;
