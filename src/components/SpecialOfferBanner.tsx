import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export const SpecialOfferBanner = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-accent via-accent/95 to-accent overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <Card className="bg-white/95 backdrop-blur-sm border-2 border-white shadow-2xl max-w-5xl mx-auto overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <Badge className="bg-accent text-white text-xs md:text-sm px-3 py-1 animate-pulse">
                    Специальное предложение
                  </Badge>
                  <Icon name="Sparkles" className="text-accent animate-bounce" size={20} />
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-3 leading-tight">
                  Оборудование в наличии по специальной цене!
                </h3>
                
                <p className="text-muted-foreground text-base md:text-lg mb-4">
                  Копровые мачты, молоты, вибропогружатели и другое оборудование готово к отгрузке. Ограниченное предложение!
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingDown" className="text-accent" size={18} />
                    <span>Специальные цены</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Package" className="text-accent" size={18} />
                    <span>В наличии на складе</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Zap" className="text-accent" size={18} />
                    <span>Быстрая отгрузка</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <a 
                  href="https://kgs-special-offer.ru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-auto"
                >
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white font-bold text-lg w-full md:w-auto shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <Icon name="ExternalLink" className="mr-2" size={20} />
                    Смотреть предложения
                  </Button>
                </a>
                
                <p className="text-xs text-center text-muted-foreground">
                  Переход на страницу специальных предложений
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
