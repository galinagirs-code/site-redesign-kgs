import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface SubField {
  label: string;
  placeholder: string;
}

interface ColumnField {
  label: string;
  placeholder: string;
}

interface Question {
  question: string;
  options?: string[];
  subfields?: SubField[];
  columns?: ColumnField[];
  conditionalFields?: Record<string, SubField[]>;
  multiline?: boolean;
}

interface EquipmentFormProps {
  categoryTitle: string;
  categoryId: string;
  questions: Question[];
}

export const EquipmentForm = ({ categoryTitle, categoryId, questions }: EquipmentFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    answers: {} as Record<number, string>,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const answersFormatted: Record<string, string> = {};
      questions.forEach((q, idx) => {
        if (formData.answers[idx]) {
          answersFormatted[q.question] = formData.answers[idx];
        }
      });
      
      const response = await fetch('https://functions.poehali.dev/42cc9223-1a3f-4324-bb49-552f02311b0f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: categoryTitle,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          answers: answersFormatted,
          message: formData.message
        })
      });
      
      if (!response.ok) {
        throw new Error('Ошибка отправки');
      }
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', answers: {}, message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error('Ошибка отправки заявки:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setFormData({
      ...formData,
      answers: {
        ...formData.answers,
        [questionIndex]: value
      }
    });
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
            Консультация: {categoryTitle}
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
        ) : submitStatus === 'error' ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
              <Icon name="AlertCircle" className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Ошибка отправки</h3>
            <p className="text-muted-foreground mb-4">Попробуйте позже или свяжитесь с нами по телефону</p>
            <Button onClick={() => setSubmitStatus('idle')} variant="outline">
              Попробовать снова
            </Button>
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
              <div className="space-y-4 pt-2 border-t">
                <p className="text-sm font-medium text-primary">Ответьте на вопросы:</p>
                {questions.map((q, idx) => (
                  <div key={idx}>
                    <Label htmlFor={`question-${categoryId}-${idx}`} className="text-sm">
                      {q.question}
                    </Label>
                    
                    {q.options && q.options.length > 0 ? (
                      <>
                        <select
                          id={`question-${categoryId}-${idx}`}
                          value={formData.answers[idx] || ''}
                          onChange={(e) => handleAnswerChange(idx, e.target.value)}
                          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        >
                          <option value="">-- Выберите --</option>
                          {q.options.map((option, optIdx) => (
                            <option key={optIdx} value={option}>{option}</option>
                          ))}
                          <option value="Другое (укажу в комментарии)">Другое (укажу в комментарии)</option>
                        </select>
                        
                        {q.conditionalFields && formData.answers[idx] && q.conditionalFields[formData.answers[idx]] && (
                          <div className="mt-2 space-y-2 pl-4 border-l-2 border-accent/30">
                            {q.conditionalFields[formData.answers[idx]].map((field, fieldIdx) => (
                              <div key={fieldIdx}>
                                <Label className="text-xs text-muted-foreground">{field.label}</Label>
                                <Input
                                  type="text"
                                  placeholder={field.placeholder}
                                  onChange={(e) => {
                                    const currentAnswer = formData.answers[idx] || '';
                                    const updatedAnswer = `${currentAnswer} | ${field.label}: ${e.target.value}`;
                                    handleAnswerChange(idx, updatedAnswer);
                                  }}
                                  className="mt-1"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : q.subfields && q.subfields.length > 0 ? (
                      <div className="mt-2 space-y-2">
                        {q.subfields.map((field, fieldIdx) => (
                          <div key={fieldIdx}>
                            <Label className="text-xs text-muted-foreground">{field.label}</Label>
                            <Input
                              type="text"
                              placeholder={field.placeholder}
                              onChange={(e) => {
                                const answers = formData.answers[idx]?.split(' | ') || [];
                                answers[fieldIdx] = `${field.label}: ${e.target.value}`;
                                handleAnswerChange(idx, answers.join(' | '));
                              }}
                              className="mt-1"
                            />
                          </div>
                        ))}
                      </div>
                    ) : q.columns && q.columns.length > 0 ? (
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                        {q.columns.map((field, fieldIdx) => (
                          <div key={fieldIdx}>
                            <Label className="text-xs text-muted-foreground">{field.label}</Label>
                            <Input
                              type="text"
                              placeholder={field.placeholder}
                              onChange={(e) => {
                                const answers = formData.answers[idx]?.split(' | ') || [];
                                answers[fieldIdx] = `${field.label}: ${e.target.value}`;
                                handleAnswerChange(idx, answers.join(' | '));
                              }}
                              className="mt-1"
                            />
                          </div>
                        ))}
                      </div>
                    ) : q.multiline ? (
                      <Textarea
                        id={`question-${categoryId}-${idx}`}
                        value={formData.answers[idx] || ''}
                        onChange={(e) => handleAnswerChange(idx, e.target.value)}
                        placeholder="Ваш комментарий..."
                        rows={3}
                        className="mt-1 resize-none"
                      />
                    ) : (
                      <Input
                        id={`question-${categoryId}-${idx}`}
                        type="text"
                        value={formData.answers[idx] || ''}
                        onChange={(e) => handleAnswerChange(idx, e.target.value)}
                        placeholder="Ваш ответ..."
                        className="mt-1"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            <div>
              <Label htmlFor={`message-${categoryId}`}>Дополнительный комментарий</Label>
              <Textarea
                id={`message-${categoryId}`}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Любая дополнительная информация..."
                rows={3}
                className="mt-1 resize-none"
              />
            </div>

            <div className="flex items-start gap-2 text-xs text-muted-foreground border-t pt-4">
              <input
                type="checkbox"
                id={`consent-${categoryId}`}
                required
                className="mt-1"
              />
              <label htmlFor={`consent-${categoryId}`}>
                Согласен на обработку персональных данных
              </label>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full btn-gradient text-white"
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
          </form>
        )}
      </CardContent>
    </Card>
  );
};
