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
                  <Icon name="Target" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Назначение</h3>
              </div>
              <p className="text-primary mb-2 text-base font-medium">Удлинённая стрела применяется для:</p>
              <ul className="list-disc pl-5 space-y-1 text-primary text-base mb-4">
                <li>увеличения рабочего радиуса экскаватора</li>
                <li>выполнения работ на удалении от базовой машины</li>
                <li>работы с различными видами навесного оборудования</li>
                <li>применения в условиях ограниченного доступа</li>
              </ul>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Конструкция</h4>
                  <ul className="list-disc pl-5 space-y-1 text-primary text-base md:text-lg">
                    <li>Коробчатая сварная конструкция</li>
                    <li>Высокопрочные конструкционные стали</li>
                    <li>Усиленные зоны в местах максимальных нагрузок</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Совместимость</h4>
                  <p className="text-primary text-base md:text-lg">Возможна работа с различными видами навесного оборудования — выбор зависит от задач и параметров базовой машины.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Settings" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Индивидуальное изготовление</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Стрела изготавливается под конкретную модель экскаватора с учётом требуемого вылета, массы навесного оборудования и условий эксплуатации.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Учитываемые параметры:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Модель и масса базового экскаватора</li>
                    <li>Требуемый рабочий вылет</li>
                    <li>Масса и тип навесного оборудования</li>
                    <li>Условия эксплуатации</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Комплектация:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Стрела</li>
                    <li>Рукоять</li>
                    <li>Гидролинии</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Технические параметры</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Ниже приведены типовые значения. Фактические параметры зависят от модели экскаватора и требуемой конфигурации.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Основные характеристики:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Тип: удлинённая стрела</li>
                    <li>Общая длина: 10–22 м</li>
                    <li>Рабочий вылет: до 18–20 м</li>
                    <li>Базовый экскаватор: 18–45 т</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Материал:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Высокопрочная конструкционная сталь</li>
                    <li>Повышенная стойкость к ударным нагрузкам</li>
                    <li>Увеличенный срок службы</li>
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
