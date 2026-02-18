import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { MessengerLinks } from "@/components/MessengerLinks";

export const PartsOrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="order" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4">
              Не нашли нужную запчасть?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="p-4 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя <span className="text-red-500">*</span></label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон <span className="text-red-500">*</span></label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email <span className="text-red-500">*</span></label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Комментарий</label>
                  <Textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                  />
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="privacy-parts" className="mt-1" />
                  <label
                    htmlFor="privacy-parts"
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <a href="#" className="text-primary hover:text-accent underline">
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>
                <Button type="submit" className="w-full btn-gradient-reverse text-white">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={16} />
                </Button>

                <MessengerLinks />
              </form>
            </Card>

            <div className="space-y-4 md:space-y-6">
              <Card className="p-4 md:p-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-accent/10 p-2 md:p-3 rounded-lg">
                    <Icon name="Phone" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1 md:mb-2 text-sm md:text-base">Телефоны</h3>
                    <p className="text-muted-foreground mb-1 text-sm md:text-base">
                      <a href="tel:88006007465" className="hover:text-accent transition-colors">8 (800) 600-74-65</a>
                      {" "}— бесплатно
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base">
                      <a href="tel:+73433467475" className="hover:text-accent transition-colors">+7 (343) 346-74-75</a>
                      {" "}— офис
                    </p>
                    <p className="text-muted-foreground mt-2 text-sm md:text-base">
                      <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@kgs_ural</a>
                      {" "}— Telegram
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 md:p-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-accent/10 p-2 md:p-3 rounded-lg">
                    <Icon name="Mail" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1 md:mb-2 text-sm md:text-base">Email</h3>
                    <p className="text-muted-foreground mb-1 text-sm md:text-base">
                      <a href="mailto:info@kgs-ural.ru" className="hover:text-accent transition-colors">info@kgs-ural.ru</a>
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base">
                      <a href="mailto:service@kgs-ural.ru" className="hover:text-accent transition-colors">service@kgs-ural.ru</a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 md:p-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-accent/10 p-2 md:p-3 rounded-lg">
                    <Icon name="MapPin" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1 md:mb-2 text-sm md:text-base">Адрес офиса</h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      г. Екатеринбург, ул. 40-летия Комсомола, 38/Л, офис 503
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-2">
                      Пн–Пт: 09:00 — 18:00
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartsOrderForm;