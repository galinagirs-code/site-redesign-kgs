import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  mkbeSpecs,
  mkbePurpose,
  mkbePilingEquipment,
  mkbeDrillingEquipment,
  mkbeConstructionElements,
  mkbeWorkPrinciple,
  pageImage,
} from "./MachtyMkbeData";

type AccordionKey = "specs" | "purpose" | "equipment" | "construction" | "principle";

const MachtyMkbeSection = () => {
  const [open, setOpen] = useState<AccordionKey | null>("specs");

  const toggle = (key: AccordionKey) => setOpen(open === key ? null : key);

  return (
    <section id="mkbe" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Заголовок */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <Badge className="bg-accent/20 text-accent border-accent/50 text-sm">Мачта копрово-бурильная</Badge>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-3">
            МКБЭ — мачта бурильная экскаваторного типа
          </h2>

          {/* Лейблы */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["В наличии и под заказ", "Доставка по РФ и СНГ", "Изменения конструкции по ТЗ", "Гарантийное обслуживание"].map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5 text-xs text-primary bg-primary/5 rounded-full px-3 py-1">
                <Icon name="Check" size={12} className="text-accent" />
                {tag}
              </span>
            ))}
          </div>

          {/* Фото + краткие параметры */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-xl max-w-md w-full mx-auto lg:mx-0">
              <OptimizedImage
                src={pageImage}
                alt="Мачта копрово-бурильная МКБЭ"
                className="w-full h-full object-contain p-6"
              />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-primary mb-4">Основные параметры</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <Icon name="Drill" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Макс. диаметр бурения</p>
                    <p className="font-bold text-primary">800 мм</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <Icon name="ArrowDown" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Глубина бурения (основная мачта)</p>
                    <p className="font-bold text-primary">до 12 м</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <Icon name="ArrowDown" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Глубина бурения (с доп. секциями)</p>
                    <p className="font-bold text-primary">до 17 м / до 24 м</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <Icon name="Weight" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Минимальная масса экскаватора</p>
                    <p className="font-bold text-primary">от 22 т</p>
                  </div>
                </div>
              </div>

              <p className="text-base text-primary leading-relaxed mb-4">
                Уникальная конструкция навесного оборудования российского производства для гусеничных экскаваторов. Имеет Декларацию соответствия ЕАЭС.
              </p>
              <a href="#consultation">
                <Button className="btn-gradient text-white w-full sm:w-auto">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  Запросить коммерческое предложение
                </Button>
              </a>
            </div>
          </div>

          {/* Аккордеон */}
          <div className="space-y-3">
            {/* Технические характеристики */}
            <Card className="border border-gray-200 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggle("specs")}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="BarChart2" size={18} className="text-accent" />
                  </div>
                  <span className="text-base md:text-lg font-heading font-bold text-primary">Технические характеристики</span>
                </div>
                <Icon name={open === "specs" ? "ChevronUp" : "ChevronDown"} size={20} className="text-muted-foreground flex-shrink-0" />
              </button>
              {open === "specs" && (
                <CardContent className="px-5 pb-5 pt-0 animate-fade-in">
                  <div className="overflow-x-auto rounded-xl border border-gray-100">
                    <table className="w-full">
                      <tbody>
                        {mkbeSpecs.map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="py-2.5 px-4 text-primary text-sm md:text-base">{row.label}</td>
                            <td className="py-2.5 px-4 text-right font-semibold text-primary text-sm md:text-base whitespace-nowrap">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Назначение */}
            <Card className="border border-gray-200 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggle("purpose")}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" size={18} className="text-accent" />
                  </div>
                  <span className="text-base md:text-lg font-heading font-bold text-primary">Назначение</span>
                </div>
                <Icon name={open === "purpose" ? "ChevronUp" : "ChevronDown"} size={20} className="text-muted-foreground flex-shrink-0" />
              </button>
              {open === "purpose" && (
                <CardContent className="px-5 pb-5 pt-0 animate-fade-in">
                  <p className="text-base text-primary mb-4 leading-relaxed">
                    Мачта копрово-бурильная серии МКБЭ — уникальная конструкция навесного оборудования российского производства, предназначенная для установки на гусеничные экскаваторы отечественного и импортного производства массой от 22 тонн.
                  </p>
                  <p className="text-base text-primary mb-3 font-medium">Мачты МКБЭ применяются в промышленном и гражданском строительстве для:</p>
                  <div className="space-y-2">
                    {mkbePurpose.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-accent font-bold mt-0.5">✓</span>
                        <span className="text-base text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Комплектация */}
            <Card className="border border-gray-200 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggle("equipment")}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Package" size={18} className="text-accent" />
                  </div>
                  <span className="text-base md:text-lg font-heading font-bold text-primary">Комплектация и оборудование</span>
                </div>
                <Icon name={open === "equipment" ? "ChevronUp" : "ChevronDown"} size={20} className="text-muted-foreground flex-shrink-0" />
              </button>
              {open === "equipment" && (
                <CardContent className="px-5 pb-5 pt-0 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-heading font-bold text-primary mb-3 flex items-center gap-2">
                        <Icon name="Hammer" size={16} className="text-accent" />
                        Сваебойное оборудование
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">В качестве сваепогружателя применяются молоты российского и импортного производства:</p>
                      <div className="space-y-2">
                        {mkbePilingEquipment.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="text-accent font-bold mt-0.5">✓</span>
                            <span className="text-sm text-primary">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-primary mb-3 flex items-center gap-2">
                        <Icon name="Drill" size={16} className="text-accent" />
                        Бурильное оборудование
                      </h4>
                      <div className="space-y-2">
                        {mkbeDrillingEquipment.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="text-accent font-bold mt-0.5">✓</span>
                            <span className="text-sm text-primary">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Конструкция */}
            <Card className="border border-gray-200 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggle("construction")}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Settings2" size={18} className="text-accent" />
                  </div>
                  <span className="text-base md:text-lg font-heading font-bold text-primary">Конструкция</span>
                </div>
                <Icon name={open === "construction" ? "ChevronUp" : "ChevronDown"} size={20} className="text-muted-foreground flex-shrink-0" />
              </button>
              {open === "construction" && (
                <CardContent className="px-5 pb-5 pt-0 animate-fade-in">
                  <p className="text-base text-primary mb-4 leading-relaxed">
                    Мачта представляет собой сварную прямоугольную коробчатую конструкцию, усиленную по всей длине диафрагмами жёсткости. Направляющие выполнены из круглых или профильных труб.
                  </p>
                  <p className="text-base text-primary mb-3 font-medium">На мачте установлены:</p>
                  <div className="space-y-2 mb-4">
                    {mkbeConstructionElements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-accent font-bold mt-0.5">✓</span>
                        <span className="text-base text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-base text-primary leading-relaxed">
                    Все посадочные места унифицированы для повышения универсальности. Каретка легко демонтируется для установки сваебойного оборудования. Мачта не требует дополнительного оборудования для монтажа.
                  </p>
                </CardContent>
              )}
            </Card>

            {/* Принцип работы */}
            <Card className="border border-gray-200 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggle("principle")}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={18} className="text-accent" />
                  </div>
                  <span className="text-base md:text-lg font-heading font-bold text-primary">Принцип работы</span>
                </div>
                <Icon name={open === "principle" ? "ChevronUp" : "ChevronDown"} size={20} className="text-muted-foreground flex-shrink-0" />
              </button>
              {open === "principle" && (
                <CardContent className="px-5 pb-5 pt-0 animate-fade-in">
                  <div className="space-y-2 mb-4">
                    {mkbeWorkPrinciple.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-accent font-bold mt-0.5">✓</span>
                        <span className="text-base text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="#consultation">
                      <Button className="btn-gradient text-white">
                        <Icon name="MessageSquare" size={16} className="mr-2" />
                        Запросить КП на МКБЭ
                      </Button>
                    </a>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MachtyMkbeSection;
