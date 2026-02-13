import Icon from "@/components/ui/icon";
import { EquipmentForm } from "@/components/EquipmentForm";

const questions = [
  {
    question: "Какой молот требуется?",
    options: ["Дизельный штанговый", "Дизельный трубчатый", "Гидравлический"]
  },
  {
    question: "На какую машину планируете навешивать?"
  },
  {
    question: "Какие сваи планируете забивать?",
    subfields: [
      { label: "Сечение", placeholder: "Укажите сечение свай" },
      { label: "Длина", placeholder: "Укажите длину свай" }
    ]
  },
  {
    question: "Какие требуются захваты?",
    options: ["Круглые", "Квадратные", "Плоские", "Под изготовление"]
  },
  {
    question: "Какой грунт?"
  },
  {
    question: "Требуется ли наголовник?",
    options: ["Да", "Нет"],
    conditionalFields: {
      "Да": [
        { label: "Какой наголовник", placeholder: "Укажите тип наголовника" },
        { label: "Сечение", placeholder: "Укажите сечение" }
      ]
    }
  },
  {
    question: "Требуется ли шефмонтаж?",
    options: ["Да", "Нет"]
  },
  {
    question: "В какой город осуществлять доставку?"
  }
];

const JuliInfoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
              Назначение молотов Dongtai Juli DD
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                <p className="text-muted-foreground">Погружение деревянных и железобетонных свай</p>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                <p className="text-muted-foreground">Устройство свайных фундаментов</p>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                <p className="text-muted-foreground">Погружение металлических труб</p>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                <p className="text-muted-foreground">Погружение шпунта Ларсена</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold mb-6 text-primary text-center">
            Получить консультацию по выбору молота
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Заполните форму, и наши специалисты помогут подобрать оптимальную модель молота Dongtai Juli для ваших задач
          </p>
          <EquipmentForm 
            categoryTitle="Молоты дизельные штанговые Dongtai Juli (серия DD)"
            categoryId="moloty-juli"
            questions={questions}
          />
        </div>
      </div>
    </section>
  );
};

export default JuliInfoSection;
