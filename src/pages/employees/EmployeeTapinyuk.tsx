import EmployeePage from "@/components/EmployeePage";

const EmployeeTapinyuk = () => (
  <EmployeePage
    name="Ольга Александровна Тапинюк"
    position="Исполнительный директор ООО «КГС»"
    slug="/contact/tapinyuk"
    seoTitle="Ольга Александровна Тапинюк — Исполнительный директор КГС"
    seoDescription="Контакты Ольги Александровны Тапинюк, Исполнительного директора ООО КГС. Телефон, email, мессенджеры."
    contacts={[
      { type: "email",    label: "Email",    value: "zhirova@kgs-ural.ru",     href: "mailto:zhirova@kgs-ural.ru" },
      { type: "phone",    label: "Телефон",  value: "+7 965 527 02 38",        href: "tel:+79655270238" },
      { type: "telegram", label: "Telegram", value: "Написать в Telegram",     href: "https://web.telegram.org/k/#6727158803" },
      { type: "max",      label: "MAX",      value: "Написать в MAX",          href: "https://web.max.ru/28568206" },
    ]}
  />
);

export default EmployeeTapinyuk;
