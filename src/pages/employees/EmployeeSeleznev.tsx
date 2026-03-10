import EmployeePage from "@/components/EmployeePage";

const EmployeeSeleznev = () => (
  <EmployeePage
    name="Евгений Анатольевич Селезнев"
    position="Генеральный директор ООО «КГС»"
    slug="/contact/seleznev"
    seoTitle="Евгений Анатольевич Селезнев — Генеральный директор КГС"
    seoDescription="Контакты Евгения Анатольевича Селезнева, Генерального директора ООО КГС. Телефон, email, мессенджеры."
    contacts={[
      { type: "email",    label: "Email",               value: "info@kgs-ural.ru",   href: "mailto:info@kgs-ural.ru" },
      { type: "phone",    label: "Телефон (бесплатно)", value: "8 (800) 600-74-65",  href: "tel:88006007465" },
      { type: "phone",    label: "Телефон",             value: "+7 (343) 346-74-75", href: "tel:+73433467475" },
      { type: "telegram", label: "Telegram",            value: "@kgs_ural",          href: "https://t.me/kgs_ural" },
      { type: "vk",       label: "ВКонтакте",           value: "vk.com/kgsural",     href: "https://vk.com/kgsural" },
      { type: "max",      label: "MAX",                 value: "Написать в MAX",     href: "https://web.max.ru/-70972866166995" },
    ]}
  />
);

export default EmployeeSeleznev;
