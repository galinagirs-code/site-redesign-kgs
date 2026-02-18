import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { MessengerLinks } from "@/components/MessengerLinks";

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4">
              Получите консультацию
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="p-4 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Ваше имя <span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Комментарий
                  </label>
                  <Textarea
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData({ ...formData, comment: e.target.value })
                    }
                    placeholder="Укажите детали запроса..."
                    rows={3}
                  />
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="privacy-consultation" className="mt-1" />
                  <label
                    htmlFor="privacy-consultation"
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <a
                      href="#"
                      className="text-primary hover:text-accent underline"
                    >
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full btn-gradient-reverse text-white"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={16} />
                </Button>
              </form>
            </Card>

            <div className="flex flex-col gap-6">
              <Card className="p-4 md:p-6 flex flex-col justify-center flex-1">
                <MessengerLinks />
              </Card>

              <Card className="p-4 md:p-5">
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1 text-sm">
                      Телефоны
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      <a
                        href="tel:88006007465"
                        className="hover:text-accent transition-colors"
                      >
                        8 (800) 600-74-65
                      </a>{" "}
                      — бесплатно
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <a
                        href="tel:+73433467475"
                        className="hover:text-accent transition-colors"
                      >
                        +7 (343) 346-74-75
                      </a>{" "}
                      — офис
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
            <Card className="p-4 md:p-5">
              <div className="flex items-start space-x-3">
                <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                  <Icon name="Mail" className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1 text-sm">
                    Email
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    <a
                      href="mailto:info@kgs-ural.ru"
                      className="hover:text-accent transition-colors"
                    >
                      info@kgs-ural.ru
                    </a>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <a
                      href="mailto:service@kgs-ural.ru"
                      className="hover:text-accent transition-colors"
                    >
                      service@kgs-ural.ru
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-5">
              <div className="flex items-start space-x-3">
                <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                  <Icon name="MapPin" className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1 text-sm">
                    Адрес офиса
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    г. Екатеринбург, ул. 40-летия Комсомола, 38/Л, офис 503
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Пн–Пт: 09:00 — 18:00
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
