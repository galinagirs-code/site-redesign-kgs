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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2"/>
            <circle cx="8.5" cy="12" r="2.5" fill="white"/>
            <circle cx="15.5" cy="12" r="2.5" fill="white"/>
          </svg>
          MAX
        </a>
        <a
          href="https://t.me/kgs_ural"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg"
          style={{ background: 'linear-gradient(135deg, #2AABEE, #229ED9)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.98 1.26-5.59 3.7-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.74 3.99-1.74 6.65-2.89 7.99-3.44 3.8-1.58 4.59-1.86 5.1-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.01.06.01.24 0 .37z"/>
          </svg>
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