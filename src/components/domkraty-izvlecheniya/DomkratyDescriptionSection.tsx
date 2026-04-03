import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DomkratyDescriptionSection = () => {
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Назначение и принцип работы</h3>
              </div>
              <p className="text-primary mb-6 text-base md:text-lg leading-relaxed">
                Свайный домкрат (серия PTM) — гидравлическое оборудование для извлечения свай из грунта методом поэтапного поднятия. Пресс захватывает сваю, гидравлика поднимает её на заданное расстояние, затем цикл повторяется до полного извлечения.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Типы грунтов</h4>
                  <p className="text-primary text-base md:text-lg">Подходит для работы в глинистых и песчаных грунтах, а также в грунтах с небольшим содержанием гравия.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Извлекаемые конструкции</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>стальные трубчатые сваи</li>
                    <li>шпунт Ларсена</li>
                    <li>двутавровые балки</li>
                    <li>швеллеры</li>
                  </ul>
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Конструктивные особенности</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Гидравлическая система:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Двойной цилиндр: основной — для вытягивания, дополнительный — для ускорения</li>
                    <li>Электрическая гидростанция — экологичное решение</li>
                    <li>Возможность перемещения цилиндра влево и вправо</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Управление и оснастка:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Дистанционное управление на 360°</li>
                    <li>Сменная подвеска для балок шириной 300–800 мм</li>
                    <li>Возможность изготовления под балки толщиной до 900 мм</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="AlertCircle" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Примечание</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Гидростанция</h4>
                  <p className="text-primary text-base md:text-lg">Оборудование используется совместно с гидравлической станцией, которая поставляется отдельно.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Электропитание</h4>
                  <p className="text-primary text-base md:text-lg">Стандартное рабочее напряжение — 380 В. При необходимости параметры могут быть адаптированы под условия объекта.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DomkratyDescriptionSection;
