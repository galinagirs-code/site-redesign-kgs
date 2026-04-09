import { Badge } from "@/components/ui/badge";

const VibroYZHeroSection = () => {
  return (
    <>
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div
          className="absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Вибропогружатели · Серия YZ
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Гидравлические крановые вибропогружатели Yongan (серия YZ)
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Разработаны с акцентом на надёжность, эффективность и долговечность при работе в самых сложных условиях — включая морские и прибрежные работы
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#variants">
                <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Модели и характеристики
                </button>
              </a>
              <a href="#consultation">
                <button className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors">
                  Получить консультацию
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4">
                  Применение
                </h2>
                <p className="text-primary/80 mb-4 leading-relaxed">
                  Вибропогружатели серии YZ от Yongan Machinery Co., Ltd. (Китай) применяются для погружения и извлечения:
                </p>
                <ul className="space-y-2">
                  {["Шпунтовых свай", "Трубных свай", "Н-балок и других конструкций"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-primary/80">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-primary/80 mt-4 leading-relaxed">
                  Отлично подходят для морских и прибрежных работ, обеспечивая стабильную работу на глубине и устойчивость к подводным нагрузкам.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://cdn.poehali.dev/files/347ca5a0-c4f4-4477-bc09-fac3e519e9dc.png"
                  alt="Вибропогружатель крановый Yongan серия YZ"
                  className="max-h-72 w-auto object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-primary mb-6 text-center">
              Ключевые конструктивные особенности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Усиленная грузоподъёмная секция", desc: "Обеспечивает надёжную работу при высоких нагрузках" },
                { title: "Двухступенчатая виброизоляция", desc: "Снижает нагрузку на кран и повышает эффективность передачи усилия на сваю" },
                { title: "Интеграция функций", desc: "Подъём, погружение и извлечение — в едином агрегате. Повышает общую производительность работ" },
                { title: "Регулируемые эластомеры", desc: "Позволяют адаптировать оборудование под различные типы грунта" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4">
                  <div className="w-2 rounded-full bg-accent flex-shrink-0 self-stretch min-h-[40px]" />
                  <div>
                    <p className="font-semibold text-primary mb-1">{item.title}</p>
                    <p className="text-sm text-primary/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VibroYZHeroSection;
