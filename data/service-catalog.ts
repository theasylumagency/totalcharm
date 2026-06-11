import type { StaticImageData } from "next/image";

import restoration from "@/source/services-icons/Aesthetic-dental-restoration.png";
import aligners from "@/source/services-icons/Aligners.png";
import veneers from "@/source/services-icons/Ceramic-Veneers.png";
import damonBraces from "@/source/services-icons/Damon-Braces.png";
import diagnostics from "@/source/services-icons/Diagnostics.png";
import digitalModelling from "@/source/services-icons/Digital-Modelling.png";
import forestadentBraces from "@/source/services-icons/FORESTADENT-Braces.png";
import orthodontics from "@/source/services-icons/Orthodontics.png";
import periodontology from "@/source/services-icons/Periodontology.png";
import surgeryImplantation from "@/source/services-icons/Surgery-and-Same-Day-Implantation.png";
import surgery from "@/source/services-icons/Surgery.png";
import whitening from "@/source/services-icons/Teeth-Whitening.png";
import therapyChildren from "@/source/services-icons/Therapy-for-Children.png";
import therapyAdults from "@/source/services-icons/Therapy-in-Adults.png";
import tomography from "@/source/services-icons/Tomography.png";
import viziography from "@/source/services-icons/Viziography.png";

export type CatalogService = {
  name: string;
  summary: string;
  image: StaticImageData;
};

export type ServiceCategory = {
  id: string;
  name: string;
  blurb: string;
  services: CatalogService[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "diagnostics",
    name: "დიაგნოსტიკა და ციფრული დაგეგმვა",
    blurb:
      "ყოველი მკურნალობა იწყება ზუსტი სურათით — კვლევებითა და ციფრული გეგმით, რომელსაც მთელი გუნდი ერთად ხედავს.",
    services: [
      {
        name: "დიაგნოსტიკა",
        summary: "სრული კლინიკური შეფასება და მკურნალობის გეგმის საფუძველი.",
        image: diagnostics,
      },
      {
        name: "ტომოგრაფია",
        summary: "სამგანზომილებიანი კვლევა ძვლისა და ფესვების ზუსტი სურათისთვის.",
        image: tomography,
      },
      {
        name: "ვიზიოგრაფია",
        summary: "დაბალდოზიანი ციფრული რენტგენი მყისიერი შედეგით.",
        image: viziography,
      },
      {
        name: "ციფრული მოდელირება",
        summary: "მომავალი შედეგის ვიზუალიზაცია მკურნალობის დაწყებამდე.",
        image: digitalModelling,
      },
    ],
  },
  {
    id: "therapy",
    name: "თერაპია და პროფილაქტიკა",
    blurb:
      "ყოველდღიური სტომატოლოგიური ზრუნვა მოზრდილებისთვის და ბავშვებისთვის — დამზოგველი მეთოდებითა და მშვიდი პროცესით.",
    services: [
      {
        name: "თერაპია მოზრდილებში",
        summary: "კარიესის მკურნალობა და კბილის სტრუქტურის აღდგენა.",
        image: therapyAdults,
      },
      {
        name: "ბავშვთა თერაპია",
        summary: "მშვიდი, ასაკზე მორგებული მიდგომა პატარა პაციენტებისთვის.",
        image: therapyChildren,
      },
      {
        name: "პაროდონტოლოგია",
        summary: "ღრძილების ჯანმრთელობის მართვა გრძელვადიანი შედეგისთვის.",
        image: periodontology,
      },
    ],
  },
  {
    id: "surgery",
    name: "ქირურგია და იმპლანტაცია",
    blurb:
      "ქირურგიული ჩარევები და იმპლანტაცია გეგმაზე დაფუძნებული, წინასწარ ახსნილი და მშვიდი კლინიკური პროცესით.",
    services: [
      {
        name: "ქირურგია",
        summary: "ყბა-სახის და ორალური ქირურგია ზუსტი დაგეგმვით.",
        image: surgery,
      },
      {
        name: "ქირურგია და ერთმომენტიანი იმპლანტაცია",
        summary: "იმპლანტის ჩასმა კბილის ამოღებისთანავე — ერთ ვიზიტში.",
        image: surgeryImplantation,
      },
    ],
  },
  {
    id: "orthodontics",
    name: "ორთოდონტია",
    blurb:
      "კბილთა წყობის კორექცია ნებისმიერ ასაკში — კლასიკური და უხილავი სისტემებით, ზუსტი დიაგნოსტიკის საფუძველზე.",
    services: [
      {
        name: "ორთოდონტია",
        summary: "წყობის კორექციის ინდივიდუალური გეგმა და მართვა.",
        image: orthodontics,
      },
      {
        name: "ელაინერები",
        summary: "გამჭვირვალე კაპები ყოველდღიურ რიტმთან თავსებადად.",
        image: aligners,
      },
      {
        name: "FORESTADENT ბრეკეტები",
        summary: "გერმანული სისტემა ზუსტი და დელიკატური კორექციისთვის.",
        image: forestadentBraces,
      },
      {
        name: "Damon ბრეკეტები",
        summary: "თვითლიგირებადი სისტემა ნაკლები ვიზიტითა და მეტი კომფორტით.",
        image: damonBraces,
      },
    ],
  },
  {
    id: "aesthetics",
    name: "ესთეტიკური სტომატოლოგია",
    blurb:
      "ბუნებრივი იერი, რომელიც ფერის, ფორმისა და პროპორციის სიზუსტეზეა აგებული — შედეგი, რომელიც არ ჩანს „გაკეთებული“.",
    services: [
      {
        name: "კერამიკული ვინირები",
        summary: "თხელი კერამიკული ფირფიტები ღიმილის ფორმისა და ფერისთვის.",
        image: veneers,
      },
      {
        name: "გათეთრება ZOOM 4",
        summary: "პროფესიონალური გათეთრება ერთ ვიზიტში, კონტროლირებადი შედეგით.",
        image: whitening,
      },
      {
        name: "კბილის ესთეტიკური რესტავრაცია",
        summary: "ფორმისა და ფერის აღდგენა შეუმჩნეველი გადასვლებით.",
        image: restoration,
      },
    ],
  },
];
