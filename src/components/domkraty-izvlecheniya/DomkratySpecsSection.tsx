import { Card, CardContent } from "@/components/ui/card";

const specs = [
  {
    label: "Количество подъёмных цилиндров (шт)",
    ptm850: "2",
    ptm920: "2",
    note: "По индивидуальному заказу количество цилиндров можно увеличить до 4",
  },
  {
    label: "Ход цилиндра (мм)",
    ptm850: "900",
    ptm920: "900",
    note: "Может быть увеличен. Самый большой из когда-либо изготовленных был двухметровой длины",
  },
  {
    label: "Максимальная удерживающая сила (т)",
    ptm850: "300",
    ptm920: "300",
    note: "",
  },
  {
    label: "Диаметр корпуса (мм)",
    ptm850: "830",
    ptm920: "920",
    note: "Другие размеры могут быть изготовлены индивидуально под требования заказчика",
  },
  {
    label: "Максимальное усилие вытягивания (т)",
    ptm850: "600",
    ptm920: "650",
    note: "Другие размеры могут быть изготовлены индивидуально под требования заказчика",
  },
  {
    label: "Вес (без учёта гидростанции) (кг)",
    ptm850: "8000",
    ptm920: "8900",
    note: "",
  },
  {
    label: "Размер (д×ш×в) (м)",
    ptm850: "3×2×2",
    ptm920: "3×2×2",
    note: "Габаритные размеры при транспортировке",
  },
];

const DomkratySpecsSection = () => {
  return (
    <section id="specs" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Технические характеристики
          </h2>

          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left py-3 px-4 md:px-6 font-heading font-semibold text-base">Модель</th>
                      <th className="text-center py-3 px-4 md:px-6 font-heading font-semibold text-base text-accent">PTM850</th>
                      <th className="text-center py-3 px-4 md:px-6 font-heading font-semibold text-base text-accent">PTM920</th>
                      <th className="text-left py-3 px-4 md:px-6 font-heading font-semibold text-base">Примечание</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map((spec, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="py-3 px-4 md:px-6 text-primary text-base md:text-lg font-medium">{spec.label}</td>
                        <td className="py-3 px-4 md:px-6 text-primary text-base md:text-lg font-bold text-center">{spec.ptm850}</td>
                        <td className="py-3 px-4 md:px-6 text-primary text-base md:text-lg font-bold text-center">{spec.ptm920}</td>
                        <td className="py-3 px-4 md:px-6 text-primary/70 text-sm md:text-base italic">{spec.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-primary/70 text-sm md:text-base mt-4 italic">
            Дополнительные параметры могут быть изменены по индивидуальному запросу.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DomkratySpecsSection;
