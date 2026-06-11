import type { StaticImageData } from "next/image";

import archil from "@/source/doctors/Archil-Apkhadze.png";
import ninoBuluashvili from "@/source/doctors/nino-buluashvili.png";
import ninoOsadze from "@/source/doctors/nino-osadze.png";
import salomeGabunia from "@/source/doctors/salome-gabunia.png";
import shorenaShioshvili from "@/source/doctors/shorena-shioshvili.png";

export type Doctor = {
  name: string;
  role: string;
  image: StaticImageData;
};

export const leadDoctor: Doctor = {
  name: "არჩილ აფხაძე",
  role: "მთავარი ექიმი, ქირურგი, პაროდონტოლოგი, იმპლანტოლოგი",
  image: archil,
};

export const doctors: Doctor[] = [
  {
    name: "შორენა შიოშვილი",
    role: "თერაპევტი სტომატოლოგი",
    image: shorenaShioshvili,
  },
  {
    name: "ნინო ბულუაშვილი",
    role: "ორთოდონტი",
    image: ninoBuluashvili,
  },
  {
    name: "სალომე გაბუნია",
    role: "ორთოპედი",
    image: salomeGabunia,
  },
  {
    name: "ნინო ოსაძე",
    role: "ორთოპედი",
    image: ninoOsadze,
  },
  leadDoctor,
];
