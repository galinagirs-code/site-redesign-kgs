import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { compareRows } from "./MachtyMkbeData";

const MachtyMkbeHero = () => {
  const [activeFocus, setActiveFocus] = useState<"mkbe" | "mkbe2" | null>(null);

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
              Мачты копровые экскаваторные (серия МКБЭ)
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-6 max-w-2xl mx-auto">
              Навесное копрово-бурильное оборудование российского производства для гусеничных экскаваторов. Две модели: МКБЭ и МКБЭ-2.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a href="#mkbe" className="px-5 py-2.5 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-sm font-medium">
                Подробнее о МКБЭ
              </a>
              <a href="#mkbe2" className="px-5 py-2.5 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-sm font-medium">
                Подробнее о МКБЭ-2
              </a>
              <a href="#consultation" className="px-5 py-2.5 bg-white/10 border border-white/30 text-white rounded-lg transition-all hover:bg-white/20 text-sm font-medium">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Сравнительная таблица */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2 text-center">
              Сравнение моделей
            </h2>
            <p className="text-muted-foreground text-center mb-8 text-base">
              Выберите подходящую модель под ваши задачи
            </p>

            <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-100">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-4 px-5 font-heading font-semibold text-sm md:text-base">Параметр</th>
                    <th
                      className="text-center py-4 px-5 font-heading font-bold text-sm md:text-base cursor-pointer hover:bg-white/10 transition-colors"
                      onClick={() => setActiveFocus(activeFocus === "mkbe" ? null : "mkbe")}
                    >
                      <span className="block text-accent">МКБЭ</span>
                      <span className="text-white/70 text-xs font-normal">мачта бурильная</span>
                    </th>
                    <th
                      className="text-center py-4 px-5 font-heading font-bold text-sm md:text-base cursor-pointer hover:bg-white/10 transition-colors"
                      onClick={() => setActiveFocus(activeFocus === "mkbe2" ? null : "mkbe2")}
                    >
                      <span className="block text-accent">МКБЭ-2</span>
                      <span className="text-white/70 text-xs font-normal">многофункциональная</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-5 text-primary text-sm md:text-base">{row.label}</td>
                      <td className={`py-3 px-5 text-center font-semibold text-sm md:text-base ${activeFocus === "mkbe" ? "text-accent" : "text-primary"}`}>
                        {row.mkbe}
                      </td>
                      <td className={`py-3 px-5 text-center font-semibold text-sm md:text-base ${activeFocus === "mkbe2" ? "text-accent" : "text-primary"}`}>
                        {row.mkbe2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="#mkbe">
                <Button className="btn-gradient text-white w-full sm:w-auto">
                  <Icon name="ChevronDown" size={16} className="mr-2" />
                  Подробнее о МКБЭ
                </Button>
              </a>
              <a href="#mkbe2">
                <Button className="btn-gradient text-white w-full sm:w-auto">
                  <Icon name="ChevronDown" size={16} className="mr-2" />
                  Подробнее о МКБЭ-2
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MachtyMkbeHero;
