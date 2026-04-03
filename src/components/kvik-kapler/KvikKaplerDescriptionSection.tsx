import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const KvikKaplerDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Общая информация
          </h2>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Назначение и применение</h3>
              </div>
              <p className="text-primary mb-6 text-base md:text-lg leading-relaxed">
                Быстросъёмное соединение предназначено для быстрой замены навесного оборудования без выхода оператора из кабины. Позволяет существенно сократить время простоев и повысить эффективность работы техники.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Совместимость</h4>
                  <p className="text-primary text-base md:text-lg">Подходит для экскаваторов различного класса — от 1,5 до 52 тонн. Работает с большинством видов навесного оборудования.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Эффективность</h4>
                  <p className="text-primary text-base md:text-lg">Сокращает время смены навески в 3–5 раз. Не требуется помощь второго человека — всё управление из кабины.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="ShieldCheck" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Надёжность и безопасность</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Система фиксации:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Двойная система фиксации оборудования</li>
                    <li>Механическая блокировка + гидравлическая защита</li>
                    <li>Предохранительный стопорный палец</li>
                    <li>Исключает самопроизвольное отсоединение навески</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Конструкция:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Высокопрочная износостойкая сталь</li>
                    <li>Усиленная конструкция для интенсивной эксплуатации</li>
                    <li>Сохраняет работоспособность при сбоях гидросистемы</li>
                    <li>Подходит для тяжёлых условий: стройка, демонтаж, карьеры</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Building2" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Область применения</h3>
              </div>
              <p className="text-primary mb-2 text-base font-medium">Квик-каплер широко применяется в:</p>
              <ul className="list-disc pl-5 space-y-1 text-primary text-base mb-4">
                <li>строительстве зданий и сооружений</li>
                <li>демонтажных работах</li>
                <li>дорожном строительстве</li>
                <li>карьерной добыче</li>
                <li>ЖКХ и коммунальных службах</li>
              </ul>
              <p className="text-primary mb-2 text-base font-medium">Совместимо с навесным оборудованием:</p>
              <ul className="list-disc pl-5 space-y-1 text-primary text-base">
                <li>ковши различного типа</li>
                <li>гидромолоты</li>
                <li>рыхлители</li>
                <li>грейферы</li>
                <li>другое навесное оборудование</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KvikKaplerDescriptionSection;