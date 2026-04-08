import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const variants = [
  {
    name: "D8",
    cls: "Лёгкие",
    specs: [
      { label: "Масса поршня", value: "0,8 т" },
      { label: "Максимальная энергия удара", value: "23,9 кДж" },
      { label: "Частота ударов", value: "≥38 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "800" },
      { label: "Энергия удара, Дж", value: "≤23 940" },
      { label: "Частота ударов, 1/мин", value: "≥38" },
      { label: "Сила удара, кН", value: "505" },
      { label: "Рекомендуемая масса сваи, кг", value: "2 500" },
      { label: "Диаметр каната, мм", value: "20" },
      { label: "Расход топлива, л/ч", value: "4" },
      { label: "Расход масла, л/ч", value: "1" },
      { label: "Топливный бак, л", value: "20" },
      { label: "Масляный бак, л", value: "6" },
      { label: "Масса молота, кг", value: "1 950" },
      { label: "Длина молота, мм", value: "4 954" },
      { label: "Диаметр ударного блока, мм", value: "350" },
      { label: "Ширина молота, мм", value: "410" },
      { label: "Ширина направляющих, мм", value: "320" },
      { label: "Глубина, мм", value: "590" },
    ],
  },
  {
    name: "D16",
    cls: "Лёгкие",
    specs: [
      { label: "Масса поршня", value: "1,6 т" },
      { label: "Максимальная энергия удара", value: "53,5 кДж" },
      { label: "Частота ударов", value: "≥36 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "1 600" },
      { label: "Энергия удара, Дж", value: "≤53 460" },
      { label: "Частота ударов, 1/мин", value: "≥36" },
      { label: "Сила удара, кН", value: "686" },
      { label: "Рекомендуемая масса сваи, кг", value: "5 000" },
      { label: "Диаметр каната, мм", value: "20" },
      { label: "Расход топлива, л/ч", value: "5,5" },
      { label: "Расход масла, л/ч", value: "1" },
      { label: "Топливный бак, л", value: "32" },
      { label: "Масляный бак, л", value: "9" },
      { label: "Масса молота, кг", value: "3 250" },
      { label: "Длина молота, мм", value: "4 984" },
      { label: "Диаметр ударного блока, мм", value: "440" },
      { label: "Ширина молота, мм", value: "485" },
      { label: "Ширина направляющих, мм", value: "320" },
      { label: "Глубина, мм", value: "665" },
    ],
  },
  {
    name: "D19",
    cls: "Лёгкие",
    specs: [
      { label: "Масса поршня", value: "1,8 т" },
      { label: "Максимальная энергия удара", value: "57,6 кДж" },
      { label: "Частота ударов", value: "≥37 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "1 800" },
      { label: "Энергия удара, Дж", value: "≤57 585" },
      { label: "Частота ударов, 1/мин", value: "≥37" },
      { label: "Сила удара, кН", value: "686" },
      { label: "Рекомендуемая масса сваи, кг", value: "6 000" },
      { label: "Диаметр каната, мм", value: "20" },
      { label: "Расход топлива, л/ч", value: "6,6" },
      { label: "Расход масла, л/ч", value: "1" },
      { label: "Топливный бак, л", value: "32" },
      { label: "Масляный бак, л", value: "9" },
      { label: "Масса молота, кг", value: "3 550" },
      { label: "Длина молота, мм", value: "4 984" },
      { label: "Диаметр ударного блока, мм", value: "440" },
      { label: "Ширина молота, мм", value: "485" },
      { label: "Ширина направляющих, мм", value: "320" },
      { label: "Глубина, мм", value: "665" },
    ],
  },
  {
    name: "D25",
    cls: "Лёгкие",
    specs: [
      { label: "Масса поршня", value: "2,5 т" },
      { label: "Максимальная энергия удара", value: "78,7 кДж" },
      { label: "Частота ударов", value: "≥37 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "2 500" },
      { label: "Энергия удара, Дж", value: "≤78 700" },
      { label: "Частота ударов, 1/мин", value: "≥37" },
      { label: "Сила удара, кН", value: "1 304" },
      { label: "Рекомендуемая масса сваи, кг", value: "7 000" },
      { label: "Диаметр каната, мм", value: "22" },
      { label: "Расход топлива, л/ч", value: "8" },
      { label: "Расход масла, л/ч", value: "1" },
      { label: "Топливный бак, л", value: "67" },
      { label: "Масляный бак, л", value: "19" },
      { label: "Масса молота, кг", value: "5 330" },
      { label: "Длина молота, мм", value: "5 514" },
      { label: "Диаметр ударного блока, мм", value: "560" },
      { label: "Ширина молота, мм", value: "640" },
      { label: "Ширина направляющих, мм", value: "540" },
      { label: "Глубина, мм", value: "715" },
    ],
  },
  {
    name: "D30",
    cls: "Лёгкие",
    specs: [
      { label: "Масса поршня", value: "3,0 т" },
      { label: "Максимальная энергия удара", value: "94,8 кДж" },
      { label: "Частота ударов", value: "≥37 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "3 000" },
      { label: "Энергия удара, Дж", value: "≤94 765" },
      { label: "Частота ударов, 1/мин", value: "≥37" },
      { label: "Сила удара, кН", value: "1 304" },
      { label: "Рекомендуемая масса сваи, кг", value: "8 000" },
      { label: "Диаметр каната, мм", value: "22" },
      { label: "Расход топлива, л/ч", value: "10" },
      { label: "Расход масла, л/ч", value: "1" },
      { label: "Топливный бак, л", value: "67" },
      { label: "Масляный бак, л", value: "19" },
      { label: "Масса молота, кг", value: "5 830" },
      { label: "Длина молота, мм", value: "5 514" },
      { label: "Диаметр ударного блока, мм", value: "560" },
      { label: "Ширина молота, мм", value: "640" },
      { label: "Ширина направляющих, мм", value: "540" },
      { label: "Глубина, мм", value: "715" },
    ],
  },
  {
    name: "D36",
    cls: "Средние",
    specs: [
      { label: "Масса поршня", value: "3,6 т" },
      { label: "Максимальная энергия удара", value: "113,7 кДж" },
      { label: "Частота ударов", value: "≥37 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "3 600" },
      { label: "Энергия удара, Дж", value: "≤113 720" },
      { label: "Частота ударов, 1/мин", value: "≥37" },
      { label: "Сила удара, кН", value: "1 695" },
      { label: "Рекомендуемая масса сваи, кг", value: "10 000" },
      { label: "Диаметр каната, мм", value: "28" },
      { label: "Расход топлива, л/ч", value: "11,5" },
      { label: "Расход масла, л/ч", value: "2" },
      { label: "Топливный бак, л", value: "89" },
      { label: "Масляный бак, л", value: "17" },
      { label: "Масса молота, кг", value: "7 800" },
      { label: "Длина молота, мм", value: "5 539" },
      { label: "Диаметр ударного блока, мм", value: "660" },
      { label: "Ширина молота, мм", value: "785" },
      { label: "Ширина направляющих, мм", value: "640" },
      { label: "Глубина, мм", value: "848" },
    ],
  },
  {
    name: "D46",
    cls: "Средние",
    specs: [
      { label: "Масса поршня", value: "4,6 т" },
      { label: "Максимальная энергия удара", value: "145,3 кДж" },
      { label: "Частота ударов", value: "≥37 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "4 600" },
      { label: "Энергия удара, Дж", value: "≤145 305" },
      { label: "Частота ударов, 1/мин", value: "≥37" },
      { label: "Сила удара, кН", value: "1 695" },
      { label: "Рекомендуемая масса сваи, кг", value: "15 000" },
      { label: "Диаметр каната, мм", value: "28" },
      { label: "Расход топлива, л/ч", value: "16" },
      { label: "Расход масла, л/ч", value: "2" },
      { label: "Топливный бак, л", value: "89" },
      { label: "Масляный бак, л", value: "17" },
      { label: "Масса молота, кг", value: "8 800" },
      { label: "Длина молота, мм", value: "5 539" },
      { label: "Диаметр ударного блока, мм", value: "660" },
      { label: "Ширина молота, мм", value: "785" },
      { label: "Ширина направляющих, мм", value: "640" },
      { label: "Глубина, мм", value: "848" },
    ],
  },
  {
    name: "D62",
    cls: "Средние",
    specs: [
      { label: "Масса поршня", value: "6,2 т" },
      { label: "Максимальная энергия удара", value: "219,0 кДж" },
      { label: "Частота ударов", value: "≥36 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "6 200" },
      { label: "Энергия удара, Дж", value: "≤218 960" },
      { label: "Частота ударов, 1/мин", value: "≥36" },
      { label: "Сила удара, кН", value: "1 800" },
      { label: "Рекомендуемая масса сваи, кг", value: "25 000" },
      { label: "Диаметр каната, мм", value: "28" },
      { label: "Расход топлива, л/ч", value: "20" },
      { label: "Расход масла, л/ч", value: "2,3" },
      { label: "Топливный бак, л", value: "98" },
      { label: "Масляный бак, л", value: "31,5" },
      { label: "Масса молота, кг", value: "11 870" },
      { label: "Длина молота, мм", value: "6 146" },
      { label: "Диаметр ударного блока, мм", value: "710" },
      { label: "Ширина молота, мм", value: "800" },
      { label: "Ширина направляющих, мм", value: "800" },
      { label: "Глубина, мм", value: "970" },
    ],
  },
  {
    name: "D72",
    cls: "Средние",
    specs: [
      { label: "Масса поршня", value: "7,2 т" },
      { label: "Максимальная энергия удара", value: "238,0 кДж" },
      { label: "Частота ударов", value: "≥36 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "7 200" },
      { label: "Энергия удара, Дж", value: "≤238 000" },
      { label: "Частота ударов, 1/мин", value: "≥36" },
      { label: "Сила удара, кН", value: "1 800" },
      { label: "Рекомендуемая масса сваи, кг", value: "26 000" },
      { label: "Диаметр каната, мм", value: "28" },
      { label: "Расход топлива, л/ч", value: "20" },
      { label: "Расход масла, л/ч", value: "2,3" },
      { label: "Топливный бак, л", value: "98" },
      { label: "Масляный бак, л", value: "31,5" },
      { label: "Масса молота, кг", value: "12 670" },
      { label: "Длина молота, мм", value: "6 146" },
      { label: "Диаметр ударного блока, мм", value: "710" },
      { label: "Ширина молота, мм", value: "800" },
      { label: "Ширина направляющих, мм", value: "800" },
      { label: "Глубина, мм", value: "970" },
    ],
  },
  {
    name: "D80",
    cls: "Тяжёлые",
    specs: [
      { label: "Масса поршня", value: "8,0 т" },
      { label: "Максимальная энергия удара", value: "266,8 кДж" },
      { label: "Частота ударов", value: "≥36 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "8 000" },
      { label: "Энергия удара, Дж", value: "≤266 830" },
      { label: "Частота ударов, 1/мин", value: "≥36" },
      { label: "Сила удара, кН", value: "2 600" },
      { label: "Рекомендуемая масса сваи, кг", value: "30 000" },
      { label: "Диаметр каната, мм", value: "30" },
      { label: "Расход топлива, л/ч", value: "25" },
      { label: "Расход масла, л/ч", value: "2,9" },
      { label: "Топливный бак, л", value: "155" },
      { label: "Масляный бак, л", value: "32" },
      { label: "Масса молота, кг", value: "16 350" },
      { label: "Длина молота, мм", value: "6 454" },
      { label: "Диаметр ударного блока, мм", value: "820" },
      { label: "Ширина молота, мм", value: "890" },
      { label: "Ширина направляющих, мм", value: "800" },
      { label: "Глубина, мм", value: "1 110" },
    ],
  },
  {
    name: "D100",
    cls: "Тяжёлые",
    specs: [
      { label: "Масса поршня", value: "10,0 т" },
      { label: "Максимальная энергия удара", value: "333,5 кДж" },
      { label: "Частота ударов", value: "≥36 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "10 000" },
      { label: "Энергия удара, Дж", value: "≤333 540" },
      { label: "Частота ударов, 1/мин", value: "≥36" },
      { label: "Сила удара, кН", value: "2 600" },
      { label: "Рекомендуемая масса сваи, кг", value: "40 000" },
      { label: "Диаметр каната, мм", value: "30" },
      { label: "Расход топлива, л/ч", value: "30" },
      { label: "Расход масла, л/ч", value: "2,9" },
      { label: "Топливный бак, л", value: "155" },
      { label: "Масляный бак, л", value: "32" },
      { label: "Масса молота, кг", value: "19 820" },
      { label: "Длина молота, мм", value: "6 612" },
      { label: "Диаметр ударного блока, мм", value: "820" },
      { label: "Ширина молота, мм", value: "890" },
      { label: "Ширина направляющих, мм", value: "800" },
      { label: "Глубина, мм", value: "1 110" },
    ],
  },
  {
    name: "D128",
    cls: "Тяжёлые",
    specs: [
      { label: "Масса поршня", value: "12,8 т" },
      { label: "Максимальная энергия удара", value: "426,5 кДж" },
      { label: "Частота ударов", value: "≥36 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "12 800" },
      { label: "Энергия удара, Дж", value: "≤426 500" },
      { label: "Частота ударов, 1/мин", value: "≥36" },
      { label: "Сила удара, кН", value: "3 600" },
      { label: "Диаметр каната, мм", value: "Ø32" },
      { label: "Расход топлива, л/ч", value: "36,6" },
      { label: "Расход масла, л/ч", value: "2,9" },
      { label: "Топливный бак, л", value: "200" },
      { label: "Масляный бак, л", value: "28,6" },
      { label: "Масса молота, кг", value: "26 300" },
      { label: "Длина молота, мм", value: "7 600" },
      { label: "Диаметр ударного блока, мм", value: "960" },
      { label: "Общая ширина, мм", value: "1 200" },
      { label: "Ширина молота, мм", value: "1 040" },
      { label: "Ширина направляющих, мм", value: "910" },
      { label: "Расстояние центр–край, мм", value: "625" },
      { label: "Центр молота – центр направляющих, мм", value: "420" },
      { label: "Мин. высота установки, мм", value: "795" },
      { label: "Шаг направляющих", value: "600×102" },
    ],
  },
  {
    name: "D138",
    cls: "Тяжёлые",
    specs: [
      { label: "Масса поршня", value: "13,8 т" },
      { label: "Максимальная энергия удара", value: "459,8 кДж" },
      { label: "Частота ударов", value: "≥36 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "13 800" },
      { label: "Энергия удара, Дж", value: "≤459 800" },
      { label: "Частота ударов, 1/мин", value: "≥36" },
      { label: "Сила удара, кН", value: "3 900" },
      { label: "Диаметр каната, мм", value: "Ø32" },
      { label: "Расход топлива, л/ч", value: "40,5" },
      { label: "Расход масла, л/ч", value: "2,9" },
      { label: "Топливный бак, л", value: "200" },
      { label: "Масляный бак, л", value: "28,6" },
      { label: "Масса молота, кг", value: "27 300" },
      { label: "Длина молота, мм", value: "7 600" },
      { label: "Диаметр ударного блока, мм", value: "960" },
      { label: "Общая ширина, мм", value: "1 200" },
      { label: "Ширина молота, мм", value: "1 040" },
      { label: "Ширина направляющих, мм", value: "910" },
      { label: "Расстояние центр–край, мм", value: "625" },
      { label: "Центр молота – центр направляющих, мм", value: "420" },
      { label: "Мин. высота установки, мм", value: "795" },
      { label: "Шаг направляющих", value: "600×102" },
    ],
  },
  {
    name: "D160",
    cls: "Тяжёлые",
    specs: [
      { label: "Масса поршня", value: "16,0 т" },
      { label: "Максимальная энергия удара", value: "533,0 кДж" },
      { label: "Частота ударов", value: "≥36 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "16 000" },
      { label: "Энергия удара, Дж", value: "≤533 000" },
      { label: "Частота ударов, 1/мин", value: "≥36" },
      { label: "Сила удара, кН", value: "4 500" },
      { label: "Диаметр каната, мм", value: "Ø37" },
      { label: "Расход топлива, л/ч", value: "46" },
      { label: "Расход масла, л/ч", value: "4,5" },
      { label: "Топливный бак, л", value: "240" },
      { label: "Масляный бак, л", value: "40,3" },
      { label: "Масса молота, кг", value: "35 000" },
      { label: "Длина молота, мм", value: "8 020" },
      { label: "Диаметр ударного блока, мм", value: "1 070" },
      { label: "Общая ширина, мм", value: "1 400" },
      { label: "Ширина молота, мм", value: "1 160" },
      { label: "Ширина направляющих, мм", value: "1 020" },
      { label: "Расстояние центр–край, мм", value: "700" },
      { label: "Центр молота – центр направляющих, мм", value: "465" },
    ],
  },
  {
    name: "D180",
    cls: "Тяжёлые",
    specs: [
      { label: "Масса поршня", value: "18,0 т" },
      { label: "Максимальная энергия удара", value: "590,0 кДж" },
      { label: "Частота ударов", value: "≥36 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "18 000" },
      { label: "Энергия удара, Дж", value: "≤590 000" },
      { label: "Частота ударов, 1/мин", value: "≥36" },
      { label: "Сила удара, кН", value: "5 000" },
      { label: "Диаметр каната, мм", value: "Ø37" },
      { label: "Расход топлива, л/ч", value: "54" },
      { label: "Расход масла, л/ч", value: "4,5" },
      { label: "Топливный бак, л", value: "240" },
      { label: "Масляный бак, л", value: "40,3" },
      { label: "Масса молота, кг", value: "37 500" },
      { label: "Длина молота, мм", value: "8 150" },
      { label: "Диаметр ударного блока, мм", value: "1 070" },
      { label: "Общая ширина, мм", value: "1 400" },
      { label: "Ширина молота, мм", value: "1 160" },
      { label: "Ширина направляющих, мм", value: "1 020" },
      { label: "Расстояние центр–край, мм", value: "700" },
      { label: "Центр молота – центр направляющих, мм", value: "465" },
    ],
  },
  {
    name: "D220",
    cls: "Сверхтяжёлые",
    specs: [
      { label: "Масса поршня", value: "22,0 т" },
      { label: "Максимальная энергия удара", value: "733,0 кДж" },
      { label: "Частота ударов", value: "≥36 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "22 000" },
      { label: "Энергия удара, Дж", value: "≤733 000" },
      { label: "Частота ударов, 1/мин", value: "≥36" },
      { label: "Сила удара, кН", value: "6 200" },
      { label: "Диаметр каната, мм", value: "Ø42" },
      { label: "Расход топлива, л/ч", value: "70" },
      { label: "Расход масла, л/ч", value: "6,5" },
      { label: "Топливный бак, л", value: "360" },
      { label: "Масляный бак, л", value: "100" },
      { label: "Масса молота, кг", value: "45 400" },
      { label: "Длина молота, мм", value: "7 900" },
      { label: "Диаметр ударного блока, мм", value: "1 200" },
      { label: "Общая ширина, мм", value: "1 480" },
      { label: "Ширина молота, мм", value: "1 300" },
      { label: "Ширина направляющих, мм", value: "1 100" },
      { label: "Расстояние центр–край, мм", value: "820" },
      { label: "Центр молота – центр направляющих, мм", value: "500" },
    ],
  },
  {
    name: "D250",
    cls: "Сверхтяжёлые",
    specs: [
      { label: "Масса поршня", value: "25,0 т" },
      { label: "Максимальная энергия удара", value: "833,0 кДж" },
      { label: "Частота ударов", value: "≥36 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "25 000" },
      { label: "Энергия удара, Дж", value: "≤833 000" },
      { label: "Частота ударов, 1/мин", value: "≥36" },
      { label: "Сила удара, кН", value: "7 000" },
      { label: "Диаметр каната, мм", value: "Ø42" },
      { label: "Расход топлива, л/ч", value: "80" },
      { label: "Расход масла, л/ч", value: "6,5" },
      { label: "Топливный бак, л", value: "360" },
      { label: "Масляный бак, л", value: "100" },
      { label: "Масса молота, кг", value: "49 000" },
      { label: "Длина молота, мм", value: "8 020" },
      { label: "Диаметр ударного блока, мм", value: "1 200" },
      { label: "Общая ширина, мм", value: "1 480" },
      { label: "Ширина молота, мм", value: "1 300" },
      { label: "Ширина направляющих, мм", value: "1 100" },
      { label: "Расстояние центр–край, мм", value: "820" },
      { label: "Центр молота – центр направляющих, мм", value: "500" },
    ],
  },
  {
    name: "D260",
    cls: "Сверхтяжёлые",
    specs: [
      { label: "Масса поршня", value: "26,0 т" },
      { label: "Максимальная энергия удара", value: "866,0 кДж" },
      { label: "Частота ударов", value: "≥36 уд/мин" },
    ],
    detailedSpecs: [
      { label: "Масса поршня, кг", value: "26 000" },
      { label: "Энергия удара, Дж", value: "≤866 000" },
      { label: "Частота ударов, 1/мин", value: "≥36" },
      { label: "Сила удара, кН", value: "7 000" },
      { label: "Диаметр каната, мм", value: "Ø42" },
      { label: "Расход топлива, л/ч", value: "85" },
      { label: "Расход масла, л/ч", value: "6,5" },
      { label: "Топливный бак, л", value: "360" },
      { label: "Масляный бак, л", value: "100" },
      { label: "Масса молота, кг", value: "51 500" },
      { label: "Длина молота, мм", value: "8 020" },
      { label: "Диаметр ударного блока, мм", value: "1 200" },
      { label: "Общая ширина, мм", value: "1 480" },
      { label: "Ширина молота, мм", value: "1 300" },
      { label: "Ширина направляющих, мм", value: "1 100" },
      { label: "Расстояние центр–край, мм", value: "820" },
      { label: "Центр молота – центр направляющих, мм", value: "500" },
    ],
  },
];

const clsColors: Record<string, string> = {
  "Лёгкие": "bg-blue-50 border-blue-200 text-blue-700",
  "Средние": "bg-green-50 border-green-200 text-green-700",
  "Тяжёлые": "bg-orange-50 border-orange-200 text-orange-700",
  "Сверхтяжёлые": "bg-red-50 border-red-200 text-red-700",
};

const SemwDVariantsSection = () => {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Модели молотов SEMW серии D
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {variants.map((variant) => (
              <Card
                key={variant.name}
                className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                      {variant.name}
                    </h3>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      {variant.cls}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                    {variant.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0"
                      >
                        <span className="text-base text-primary flex-1">{spec.label}</span>
                        <span className="text-base font-semibold text-primary text-right ml-4">
                          {spec.value}
                        </span>
                      </div>
                    ))}

                    {expandedVariant === variant.name && (
                      <>
                        {variant.detailedSpecs.map((spec, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0"
                          >
                            <span className="text-base text-primary">{spec.label}</span>
                            <span className="text-base font-semibold text-primary">{spec.value}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setExpandedVariant(expandedVariant === variant.name ? null : variant.name)
                      }
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

          <Card className="border-2 border-amber-200 bg-amber-50">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Icon name="Lightbulb" size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-bold text-primary mb-2">Как читать характеристики</p>
                  <ul className="space-y-1.5 text-primary text-sm">
                    <li><strong>Масса поршня ≠ масса молота.</strong> Поршень — это энергия. Молот — вся конструкция. Например, D80: поршень 8 т, но весь молот ~16 т.</li>
                    <li><strong>Энергия удара — диапазон.</strong> Зависит от подачи топлива и сопротивления грунта.</li>
                    <li><strong>Частота снижается при росте мощности:</strong> лёгкие — до 50+ уд/мин, тяжёлые — ~35–40 уд/мин.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SemwDVariantsSection;