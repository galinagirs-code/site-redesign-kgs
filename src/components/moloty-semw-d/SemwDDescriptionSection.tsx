import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SemwDDescriptionSection = () => {
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
                Дизельные трубчатые молоты серии D предназначены для забивки свай в различных
                грунтовых условиях. Трубчатая конструкция обеспечивает более высокий КПД по
                сравнению со штанговыми молотами за счёт лучшего направления энергии удара и
                меньших потерь.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Область применения</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Мостовое строительство</li>
                    <li>Портовая инфраструктура</li>
                    <li>Энергетика, включая ветроэнергетику</li>
                    <li>Высотное строительство</li>
                    <li>Транспортные проекты</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Типы свай</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Железобетонные сваи</li>
                    <li>Стальные (H-beam)</li>
                    <li>Трубчатые сваи</li>
                    <li>Шпунтовые сваи</li>
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Ключевые особенности конструкции</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Трубчатая конструкция:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Выше КПД по сравнению с штанговыми молотами</li>
                    <li>Лучше направляется энергия удара</li>
                    <li>Меньше потерь энергии</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Двойная топливная система:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Стабильный впрыск топлива</li>
                    <li>Более предсказуемая энергия удара</li>
                    <li>Экономия топлива</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Плавающий наголовник (helmet):</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Увеличивает передачу энергии до +15–20%</li>
                    <li>Снижает повреждение свай</li>
                    <li>Продлевает срок службы</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Усиленная конструкция:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Двойные крепления направляющих</li>
                    <li>Повышенная устойчивость</li>
                    <li>Система охлаждения — предотвращает перегрев</li>
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
              <ol className="list-decimal pl-5 space-y-1.5 text-primary text-base md:text-lg">
                <li>Поршень поднимается</li>
                <li>Падает — сжимает воздух</li>
                <li>Впрыск топлива</li>
                <li>Воспламенение</li>
                <li>Удар + повтор цикла</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Map" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Условия эксплуатации</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Типы грунтов:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Мягкие грунты</li>
                    <li>Плотные грунты</li>
                    <li>Морские условия</li>
                    <li>Работа под наклоном</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Классы моделей:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li><strong>Лёгкие D8–D30</strong> — малоэтажное строительство</li>
                    <li><strong>Средние D36–D62</strong> — универсальные</li>
                    <li><strong>Тяжёлые D80–D180</strong> — мосты, порты</li>
                    <li><strong>Сверхтяжёлые D220+</strong> — специальные проекты</li>
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

export default SemwDDescriptionSection;
