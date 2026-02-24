import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  mkbe2Specs,
  mkbe2Composition,
  pageImage,
} from "./MachtyMkbeData";

type AccordionKey = "specs" | "description" | "composition" | "features";

const MachtyMkbe2Section = () => {
  const [open, setOpen] = useState<AccordionKey | null>("specs");

  const toggle = (key: AccordionKey) => setOpen(open === key ? null : key);

  return (
    <section id="mkbe2" className="py-10 md:py-14 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Заголовок */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <Badge className="bg-accent/20 text-accent border-accent/50 text-sm">Многофункциональная</Badge>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-3">
            МКБЭ-2 — мачта копрово-бурильная на экскаваторе
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
                alt="Мачта копрово-бурильная МКБЭ-2"
                className="w-full h-full object-contain p-6"
              />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-primary mb-4">Основные параметры</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm">
                  <Icon name="Ruler" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Макс. длина погружаемой сваи</p>
                    <p className="font-bold text-primary">до 12 м</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm">
                  <Icon name="Drill" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Макс. диаметр бурения</p>
                    <p className="font-bold text-primary">800 мм</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm">
                  <Icon name="ArrowDown" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Глубина бурения (основная мачта)</p>
                    <p className="font-bold text-primary">11 м</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm">
                  <Icon name="Weight" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Масса базового экскаватора</p>
                    <p className="font-bold text-primary">20–45 т</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-accent/10 rounded-xl mb-5 border border-accent/20">
                <p className="text-sm font-semibold text-primary">
                  🏆 Первая отечественная разработка, обеспечивающая одновременное использование сваебойного и бурильного оборудования на одной мачте
                </p>
              </div>

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
                        {mkbe2Specs.map((row, idx) => (
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

            {/* Описание */}
            <Card className="border border-gray-200 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggle("description")}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Info" size={18} className="text-accent" />
                  </div>
                  <span className="text-base md:text-lg font-heading font-bold text-primary">Описание и особенности</span>
                </div>
                <Icon name={open === "description" ? "ChevronUp" : "ChevronDown"} size={20} className="text-muted-foreground flex-shrink-0" />
              </button>
              {open === "description" && (
                <CardContent className="px-5 pb-5 pt-0 animate-fade-in">
                  <p className="text-base text-primary leading-relaxed mb-4">
                    МКБЭ-2 — первая отечественная разработка, обеспечивающая совместное использование сваебойного и бурильного оборудования на одной мачте.
                  </p>
                  <p className="text-base text-primary mb-3 font-medium">Конструкция предусматривает два ряда направляющих:</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                      <span className="w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <span className="text-base text-primary">Для установки молота — дизельного или гидравлического</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                      <span className="w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <span className="text-base text-primary">Для установки вращателя — гидравлического или электрического</span>
                    </div>
                  </div>
                  <p className="text-base text-primary leading-relaxed">
                    Подъём и опускание молота и сваи осуществляется грузовыми лебёдками. Перемещение гидравлического вращателя — гидроцилиндром с системой полиспастов (усилие вдавливания и подъёма 19 тонн).
                  </p>
                </CardContent>
              )}
            </Card>

            {/* Состав мачты */}
            <Card className="border border-gray-200 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggle("composition")}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Layers" size={18} className="text-accent" />
                  </div>
                  <span className="text-base md:text-lg font-heading font-bold text-primary">Состав мачты МКБЭ-2</span>
                </div>
                <Icon name={open === "composition" ? "ChevronUp" : "ChevronDown"} size={20} className="text-muted-foreground flex-shrink-0" />
              </button>
              {open === "composition" && (
                <CardContent className="px-5 pb-5 pt-0 animate-fade-in">
                  <div className="space-y-2 mb-4">
                    {mkbe2Composition.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-accent font-bold mt-0.5">✓</span>
                        <span className="text-base text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-base text-primary leading-relaxed text-muted-foreground">
                    По желанию заказчика возможна установка цепного механизма перемещения вращателя.
                  </p>
                </CardContent>
              )}
            </Card>

            {/* Особенности */}
            <Card className="border border-gray-200 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggle("features")}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Star" size={18} className="text-accent" />
                  </div>
                  <span className="text-base md:text-lg font-heading font-bold text-primary">Ключевые особенности</span>
                </div>
                <Icon name={open === "features" ? "ChevronUp" : "ChevronDown"} size={20} className="text-muted-foreground flex-shrink-0" />
              </button>
              {open === "features" && (
                <CardContent className="px-5 pb-5 pt-0 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {[
                      { icon: "RefreshCw", title: "Двойные направляющие", text: "Одновременная работа молота и вращателя на одной мачте — первая отечественная разработка" },
                      { icon: "Scale", title: "Широкий диапазон экскаваторов", text: "Совместим с базовыми машинами массой 20–45 тонн — отечественного и импортного производства" },
                      { icon: "ArrowUpDown", title: "Большие углы наклона", text: "Наклон назад 18°, вправо/влево 7°, вперёд 5° — полный охват рабочей зоны" },
                      { icon: "TrendingUp", title: "Высокое усилие вдавливания", text: "Перемещение вращателя с усилием 19 тонн обеспечивает эффективное бурение в сложных грунтах" },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name={item.icon as Parameters<typeof Icon>[0]["name"]} size={16} className="text-accent" />
                          <span className="font-semibold text-primary text-sm">{item.title}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="#consultation">
                      <Button className="btn-gradient text-white">
                        <Icon name="MessageSquare" size={16} className="mr-2" />
                        Запросить КП на МКБЭ-2
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

export default MachtyMkbe2Section;
