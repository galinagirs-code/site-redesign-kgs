import { Badge } from "@/components/ui/badge";

const MolotyDonghaoHero = () => {
  return (
    <>
      <section className="relative pt-16 pb-10 md:pt-20 md:pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Гидравлические молоты (Китай)
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Гидравлический молот DongHao (серия DYH)
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Профессиональное оборудование для забивки свай при строительстве мостов, зданий, промышленных и инфраструктурных объектов. Энергия удара 24–680 кН·м, линейка из 11 моделей.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#description" className="inline-flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-all text-sm font-medium">
                Общая информация
              </a>
              <a href="#specs" className="inline-flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-all text-sm font-medium">
                Технические характеристики
              </a>
              <a href="#gallery" className="inline-flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-all text-sm font-medium">
                Фотогалерея
              </a>
              <a href="#consultation" className="inline-flex items-center px-5 py-2.5 btn-gradient text-white rounded-lg transition-all text-sm font-medium">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary/80 text-base md:text-lg leading-relaxed mb-4">
                Гидравлический молот DongHao — современная альтернатива дизельным молотам для забивки свай на объектах любой сложности. Обеспечивает высокую энергию удара, точную настройку рабочих параметров и стабильную работу в сложных грунтовых условиях.
              </p>
              <p className="text-primary/80 text-base leading-relaxed mb-6">
                Оборудование работает с круглыми и квадратными железобетонными сваями, стальными H-сваями, шпунтовыми сваями и цементно-песчаными сваями. Питание от гидросистемы базовой машины или отдельной гидростанции DongHao.
              </p>
              <ul className="space-y-2">
                {[
                  "Экологичность — без выхлопных газов",
                  "Низкий уровень шума ~70 дБ",
                  "Энергия удара 24–680 кН·м",
                  "Контроль параметров в реальном времени",
                  "Адаптация к технике заказчика",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-primary/80">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                <div className="text-center px-6">
                  <div className="text-5xl mb-3">🔨</div>
                  <p className="text-primary/40 text-sm">Фото оборудования</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MolotyDonghaoHero;
