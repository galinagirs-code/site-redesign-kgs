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
  <div className="flex items-start gap-2">
    <span className="text-accent font-bold mt-0.5 flex-shrink-0">✓</span>
    <span className="text-sm text-primary leading-snug">{text}</span>
  </div>
);

type SubKey = "equipment" | "construction" | "principle";
type Sub2Key = "composition" | "service";

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

  const DetailRow = ({ label, isOpen, onToggle }: { label: string; isOpen: boolean; onToggle: () => void }) => (
    <button
      className="w-full flex items-center justify-between py-3 px-5 text-left hover:bg-gray-50 transition-colors border-t border-gray-100"
      onClick={onToggle}
    >
      <span className="text-sm font-semibold text-primary">{label}</span>
      <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={16} className="text-muted-foreground flex-shrink-0 ml-2" />
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

      {/* Таблица + фото */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Таблица слева, фото справа */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
              <div>
                <h2 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4">Сравнение моделей</h2>
                <div className="overflow-x-auto rounded-xl shadow border border-gray-100">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="text-left py-3 px-4 font-heading font-semibold text-sm">Параметр</th>
                        <th className="text-center py-3 px-3 font-heading font-bold text-sm">
                          <span className="block text-accent">МКБЭ</span>
                        </th>
                        <th className="text-center py-3 px-3 font-heading font-bold text-sm">
                          <span className="block text-accent">МКБЭ-2</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {compareRows.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="py-2.5 px-4 text-primary text-sm">{row.label}</td>
                          <td className="py-2.5 px-3 text-center font-semibold text-primary text-sm">{row.mkbe}</td>
                          <td className="py-2.5 px-3 text-center font-semibold text-primary text-sm">{row.mkbe2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex gap-3 mt-5">
                  <a href="#mkbe" onClick={() => setOpenCard("mkbe")}>
                    <Button className="btn-gradient text-white" size="sm">
                      <Icon name="ChevronDown" size={15} className="mr-1.5" />
                      Подробнее о МКБЭ
                    </Button>
                  </a>
                  <a href="#mkbe2" onClick={() => setOpenCard("mkbe2")}>
                    <Button className="btn-gradient text-white" size="sm">
                      <Icon name="ChevronDown" size={15} className="mr-1.5" />
                      Подробнее о МКБЭ-2
                    </Button>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-gray-50 shadow-xl">
                <OptimizedImage
                  src={pageImage}
                  alt="Мачты копровые экскаваторные серия МКБЭ"
                  className="w-full h-full object-contain p-6"
                  style={{ aspectRatio: "1 / 1" }}
                />
              </div>
            </div>

            {/* Карточка МКБЭ */}
            <Card id="mkbe" className="border-2 border-gray-200 shadow-md mb-5 overflow-hidden transition-all duration-300">
              {/* Шапка карточки — всегда видна */}
              <div
                className="flex items-start gap-5 p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleCard("mkbe")}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-accent/20 text-accent border-accent/50 text-xs">Мачта копрово-бурильная</Badge>
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-primary mb-2">
                    Мачта копрово-бурильная экскаваторного типа (серии МКБЭ)
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Навесное оборудование российского производства для гусеничных экскаваторов от 22 т. Декларация соответствия ЕАЭС.
                  </p>
                  {/* Тех. характеристики — всегда видны */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {mkbeSpecs.map((row, idx) => (
                      <div key={idx} className="flex justify-between items-baseline gap-2 border-b border-gray-100 pb-1.5">
                        <span className="text-sm text-muted-foreground leading-snug">{row.label}</span>
                        <span className="text-sm font-bold text-primary whitespace-nowrap flex-shrink-0">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center gap-1.5 text-accent text-sm font-medium">
                    <span>{openCard === "mkbe" ? "Свернуть" : "Подробнее"}</span>
                    <Icon name={openCard === "mkbe" ? "ChevronUp" : "ChevronDown"} size={18} className="text-accent" />
                  </div>
                </div>
              </div>

              {/* Раскрываемый контент */}
              {openCard === "mkbe" && (
                <div className="animate-fade-in border-t border-gray-100">
                  <div className="p-6 bg-gray-50">
                    <p className="text-base text-primary leading-relaxed mb-4">
                      Мачта копрово-бурильная серии МКБЭ предназначена для установки на гусеничные экскаваторы отечественного и импортного производства массой от 22 тонн.
                    </p>
                    <p className="text-sm font-semibold text-primary mb-2">Применяется для:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
                      {mkbePurpose.map((item, idx) => <CheckItem key={idx} text={item} />)}
                    </div>
                    <a href="#consultation">
                      <Button className="btn-gradient text-white" size="sm">
                        <Icon name="MessageSquare" size={15} className="mr-2" />
                        Запросить коммерческое предложение
                      </Button>
                    </a>
                  </div>

                  <DetailRow label="Комплектация и оборудование" isOpen={openSection === "equipment"} onToggle={() => toggleSection("equipment")} />
                  {openSection === "equipment" && (
                    <div className="px-6 pb-5 animate-fade-in">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
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

                  <DetailRow label="Конструкция" isOpen={openSection === "construction"} onToggle={() => toggleSection("construction")} />
                  {openSection === "construction" && (
                    <div className="px-6 pb-5 animate-fade-in space-y-3 mt-4">
                      <p className="text-sm text-primary">Мачта — сварная прямоугольная коробчатая конструкция, усиленная по всей длине диафрагмами жёсткости. Направляющие выполнены из круглых или профильных труб.</p>
                      <p className="text-sm font-semibold text-primary">На мачте установлены:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {mkbeConstructionElements.map((item, idx) => <CheckItem key={idx} text={item} />)}
                      </div>
                      <p className="text-sm text-primary">Передвижение каретки — цепным механизмом (планетарный редуктор РДЦ-800, усилие 8 т) либо системой «гидроцилиндр – полиспаст». Мачта не требует дополнительного оборудования для монтажа.</p>
                    </div>
                  )}

                  <DetailRow label="Принцип работы" isOpen={openSection === "principle"} onToggle={() => toggleSection("principle")} />
                  {openSection === "principle" && (
                    <div className="px-6 pb-5 animate-fade-in mt-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {mkbeWorkPrinciple.map((item, idx) => <CheckItem key={idx} text={item} />)}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>

            {/* Карточка МКБЭ-2 */}
            <Card id="mkbe2" className="border-2 border-gray-200 shadow-md overflow-hidden transition-all duration-300">
              <div
                className="flex items-start gap-5 p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleCard("mkbe2")}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-accent/20 text-accent border-accent/50 text-xs">Многофункциональная</Badge>
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-primary mb-2">
                    Мачта копрово-бурильная на экскаваторе (серия МКБЭ-2)
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Первая отечественная разработка с одновременным использованием молота и вращателя на одной мачте.
                  </p>
                  {/* Тех. характеристики — всегда видны */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {mkbe2Specs.map((row, idx) => (
                      <div key={idx} className={`flex justify-between items-baseline gap-2 border-b border-gray-100 pb-1.5 ${row.label === "Углы наклона" ? "sm:col-span-2" : ""}`}>
                        <span className="text-sm text-muted-foreground leading-snug">{row.label}</span>
                        <span className="text-sm font-bold text-primary whitespace-nowrap flex-shrink-0">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center gap-1.5 text-accent text-sm font-medium">
                    <span>{openCard === "mkbe2" ? "Свернуть" : "Подробнее"}</span>
                    <Icon name={openCard === "mkbe2" ? "ChevronUp" : "ChevronDown"} size={18} className="text-accent" />
                  </div>
                </div>
              </div>

              {openCard === "mkbe2" && (
                <div className="animate-fade-in border-t border-gray-100">
                  <div className="p-6 bg-gray-50">
                    <p className="text-sm font-semibold text-primary mb-2">Конструкция предусматривает два ряда направляющих:</p>
                    <div className="space-y-2 mb-5">
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
                      <Button className="btn-gradient text-white" size="sm">
                        <Icon name="MessageSquare" size={15} className="mr-2" />
                        Запросить коммерческое предложение
                      </Button>
                    </a>
                  </div>

                  <DetailRow label="Состав мачты МКБЭ-2" isOpen={openSection2 === "composition"} onToggle={() => toggleSection2("composition")} />
                  {openSection2 === "composition" && (
                    <div className="px-6 pb-5 animate-fade-in mt-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                        {mkbe2Composition.map((item, idx) => <CheckItem key={idx} text={item} />)}
                      </div>
                      <p className="text-sm text-primary">Подъём и опускание молота и сваи — грузовыми лебёдками. Перемещение гидравлического вращателя — гидроцилиндром с системой полиспастов (усилие 19 тонн). По желанию заказчика — цепной механизм перемещения вращателя.</p>
                    </div>
                  )}

                  <DetailRow label="Гарантийное и постгарантийное обслуживание" isOpen={openSection2 === "service"} onToggle={() => toggleSection2("service")} />
                  {openSection2 === "service" && (
                    <div className="px-6 pb-5 animate-fade-in mt-4">
                      <div className="space-y-1.5">
                        <CheckItem text="Гарантийное обслуживание в течение установленного срока" />
                        <CheckItem text="Постгарантийное обслуживание и сервисная поддержка" />
                        <CheckItem text="Возможны изменения конструкции по техническому заданию" />
                        <CheckItem text="Доставка по РФ и СНГ" />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>

          </div>
        </div>
      </section>
    </>
  );
};

export default MachtyMkbeHero;
