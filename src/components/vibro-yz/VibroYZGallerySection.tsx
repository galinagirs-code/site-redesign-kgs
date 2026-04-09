import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const modelImages = [
  {
    src: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/bucket/f209bd22-5a45-4da1-b03a-c9f0fcdc7be4.png",
    title: "Характеристики YZ-90D — YZ-400",
    desc: "Модели средней серии",
    badge: "YZ-90D → YZ-400",
  },
  {
    src: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/bucket/c66d43f6-b6cb-430a-b1dd-9a7022db0bdd.png",
    title: "Характеристики YZ-400L — YZ-800BX4",
    desc: "Тяжёлые и сверхтяжёлые модели",
    badge: "YZ-400L → YZ-800BX4",
  },
];

const clampImages = [
  {
    src: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/bucket/e24a550b-d280-4544-8cbb-e538254a0f4b.png",
    title: "Зажимы YZJ",
    desc: "Технические характеристики зажимов для шпунтовых свай, Н-балок и труб",
    badge: "Зажимы",
  },
];

const VibroYZGallerySection = () => {
  return (
    <section id="gallery" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Таблицы характеристик
          </h2>

          <h3 className="text-lg font-heading font-semibold text-primary mb-4">Модели вибропогружателей</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {modelImages.map((item, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full object-contain bg-white"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary/90 text-white border-0">
                    {item.badge}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-heading font-bold text-primary">{item.title}</h4>
                  <p className="text-sm text-primary/70 mt-1">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-lg font-heading font-semibold text-primary mb-4">Варианты зажимов</h3>
          <div className="grid grid-cols-1 gap-6">
            {clampImages.map((item, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full object-contain bg-white"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary/90 text-white border-0">
                    {item.badge}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-heading font-bold text-primary">{item.title}</h4>
                  <p className="text-sm text-primary/70 mt-1">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibroYZGallerySection;
