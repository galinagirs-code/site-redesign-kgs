import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const types = [
  {
    title: "Для круглых свай",
    desc: "Различных диаметров",
    icon: "Circle",
  },
  {
    title: "Для квадратных свай",
    desc: "Сечения от 200×200 до 400×400 мм",
    icon: "Square",
  },
  {
    title: "Для труб",
    desc: "Под конкретный диаметр трубы",
    icon: "Cylinder",
  },
  {
    title: "Универсальные",
    desc: "С регулируемым размером",
    icon: "Settings2",
  },
];

const NagolovnikiFunctionsSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Типы свайных наголовников
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {types.map((type, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={type.icon} size={24} className="text-accent" fallback="Package" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">
                    {type.title}
                  </h3>
                  <p className="text-primary leading-relaxed text-sm">
                    {type.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NagolovnikiFunctionsSection;