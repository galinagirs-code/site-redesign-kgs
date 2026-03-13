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
                Сваескусыватель для круглых свай — навесное гидравлическое оборудование, предназначенное для срезки верхней части круглых железобетонных свай до проектной отметки.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Монтаж на технику</h4>
                  <p className="text-primary text-base md:text-lg">Устанавливается на экскаватор, кран или другую строительную технику с гидросистемой.</p>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Принцип разрушения</h4>
                  <p className="text-primary text-base md:text-lg">Статическое давление разрушает бетонную часть сваи, не повреждая арматурные стержни.</p>
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
              <p className="text-primary mb-2 text-base font-medium">Сваескусыватель для круглых свай применяется при:</p>
              <ul className="list-disc pl-5 space-y-1 text-primary text-base mb-4">
                <li>строительстве фундаментов гражданских и промышленных зданий</li>
                <li>строительстве высокоскоростных железнодорожных мостов</li>
                <li>дорожном и мостовом строительстве</li>
                <li>устройстве свайных фундаментов любого типа</li>
              </ul>
              <p className="text-primary mb-2 text-base font-medium">Подходит для разрушения следующих типов свай:</p>
              <ul className="list-disc pl-5 space-y-1 text-primary text-base">
                <li>фундаментные сваи</li>
                <li>дорожные и мостовые сваи</li>
                <li>сваи для высокоскоростных железных дорог</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Layers" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Модульная конструкция</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Ключевое преимущество — модульная система сборки. Все модули унифицированы и имеют одинаковый размер.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Адаптация под диаметр:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Малый диаметр — меньше модулей</li>
                    <li>Большой диаметр — больше модулей</li>
                    <li>Максимальный диаметр до 2500 мм</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Дополнительные возможности:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Дистанционное управление (опция)</li>
                    <li>Надёжная конструкция, длительный срок службы</li>
                    <li>Простая замена рабочих элементов</li>
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
