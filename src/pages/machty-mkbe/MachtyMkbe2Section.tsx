import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  mkbe2MainParams,
  mkbe2Specs,
  mkbe2Composition,
  pageImage,
} from "./MachtyMkbeData";

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <span className="text-accent font-bold mt-0.5 flex-shrink-0">✓</span>
    <span className="text-base text-primary">{text}</span>
  </div>
);

const SectionBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4 pb-2 border-b border-gray-200">
      {title}
    </h3>
    {children}
  </div>
);

const MachtyMkbe2Section = () => {
  return (
    <section id="mkbe2" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Заголовок */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <Badge className="bg-accent/20 text-accent border-accent/50 text-sm">Многофункциональная</Badge>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-1">
            Многофункциональная МКБЭ-2
          </h2>
          <p className="text-muted-foreground text-base mb-4">(мачта копрово-бурильная на экскаваторе)</p>

          {/* Лейблы */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["В наличии и под заказ", "Доставка по РФ и СНГ", "Возможны изменения конструкции по ТЗ", "Гарантийное и постгарантийное обслуживание"].map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5 text-xs text-primary bg-white rounded-full px-3 py-1 border border-gray-200">
                <Icon name="Check" size={12} className="text-accent" />
                {tag}
              </span>
            ))}
          </div>

          {/* Фото + параметры */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-xl max-w-md w-full mx-auto lg:mx-0">
              <OptimizedImage
                src={pageImage}
                alt="Мачта копрово-бурильная МКБЭ-2"
                className="w-full h-full object-contain p-6"
              />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-primary mb-3">Основные параметры</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6 bg-white">
                <table className="w-full">
                  <tbody>
                    {mkbe2MainParams.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="py-2.5 px-4 text-primary text-sm">{row.label}</td>
                        <td className="py-2.5 px-4 text-right font-bold text-primary text-sm whitespace-nowrap">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a href="#consultation">
                <Button className="btn-gradient text-white w-full sm:w-auto">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  Запросить коммерческое предложение
                </Button>
              </a>
            </div>
          </div>

          {/* Технические характеристики */}
          <SectionBlock title="Технические характеристики">
            <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white">
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
          </SectionBlock>

          {/* Особенности */}
          <SectionBlock title="Особенности">
            <p className="text-base text-primary leading-relaxed mb-4">
              Первая отечественная разработка, обеспечивающая совместное использование сваебойного и бурильного оборудования на одной мачте.
            </p>
            <p className="text-base text-primary font-medium mb-3">Конструкция предусматривает два ряда направляющих:</p>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <span className="text-base text-primary">Для установки молота (дизельного или гидравлического).</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <span className="text-base text-primary">Для установки вращателя (гидравлического или электрического).</span>
              </div>
            </div>
          </SectionBlock>

          {/* Состав мачты */}
          <SectionBlock title="Состав мачты МКБЭ-2">
            <div className="space-y-2 mb-4">
              {mkbe2Composition.map((item, idx) => (
                <CheckItem key={idx} text={item} />
              ))}
            </div>
            <p className="text-base text-primary leading-relaxed mb-2">
              Подъём и опускание молота и сваи осуществляется грузовыми лебёдками.
            </p>
            <p className="text-base text-primary leading-relaxed mb-2">
              Перемещение гидравлического вращателя — гидроцилиндром с системой полиспастов (усилие вдавливания и подъёма — 19 тонн).
            </p>
            <p className="text-base text-primary leading-relaxed">
              По желанию заказчика возможна установка цепного механизма перемещения вращателя.
            </p>
          </SectionBlock>

          <div className="pt-2">
            <a href="#consultation">
              <Button className="btn-gradient text-white">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Запросить КП на МКБЭ-2
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MachtyMkbe2Section;
