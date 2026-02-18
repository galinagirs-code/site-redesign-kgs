import Icon from "@/components/ui/icon";

interface MessengerLinksProps {
  compact?: boolean;
}

export const MessengerLinks = ({ compact = false }: MessengerLinksProps) => {
  return (
    <div className={`${compact ? 'pt-3' : 'pt-4'} border-t border-border/50`}>
      <p className={`font-heading font-bold text-center ${compact ? 'text-sm mb-1' : 'text-base mb-1'}`}>
        Нужен быстрый ответ?
      </p>
      <p className={`text-muted-foreground text-center ${compact ? 'text-xs mb-3' : 'text-sm mb-3'}`}>
        Напишите менеджеру напрямую в
      </p>
      <div className="flex gap-3 justify-center">
        <a
          href="https://max.ru/u/f9LHodD0cOIP8_25Pol0FgGthbuYFvPpONLlW4R8sdoUUmuprdyzEwbPSy0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg"
          style={{ background: 'linear-gradient(135deg, #6B3FA0, #8B5CF6)' }}
        >
          <img src="https://cdn.poehali.dev/files/fee1ea21-57e7-4af9-9bba-a186df621e05.png" alt="MAX" className="h-5 w-auto" />
          MAX
        </a>
        <a
          href="https://t.me/kgs_ural"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg"
          style={{ background: 'linear-gradient(135deg, #2AABEE, #229ED9)' }}
        >
          <img src="https://cdn.poehali.dev/files/8d7cb5dd-5893-4a3a-9448-4b7e575f2939.png" alt="Telegram" className="h-5 w-auto" />
          Telegram
        </a>
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-3">
        <Icon name="Clock" size={14} className="text-muted-foreground" />
        <span className={`text-muted-foreground ${compact ? 'text-xs' : 'text-sm'}`}>
          Ответим в течение 5 минут
        </span>
      </div>
    </div>
  );
};

export default MessengerLinks;