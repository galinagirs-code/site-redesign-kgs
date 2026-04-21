import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const variants = [
  {
    name: "SH25C",
    type: "стандартная",
    specs: [
      { label: "Высота мачты, мм", value: "23500" },
      { label: "Вес базовой машины, кг", value: "63900" },
      { label: "Крутящий момент вращателя, кН·м", value: "250" },
      { label: "Диаметр необсаженного отверстия, мм", value: "2000" },
    ],
    detailedSpecs: [
      { label: "Система задавливания/извлечения", value: "" },
      { label: "Ход, мм", value: "5700", indent: true },
      { label: "Сила задавливания, кН", value: "250", indent: true },
      { label: "Сила извлечения, кН", value: "250", indent: true },
      { label: "Основная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "220", indent: true },
      { label: "Диаметр троса, мм", value: "28", indent: true },
      { label: "Макс. скорость, м/мин", value: "60", indent: true },
      { label: "Сервисная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "75", indent: true },
      { label: "Диаметр троса, мм", value: "18", indent: true },
      { label: "Макс. скорость, м/мин", value: "45", indent: true },
      { label: "База машины", value: "" },
      { label: "Дизельный двигатель", value: "QSL9", indent: true },
      { label: "Мощность, кВт", value: "221", indent: true },
      { label: "Макс. обороты двигателя, об/мин", value: "1850", indent: true },
      { label: "Гидравлическая система", value: "" },
      { label: "Поток, л/мин", value: "2 × 288", indent: true },
      { label: "Давление, МПа", value: "33", indent: true },
      { label: "Гидравлический привод", value: "" },
      { label: "Скорость вращения, об/мин", value: "8–30", indent: true },
      { label: "Гусеничное шасси", value: "" },
      { label: "Тип", value: "JT70A", indent: true },
      { label: "Ширина башмаков, мм", value: "800", indent: true },
      { label: "Длина шасси, мм", value: "5535", indent: true },
      { label: "Мин./макс. ширина, мм", value: "3200–4300", indent: true },
      { label: "Тяговое усилие, кН", value: "500", indent: true },
      { label: "Скорость передвижения, км/ч", value: "1,5", indent: true },
      { label: "Транспортный вес", value: "" },
      { label: "Вес базовой машины, кг", value: "58770", indent: true },
      { label: "Противовес, кг", value: "13000", indent: true },
      { label: "Верхняя мачта и оголовок, кг", value: "5130", indent: true },
      { label: "Параметры бурения", value: "" },
      { label: "Диаметр обсаженного отверстия, мм", value: "1600", indent: true },
    ],
  },
  {
    name: "SH25CW",
    type: "увеличенный ход",
    specs: [
      { label: "Высота мачты, мм", value: "23500" },
      { label: "Вес базовой машины, кг", value: "65900" },
      { label: "Крутящий момент вращателя, кН·м", value: "250" },
      { label: "Диаметр необсаженного отверстия, мм", value: "1900" },
    ],
    detailedSpecs: [
      { label: "Система задавливания/извлечения", value: "" },
      { label: "Ход, мм", value: "10000", indent: true },
      { label: "Сила задавливания, кН", value: "250", indent: true },
      { label: "Сила извлечения, кН", value: "250", indent: true },
      { label: "Основная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "220", indent: true },
      { label: "Диаметр троса, мм", value: "28", indent: true },
      { label: "Макс. скорость, м/мин", value: "60", indent: true },
      { label: "Сервисная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "75", indent: true },
      { label: "Диаметр троса, мм", value: "18", indent: true },
      { label: "Макс. скорость, м/мин", value: "45", indent: true },
      { label: "База машины", value: "" },
      { label: "Дизельный двигатель", value: "QSL9", indent: true },
      { label: "Мощность, кВт", value: "221", indent: true },
      { label: "Макс. обороты двигателя, об/мин", value: "1850", indent: true },
      { label: "Гидравлическая система", value: "" },
      { label: "Поток, л/мин", value: "2 × 288", indent: true },
      { label: "Давление, МПа", value: "33", indent: true },
      { label: "Гидравлический привод", value: "" },
      { label: "Скорость вращения, об/мин", value: "8–30", indent: true },
      { label: "Гусеничное шасси", value: "" },
      { label: "Тип", value: "JT70A", indent: true },
      { label: "Ширина башмаков, мм", value: "800", indent: true },
      { label: "Длина шасси, мм", value: "5535", indent: true },
      { label: "Мин./макс. ширина, мм", value: "3200–4300", indent: true },
      { label: "Тяговое усилие, кН", value: "500", indent: true },
      { label: "Скорость передвижения, км/ч", value: "1,5", indent: true },
      { label: "Транспортный вес", value: "" },
      { label: "Вес базовой машины, кг", value: "61840", indent: true },
      { label: "Противовес, кг", value: "13000", indent: true },
      { label: "Верхняя мачта и оголовок, кг", value: "4060", indent: true },
      { label: "Параметры бурения", value: "" },
      { label: "Диаметр обсаженного отверстия, мм", value: "1600", indent: true },
    ],
  },
  {
    name: "SH30",
    type: "стандартная",
    specs: [
      { label: "Высота мачты, мм", value: "24400" },
      { label: "Вес базовой машины, кг", value: "75000" },
      { label: "Крутящий момент вращателя, кН·м", value: "286" },
      { label: "Диаметр необсаженного отверстия, мм", value: "2500" },
    ],
    detailedSpecs: [
      { label: "Система задавливания/извлечения", value: "" },
      { label: "Ход, мм", value: "5700", indent: true },
      { label: "Сила задавливания, кН", value: "250", indent: true },
      { label: "Сила извлечения, кН", value: "250", indent: true },
      { label: "Основная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "250", indent: true },
      { label: "Диаметр троса, мм", value: "30", indent: true },
      { label: "Макс. скорость, м/мин", value: "60", indent: true },
      { label: "Сервисная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "75", indent: true },
      { label: "Диаметр троса, мм", value: "18", indent: true },
      { label: "Макс. скорость, м/мин", value: "45", indent: true },
      { label: "База машины", value: "" },
      { label: "Дизельный двигатель", value: "QSM11-C", indent: true },
      { label: "Мощность, кВт", value: "263", indent: true },
      { label: "Макс. обороты двигателя, об/мин", value: "1900", indent: true },
      { label: "Гидравлическая система", value: "" },
      { label: "Поток, л/мин", value: "2 × 380", indent: true },
      { label: "Давление, МПа", value: "33", indent: true },
      { label: "Гидравлический привод", value: "" },
      { label: "Скорость вращения, об/мин", value: "6–30", indent: true },
      { label: "Гусеничное шасси", value: "" },
      { label: "Тип", value: "JT80", indent: true },
      { label: "Ширина башмаков, мм", value: "800", indent: true },
      { label: "Длина шасси, мм", value: "5680", indent: true },
      { label: "Мин./макс. ширина, мм", value: "3300–4400", indent: true },
      { label: "Тяговое усилие, кН", value: "500", indent: true },
      { label: "Скорость передвижения, км/ч", value: "1,5", indent: true },
      { label: "Транспортный вес", value: "" },
      { label: "Вес базовой машины, кг", value: "70000", indent: true },
      { label: "Противовес, кг", value: "15000", indent: true },
      { label: "Верхняя мачта и оголовок, кг", value: "5000", indent: true },
      { label: "Параметры бурения", value: "" },
      { label: "Диаметр обсаженного отверстия, мм", value: "2200", indent: true },
    ],
  },
  {
    name: "SH30W",
    type: "увеличенный ход",
    specs: [
      { label: "Высота мачты, мм", value: "24400" },
      { label: "Вес базовой машины, кг", value: "76000" },
      { label: "Крутящий момент вращателя, кН·м", value: "286" },
      { label: "Диаметр необсаженного отверстия, мм", value: "2300" },
    ],
    detailedSpecs: [
      { label: "Система задавливания/извлечения", value: "" },
      { label: "Ход, мм", value: "10000", indent: true },
      { label: "Сила задавливания, кН", value: "250", indent: true },
      { label: "Сила извлечения, кН", value: "250", indent: true },
      { label: "Основная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "250", indent: true },
      { label: "Диаметр троса, мм", value: "30", indent: true },
      { label: "Макс. скорость, м/мин", value: "60", indent: true },
      { label: "Сервисная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "75", indent: true },
      { label: "Диаметр троса, мм", value: "18", indent: true },
      { label: "Макс. скорость, м/мин", value: "45", indent: true },
      { label: "База машины", value: "" },
      { label: "Дизельный двигатель", value: "QSM11-C", indent: true },
      { label: "Мощность, кВт", value: "263", indent: true },
      { label: "Макс. обороты двигателя, об/мин", value: "1900", indent: true },
      { label: "Гидравлическая система", value: "" },
      { label: "Поток, л/мин", value: "2 × 380", indent: true },
      { label: "Давление, МПа", value: "33", indent: true },
      { label: "Гидравлический привод", value: "" },
      { label: "Скорость вращения, об/мин", value: "6–30", indent: true },
      { label: "Гусеничное шасси", value: "" },
      { label: "Тип", value: "JT80", indent: true },
      { label: "Ширина башмаков, мм", value: "800", indent: true },
      { label: "Длина шасси, мм", value: "5680", indent: true },
      { label: "Мин./макс. ширина, мм", value: "3300–4400", indent: true },
      { label: "Тяговое усилие, кН", value: "500", indent: true },
      { label: "Скорость передвижения, км/ч", value: "1,5", indent: true },
      { label: "Транспортный вес", value: "" },
      { label: "Вес базовой машины, кг", value: "72000", indent: true },
      { label: "Противовес, кг", value: "15000", indent: true },
      { label: "Верхняя мачта и оголовок, кг", value: "4000", indent: true },
      { label: "Параметры бурения", value: "" },
      { label: "Диаметр обсаженного отверстия, мм", value: "2000", indent: true },
    ],
  },
  {
    name: "SH30H",
    type: "усиленная",
    specs: [
      { label: "Высота мачты, мм", value: "24600" },
      { label: "Вес базовой машины, кг", value: "80000" },
      { label: "Крутящий момент вращателя, кН·м", value: "300" },
      { label: "Диаметр необсаженного отверстия, мм", value: "2500" },
    ],
    detailedSpecs: [
      { label: "Система задавливания/извлечения", value: "" },
      { label: "Ход, мм", value: "5700", indent: true },
      { label: "Сила задавливания, кН", value: "250", indent: true },
      { label: "Сила извлечения, кН", value: "250", indent: true },
      { label: "Основная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "300", indent: true },
      { label: "Диаметр троса, мм", value: "36", indent: true },
      { label: "Макс. скорость, м/мин", value: "60", indent: true },
      { label: "Сервисная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "75", indent: true },
      { label: "Диаметр троса, мм", value: "18", indent: true },
      { label: "Макс. скорость, м/мин", value: "45", indent: true },
      { label: "База машины", value: "" },
      { label: "Дизельный двигатель", value: "QSM11-C", indent: true },
      { label: "Мощность, кВт", value: "263", indent: true },
      { label: "Макс. обороты двигателя, об/мин", value: "1900", indent: true },
      { label: "Гидравлическая система", value: "" },
      { label: "Поток, л/мин", value: "2 × 380", indent: true },
      { label: "Давление, МПа", value: "33", indent: true },
      { label: "Гидравлический привод", value: "" },
      { label: "Скорость вращения, об/мин", value: "6–30", indent: true },
      { label: "Гусеничное шасси", value: "" },
      { label: "Тип", value: "JT80", indent: true },
      { label: "Ширина башмаков, мм", value: "800", indent: true },
      { label: "Длина шасси, мм", value: "5680", indent: true },
      { label: "Мин./макс. ширина, мм", value: "3300–4400", indent: true },
      { label: "Тяговое усилие, кН", value: "500", indent: true },
      { label: "Скорость передвижения, км/ч", value: "1,5", indent: true },
      { label: "Транспортный вес", value: "" },
      { label: "Вес базовой машины, кг", value: "75000", indent: true },
      { label: "Противовес, кг", value: "15000", indent: true },
      { label: "Верхняя мачта и оголовок, кг", value: "5000", indent: true },
      { label: "Параметры бурения", value: "" },
      { label: "Диаметр обсаженного отверстия, мм", value: "2200", indent: true },
    ],
  },
  {
    name: "SH30HW",
    type: "усил. + увел. ход",
    specs: [
      { label: "Высота мачты, мм", value: "24600" },
      { label: "Вес базовой машины, кг", value: "81000" },
      { label: "Крутящий момент вращателя, кН·м", value: "300" },
      { label: "Диаметр необсаженного отверстия, мм", value: "2300" },
    ],
    detailedSpecs: [
      { label: "Система задавливания/извлечения", value: "" },
      { label: "Ход, мм", value: "10000", indent: true },
      { label: "Сила задавливания, кН", value: "250", indent: true },
      { label: "Сила извлечения, кН", value: "250", indent: true },
      { label: "Основная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "300", indent: true },
      { label: "Диаметр троса, мм", value: "36", indent: true },
      { label: "Макс. скорость, м/мин", value: "60", indent: true },
      { label: "Сервисная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "75", indent: true },
      { label: "Диаметр троса, мм", value: "18", indent: true },
      { label: "Макс. скорость, м/мин", value: "45", indent: true },
      { label: "База машины", value: "" },
      { label: "Дизельный двигатель", value: "QSM11-C", indent: true },
      { label: "Мощность, кВт", value: "263", indent: true },
      { label: "Макс. обороты двигателя, об/мин", value: "1900", indent: true },
      { label: "Гидравлическая система", value: "" },
      { label: "Поток, л/мин", value: "2 × 380", indent: true },
      { label: "Давление, МПа", value: "33", indent: true },
      { label: "Гидравлический привод", value: "" },
      { label: "Скорость вращения, об/мин", value: "6–30", indent: true },
      { label: "Гусеничное шасси", value: "" },
      { label: "Тип", value: "JT80", indent: true },
      { label: "Ширина башмаков, мм", value: "800", indent: true },
      { label: "Длина шасси, мм", value: "5680", indent: true },
      { label: "Мин./макс. ширина, мм", value: "3300–4400", indent: true },
      { label: "Тяговое усилие, кН", value: "500", indent: true },
      { label: "Скорость передвижения, км/ч", value: "1,5", indent: true },
      { label: "Транспортный вес", value: "" },
      { label: "Вес базовой машины, кг", value: "77000", indent: true },
      { label: "Противовес, кг", value: "15000", indent: true },
      { label: "Верхняя мачта и оголовок, кг", value: "4000", indent: true },
      { label: "Параметры бурения", value: "" },
      { label: "Диаметр обсаженного отверстия, мм", value: "2000", indent: true },
    ],
  },
  {
    name: "SH36",
    type: "стандартная",
    specs: [
      { label: "Высота мачты, мм", value: "24400" },
      { label: "Вес базовой машины, кг", value: "86200" },
      { label: "Крутящий момент вращателя, кН·м", value: "360" },
      { label: "Диаметр необсаженного отверстия, мм", value: "2500" },
    ],
    detailedSpecs: [
      { label: "Система задавливания/извлечения", value: "" },
      { label: "Ход, мм", value: "6000", indent: true },
      { label: "Сила задавливания, кН", value: "300", indent: true },
      { label: "Сила извлечения, кН", value: "300", indent: true },
      { label: "Основная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "300", indent: true },
      { label: "Диаметр троса, мм", value: "36", indent: true },
      { label: "Макс. скорость, м/мин", value: "60", indent: true },
      { label: "Сервисная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "75", indent: true },
      { label: "Диаметр троса, мм", value: "18", indent: true },
      { label: "Макс. скорость, м/мин", value: "45", indent: true },
      { label: "База машины", value: "" },
      { label: "Дизельный двигатель", value: "QSM11-C", indent: true },
      { label: "Мощность, кВт", value: "300", indent: true },
      { label: "Макс. обороты двигателя, об/мин", value: "1900", indent: true },
      { label: "Гидравлическая система", value: "" },
      { label: "Поток, л/мин", value: "2 × 380", indent: true },
      { label: "Давление, МПа", value: "33", indent: true },
      { label: "Гидравлический привод", value: "" },
      { label: "Скорость вращения, об/мин", value: "6–30", indent: true },
      { label: "Гусеничное шасси", value: "" },
      { label: "Тип", value: "JT90", indent: true },
      { label: "Ширина башмаков, мм", value: "800", indent: true },
      { label: "Длина шасси, мм", value: "6020", indent: true },
      { label: "Мин./макс. ширина, мм", value: "3450–4600", indent: true },
      { label: "Тяговое усилие, кН", value: "650", indent: true },
      { label: "Скорость передвижения, км/ч", value: "1,5", indent: true },
      { label: "Транспортный вес", value: "" },
      { label: "Вес базовой машины, кг", value: "80000", indent: true },
      { label: "Противовес, кг", value: "17000", indent: true },
      { label: "Верхняя мачта и оголовок, кг", value: "6200", indent: true },
      { label: "Параметры бурения", value: "" },
      { label: "Диаметр обсаженного отверстия, мм", value: "2200", indent: true },
    ],
  },
  {
    name: "SH36W",
    type: "увеличенный ход",
    specs: [
      { label: "Высота мачты, мм", value: "24400" },
      { label: "Вес базовой машины, кг", value: "87200" },
      { label: "Крутящий момент вращателя, кН·м", value: "360" },
      { label: "Диаметр необсаженного отверстия, мм", value: "2300" },
    ],
    detailedSpecs: [
      { label: "Система задавливания/извлечения", value: "" },
      { label: "Ход, мм", value: "10000", indent: true },
      { label: "Сила задавливания, кН", value: "300", indent: true },
      { label: "Сила извлечения, кН", value: "300", indent: true },
      { label: "Основная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "300", indent: true },
      { label: "Диаметр троса, мм", value: "36", indent: true },
      { label: "Макс. скорость, м/мин", value: "60", indent: true },
      { label: "Сервисная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "75", indent: true },
      { label: "Диаметр троса, мм", value: "18", indent: true },
      { label: "Макс. скорость, м/мин", value: "45", indent: true },
      { label: "База машины", value: "" },
      { label: "Дизельный двигатель", value: "QSM11-C", indent: true },
      { label: "Мощность, кВт", value: "300", indent: true },
      { label: "Макс. обороты двигателя, об/мин", value: "1900", indent: true },
      { label: "Гидравлическая система", value: "" },
      { label: "Поток, л/мин", value: "2 × 380", indent: true },
      { label: "Давление, МПа", value: "33", indent: true },
      { label: "Гидравлический привод", value: "" },
      { label: "Скорость вращения, об/мин", value: "6–30", indent: true },
      { label: "Гусеничное шасси", value: "" },
      { label: "Тип", value: "JT90", indent: true },
      { label: "Ширина башмаков, мм", value: "800", indent: true },
      { label: "Длина шасси, мм", value: "6020", indent: true },
      { label: "Мин./макс. ширина, мм", value: "3450–4600", indent: true },
      { label: "Тяговое усилие, кН", value: "650", indent: true },
      { label: "Скорость передвижения, км/ч", value: "1,5", indent: true },
      { label: "Транспортный вес", value: "" },
      { label: "Вес базовой машины, кг", value: "82000", indent: true },
      { label: "Противовес, кг", value: "17000", indent: true },
      { label: "Верхняя мачта и оголовок, кг", value: "5200", indent: true },
      { label: "Параметры бурения", value: "" },
      { label: "Диаметр обсаженного отверстия, мм", value: "2000", indent: true },
    ],
  },
  {
    name: "SH36H",
    type: "усиленная",
    specs: [
      { label: "Высота мачты, мм", value: "27400" },
      { label: "Вес базовой машины, кг", value: "91000" },
      { label: "Крутящий момент вращателя, кН·м", value: "360" },
      { label: "Диаметр необсаженного отверстия, мм", value: "2500" },
    ],
    detailedSpecs: [
      { label: "Система задавливания/извлечения", value: "" },
      { label: "Ход, мм", value: "6000", indent: true },
      { label: "Сила задавливания, кН", value: "300", indent: true },
      { label: "Сила извлечения, кН", value: "300", indent: true },
      { label: "Основная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "420", indent: true },
      { label: "Диаметр троса, мм", value: "36", indent: true },
      { label: "Макс. скорость, м/мин", value: "60", indent: true },
      { label: "Сервисная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "75", indent: true },
      { label: "Диаметр троса, мм", value: "18", indent: true },
      { label: "Макс. скорость, м/мин", value: "45", indent: true },
      { label: "База машины", value: "" },
      { label: "Дизельный двигатель", value: "QSM11-C", indent: true },
      { label: "Мощность, кВт", value: "300", indent: true },
      { label: "Макс. обороты двигателя, об/мин", value: "1900", indent: true },
      { label: "Гидравлическая система", value: "" },
      { label: "Поток, л/мин", value: "2 × 380", indent: true },
      { label: "Давление, МПа", value: "33", indent: true },
      { label: "Гидравлический привод", value: "" },
      { label: "Скорость вращения, об/мин", value: "6–30", indent: true },
      { label: "Гусеничное шасси", value: "" },
      { label: "Тип", value: "JT90", indent: true },
      { label: "Ширина башмаков, мм", value: "800", indent: true },
      { label: "Длина шасси, мм", value: "6020", indent: true },
      { label: "Мин./макс. ширина, мм", value: "3450–4600", indent: true },
      { label: "Тяговое усилие, кН", value: "650", indent: true },
      { label: "Скорость передвижения, км/ч", value: "1,5", indent: true },
      { label: "Транспортный вес", value: "" },
      { label: "Вес базовой машины, кг", value: "83500", indent: true },
      { label: "Противовес, кг", value: "20500", indent: true },
      { label: "Верхняя мачта и оголовок, кг", value: "7500", indent: true },
      { label: "Параметры бурения", value: "" },
      { label: "Диаметр обсаженного отверстия, мм", value: "2200", indent: true },
    ],
  },
  {
    name: "SH36HW",
    type: "усил. + увел. ход",
    specs: [
      { label: "Высота мачты, мм", value: "27400" },
      { label: "Вес базовой машины, кг", value: "92000" },
      { label: "Крутящий момент вращателя, кН·м", value: "360" },
      { label: "Диаметр необсаженного отверстия, мм", value: "2300" },
    ],
    detailedSpecs: [
      { label: "Система задавливания/извлечения", value: "" },
      { label: "Ход, мм", value: "10000", indent: true },
      { label: "Сила задавливания, кН", value: "300", indent: true },
      { label: "Сила извлечения, кН", value: "300", indent: true },
      { label: "Основная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "420", indent: true },
      { label: "Диаметр троса, мм", value: "36", indent: true },
      { label: "Макс. скорость, м/мин", value: "60", indent: true },
      { label: "Сервисная лебёдка", value: "" },
      { label: "Тяговая сила, кН", value: "75", indent: true },
      { label: "Диаметр троса, мм", value: "18", indent: true },
      { label: "Макс. скорость, м/мин", value: "45", indent: true },
      { label: "База машины", value: "" },
      { label: "Дизельный двигатель", value: "QSM11-C", indent: true },
      { label: "Мощность, кВт", value: "300", indent: true },
      { label: "Макс. обороты двигателя, об/мин", value: "1900", indent: true },
      { label: "Гидравлическая система", value: "" },
      { label: "Поток, л/мин", value: "2 × 380", indent: true },
      { label: "Давление, МПа", value: "33", indent: true },
      { label: "Гидравлический привод", value: "" },
      { label: "Скорость вращения, об/мин", value: "6–30", indent: true },
      { label: "Гусеничное шасси", value: "" },
      { label: "Тип", value: "JT90", indent: true },
      { label: "Ширина башмаков, мм", value: "800", indent: true },
      { label: "Длина шасси, мм", value: "6020", indent: true },
      { label: "Мин./макс. ширина, мм", value: "3450–4600", indent: true },
      { label: "Тяговое усилие, кН", value: "650", indent: true },
      { label: "Скорость передвижения, км/ч", value: "1,5", indent: true },
      { label: "Транспортный вес", value: "" },
      { label: "Вес базовой машины, кг", value: "85500", indent: true },
      { label: "Противовес, кг", value: "20500", indent: true },
      { label: "Верхняя мачта и оголовок, кг", value: "6500", indent: true },
      { label: "Параметры бурения", value: "" },
      { label: "Диаметр обсаженного отверстия, мм", value: "2000", indent: true },
    ],
  },
];

const JintSHVariantsSection = () => {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              Модели буровых установок JINT (серия SH)
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

export default JintSHVariantsSection;
