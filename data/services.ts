import type { StaticImageData } from "next/image";

import aestheticDentistry from "@/source/services-icons/Aesthetic-Dentistry.png";
import aligners from "@/source/services-icons/Aligners.png";
import diagnostics from "@/source/services-icons/Diagnostics.png";
import implantology from "@/source/services-icons/Implantology.png";
import orthodontics from "@/source/services-icons/Orthodontics.png";
import periodontology from "@/source/services-icons/Periodontology.png";
import surgery from "@/source/services-icons/Surgery.png";
import therapyAdults from "@/source/services-icons/Therapy-in-Adults.png";

export type Service = {
  name: string;
  summary: string;
  image: StaticImageData;
};

export const services: Service[] = [
  {
    name: "დიაგნოსტიკა",
    summary: "ციფრული კვლევები და მკაფიო შეფასება მკურნალობის დაწყებამდე.",
    image: diagnostics,
  },
  {
    name: "თერაპიული სტომატოლოგია",
    summary: "ზუსტი, დამზოგველი მკურნალობა ყოველდღიური სტომატოლოგიური საჭიროებებისთვის.",
    image: therapyAdults,
  },
  {
    name: "იმპლანტოლოგია",
    summary: "გეგმაზე დაფუძნებული იმპლანტაცია ფუნქციისა და ესთეტიკის აღსადგენად.",
    image: implantology,
  },
  {
    name: "ქირურგია",
    summary: "ყბა-სახის და ორალური ქირურგია მშვიდი კლინიკური პროცესით.",
    image: surgery,
  },
  {
    name: "პაროდონტოლოგია",
    summary: "ღრძილების ჯანმრთელობის მართვა გრძელვადიანი შედეგისთვის.",
    image: periodontology,
  },
  {
    name: "ორთოდონტია",
    summary: "კბილთა წყობის კორექცია ზუსტი დიაგნოსტიკითა და დაგეგმვით.",
    image: orthodontics,
  },
  {
    name: "ელაინერები",
    summary: "გამჭვირვალე ორთოდონტიული სისტემა ყოველდღიურ ცხოვრებასთან თავსებადად.",
    image: aligners,
  },
  {
    name: "ესთეტიკური სტომატოლოგია",
    summary: "ბუნებრივი იერის აღდგენა ფერის, ფორმისა და პროპორციის სიზუსტით.",
    image: aestheticDentistry,
  },
];
