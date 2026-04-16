import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const KlbDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Общая информация</h2>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Building2" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">О производителе</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Компания Dongtai Juli Machinery Manufacturing Co., Ltd. (Китай) более 20 лет специализируется на разработке и производстве оборудования для фундаментостроения.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Реализовано более 300 мостовых проектов в Китае</li>
                    <li>Продукция успешно экспортируется на международные рынки</li>
                    <li>Высокие оценки за качество и технологичность оборудования</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Компания активно внедряет инновации и постоянно расширяет линейку техники, предлагая решения для задач любой сложности в фундаментостроении.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Назначение и возможности</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Область применения</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>Погружение свай различного типа</li>
                    <li>Лидерное бурение</li>
                    <li>Фундаментные работы</li>
                    <li>Строительство мостов, портов и промышленных объектов</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Дополнительное оснащение</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                    <li>штанговые молоты</li>
                    <li>трубчатые молоты</li>
                    <li>гидравлические молоты</li>
                    <li>буровые установки</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Cog" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Конструктивные особенности</h3>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-primary font-semibold mb-2 text-base md:text-lg">Установки KLB оснащены:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-primary text-base">
                  <li>лебедками с электрическим приводом</li>
                  <li>гидравлическим механизмом позиционирования мачты</li>
                  <li>шагающим механизмом передвижения с гидравлическим приводом</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Надёжность и технологии</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base mt-0.5">&#10004;</span>
                    <span className="text-base text-primary">Гидравлические компоненты от ведущих мировых брендов</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base mt-0.5">&#10004;</span>
                    <span className="text-base text-primary">Импортные резиновые шланги с высокой износостойкостью и ударной прочностью</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base mt-0.5">&#10004;</span>
                    <span className="text-base text-primary">Электрогидравлическая система централизованного управления</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-base mt-0.5">&#10004;</span>
                    <span className="text-base text-primary">Высокий ресурс работы и стабильность эксплуатации</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KlbDescriptionSection;