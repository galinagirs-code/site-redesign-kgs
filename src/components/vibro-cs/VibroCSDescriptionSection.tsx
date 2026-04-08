import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const VibroCSDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-white">
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
                Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS) предназначены для погружения и извлечения шпунтовых свай, труб и других свайных элементов с использованием экскаватора. Оборудование монтируется на стрелу экскаватора и питается от его гидравлической системы.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Области применения</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Шпунтовые ограждения</li>
                    <li>Установка труб и металлических свай</li>
                    <li>Берегоукрепление</li>
                    <li>Фундаменты в городской застройке</li>
                    <li>Работы в ограниченном пространстве</li>
                    <li>Строительство мостов и гидротехнических сооружений</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Типы погружаемых элементов</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Шпунтовые сваи (ларсены)</li>
                    <li>Стальные трубы</li>
                    <li>Двутавровые профили (H-beam)</li>
                    <li>Железобетонные сваи</li>
                    <li>Швеллер и уголок</li>
                    <li>Анкеры и арматура</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="RefreshCw" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Принцип работы</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Вибрация формируется парой эксцентриков, вращающихся в противоположных направлениях, что усиливает вертикальную составляющую силы. Грунт временно разжижается, и свая легко погружается под собственным весом и усилием машины.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-3 text-base md:text-lg">Последовательность:</p>
                  <ol className="list-decimal pl-5 space-y-2 text-primary text-base md:text-lg">
                    <li>Вращающиеся эксцентрики создают центробежную силу</li>
                    <li>Вибрации передаются на сваю через боковой зажим</li>
                    <li>Сопротивление грунта снижается</li>
                    <li>Свая погружается или извлекается</li>
                  </ol>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-3 text-base md:text-lg">Подключение:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Монтаж на стрелу экскаватора</li>
                    <li>Гидравлический привод от базовой машины</li>
                    <li>Боковой зажим фиксирует сваю сбоку</li>
                    <li>Нижний зажим — дополнительная фиксация (опционально)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Layers" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Конструктивные особенности</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-3 text-base md:text-lg">Основные узлы:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Боковой зажим (side grip) — захват сваи сбоку</li>
                    <li>Нижний зажим (опционально) — дополнительная фиксация</li>
                    <li>Поворотный механизм до 360°</li>
                    <li>Наклонный механизм до 45°</li>
                    <li>Вибрационный блок с эксцентриками</li>
                    <li>Гидравлический привод от экскаватора</li>
                    <li>Демпфирующие элементы (резиновые амортизаторы)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-3 text-base md:text-lg">Захваты (челюсти):</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Изготовлены из износостойкой импортной стали</li>
                    <li>Обработка на ЧПУ (CNC)</li>
                    <li>Высокая прочность и долговечность</li>
                    <li>Быстросменная конструкция</li>
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

export default VibroCSDescriptionSection;
