import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const variants = [
  {
    name: "DYH-3",
    energy: "24 кН·м",
    specs: [
      { label: "Энергия удара", value: "24 кН·м" },
      { label: "Масса ударной части", value: "3 000 кг" },
      { label: "Частота ударов", value: "50/100 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Энергия удара (кН·м)", value: "24" },
      { label: "Рабочий ход (мм)", value: "800" },
      { label: "Частота ударов (уд/мин)", value: "50/100" },
      { label: "Масса ударной части (кг)", value: "3 000" },
      { label: "Способ подъёма", value: "Один гидравлический цилиндр" },
      { label: "Длина молота (мм)", value: "3 800" },
      { label: "Ширина молота (мм)", value: "920" },
      { label: "Высота молота (мм)", value: "1 100" },
      { label: "Масса молота (кг)", value: "5 800" },
      { label: "Модель гидростанции", value: "V120" },
      { label: "Мощность двигателя (кВт)", value: "50" },
      { label: "Рабочее давление (МПа)", value: "21" },
      { label: "Расход масла (л/мин)", value: "140" },
      { label: "Объём гидр. масла (л)", value: "400" },
      { label: "Габариты гидростанции (мм)", value: "2600×1500×1950" },
      { label: "Масса гидростанции (кг)", value: "3 000" },
    ],
  },
  {
    name: "DYH-5",
    energy: "60 кН·м",
    specs: [
      { label: "Энергия удара", value: "60 кН·м" },
      { label: "Масса ударной части", value: "5 000 кг" },
      { label: "Частота ударов", value: "40/100 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Энергия удара (кН·м)", value: "60" },
      { label: "Рабочий ход (мм)", value: "1 200" },
      { label: "Частота ударов (уд/мин)", value: "40/100" },
      { label: "Масса ударной части (кг)", value: "5 000" },
      { label: "Способ подъёма", value: "Один гидравлический цилиндр" },
      { label: "Длина молота (мм)", value: "5 050" },
      { label: "Ширина молота (мм)", value: "920" },
      { label: "Высота молота (мм)", value: "1 100" },
      { label: "Масса молота (кг)", value: "8 500" },
      { label: "Модель гидростанции", value: "V180" },
      { label: "Мощность двигателя (кВт)", value: "50" },
      { label: "Рабочее давление (МПа)", value: "24" },
      { label: "Расход масла (л/мин)", value: "200" },
      { label: "Объём гидр. масла (л)", value: "800" },
      { label: "Габариты гидростанции (мм)", value: "2600×1500×1950" },
      { label: "Масса гидростанции (кг)", value: "3 000" },
    ],
  },
  {
    name: "DYH-8",
    energy: "120 кН·м",
    specs: [
      { label: "Энергия удара", value: "120 кН·м" },
      { label: "Масса ударной части", value: "8 000 кг" },
      { label: "Частота ударов", value: "35/90 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Энергия удара (кН·м)", value: "120" },
      { label: "Рабочий ход (мм)", value: "1 500" },
      { label: "Частота ударов (уд/мин)", value: "35/90" },
      { label: "Масса ударной части (кг)", value: "8 000" },
      { label: "Способ подъёма", value: "Один гидравлический цилиндр" },
      { label: "Длина молота (мм)", value: "6 100" },
      { label: "Ширина молота (мм)", value: "980" },
      { label: "Высота молота (мм)", value: "1 250" },
      { label: "Масса молота (кг)", value: "12 000" },
      { label: "Модель гидростанции", value: "V260" },
      { label: "Мощность двигателя (кВт)", value: "90" },
      { label: "Рабочее давление (МПа)", value: "24" },
      { label: "Расход масла (л/мин)", value: "260" },
      { label: "Объём гидр. масла (л)", value: "1 200" },
      { label: "Габариты гидростанции (мм)", value: "3300×1500×2050" },
      { label: "Масса гидростанции (кг)", value: "4 200" },
    ],
  },
  {
    name: "DYH-11",
    energy: "165 кН·м",
    specs: [
      { label: "Энергия удара", value: "165 кН·м" },
      { label: "Масса ударной части", value: "11 000 кг" },
      { label: "Частота ударов", value: "35/90 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Энергия удара (кН·м)", value: "165" },
      { label: "Рабочий ход (мм)", value: "1 500" },
      { label: "Частота ударов (уд/мин)", value: "35/90" },
      { label: "Масса ударной части (кг)", value: "11 000" },
      { label: "Способ подъёма", value: "Один гидравлический цилиндр" },
      { label: "Длина молота (мм)", value: "6 700" },
      { label: "Ширина молота (мм)", value: "980" },
      { label: "Высота молота (мм)", value: "1 250" },
      { label: "Масса молота (кг)", value: "16 000" },
      { label: "Модель гидростанции", value: "V400" },
      { label: "Мощность двигателя (кВт)", value: "132" },
      { label: "Рабочее давление (МПа)", value: "24" },
      { label: "Расход масла (л/мин)", value: "380" },
      { label: "Объём гидр. масла (л)", value: "1 300" },
      { label: "Габариты гидростанции (мм)", value: "3300×1500×2050" },
      { label: "Масса гидростанции (кг)", value: "4 600" },
    ],
  },
  {
    name: "DYH-14",
    energy: "210 кН·м",
    specs: [
      { label: "Энергия удара", value: "210 кН·м" },
      { label: "Масса ударной части", value: "14 000 кг" },
      { label: "Частота ударов", value: "30/90 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Энергия удара (кН·м)", value: "210" },
      { label: "Рабочий ход (мм)", value: "1 500" },
      { label: "Частота ударов (уд/мин)", value: "30/90" },
      { label: "Масса ударной части (кг)", value: "14 000" },
      { label: "Способ подъёма", value: "Один гидравлический цилиндр" },
      { label: "Длина молота (мм)", value: "6 780" },
      { label: "Ширина молота (мм)", value: "1 300" },
      { label: "Высота молота (мм)", value: "1 520" },
      { label: "Масса молота (кг)", value: "22 000" },
      { label: "Модель гидростанции", value: "V400" },
      { label: "Мощность двигателя (кВт)", value: "185" },
      { label: "Рабочее давление (МПа)", value: "26" },
      { label: "Расход масла (л/мин)", value: "520" },
      { label: "Объём гидр. масла (л)", value: "1 400" },
      { label: "Габариты гидростанции (мм)", value: "3500×1550×2050" },
      { label: "Масса гидростанции (кг)", value: "6 000" },
    ],
  },
  {
    name: "DYH-16",
    energy: "240 кН·м",
    specs: [
      { label: "Энергия удара", value: "240 кН·м" },
      { label: "Масса ударной части", value: "16 000 кг" },
      { label: "Частота ударов", value: "30/90 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Энергия удара (кН·м)", value: "240" },
      { label: "Рабочий ход (мм)", value: "1 500" },
      { label: "Частота ударов (уд/мин)", value: "30/90" },
      { label: "Масса ударной части (кг)", value: "16 000" },
      { label: "Способ подъёма", value: "Один гидравлический цилиндр" },
      { label: "Длина молота (мм)", value: "7 080" },
      { label: "Ширина молота (мм)", value: "1 300" },
      { label: "Высота молота (мм)", value: "1 520" },
      { label: "Масса молота (кг)", value: "24 000" },
      { label: "Модель гидростанции", value: "V400" },
      { label: "Мощность электродвигателя (кВт)", value: "200" },
      { label: "Рабочее давление (МПа)", value: "26" },
      { label: "Расход масла (л/мин)", value: "520" },
      { label: "Объём гидр. масла (л)", value: "1 400" },
      { label: "Габариты гидростанции (мм)", value: "3500×1550×2050" },
      { label: "Масса гидростанции (кг)", value: "6 000" },
    ],
  },
  {
    name: "DYH-20",
    energy: "300 кН·м",
    specs: [
      { label: "Энергия удара", value: "300 кН·м" },
      { label: "Масса ударной части", value: "20 000 кг" },
      { label: "Частота ударов", value: "30/85 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Энергия удара (кН·м)", value: "300" },
      { label: "Рабочий ход (мм)", value: "1 500" },
      { label: "Частота ударов (уд/мин)", value: "30/85" },
      { label: "Масса ударной части (кг)", value: "20 000" },
      { label: "Способ подъёма", value: "Один гидравлический цилиндр" },
      { label: "Длина молота (мм)", value: "7 450" },
      { label: "Ширина молота (мм)", value: "1 400" },
      { label: "Высота молота (мм)", value: "1 450" },
      { label: "Масса молота (кг)", value: "31 000" },
      { label: "Модель гидростанции", value: "P500" },
      { label: "Мощность двигателя (л.с.)", value: "500" },
      { label: "Рабочее давление (МПа)", value: "26" },
      { label: "Расход масла (л/мин)", value: "760" },
      { label: "Объём гидр. масла (л)", value: "1 800" },
      { label: "Объём топливного бака (л)", value: "650" },
      { label: "Габариты гидростанции (мм)", value: "4450×1800×2250" },
      { label: "Масса гидростанции (кг)", value: "7 500" },
    ],
  },
  {
    name: "DYH-25",
    energy: "375 кН·м",
    specs: [
      { label: "Энергия удара", value: "375 кН·м" },
      { label: "Масса ударной части", value: "25 000 кг" },
      { label: "Частота ударов", value: "28/85 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Энергия удара (кН·м)", value: "375" },
      { label: "Рабочий ход (мм)", value: "1 500" },
      { label: "Частота ударов (уд/мин)", value: "28/85" },
      { label: "Масса ударной части (кг)", value: "25 000" },
      { label: "Способ подъёма", value: "Один гидравлический цилиндр" },
      { label: "Длина молота (мм)", value: "7 900" },
      { label: "Ширина молота (мм)", value: "1 400" },
      { label: "Высота молота (мм)", value: "1 450" },
      { label: "Масса молота (кг)", value: "36 000" },
      { label: "Модель гидростанции", value: "P600" },
      { label: "Мощность двигателя (л.с.)", value: "600" },
      { label: "Рабочее давление (МПа)", value: "26" },
      { label: "Расход масла (л/мин)", value: "760" },
      { label: "Объём гидр. масла (л)", value: "1 800" },
      { label: "Объём топливного бака (л)", value: "650" },
      { label: "Габариты гидростанции (мм)", value: "4350×1800×2250" },
      { label: "Масса гидростанции (кг)", value: "8 000" },
    ],
  },
  {
    name: "DYH-30",
    energy: "450 кН·м",
    specs: [
      { label: "Энергия удара", value: "450 кН·м" },
      { label: "Масса ударной части", value: "30 000 кг" },
      { label: "Частота ударов", value: "25/75 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Энергия удара (кН·м)", value: "450" },
      { label: "Рабочий ход (мм)", value: "1 500" },
      { label: "Частота ударов (уд/мин)", value: "25/75" },
      { label: "Масса ударной части (кг)", value: "30 000" },
      { label: "Способ подъёма", value: "Один гидравлический цилиндр" },
      { label: "Длина молота (мм)", value: "7 900" },
      { label: "Ширина молота (мм)", value: "1 500" },
      { label: "Высота молота (мм)", value: "1 900" },
      { label: "Масса молота (кг)", value: "41 000" },
      { label: "Модель гидростанции", value: "P800" },
      { label: "Мощность двигателя (л.с.)", value: "800" },
      { label: "Рабочее давление (МПа)", value: "26" },
      { label: "Расход масла (л/мин)", value: "810" },
      { label: "Объём гидр. масла (л)", value: "2 000" },
      { label: "Объём топливного бака (л)", value: "750" },
      { label: "Габариты гидростанции (мм)", value: "4550×1800×2400" },
      { label: "Масса гидростанции (кг)", value: "8 500" },
    ],
  },
  {
    name: "DYH-35",
    energy: "525 кН·м",
    specs: [
      { label: "Энергия удара", value: "525 кН·м" },
      { label: "Масса ударной части", value: "35 000 кг" },
      { label: "Частота ударов", value: "25/75 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Энергия удара (кН·м)", value: "525" },
      { label: "Рабочий ход (мм)", value: "1 500" },
      { label: "Частота ударов (уд/мин)", value: "25/75" },
      { label: "Масса ударной части (кг)", value: "35 000" },
      { label: "Способ подъёма", value: "Один гидравлический цилиндр" },
      { label: "Длина молота (мм)", value: "8 120" },
      { label: "Ширина молота (мм)", value: "1 550" },
      { label: "Высота молота (мм)", value: "1 900" },
      { label: "Масса молота (кг)", value: "47 000" },
      { label: "Модель гидростанции", value: "P900" },
      { label: "Мощность двигателя (л.с.)", value: "900" },
      { label: "Рабочее давление (МПа)", value: "28" },
      { label: "Расход масла (л/мин)", value: "910" },
      { label: "Объём гидр. масла (л)", value: "2 200" },
      { label: "Объём топливного бака (л)", value: "800" },
      { label: "Габариты гидростанции (мм)", value: "4650×1800×2400" },
      { label: "Масса гидростанции (кг)", value: "12 000" },
    ],
  },
  {
    name: "DYH-40",
    energy: "680 кН·м",
    specs: [
      { label: "Энергия удара", value: "680 кН·м" },
      { label: "Масса ударной части", value: "40 000 кг" },
      { label: "Частота ударов", value: "25/70 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Энергия удара (кН·м)", value: "680" },
      { label: "Рабочий ход (мм)", value: "1 500" },
      { label: "Частота ударов (уд/мин)", value: "25/70" },
      { label: "Масса ударной части (кг)", value: "40 000" },
      { label: "Способ подъёма", value: "Один гидравлический цилиндр" },
      { label: "Длина молота (мм)", value: "8 520" },
      { label: "Ширина молота (мм)", value: "1 620" },
      { label: "Высота молота (мм)", value: "1 860" },
      { label: "Масса молота (кг)", value: "53 000" },
      { label: "Модель гидростанции", value: "P1200" },
      { label: "Мощность двигателя (л.с.)", value: "1200" },
      { label: "Рабочее давление (МПа)", value: "28" },
      { label: "Расход масла (л/мин)", value: "1 500" },
      { label: "Объём гидр. масла (л)", value: "2 500" },
      { label: "Объём топливного бака (л)", value: "800" },
      { label: "Габариты гидростанции (мм)", value: "5800×2450×2700" },
      { label: "Масса гидростанции (кг)", value: "16 000" },
    ],
  },
];

const VariantCard = ({ variant }: { variant: typeof variants[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">{variant.name}</h3>
          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 font-semibold">
            {variant.energy}
          </Badge>
        </div>

        <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
          {variant.specs.map((spec, idx) => (
            <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
              <span className="text-base text-primary flex-1">{spec.label}</span>
              <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
            </div>
          ))}

          {isExpanded && (
            <>
              {variant.detailedSpecs.map((spec, idx) => (
                <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                  <span className="text-base text-primary">{spec.label}</span>
                  <span className="text-base font-semibold text-primary">{spec.value}</span>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} className="mr-2" />
            {isExpanded ? "Скрыть характеристики" : "Подробнее"}
          </Button>
          <a href="#consultation" className="block">
            <Button className="btn-gradient text-white w-full" size="sm">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Получить консультацию
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const MolotyDonghaoSpecs = () => {
  return (
    <section id="specs" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2 text-center">
            Модели молотов DongHao (серия DYH)
          </h2>
          <p className="text-center text-primary/60 text-sm mb-10">
            Серия DYH — 11 моделей с энергией удара от 24 до 680 кН·м
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {variants.map((variant) => (
              <VariantCard key={variant.name} variant={variant} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MolotyDonghaoSpecs;