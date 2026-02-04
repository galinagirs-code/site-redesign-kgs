import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { ImageWithWatermark } from "@/components/ImageWithWatermark";

const equipment = [
  {
    id: 1,
    title: "Мачты копровые",
    image: "https://cdn.poehali.dev/files/f50bcd3e-120c-4036-9648-3b8a985947a3.png",
    models: [
      "Мачты копровые крановые (серия МК Россия)",
      "Мачты копровые экскаваторные (серия MSX Россия)",
      "Мачты копровые экскаваторные (Китай)"
    ]
  },
  {
    id: 2,
    title: "Сваебойные молоты",
    image: "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
    models: [
      "Молоты гидравлические DongHao",
      "Молоты дизельные трубчатые STARKE",
      "Молоты дизельные трубчатые SEMW",
      "Молоты дизельные штанговые JULI",
      "Свайные наголовники"
    ]
  },
  {
    id: 3,
    title: "Сваебойные машины",
    image: "https://cdn.poehali.dev/files/fa6a1c32-f5ac-47df-9c14-016eeb4d7260.png",
    models: [
      "Сваебойные установки STARKE (серия LH)",
      "Шагающие сваебойные установки JULI (серия KLB)",
      "Сваебойная установка КБУРГ"
    ]
  },
  {
    id: 4,
    title: "Буровые машины",
    image: "https://cdn.poehali.dev/files/f0763622-3011-4803-ae06-6ec6db9aa3ce.png",
    models: [
      "Гидравлическая буровая машина JINT (серия SH)",
      "Гидравлическая буровая машина JINT (серия SD)",
      "Горизонтальная буровая машина JULI (серия JL)"
    ]
  },
  {
    id: 5,
    title: "Вибропогружатели крановые",
    image: "https://cdn.poehali.dev/files/20e2dbf3-1009-4b9d-83ab-9ceac3ef4216.png",
    models: [
      "Вибропогружатели гидравлические крановые Yongan (серия YZ)",
      "Вибропогружатели гидравлические крановые Yongan (серия YZ-VM)",
      "Вибропогружатели электрические крановые Yongan (серия DZJ)"
    ]
  },
  {
    id: 6,
    title: "Вибропогружатели экскаваторные",
    image: "https://cdn.poehali.dev/files/50844e20-7f61-4ca9-ae48-a9e319b3c7a9.png",
    models: [
      "Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS)",
      "Гидравлические экскаваторные вибропогружатели с нижним зажимом (серия S)",
      "Удлинённая стрела для экскаватора",
      "Быстросъёмное соединение (квик-каплер)"
    ]
  },
  {
    id: 7,
    title: "Сваевдавливающие установки",
    image: "https://cdn.poehali.dev/files/876e67f7-de30-453a-ae1b-6d5bbb60e863.png",
    models: [
      "Сваевдавливающая установка JULI (серия YZS)"
    ]
  },
  {
    id: 8,
    title: "Сваескусыватели",
    image: "https://cdn.poehali.dev/files/80fab017-44fa-4d20-8ea0-2a2996b71c1f.png",
    models: [
      "Сваескусыватели для круглых свай",
      "Сваескусыватели для квадратных свай"
    ]
  },
  {
    id: 9,
    title: "Домкраты",
    image: "https://cdn.poehali.dev/files/5cf49725-e360-435c-8968-e7a658e38518.png",
    models: [
      "Домкраты для извлечения свай"
    ]
  }
];

export const HomeEquipment = () => {
  return (
    <section id="equipment" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4">Наше оборудование</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Широкий ассортимент специализированной техники для свайных работ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {equipment.map((item) => (
            <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white shadow-md">
              <div className="relative aspect-square overflow-hidden bg-white">
                <ImageWithWatermark
                  src={item.image}
                  alt={item.title}
                  className={`h-full w-full object-contain group-hover:scale-105 transition-transform duration-300 ${item.id === 7 || item.id === 8 || item.id === 9 ? 'p-0' : 'p-4'}`}
                  watermarkPosition={item.id === 7 ? 'bottom-2 right-4' : 'bottom-4 right-4'}
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-heading font-semibold text-lg md:text-xl mb-4">{item.title}</h3>
                <ul className="space-y-2 mb-6">
                  {item.models.map((model, idx) => (
                    <li key={idx}>
                      <a 
                        href="#contact"
                        className="text-sm md:text-base text-muted-foreground hover:text-primary flex items-start transition-colors cursor-pointer group/item"
                      >
                        <Icon name="ChevronRight" size={18} className="mr-1 mt-0.5 flex-shrink-0 text-accent/60 group-hover/item:text-accent" />
                        <span className="leading-snug group-hover/item:underline">{model}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <Link to="/catalog">
                  <Button variant="outline" className="w-full group/btn border-accent text-accent hover:bg-accent hover:text-white">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link to="/catalog" className="block sm:inline-block">
            <Button size="lg" className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
              Полный каталог оборудования
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
