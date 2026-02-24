import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  mkbeMainParams,
  mkbeSpecs,
  mkbePurpose,
  mkbePilingEquipment,
  mkbeDrillingEquipment,
  mkbeOptionalEquipment,
  mkbeConstructionElements,
  mkbeWorkPrinciple,
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

const MachtyMkbeSection = () => {
  return (
    <section id="mkbe" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Заголовок */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <Badge className="bg-accent/20 text-accent border-accent/50 text-sm">Мачта копрово-бурильная</Badge>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-1">
            МКБЭ — мачта бурильная экскаваторного типа
          </h2>
          <p className="text-muted-foreground text-base mb-4">(мачта бурильная экскаваторного типа)</p>

          {/* Лейблы */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["В наличии и под заказ", "Доставка по РФ и СНГ", "Возможны изменения конструкции по ТЗ", "Гарантийное и постгарантийное обслуживание"].map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5 text-xs text-primary bg-primary/5 rounded-full px-3 py-1">
                <Icon name="Check" size={12} className="text-accent" />
                {tag}
              </span>
            ))}
          </div>

          {/* Фото + параметры */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-xl max-w-md w-full mx-auto lg:mx-0">
              <OptimizedImage
                src={pageImage}
                alt="Мачта копрово-бурильная МКБЭ"
                className="w-full h-full object-contain p-6"
              />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-primary mb-3">Основные параметры</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
                <table className="w-full">
                  <tbody>
                    {mkbeMainParams.map((row, idx) => (
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

          {/* Описание */}
          <SectionBlock title="Описание">
            <p className="text-base text-primary leading-relaxed mb-2">
              Мачта копрово-бурильная серии МКБЭ — уникальная конструкция навесного оборудования российского производства, предназначенная для установки на гусеничные экскаваторы отечественного и импортного производства массой от 22 тонн.
            </p>
            <p className="text-base text-primary leading-relaxed">
              Оборудование прошло сертификацию в соответствии с требованиями Технического регламента Таможенного союза и имеет Декларацию соответствия ЕАЭС.
            </p>
          </SectionBlock>

          {/* Технические характеристики */}
          <SectionBlock title="Технические характеристики">
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
          </SectionBlock>

          {/* Назначение */}
          <SectionBlock title="Назначение">
            <p className="text-base text-primary mb-3">
              Мачты МКБЭ предназначены для расширения технологических возможностей экскаватора и применяются в промышленном и гражданском строительстве для:
            </p>
            <div className="space-y-2">
              {mkbePurpose.map((item, idx) => (
                <CheckItem key={idx} text={item} />
              ))}
            </div>
          </SectionBlock>

          {/* Комплектация */}
          <SectionBlock title="Комплектация и оборудование">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-base font-semibold text-primary mb-3">Сваебойное оборудование</p>
                <p className="text-sm text-muted-foreground mb-3">В качестве сваепогружателя применяются сваебойные молоты российского и импортного производства:</p>
                <div className="space-y-2">
                  {mkbePilingEquipment.map((item, idx) => (
                    <CheckItem key={idx} text={item} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-base font-semibold text-primary mb-3">Бурильное оборудование</p>
                <div className="space-y-2 mb-4">
                  {mkbeDrillingEquipment.map((item, idx) => (
                    <CheckItem key={idx} text={item} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-2">По согласованию с заказчиком возможна комплектация:</p>
                <div className="space-y-2">
                  {mkbeOptionalEquipment.map((item, idx) => (
                    <CheckItem key={idx} text={item} />
                  ))}
                </div>
              </div>
            </div>
          </SectionBlock>

          {/* Конструкция */}
          <SectionBlock title="Конструкция">
            <p className="text-base text-primary leading-relaxed mb-3">
              Мачта представляет собой сварную прямоугольную коробчатую конструкцию, усиленную по всей длине диафрагмами жёсткости.
            </p>
            <p className="text-base text-primary leading-relaxed mb-3">
              Направляющие выполнены из круглых или профильных труб и предназначены для перемещения гидровращателя или сваебойного оборудования.
            </p>
            <p className="text-base text-primary font-medium mb-3">На мачте установлены:</p>
            <div className="space-y-2 mb-4">
              {mkbeConstructionElements.map((item, idx) => (
                <CheckItem key={idx} text={item} />
              ))}
            </div>
            <p className="text-base text-primary leading-relaxed mb-2">
              Все посадочные места унифицированы для повышения универсальности.
            </p>
            <p className="text-base text-primary leading-relaxed mb-2">
              Передвижение буровой каретки осуществляется цепным механизмом (планетарный редуктор РДЦ-800, усилие 8 тонн) либо системой «гидроцилиндр – полиспаст».
            </p>
            <p className="text-base text-primary leading-relaxed mb-2">
              Каретка легко демонтируется для установки сваебойного оборудования. Предусмотрены места крепления свайной и молотовой лебёдок.
            </p>
            <p className="text-base text-primary leading-relaxed">
              Мачта не требует дополнительного оборудования для монтажа.
            </p>
          </SectionBlock>

          {/* Принцип работы */}
          <SectionBlock title="Принцип работы">
            <div className="space-y-2">
              {mkbeWorkPrinciple.map((item, idx) => (
                <CheckItem key={idx} text={item} />
              ))}
            </div>
          </SectionBlock>

          <div className="pt-2">
            <a href="#consultation">
              <Button className="btn-gradient text-white">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Запросить КП на МКБЭ
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MachtyMkbeSection;
