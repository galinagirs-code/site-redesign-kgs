import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface EquipmentFormProps {
  categoryTitle: string;
  categoryId: string;
  questions: string[];
}

export const EquipmentForm = ({ categoryTitle, categoryId, questions }: EquipmentFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    question: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', question: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
        setIsOpen(false);
      }, 3000);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <Button 
        onClick={() => setIsOpen(true)}
        className="w-full btn-gradient text-white"
      >
        <Icon name="MessageCircle" className="mr-2" size={18} />
        Получить консультацию
      </Button>
    );
  }

  return (
    <Card className="border-2 border-accent/20">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-heading text-primary">
            Консультация по категории: {categoryTitle}
          </CardTitle>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <Icon name="Check" className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Заявка отправлена!</h3>
            <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor={`name-${categoryId}`}>Ваше имя *</Label>
              <Input
                id={`name-${categoryId}`}
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Иван Иванов"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor={`phone-${categoryId}`}>Телефон *</Label>
              <Input
                id={`phone-${categoryId}`}
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+7 (___) ___-__-__"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor={`email-${categoryId}`}>Email</Label>
              <Input
                id={`email-${categoryId}`}
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@mail.ru"
                className="mt-1"
              />
            </div>

            {questions.length > 0 && (
              <div>
                <Label htmlFor={`question-${categoryId}`}>Выберите вопрос или задайте свой</Label>
                <select
                  id={`question-${categoryId}`}
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">-- Выберите вопрос --</option>
                  {questions.map((q, idx) => (
                    <option key={idx} value={q}>{q}</option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <Label htmlFor={`message-${categoryId}`}>Ваш вопрос или комментарий</Label>
              <Textarea
                id={`message-${categoryId}`}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Опишите ваш вопрос или требования к оборудованию..."
                rows={4}
                className="mt-1 resize-none"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 btn-gradient text-white"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" className="mr-2 animate-spin" size={18} />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить заявку
                  </>
                )}
              </Button>
              <Button 
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
              >
                Отмена
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
};
