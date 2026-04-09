import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const VibroYZDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Общая информация
          </h2>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Cpu" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary">Компоненты мирового уровня</h3>
              </div>
              <p className="text-primary/80 mb-5 leading-relaxed">
                В конструкции вибропогружателей Yongan YZ используются компоненты ведущих производителей, что обеспечивает стабильную работу, минимальный износ и длительный срок службы оборудования:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { brand: "Parker (США)", part: "Гидромоторы" },
                  { brand: "FAG (Германия)", part: "Подшипники повышенной нагрузки и увеличенного ресурса" },
                  { brand: "Rexroth / Kawasaki", part: "Насосы" },
                  { brand: "Caterpillar / Cummins", part: "Двигатели" },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="font-semibold text-primary text-sm">{item.brand}</p>
                    <p className="text-primary/70 text-sm mt-1">{item.part}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Gauge" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary">Гидравлические станции</h3>
              </div>
              <p className="text-primary/80 mb-4 leading-relaxed">
                Yongan Machinery предлагает комплексные решения: вибропогружатели и гидравлические станции, совместимые как между собой, так и с другим гидравлическим оборудованием.
              </p>
              <p className="text-primary/80 mb-5 leading-relaxed">
                Гидростанции Yongan — универсальное решение для питания вибропогружателей и другого гидравлического оборудования.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Высокая стабильность работы",
                  "Качественная система фильтрации",
                  "Надёжные насосы и двигатели",
                  "Адаптация к тяжёлым условиям эксплуатации",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={12} className="text-accent" />
                    </div>
                    <span className="text-sm text-primary/80">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Grip" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary">Зажимы для свай</h3>
              </div>
              <p className="text-primary/80 mb-5 leading-relaxed">
                Для гидравлических вибропогружателей Yongan доступен широкий выбор зажимов для шпунтовых свай, Н-балок и других профилей. Надёжная конструкция и мощный зажимной цилиндр обеспечивают устойчивую и безопасную фиксацию сваи.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3 text-sm uppercase tracking-wide">Модели с одним зажимом</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="p-2 text-left font-medium">Модель</th>
                          <th className="p-2 text-right font-medium">Усилие (кН)</th>
                          <th className="p-2 text-right font-medium">Вес (кг)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { model: "YZJ120", force: "1200", weight: "950" },
                          { model: "YZJ160", force: "1200", weight: "1050" },
                          { model: "YZJ200", force: "2000", weight: "1300" },
                          { model: "YZJ320", force: "3200", weight: "1550" },
                          { model: "YZJ80DC", force: "800", weight: "580" },
                        ].map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="p-2 font-medium text-primary">{row.model}</td>
                            <td className="p-2 text-right text-primary/80">{row.force}</td>
                            <td className="p-2 text-right text-primary/80">{row.weight}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3 text-sm uppercase tracking-wide">Модели с двойным зажимом (DC)</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="p-2 text-left font-medium">Модель</th>
                          <th className="p-2 text-right font-medium">Усилие (кН)</th>
                          <th className="p-2 text-right font-medium">Вес (кг)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { model: "YZJ120DC", force: "1200", weight: "920" },
                          { model: "YZJ160DC", force: "1600", weight: "1120" },
                          { model: "YZJ200DC", force: "2000", weight: "1420" },
                          { model: "YZJ320DC", force: "3200", weight: "2980" },
                        ].map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="p-2 font-medium text-primary">{row.model}</td>
                            <td className="p-2 text-right text-primary/80">{row.force}</td>
                            <td className="p-2 text-right text-primary/80">{row.weight}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default VibroYZDescriptionSection;
