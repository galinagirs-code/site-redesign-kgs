import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const variants = [
  {
    name: "SD15",
    type: "стандартная",
    specs: [
      { label: "Высота мачты", value: "20 100 мм" },
      { label: "Вес базовой машины", value: "45 000 кг" },
      { label: "Крутящий момент вращателя", value: "150 кНм" },
      { label: "Диаметр необсаженного отверстия", value: "1 500 мм" },
    ],
    detailedSpecs: [
      { label: "СИСТЕМА ЗАДАВЛИВАНИЯ-ИЗВЛЕЧЕНИЯ", value: "" },
      { label: "Ход", value: "4 000 мм", indent: true },
      { label: "ОСНОВНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "140 кН", indent: true },
      { label: "Диаметр троса", value: "23 мм", indent: true },
      { label: "Макс. линейная скорость", value: "50 м/мин", indent: true },
      { label: "СЕРВИСНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "50 кН", indent: true },
      { label: "Диаметр троса", value: "18 мм", indent: true },
      { label: "Макс. линейная скорость", value: "60 м/мин", indent: true },
      { label: "БАЗА МАШИНЫ", value: "" },
      { label: "Дизельный двигатель", value: "6BTAA5.9-C", indent: true },
      { label: "Мощность", value: "133 кВт", indent: true },
      { label: "ГИДРАВЛИЧЕСКАЯ СИСТЕМА", value: "" },
      { label: "Поток", value: "2×230 л/мин", indent: true },
      { label: "Давление", value: "33 мПа", indent: true },
      { label: "ГИДРАВЛИЧЕСКИЙ ПРИВОД", value: "" },
      { label: "Скорость вращения", value: "8–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Выдвижные гусеницы", value: "JT45", indent: true },
      { label: "Ширина гусеничных башмаков", value: "700 мм", indent: true },
      { label: "Длина шасси", value: "5 110 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 100–4 200 мм", indent: true },
      { label: "Тяговое усилие", value: "280 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЙ ВЕС", value: "" },
      { label: "Транспортировочный вес", value: "45 500 кг", indent: true },
      { label: "ГЛУБИНА БУРЕНИЯ", value: "" },
      { label: "Диаметр обсаженного отверстия", value: "1 000 мм", indent: true },
    ],
  },
  {
    name: "SD15W",
    type: "увеличенный ход",
    specs: [
      { label: "Высота мачты", value: "20 100 мм" },
      { label: "Вес базовой машины", value: "45 500 кг" },
      { label: "Крутящий момент вращателя", value: "150 кНм" },
      { label: "Диаметр необсаженного отверстия", value: "1 200 мм" },
    ],
    detailedSpecs: [
      { label: "СИСТЕМА ЗАДАВЛИВАНИЯ-ИЗВЛЕЧЕНИЯ", value: "" },
      { label: "Ход", value: "10 000 мм", indent: true },
      { label: "ОСНОВНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "140 кН", indent: true },
      { label: "Диаметр троса", value: "23 мм", indent: true },
      { label: "Макс. линейная скорость", value: "50 м/мин", indent: true },
      { label: "СЕРВИСНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "25 кН", indent: true },
      { label: "Диаметр троса", value: "10 мм", indent: true },
      { label: "Макс. линейная скорость", value: "70 м/мин", indent: true },
      { label: "БАЗА МАШИНЫ", value: "" },
      { label: "Дизельный двигатель", value: "6BTAA5.9-C", indent: true },
      { label: "Мощность", value: "133 кВт", indent: true },
      { label: "ГИДРАВЛИЧЕСКАЯ СИСТЕМА", value: "" },
      { label: "Поток", value: "2×230 л/мин", indent: true },
      { label: "Давление", value: "33 мПа", indent: true },
      { label: "ГИДРАВЛИЧЕСКИЙ ПРИВОД", value: "" },
      { label: "Скорость вращения", value: "8–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Выдвижные гусеницы", value: "JT45", indent: true },
      { label: "Ширина гусеничных башмаков", value: "700 мм", indent: true },
      { label: "Длина шасси", value: "5 110 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 100–4 200 мм", indent: true },
      { label: "Тяговое усилие", value: "280 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЙ ВЕС", value: "" },
      { label: "Транспортировочный вес", value: "45 500 кг", indent: true },
      { label: "ГЛУБИНА БУРЕНИЯ", value: "" },
      { label: "Диаметр обсаженного отверстия", value: "1 000 мм", indent: true },
    ],
  },
  {
    name: "SD20C",
    type: "стандартная",
    specs: [
      { label: "Высота мачты", value: "21 570 мм" },
      { label: "Вес базовой машины", value: "57 000 кг" },
      { label: "Крутящий момент вращателя", value: "200 кНм" },
      { label: "Диаметр необсаженного отверстия", value: "1 900 мм" },
    ],
    detailedSpecs: [
      { label: "СИСТЕМА ЗАДАВЛИВАНИЯ-ИЗВЛЕЧЕНИЯ", value: "" },
      { label: "Ход", value: "5 000 мм", indent: true },
      { label: "ОСНОВНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "200 кН", indent: true },
      { label: "Диаметр троса", value: "26 мм", indent: true },
      { label: "Макс. линейная скорость", value: "60 м/мин", indent: true },
      { label: "СЕРВИСНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "75 кН", indent: true },
      { label: "Диаметр троса", value: "18 мм", indent: true },
      { label: "Макс. линейная скорость", value: "45 м/мин", indent: true },
      { label: "БАЗА МАШИНЫ", value: "" },
      { label: "Дизельный двигатель", value: "C8.3", indent: true },
      { label: "Мощность", value: "196 кВт", indent: true },
      { label: "ГИДРАВЛИЧЕСКАЯ СИСТЕМА", value: "" },
      { label: "Поток", value: "2×250 л/мин", indent: true },
      { label: "Давление", value: "33 мПа", indent: true },
      { label: "ГИДРАВЛИЧЕСКИЙ ПРИВОД", value: "" },
      { label: "Скорость вращения", value: "8–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Выдвижные гусеницы", value: "JT70B", indent: true },
      { label: "Ширина гусеничных башмаков", value: "700 мм", indent: true },
      { label: "Длина шасси", value: "5 400 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 150–4 300 мм", indent: true },
      { label: "Тяговое усилие", value: "430 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЙ ВЕС", value: "" },
      { label: "Транспортировочный вес", value: "57 500 кг", indent: true },
      { label: "ГЛУБИНА БУРЕНИЯ", value: "" },
      { label: "Диаметр обсаженного отверстия", value: "1 600 мм", indent: true },
    ],
  },
  {
    name: "SD20CW",
    type: "увеличенный ход",
    specs: [
      { label: "Высота мачты", value: "21 570 мм" },
      { label: "Вес базовой машины", value: "57 500 кг" },
      { label: "Крутящий момент вращателя", value: "200 кНм" },
      { label: "Диаметр необсаженного отверстия", value: "1 700 мм" },
    ],
    detailedSpecs: [
      { label: "СИСТЕМА ЗАДАВЛИВАНИЯ-ИЗВЛЕЧЕНИЯ", value: "" },
      { label: "Ход", value: "10 000 мм", indent: true },
      { label: "ОСНОВНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "200 кН", indent: true },
      { label: "Диаметр троса", value: "26 мм", indent: true },
      { label: "Макс. линейная скорость", value: "60 м/мин", indent: true },
      { label: "СЕРВИСНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "75 кН", indent: true },
      { label: "Диаметр троса", value: "18 мм", indent: true },
      { label: "Макс. линейная скорость", value: "45 м/мин", indent: true },
      { label: "БАЗА МАШИНЫ", value: "" },
      { label: "Дизельный двигатель", value: "C8.3", indent: true },
      { label: "Мощность", value: "196 кВт", indent: true },
      { label: "ГИДРАВЛИЧЕСКАЯ СИСТЕМА", value: "" },
      { label: "Поток", value: "2×250 л/мин", indent: true },
      { label: "Давление", value: "33 мПа", indent: true },
      { label: "ГИДРАВЛИЧЕСКИЙ ПРИВОД", value: "" },
      { label: "Скорость вращения", value: "8–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Выдвижные гусеницы", value: "JT70B", indent: true },
      { label: "Ширина гусеничных башмаков", value: "700 мм", indent: true },
      { label: "Длина шасси", value: "5 400 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 150–4 300 мм", indent: true },
      { label: "Тяговое усилие", value: "430 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЙ ВЕС", value: "" },
      { label: "Транспортировочный вес", value: "57 500 кг", indent: true },
      { label: "ГЛУБИНА БУРЕНИЯ", value: "" },
      { label: "Диаметр обсаженного отверстия", value: "1 400 мм", indent: true },
    ],
  },
  {
    name: "SD25",
    type: "стандартная",
    specs: [
      { label: "Высота мачты", value: "23 000 мм" },
      { label: "Вес базовой машины", value: "67 000 кг" },
      { label: "Крутящий момент вращателя", value: "250 кНм" },
      { label: "Диаметр необсаженного отверстия", value: "1 800 мм" },
    ],
    detailedSpecs: [
      { label: "СИСТЕМА ЗАДАВЛИВАНИЯ-ИЗВЛЕЧЕНИЯ", value: "" },
      { label: "Ход", value: "5 700 мм", indent: true },
      { label: "ОСНОВНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "220 кН", indent: true },
      { label: "Диаметр троса", value: "28 мм", indent: true },
      { label: "Макс. линейная скорость", value: "60 м/мин", indent: true },
      { label: "СЕРВИСНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "75 кН", indent: true },
      { label: "Диаметр троса", value: "18 мм", indent: true },
      { label: "Макс. линейная скорость", value: "45 м/мин", indent: true },
      { label: "БАЗА МАШИНЫ", value: "" },
      { label: "Дизельный двигатель", value: "QSL9", indent: true },
      { label: "Мощность", value: "221 кВт", indent: true },
      { label: "ГИДРАВЛИЧЕСКАЯ СИСТЕМА", value: "" },
      { label: "Поток", value: "2×288 л/мин", indent: true },
      { label: "Давление", value: "33 мПа", indent: true },
      { label: "ГИДРАВЛИЧЕСКИЙ ПРИВОД", value: "" },
      { label: "Скорость вращения", value: "8–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Выдвижные гусеницы", value: "JT70A", indent: true },
      { label: "Ширина гусеничных башмаков", value: "800 мм", indent: true },
      { label: "Длина шасси", value: "5 535 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 200–4 300 мм", indent: true },
      { label: "Тяговое усилие", value: "500 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЙ ВЕС", value: "" },
      { label: "Транспортировочный вес", value: "67 000 кг", indent: true },
      { label: "ГЛУБИНА БУРЕНИЯ", value: "" },
      { label: "Диаметр обсаженного отверстия", value: "1 500 мм", indent: true },
    ],
  },
  {
    name: "SD25W",
    type: "увеличенный ход",
    specs: [
      { label: "Высота мачты", value: "23 000 мм" },
      { label: "Вес базовой машины", value: "67 500 кг" },
      { label: "Крутящий момент вращателя", value: "250 кНм" },
      { label: "Диаметр необсаженного отверстия", value: "2 000 мм" },
    ],
    detailedSpecs: [
      { label: "СИСТЕМА ЗАДАВЛИВАНИЯ-ИЗВЛЕЧЕНИЯ", value: "" },
      { label: "Ход", value: "10 000 мм", indent: true },
      { label: "ОСНОВНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "220 кН", indent: true },
      { label: "Диаметр троса", value: "28 мм", indent: true },
      { label: "Макс. линейная скорость", value: "60 м/мин", indent: true },
      { label: "СЕРВИСНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "75 кН", indent: true },
      { label: "Диаметр троса", value: "18 мм", indent: true },
      { label: "Макс. линейная скорость", value: "45 м/мин", indent: true },
      { label: "БАЗА МАШИНЫ", value: "" },
      { label: "Дизельный двигатель", value: "QSL9", indent: true },
      { label: "Мощность", value: "221 кВт", indent: true },
      { label: "ГИДРАВЛИЧЕСКАЯ СИСТЕМА", value: "" },
      { label: "Поток", value: "2×288 л/мин", indent: true },
      { label: "Давление", value: "33 мПа", indent: true },
      { label: "ГИДРАВЛИЧЕСКИЙ ПРИВОД", value: "" },
      { label: "Скорость вращения", value: "8–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Выдвижные гусеницы", value: "JT70A", indent: true },
      { label: "Ширина гусеничных башмаков", value: "800 мм", indent: true },
      { label: "Длина шасси", value: "5 535 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 200–4 300 мм", indent: true },
      { label: "Тяговое усилие", value: "500 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЙ ВЕС", value: "" },
      { label: "Транспортировочный вес", value: "67 500 кг", indent: true },
      { label: "ГЛУБИНА БУРЕНИЯ", value: "" },
      { label: "Диаметр обсаженного отверстия", value: "1 700 мм", indent: true },
    ],
  },
  {
    name: "SD28",
    type: "стандартная",
    specs: [
      { label: "Высота мачты", value: "23 500 мм" },
      { label: "Вес базовой машины", value: "73 000 кг" },
      { label: "Крутящий момент вращателя", value: "286 кНм" },
      { label: "Диаметр необсаженного отверстия", value: "1 800 мм" },
    ],
    detailedSpecs: [
      { label: "СИСТЕМА ЗАДАВЛИВАНИЯ-ИЗВЛЕЧЕНИЯ", value: "" },
      { label: "Ход", value: "5 700 мм", indent: true },
      { label: "ОСНОВНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "250 кН", indent: true },
      { label: "Диаметр троса", value: "30 мм", indent: true },
      { label: "Макс. линейная скорость", value: "60 м/мин", indent: true },
      { label: "СЕРВИСНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "75 кН", indent: true },
      { label: "Диаметр троса", value: "18 мм", indent: true },
      { label: "Макс. линейная скорость", value: "45 м/мин", indent: true },
      { label: "БАЗА МАШИНЫ", value: "" },
      { label: "Дизельный двигатель", value: "QSM11-C", indent: true },
      { label: "Мощность", value: "263 кВт", indent: true },
      { label: "ГИДРАВЛИЧЕСКАЯ СИСТЕМА", value: "" },
      { label: "Поток", value: "2×380 л/мин", indent: true },
      { label: "Давление", value: "33 мПа", indent: true },
      { label: "ГИДРАВЛИЧЕСКИЙ ПРИВОД", value: "" },
      { label: "Скорость вращения", value: "6–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Выдвижные гусеницы", value: "JT80", indent: true },
      { label: "Ширина гусеничных башмаков", value: "800 мм", indent: true },
      { label: "Длина шасси", value: "5 680 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 300–4 400 мм", indent: true },
      { label: "Тяговое усилие", value: "500 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЙ ВЕС", value: "" },
      { label: "Транспортировочный вес", value: "78 000 кг", indent: true },
      { label: "ГЛУБИНА БУРЕНИЯ", value: "" },
      { label: "Диаметр обсаженного отверстия", value: "1 500 мм", indent: true },
    ],
  },
  {
    name: "SD28W",
    type: "увеличенный ход",
    specs: [
      { label: "Высота мачты", value: "23 500 мм" },
      { label: "Вес базовой машины", value: "74 000 кг" },
      { label: "Крутящий момент вращателя", value: "286 кНм" },
      { label: "Диаметр необсаженного отверстия", value: "2 400 мм" },
    ],
    detailedSpecs: [
      { label: "СИСТЕМА ЗАДАВЛИВАНИЯ-ИЗВЛЕЧЕНИЯ", value: "" },
      { label: "Ход", value: "10 000 мм", indent: true },
      { label: "ОСНОВНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "250 кН", indent: true },
      { label: "Диаметр троса", value: "30 мм", indent: true },
      { label: "Макс. линейная скорость", value: "60 м/мин", indent: true },
      { label: "СЕРВИСНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "75 кН", indent: true },
      { label: "Диаметр троса", value: "18 мм", indent: true },
      { label: "Макс. линейная скорость", value: "45 м/мин", indent: true },
      { label: "БАЗА МАШИНЫ", value: "" },
      { label: "Дизельный двигатель", value: "QSM11-C", indent: true },
      { label: "Мощность", value: "263 кВт", indent: true },
      { label: "ГИДРАВЛИЧЕСКАЯ СИСТЕМА", value: "" },
      { label: "Поток", value: "2×380 л/мин", indent: true },
      { label: "Давление", value: "33 мПа", indent: true },
      { label: "ГИДРАВЛИЧЕСКИЙ ПРИВОД", value: "" },
      { label: "Скорость вращения", value: "6–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Выдвижные гусеницы", value: "JT80", indent: true },
      { label: "Ширина гусеничных башмаков", value: "800 мм", indent: true },
      { label: "Длина шасси", value: "5 680 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 300–4 400 мм", indent: true },
      { label: "Тяговое усилие", value: "500 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЙ ВЕС", value: "" },
      { label: "Транспортировочный вес", value: "79 000 кг", indent: true },
      { label: "ГЛУБИНА БУРЕНИЯ", value: "" },
      { label: "Диаметр обсаженного отверстия", value: "2 100 мм", indent: true },
    ],
  },
  {
    name: "SD28H",
    type: "усиленная",
    specs: [
      { label: "Высота мачты", value: "23 500 мм" },
      { label: "Вес базовой машины", value: "73 000 кг" },
      { label: "Крутящий момент вращателя", value: "286 кНм" },
      { label: "Диаметр необсаженного отверстия", value: "2 200 мм" },
    ],
    detailedSpecs: [
      { label: "СИСТЕМА ЗАДАВЛИВАНИЯ-ИЗВЛЕЧЕНИЯ", value: "" },
      { label: "Ход", value: "5 700 мм", indent: true },
      { label: "ОСНОВНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "300 кН", indent: true },
      { label: "Диаметр троса", value: "30 мм", indent: true },
      { label: "Макс. линейная скорость", value: "60 м/мин", indent: true },
      { label: "СЕРВИСНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "75 кН", indent: true },
      { label: "Диаметр троса", value: "18 мм", indent: true },
      { label: "Макс. линейная скорость", value: "45 м/мин", indent: true },
      { label: "БАЗА МАШИНЫ", value: "" },
      { label: "Дизельный двигатель", value: "QSM11-C", indent: true },
      { label: "Мощность", value: "263 кВт", indent: true },
      { label: "ГИДРАВЛИЧЕСКАЯ СИСТЕМА", value: "" },
      { label: "Поток", value: "2×380 л/мин", indent: true },
      { label: "Давление", value: "33 мПа", indent: true },
      { label: "ГИДРАВЛИЧЕСКИЙ ПРИВОД", value: "" },
      { label: "Скорость вращения", value: "6–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Выдвижные гусеницы", value: "JT80", indent: true },
      { label: "Ширина гусеничных башмаков", value: "800 мм", indent: true },
      { label: "Длина шасси", value: "5 680 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 300–4 400 мм", indent: true },
      { label: "Тяговое усилие", value: "500 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЙ ВЕС", value: "" },
      { label: "Транспортировочный вес", value: "78 000 кг", indent: true },
      { label: "ГЛУБИНА БУРЕНИЯ", value: "" },
      { label: "Диаметр обсаженного отверстия", value: "1 900 мм", indent: true },
    ],
  },
  {
    name: "SD32",
    type: "стандартная",
    specs: [
      { label: "Высота мачты", value: "25 720 мм" },
      { label: "Вес базовой машины", value: "86 000 кг" },
      { label: "Крутящий момент вращателя", value: "320 кНм" },
      { label: "Диаметр необсаженного отверстия", value: "2 600 мм" },
    ],
    detailedSpecs: [
      { label: "СИСТЕМА ЗАДАВЛИВАНИЯ-ИЗВЛЕЧЕНИЯ", value: "" },
      { label: "Ход", value: "5 700 мм", indent: true },
      { label: "ОСНОВНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "300 кН", indent: true },
      { label: "Диаметр троса", value: "36 мм", indent: true },
      { label: "Макс. линейная скорость", value: "60 м/мин", indent: true },
      { label: "СЕРВИСНАЯ ЛЕБЕДКА", value: "" },
      { label: "Тяговая сила на прямом тросе", value: "75 кН", indent: true },
      { label: "Диаметр троса", value: "18 мм", indent: true },
      { label: "Макс. линейная скорость", value: "45 м/мин", indent: true },
      { label: "БАЗА МАШИНЫ", value: "" },
      { label: "Дизельный двигатель", value: "QSM11-C", indent: true },
      { label: "Мощность", value: "263 кВт", indent: true },
      { label: "ГИДРАВЛИЧЕСКАЯ СИСТЕМА", value: "" },
      { label: "Поток", value: "2×380 л/мин", indent: true },
      { label: "Давление", value: "33 мПа", indent: true },
      { label: "ГИДРАВЛИЧЕСКИЙ ПРИВОД", value: "" },
      { label: "Скорость вращения", value: "6–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Выдвижные гусеницы", value: "JT90B", indent: true },
      { label: "Ширина гусеничных башмаков", value: "800 мм", indent: true },
      { label: "Длина шасси", value: "6 020 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 450–4 600 мм", indent: true },
      { label: "Тяговое усилие", value: "650 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЙ ВЕС", value: "" },
      { label: "Транспортировочный вес", value: "86 000 кг", indent: true },
      { label: "ГЛУБИНА БУРЕНИЯ", value: "" },
      { label: "Диаметр обсаженного отверстия", value: "2 300 мм", indent: true },
    ],
  },
];

const JintSDVariantsSection = () => {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              Модели буровых установок JINT (серия SD)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {variants.map((variant, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                        {variant.name}
                      </h3>
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 text-xs">
                        {variant.type}
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                      {variant.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                          <span className="text-base text-primary flex-1">{spec.label}</span>
                          <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
                        </div>
                      ))}

                      {expandedVariant === variant.name && (
                        <>
                          {variant.detailedSpecs.map((spec, idx) => (
                            <div
                              key={idx}
                              className={
                                spec.indent
                                  ? "flex justify-between items-center py-1 border-b border-gray-200 last:border-0 ml-4"
                                  : "flex justify-between items-center py-1 border-b border-gray-200 last:border-0"
                              }
                            >
                              {spec.value ? (
                                <>
                                  <span className="text-base text-primary">{spec.label}</span>
                                  <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
                                </>
                              ) : (
                                <span className="text-base font-semibold text-primary w-full">{spec.label}</span>
                              )}
                            </div>
                          ))}
                        </>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setExpandedVariant(expandedVariant === variant.name ? null : variant.name)}
                        className="w-full"
                      >
                        {expandedVariant === variant.name ? (
                          <>
                            <Icon name="ChevronUp" size={16} className="mr-2" />
                            Скрыть характеристики
                          </>
                        ) : (
                          <>
                            <Icon name="ChevronDown" size={16} className="mr-2" />
                            Подробнее
                          </>
                        )}
                      </Button>
                      <a href="#consultation" className="block">
                        <Button className="btn-gradient text-white w-full" size="sm">
                          <Icon name="MessageSquare" size={16} className="mr-2" />
                          Получить консультацию
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JintSDVariantsSection;