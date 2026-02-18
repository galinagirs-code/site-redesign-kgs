import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { MessengerLinks } from "@/components/MessengerLinks";

export const PartsOrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hammerType: "",
    manufacturer: "",
    comment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <section id="order" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
                Свяжитесь с нами
              </h2>
              <p className="text-lg font-medium text-muted-foreground">
                КоперГруппСервис — надёжный партнёр в обслуживании вашей техники.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-lg border-l-4 border-accent text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">Горячая линия</h3>
                <a href="tel:88006007465" className="text-2xl font-bold text-accent hover:text-accent/80 transition-colors block mb-2">
                  8 (800) 600-74-65
                </a>
                <p className="text-sm text-muted-foreground">Звонок по России бесплатный</p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg border-l-4 border-primary text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">Email</h3>
                <a href="mailto:service@kgs-ural.ru" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors block mb-2">
                  service@kgs-ural.ru
                </a>
                <p className="text-sm text-muted-foreground mb-4">Ответим в течение 1 часа</p>
                <Button size="lg" className="btn-gradient-reverse text-white w-full">
                  Написать письмо
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 text-center">
              Не нашли нужную запчасть в каталоге?
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-8">
              Оставьте заявку — менеджер «КоперГруппСервис» свяжется с вами и поможет подобрать оптимальное решение под ваши задачи.
            </p>
            <Card>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Имя <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Телефон <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="hammerType" className="block text-sm font-medium text-primary mb-2">
                      На какой молот?
                    </label>
                    <Input
                      id="hammerType"
                      type="text"
                      value={formData.hammerType}
                      onChange={(e) => setFormData({ ...formData, hammerType: e.target.value })}
                      placeholder="Укажите тип молота (необязательно)"
                    />
                  </div>

                  <div>
                    <label htmlFor="manufacturer" className="block text-sm font-medium text-primary mb-2">
                      Какой завод-изготовитель?
                    </label>
                    <Input
                      id="manufacturer"
                      type="text"
                      value={formData.manufacturer}
                      onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                      placeholder="Укажите завод-изготовитель (необязательно)"
                    />
                  </div>

                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-primary mb-2">
                      Дополнительный комментарий
                    </label>
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Укажите детали заказа или дополнительные пожелания"
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full btn-gradient text-white text-lg py-6">
                    Отправить заявку
                  </Button>

                  <MessengerLinks />
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};