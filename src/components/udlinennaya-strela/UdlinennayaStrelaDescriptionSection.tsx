import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const UdlinennayaStrelaDescriptionSection = () => {
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
                Удлинённая стрела устанавливается на экскаватор и предназначена для увеличения рабочего радиуса и зоны выполнения работ. Эффективна, когда использование стандартной стрелы затруднено или невозможно.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Область применения</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Увеличение рабочего радиуса экскаватора</li>
                    <li>Выполнение работ на удалении от базовой машины</li>
                    <li>Работа в условиях ограниченного доступа</li>
                    <li>Дноуглубительные и мелиоративные работы</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Совместимость</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Ковши различного типа</li>
                    <li>Гидромолоты</li>
                    <li>Рыхлители</li>
                    <li>Грейферы и другое навесное оборудование</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Layers" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Конструкция и производство</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Конструкция разработана с высоким запасом прочности и безопасности для работы в самых тяжёлых условиях.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Материалы и сварка:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Высокопрочная конструкционная сталь</li>
                    <li>Коробчатая сварная конструкция</li>
                    <li>Усиленные зоны в местах максимальных нагрузок</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Комплектация:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Стрела и рукоять в сборе</li>
                    <li>Гидравлические линии</li>
                    <li>Монтажный комплект</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Settings" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Индивидуальное изготовление</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Стрела изготавливается под конкретную модель экскаватора с учётом всех параметров базовой машины.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Учитываемые параметры:</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Модель и масса базового экскаватора</li>
                    <li>Требуемый рабочий вылет</li>
                    <li>Масса и тип навесного оборудования</li>
                    <li>Условия эксплуатации</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Преимущества подхода:</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Идеальное сопряжение с базовой машиной</li>
                    <li>Оптимальная балансировка нагрузок</li>
                    <li>Максимальный срок службы</li>
                    <li>Полное соответствие задачам</li>
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

export default UdlinennayaStrelaDescriptionSection;