import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const NagolovnikiDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                  Конструкция наголовника
                </h3>
              </div>
              <p className="text-primary mb-6 text-base md:text-lg leading-relaxed">
                Стандартный наголовник состоит из стального корпуса с внутренней полостью под сваю, амортизирующей подушки (обычно из твёрдых пород дерева или специального композитного материала) и системы крепления. Некоторые модели оснащены механизмом центрирования для точной установки на сваю.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Состав наголовника</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Стальной корпус с внутренней полостью под сваю</li>
                    <li>Амортизирующая подушка (дерево или композит)</li>
                    <li>Система крепления к молоту</li>
                    <li>Механизм центрирования (в ряде моделей)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Материал вкладыша</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Твёрдые породы дерева — оптимальный выбор</li>
                    <li>Специальный композитный материал</li>
                    <li>Картон — только кратковременно</li>
                  </ul>
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                  Как правильно подобрать наголовник
                </h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Наголовник подбирается строго под тип и сечение сваи, а также под конкретную модель молота.
              </p>
              <p className="text-primary mb-2 text-base font-medium">Ключевые параметры при выборе:</p>
              <ul className="list-disc pl-5 space-y-1 text-primary text-base mb-4">
                <li>Сечение или диаметр сваи</li>
                <li>Тип молота (дизельный штанговый, трубчатый или гидравлический)</li>
                <li>Зазор между наголовником и сваей — не более 5–10 мм</li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5 mt-4">
                <p className="text-primary font-semibold mb-2 text-base">Недопустимые ошибки при подборе:</p>
                <ul className="list-disc pl-5 space-y-1 text-primary text-base">
                  <li>Использование наголовника большего сечения, чем свая</li>
                  <li>Приваривание пластин для уменьшения размера — это ослабляет конструкцию</li>
                  <li>Неправильный зазор приводит к сколам и разрушению оголовка</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="ListOrdered" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                  Порядок установки
                </h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Наголовник устанавливается непосредственно перед забивкой каждой сваи.
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-primary text-base mb-6">
                <li>Поднять молот на 1–1,5 м над головой сваи</li>
                <li>Установить наголовник с амортизирующей подкладкой на оголовок</li>
                <li>Закрепить с помощью тросов или фиксаторов</li>
                <li>Проверить зазор — не более 5–10 мм</li>
                <li>Приступить к забивке</li>
              </ol>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-primary font-semibold mb-2 text-base md:text-lg">Толщина амортизирующей подкладки:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                  <li>Стандартные условия — 50–80 мм</li>
                  <li>Мягкие грунты — 100–150 мм</li>
                </ul>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default NagolovnikiDescriptionSection;