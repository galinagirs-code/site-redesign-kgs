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
      { label: "Давление", value: "33 бар", indent: true },
      { label: "ВРАЩАТЕЛЬНАЯ ГОЛОВКА", value: "" },
      { label: "Крутящий момент вращателя", value: "150 кНм", indent: true },
      { label: "Скорость вращения", value: "8–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Шасси", value: "JT45", indent: true },
      { label: "Ширина гусеничных башмаков", value: "700 мм", indent: true },
      { label: "Длина шасси", value: "5 110 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 100–4 200 мм", indent: true },
      { label: "Тяговое усилие", value: "280 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЕ ПАРАМЕТРЫ", value: "" },
      { label: "Транспортировочный вес", value: "45 500 кг", indent: true },
      { label: "ПАРАМЕТРЫ БУРЕНИЯ", value: "" },
      { label: "Диаметр необсаженного отверстия", value: "1 500 мм", indent: true },
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
      { label: "Давление", value: "33 бар", indent: true },
      { label: "ВРАЩАТЕЛЬНАЯ ГОЛОВКА", value: "" },
      { label: "Крутящий момент вращателя", value: "150 кНм", indent: true },
      { label: "Скорость вращения", value: "8–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Шасси", value: "JT45", indent: true },
      { label: "Ширина гусеничных башмаков", value: "700 мм", indent: true },
      { label: "Длина шасси", value: "5 110 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 100–4 200 мм", indent: true },
      { label: "Тяговое усилие", value: "280 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЕ ПАРАМЕТРЫ", value: "" },
      { label: "Транспортировочный вес", value: "45 500 кг", indent: true },
      { label: "ПАРАМЕТРЫ БУРЕНИЯ", value: "" },
      { label: "Диаметр необсаженного отверстия", value: "1 200 мм", indent: true },
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
      { label: "Давление", value: "33 бар", indent: true },
      { label: "ВРАЩАТЕЛЬНАЯ ГОЛОВКА", value: "" },
      { label: "Крутящий момент вращателя", value: "200 кНм", indent: true },
      { label: "Скорость вращения", value: "8–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Шасси", value: "JT70B", indent: true },
      { label: "Ширина гусеничных башмаков", value: "700 мм", indent: true },
      { label: "Длина шасси", value: "5 400 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 150–4 300 мм", indent: true },
      { label: "Тяговое усилие", value: "430 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЕ ПАРАМЕТРЫ", value: "" },
      { label: "Транспортировочный вес", value: "57 500 кг", indent: true },
      { label: "ПАРАМЕТРЫ БУРЕНИЯ", value: "" },
      { label: "Диаметр необсаженного отверстия", value: "1 900 мм", indent: true },
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
      { label: "Давление", value: "33 бар", indent: true },
      { label: "ВРАЩАТЕЛЬНАЯ ГОЛОВКА", value: "" },
      { label: "Крутящий момент вращателя", value: "200 кНм", indent: true },
      { label: "Скорость вращения", value: "8–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Шасси", value: "JT70B", indent: true },
      { label: "Ширина гусеничных башмаков", value: "700 мм", indent: true },
      { label: "Длина шасси", value: "5 400 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 150–4 300 мм", indent: true },
      { label: "Тяговое усилие", value: "430 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЕ ПАРАМЕТРЫ", value: "" },
      { label: "Транспортировочный вес", value: "57 500 кг", indent: true },
      { label: "ПАРАМЕТРЫ БУРЕНИЯ", value: "" },
      { label: "Диаметр необсаженного отверстия", value: "1 700 мм", indent: true },
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
      { label: "Давление", value: "33 бар", indent: true },
      { label: "ВРАЩАТЕЛЬНАЯ ГОЛОВКА", value: "" },
      { label: "Крутящий момент вращателя", value: "250 кНм", indent: true },
      { label: "Скорость вращения", value: "8–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Шасси", value: "JT70A", indent: true },
      { label: "Ширина гусеничных башмаков", value: "800 мм", indent: true },
      { label: "Длина шасси", value: "5 535 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 200–4 300 мм", indent: true },
      { label: "Тяговое усилие", value: "500 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЕ ПАРАМЕТРЫ", value: "" },
      { label: "Транспортировочный вес", value: "67 000 кг", indent: true },
      { label: "ПАРАМЕТРЫ БУРЕНИЯ", value: "" },
      { label: "Диаметр необсаженного отверстия", value: "1 800 мм", indent: true },
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
      { label: "Давление", value: "33 бар", indent: true },
      { label: "ВРАЩАТЕЛЬНАЯ ГОЛОВКА", value: "" },
      { label: "Крутящий момент вращателя", value: "250 кНм", indent: true },
      { label: "Скорость вращения", value: "8–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Шасси", value: "JT70A", indent: true },
      { label: "Ширина гусеничных башмаков", value: "800 мм", indent: true },
      { label: "Длина шасси", value: "5 535 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 200–4 300 мм", indent: true },
      { label: "Тяговое усилие", value: "500 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЕ ПАРАМЕТРЫ", value: "" },
      { label: "Транспортировочный вес", value: "67 500 кг", indent: true },
      { label: "ПАРАМЕТРЫ БУРЕНИЯ", value: "" },
      { label: "Диаметр необсаженного отверстия", value: "2 000 мм", indent: true },
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
      { label: "Давление", value: "33 бар", indent: true },
      { label: "ВРАЩАТЕЛЬНАЯ ГОЛОВКА", value: "" },
      { label: "Крутящий момент вращателя", value: "286 кНм", indent: true },
      { label: "Скорость вращения", value: "6–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Шасси", value: "JT80", indent: true },
      { label: "Ширина гусеничных башмаков", value: "800 мм", indent: true },
      { label: "Длина шасси", value: "5 680 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 300–4 400 мм", indent: true },
      { label: "Тяговое усилие", value: "500 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЕ ПАРАМЕТРЫ", value: "" },
      { label: "Транспортировочный вес", value: "78 000 кг", indent: true },
      { label: "ПАРАМЕТРЫ БУРЕНИЯ", value: "" },
      { label: "Диаметр необсаженного отверстия", value: "1 800 мм", indent: true },
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
      { label: "Давление", value: "33 бар", indent: true },
      { label: "ВРАЩАТЕЛЬНАЯ ГОЛОВКА", value: "" },
      { label: "Крутящий момент вращателя", value: "286 кНм", indent: true },
      { label: "Скорость вращения", value: "6–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Шасси", value: "JT80", indent: true },
      { label: "Ширина гусеничных башмаков", value: "800 мм", indent: true },
      { label: "Длина шасси", value: "5 680 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 300–4 400 мм", indent: true },
      { label: "Тяговое усилие", value: "500 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЕ ПАРАМЕТРЫ", value: "" },
      { label: "Транспортировочный вес", value: "79 000 кг", indent: true },
      { label: "ПАРАМЕТРЫ БУРЕНИЯ", value: "" },
      { label: "Диаметр необсаженного отверстия", value: "2 400 мм", indent: true },
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
      { label: "Давление", value: "33 бар", indent: true },
      { label: "ВРАЩАТЕЛЬНАЯ ГОЛОВКА", value: "" },
      { label: "Крутящий момент вращателя", value: "286 кНм", indent: true },
      { label: "Скорость вращения", value: "6–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Шасси", value: "JT80", indent: true },
      { label: "Ширина гусеничных башмаков", value: "800 мм", indent: true },
      { label: "Длина шасси", value: "5 680 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 300–4 400 мм", indent: true },
      { label: "Тяговое усилие", value: "500 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЕ ПАРАМЕТРЫ", value: "" },
      { label: "Транспортировочный вес", value: "78 000 кг", indent: true },
      { label: "ПАРАМЕТРЫ БУРЕНИЯ", value: "" },
      { label: "Диаметр необсаженного отверстия", value: "2 200 мм", indent: true },
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
      { label: "Давление", value: "33 бар", indent: true },
      { label: "ВРАЩАТЕЛЬНАЯ ГОЛОВКА", value: "" },
      { label: "Крутящий момент вращателя", value: "320 кНм", indent: true },
      { label: "Скорость вращения", value: "6–30 об/мин", indent: true },
      { label: "ГУСЕНИЧНОЕ ШАССИ", value: "" },
      { label: "Шасси", value: "JT90B", indent: true },
      { label: "Ширина гусеничных башмаков", value: "800 мм", indent: true },
      { label: "Длина шасси", value: "6 020 мм", indent: true },
      { label: "Мин/макс ширина шасси", value: "3 450–4 600 мм", indent: true },
      { label: "Тяговое усилие", value: "650 кН", indent: true },
      { label: "Скорость передвижения", value: "1,5 км/ч", indent: true },
      { label: "ТРАНСПОРТИРОВОЧНЫЕ ПАРАМЕТРЫ", value: "" },
      { label: "Транспортировочный вес", value: "86 000 кг", indent: true },
      { label: "ПАРАМЕТРЫ БУРЕНИЯ", value: "" },
      { label: "Диаметр необсаженного отверстия", value: "2 600 мм", indent: true },
      { label: "Диаметр обсаженного отверстия", value: "2 300 мм", indent: true },
    ],
  },
];

const typeColors: Record<string, string> = {
  "стандартная": "bg-blue-100 text-blue-800",
  "увеличенный ход": "bg-green-100 text-green-800",
  "усиленная": "bg-orange-100 text-orange-800",
};

const JintSDVariantsSection = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [showDetailed, setShowDetailed] = useState(false);

  const variant = variants[selectedVariant];

  return (
    <section id="variants" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Модели серии SD
          </h2>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {variants.map((v, i) => (
              <button
                key={i}
                onClick={() => { setSelectedVariant(i); setShowDetailed(false); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedVariant === i
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-primary border border-gray-200 hover:border-primary"
                }`}
              >
                {v.name}
              </button>
            ))}
          </div>

          <Card className="border-none shadow-xl">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h3 className="text-2xl font-heading font-bold text-primary">{variant.name}</h3>
                <Badge className={typeColors[variant.type] || "bg-gray-100 text-gray-800"}>
                  {variant.type}
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {variant.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-base text-primary flex-1">{spec.label}</span>
                    <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                onClick={() => setShowDetailed(!showDetailed)}
                className="mb-6 w-full md:w-auto"
              >
                <Icon name={showDetailed ? "ChevronUp" : "ChevronDown"} size={16} className="mr-2" />
                {showDetailed ? "Скрыть характеристики" : "Полные характеристики"}
              </Button>

              {showDetailed && (
                <div className="border-t border-gray-100 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                    {(() => {
                      const mid = Math.ceil(variant.detailedSpecs.length / 2);
                      const left = variant.detailedSpecs.slice(0, mid);
                      const right = variant.detailedSpecs.slice(mid);
                      return (
                        <>
                          <div className="space-y-1">
                            {left.map((spec, i) => (
                              <div
                                key={i}
                                className={`flex justify-between items-start py-1.5 ${spec.value ? "border-b border-gray-100" : "pt-3"}`}
                              >
                                {spec.value ? (
                                  <>
                                    <span className={`text-base text-primary${spec.indent ? " pl-3" : ""}`}>{spec.label}</span>
                                    <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
                                  </>
                                ) : (
                                  <span className="text-base font-semibold text-primary w-full">{spec.label}</span>
                                )}
                              </div>
                            ))}
                          </div>
                          <div className="space-y-1">
                            {right.map((spec, i) => (
                              <div
                                key={i}
                                className={`flex justify-between items-start py-1.5 ${spec.value ? "border-b border-gray-100" : "pt-3"}`}
                              >
                                {spec.value ? (
                                  <>
                                    <span className={`text-base text-primary${spec.indent ? " pl-3" : ""}`}>{spec.label}</span>
                                    <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
                                  </>
                                ) : (
                                  <span className="text-base font-semibold text-primary w-full">{spec.label}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3 mt-4">
                <a href="#consultation" className="px-6 py-2.5 btn-gradient text-white rounded-lg text-sm font-medium transition-all hover:scale-105">
                  Запросить цену
                </a>
                <a href="#consultation" className="px-6 py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">
                  Получить консультацию
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JintSDVariantsSection;
