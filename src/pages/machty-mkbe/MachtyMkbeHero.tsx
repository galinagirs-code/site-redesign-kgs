import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  compareRows,
  mkbeSpecs,
  mkbe2Specs,
  mkbePurpose,
  mkbePilingEquipment,
  mkbeDrillingEquipment,
  mkbeOptionalEquipment,
  mkbeConstructionElements,
  mkbeWorkPrinciple,
  mkbe2Composition,
  pageImage,
} from "./MachtyMkbeData";

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <span className="text-accent font-bold mt-0.5 flex-shrink-0">✓</span>
    <span className="text-base text-primary">{text}</span>
  </div>
);

type SubKey = "specs" | "equipment" | "construction" | "principle";
type Sub2Key = "specs" | "composition" | "service";

const MachtyMkbeHero = () => {
  const [openCard, setOpenCard] = useState<"mkbe" | "mkbe2" | null>(null);
  const [openSection, setOpenSection] = useState<SubKey | null>(null);
  const [openSection2, setOpenSection2] = useState<Sub2Key | null>(null);

  const toggleCard = (card: "mkbe" | "mkbe2") => {
    if (openCard === card) {
      setOpenCard(null);
    } else {
      setOpenCard(card);
      setOpenSection(null);
      setOpenSection2(null);
    }
  };

  const toggleSection = (key: SubKey) => setOpenSection(openSection === key ? null : key);
  const toggleSection2 = (key: Sub2Key) => setOpenSection2(openSection2 === key ? null : key);

  const AccordionRow = ({ label, isOpen, onToggle }: { label: string; isOpen: boolean; onToggle: () => void }) => (
    <button
      className="w-full flex items-center justify-between py-3 px-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
      onClick={onToggle}
    >
      <span className="text-base font-semibold text-primary">{label}</span>
      <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={18} className="text-muted-foreground flex-shrink-0 ml-2" />
    </button>
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-14 pb-8 md:pt-16 md:pb-10 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Мачты копровые экскаваторные
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Мачты копровые экскаваторные (серия МКБЭ)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#mkbe" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Подробнее о МКБЭ
              </a>
              <a href="#mkbe2" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Подробнее о МКБЭ-2
              </a>
              <a href="#gallery" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Фотогалерея
              </a>
              <a href="#consultation" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Таблица + карточки */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Таблица сравнения */}
            <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-100 mb-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-4 px-5 font-heading font-semibold text-sm md:text-base">Параметр</th>
                    <th className="text-center py-4 px-5 font-heading font-bold text-sm md:text-base">
                      <span className="block text-accent">МКБЭ</span>
                      <span className="text-white/70 text-xs font-normal">мачта бурильная</span>
                    </th>
                    <th className="text-center py-4 px-5 font-heading font-bold text-sm md:text-base">
                      <span className="block text-accent">МКБЭ-2</span>
                      <span className="text-white/70 text-xs font-normal">многофункциональная</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-5 text-primary text-sm md:text-base">{row.label}</td>
                      <td className="py-3 px-5 text-center font-semibold text-primary text-sm md:text-base">{row.mkbe}</td>
                      <td className="py-3 px-5 text-center font-semibold text-primary text-sm md:text-base">{row.mkbe2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Карточка МКБЭ */}
            <Card id="mkbe" className="border-2 border-gray-200 hover:border-accent/40 transition-colors shadow-sm mb-4 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                onClick={() => toggleCard("mkbe")}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-accent/20 text-accent border-accent/50 text-xs">Мачта копрово-бурильная</Badge>
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-primary">
                    Мачта копрово-бурильная экскаваторного типа (серии МКБЭ)
                  </h2>
                </div>
                <Icon
                  name={openCard === "mkbe" ? "ChevronUp" : "ChevronDown"}
                  size={24}
                  className="text-accent flex-shrink-0 ml-4"
                />
              </button>

              {openCard === "mkbe" && (
                <CardContent className="px-5 md:px-6 pb-6 pt-0 animate-fade-in border-t border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mt-4 mb-6">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 shadow max-w-xs w-full mx-auto lg:mx-0">
                      <OptimizedImage
                        src={pageImage}
                        alt="Мачта МКБЭ"
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div>
                      <p className="text-base text-primary leading-relaxed mb-3">
                        Мачта копрово-бурильная серии МКБЭ — уникальная конструкция навесного оборудования российского производства, предназначенная для установки на гусеничные экскаваторы отечественного и импортного производства массой от 22 тонн. Оборудование прошло сертификацию в соответствии с требованиями ТР ТС и имеет Декларацию соответствия ЕАЭС.
                      </p>
                      <p className="text-sm font-medium text-primary mb-2">Мачты МКБЭ применяются для:</p>
                      <div className="space-y-1.5 mb-4">
                        {mkbePurpose.map((item, idx) => (
                          <CheckItem key={idx} text={item} />
                        ))}
                      </div>
                      <a href="#consultation">
                        <Button className="btn-gradient text-white w-full sm:w-auto" size="sm">
                          <Icon name="MessageSquare" size={15} className="mr-2" />
                          Запросить КП на МКБЭ
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <AccordionRow label="Технические характеристики" isOpen={openSection === "specs"} onToggle={() => toggleSection("specs")} />
                    {openSection === "specs" && (
                      <div className="px-4 pb-4 animate-fade-in">
                        <div className="overflow-x-auto rounded-lg border border-gray-100 mt-2">
                          <table className="w-full">
                            <tbody>
                              {mkbeSpecs.map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                  <td className="py-2 px-3 text-primary text-sm">{row.label}</td>
                                  <td className="py-2 px-3 text-right font-semibold text-primary text-sm whitespace-nowrap">{row.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    <AccordionRow label="Комплектация и оборудование" isOpen={openSection === "equipment"} onToggle={() => toggleSection("equipment")} />
                    {openSection === "equipment" && (
                      <div className="px-4 pb-4 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          <div>
                            <p className="text-sm font-semibold text-primary mb-2">Сваебойное оборудование</p>
                            <p className="text-xs text-muted-foreground mb-2">Молоты российского и импортного производства:</p>
                            <div className="space-y-1.5">
                              {mkbePilingEquipment.map((item, idx) => <CheckItem key={idx} text={item} />)}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-primary mb-2">Бурильное оборудование</p>
                            <div className="space-y-1.5 mb-3">
                              {mkbeDrillingEquipment.map((item, idx) => <CheckItem key={idx} text={item} />)}
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">По согласованию с заказчиком:</p>
                            <div className="space-y-1.5">
                              {mkbeOptionalEquipment.map((item, idx) => <CheckItem key={idx} text={item} />)}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <AccordionRow label="Конструкция" isOpen={openSection === "construction"} onToggle={() => toggleSection("construction")} />
                    {openSection === "construction" && (
                      <div className="px-4 pb-4 animate-fade-in space-y-2 mt-2">
                        <p className="text-sm text-primary">Мачта — сварная прямоугольная коробчатая конструкция, усиленная диафрагмами жёсткости. Направляющие из круглых или профильных труб.</p>
                        <p className="text-sm font-medium text-primary">На мачте установлены:</p>
                        <div className="space-y-1.5">
                          {mkbeConstructionElements.map((item, idx) => <CheckItem key={idx} text={item} />)}
                        </div>
                        <p className="text-sm text-primary">Передвижение каретки — цепным механизмом (РДЦ-800, усилие 8 т) либо системой «гидроцилиндр – полиспаст». Мачта не требует дополнительного оборудования для монтажа.</p>
                      </div>
                    )}

                    <AccordionRow label="Принцип работы" isOpen={openSection === "principle"} onToggle={() => toggleSection("principle")} />
                    {openSection === "principle" && (
                      <div className="px-4 pb-4 animate-fade-in mt-2">
                        <div className="space-y-1.5">
                          {mkbeWorkPrinciple.map((item, idx) => <CheckItem key={idx} text={item} />)}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Карточка МКБЭ-2 */}
            <Card id="mkbe2" className="border-2 border-gray-200 hover:border-accent/40 transition-colors shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                onClick={() => toggleCard("mkbe2")}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-accent/20 text-accent border-accent/50 text-xs">Многофункциональная</Badge>
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-primary">
                    Мачта копрово-бурильная на экскаваторе (серия МКБЭ-2)
                  </h2>
                </div>
                <Icon
                  name={openCard === "mkbe2" ? "ChevronUp" : "ChevronDown"}
                  size={24}
                  className="text-accent flex-shrink-0 ml-4"
                />
              </button>

              {openCard === "mkbe2" && (
                <CardContent className="px-5 md:px-6 pb-6 pt-0 animate-fade-in border-t border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mt-4 mb-6">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 shadow max-w-xs w-full mx-auto lg:mx-0">
                      <OptimizedImage
                        src={pageImage}
                        alt="Мачта МКБЭ-2"
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div>
                      <p className="text-base text-primary leading-relaxed mb-3">
                        Первая отечественная разработка, обеспечивающая совместное использование сваебойного и бурильного оборудования на одной мачте.
                      </p>
                      <p className="text-sm font-medium text-primary mb-2">Конструкция предусматривает два ряда направляющих:</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                          <span className="text-sm text-primary">Для установки молота (дизельного или гидравлического).</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                          <span className="text-sm text-primary">Для установки вращателя (гидравлического или электрического).</span>
                        </div>
                      </div>
                      <a href="#consultation">
                        <Button className="btn-gradient text-white w-full sm:w-auto" size="sm">
                          <Icon name="MessageSquare" size={15} className="mr-2" />
                          Запросить КП на МКБЭ-2
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <AccordionRow label="Технические характеристики" isOpen={openSection2 === "specs"} onToggle={() => toggleSection2("specs")} />
                    {openSection2 === "specs" && (
                      <div className="px-4 pb-4 animate-fade-in">
                        <div className="overflow-x-auto rounded-lg border border-gray-100 mt-2">
                          <table className="w-full">
                            <tbody>
                              {mkbe2Specs.map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                  <td className="py-2 px-3 text-primary text-sm">{row.label}</td>
                                  <td className="py-2 px-3 text-right font-semibold text-primary text-sm whitespace-nowrap">{row.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    <AccordionRow label="Состав мачты МКБЭ-2" isOpen={openSection2 === "composition"} onToggle={() => toggleSection2("composition")} />
                    {openSection2 === "composition" && (
                      <div className="px-4 pb-4 animate-fade-in mt-2">
                        <div className="space-y-1.5 mb-3">
                          {mkbe2Composition.map((item, idx) => <CheckItem key={idx} text={item} />)}
                        </div>
                        <p className="text-sm text-primary mt-3">Подъём и опускание молота и сваи — грузовыми лебёдками. Перемещение гидравлического вращателя — гидроцилиндром с системой полиспастов (усилие вдавливания и подъёма — 19 тонн). По желанию заказчика возможна установка цепного механизма перемещения вращателя.</p>
                      </div>
                    )}

                    <AccordionRow label="Гарантийное и постгарантийное обслуживание" isOpen={openSection2 === "service"} onToggle={() => toggleSection2("service")} />
                    {openSection2 === "service" && (
                      <div className="px-4 pb-4 animate-fade-in mt-2">
                        <div className="space-y-1.5">
                          <CheckItem text="Гарантийное обслуживание в течение установленного срока" />
                          <CheckItem text="Постгарантийное обслуживание и сервисная поддержка" />
                          <CheckItem text="Возможны изменения конструкции по техническому заданию заказчика" />
                          <CheckItem text="Доставка по РФ и СНГ" />
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>

          </div>
        </div>
      </section>
    </>
  );
};

export default MachtyMkbeHero;