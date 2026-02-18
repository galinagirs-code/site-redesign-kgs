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
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="white" fillOpacity="0.2"/>
            <path d="M20 8C13.373 8 8 13.373 8 20s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8zm-3.2 17.6c-.88 0-1.6-.72-1.6-1.6s.72-1.6 1.6-1.6 1.6.72 1.6 1.6-.72 1.6-1.6 1.6zm6.4 0c-.88 0-1.6-.72-1.6-1.6s.72-1.6 1.6-1.6 1.6.72 1.6 1.6-.72 1.6-1.6 1.6zm-6.4-6.4c-.88 0-1.6-.72-1.6-1.6s.72-1.6 1.6-1.6 1.6.72 1.6 1.6-.72 1.6-1.6 1.6zm6.4 0c-.88 0-1.6-.72-1.6-1.6s.72-1.6 1.6-1.6 1.6.72 1.6 1.6-.72 1.6-1.6 1.6z" fill="white"/>
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
          <svg width="20" height="20" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120 0C53.73 0 0 53.73 0 120s53.73 120 120 120 120-53.73 120-120S186.27 0 120 0z" fill="white" fillOpacity="0.2"/>
            <path d="M98 175c-3.89 0-3.23-1.47-4.57-5.17L82.2 134.2l89.8-53.2" fill="white" fillOpacity="0.4"/>
            <path d="M98 175c3 0 4.33-1.37 6-3l16-15.56-19.97-12.04" fill="white" fillOpacity="0.6"/>
            <path d="M100.03 144.4l48.36 35.73c5.52 3.04 9.5 1.47 10.88-5.12l19.69-92.81c2.02-8.07-3.07-11.73-8.35-9.33L59.03 117.57c-7.87 3.16-7.82 7.56-1.43 9.52l29.93 9.34 69.27-43.68c3.27-1.98 6.27-.91 3.81 1.27" fill="white"/>
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