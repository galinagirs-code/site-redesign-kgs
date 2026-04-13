import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const powerUnits = [
  { name: "75 кВт", power: "75", model: "DZ-45" },
  { name: "90 кВт", power: "90", model: "DZJ-60" },
  { name: "110 кВт", power: "110", model: "DZJ-90B" },
  { name: "132 кВт", power: "132", model: "DZJ-90" },
  { name: "135 кВт", power: "135", model: "DZ-120" },
  { name: "185 кВт", power: "185", model: "DZJ-120 / DZJ-135" },
  { name: "215 кВт", power: "215", model: "DZJ-150 / DZJ-180" },
  { name: "250 кВт", power: "250", model: "DZJ-200" },
  { name: "375 кВт", power: "375", model: "DZJ-240" },
  { name: "415 кВт", power: "415", model: "DZJ-300" },
  { name: "500 кВт", power: "500", model: "DZJ-400" },
];

const VibroDZJPowerSection = () => {
  return (
    <section id="power" className="py-10 md:py-16 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center">
            Модели гидравлических станций
          </h2>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-8">
            <p className="text-primary/80 mb-5 leading-relaxed">
              Для каждой модели серии DZJ подобрана оптимальная гидравлическая станция. Все станции оснащены компонентами ведущих мировых брендов и поддерживают как проводное, так и беспроводное управление.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Электрические компоненты ведущих мировых брендов",
                "Гидравлический насос мировых брендов",
                "Проводное и беспроводное управление",
                "Светодиодная индикация",
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={12} className="text-accent" />
                  </div>
                  <p className="font-semibold text-primary text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {powerUnits.map((unit) => (
              <Card
                key={unit.name}
                className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">{unit.name}</h3>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      станция
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4 bg-white rounded-lg p-4">
                    <div className="flex justify-between items-start py-1 border-b border-gray-200">
                      <span className="text-sm text-primary flex-1">Мощность, кВт</span>
                      <span className="text-sm font-semibold text-primary text-right ml-4">{unit.power}</span>
                    </div>
                    <div className="flex justify-between items-start py-1 last:border-0">
                      <span className="text-sm text-primary flex-1">Подходящая модель</span>
                      <span className="text-sm font-semibold text-primary text-right ml-4">{unit.model}</span>
                    </div>
                  </div>

                  <a href="#consultation" className="block mt-4">
                    <Button className="btn-gradient text-white w-full" size="sm">
                      <Icon name="MessageSquare" size={16} className="mr-2" />
                      Получить консультацию
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibroDZJPowerSection;
