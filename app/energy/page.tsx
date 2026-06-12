import type { Metadata } from "next";

import { Footer, Header } from "@/components/home";
import {
  EnergyCTA,
  EnergyDoctors,
  EnergyGallery,
  EnergyHero,
  EnergyMarquee,
  EnergyPath,
  EnergyReviews,
  EnergyServices,
  EnergyStats,
  EnergyWhy,
} from "@/components/home-energy";
import { doctors } from "@/data/doctors";
import { energyCopy } from "@/data/energy";
import { services } from "@/data/services";
import { translations } from "@/data/translations";

export const metadata: Metadata = {
  title: "Total Charm Dent | ახალი ხედვა — ენერგიული გამოცემა",
  description:
    "Total Charm Dent-ის მთავარი გვერდის ენერგიული გამოცემა — იგივე სიზუსტე, მეტი მუხტი. პრემიუმ სტომატოლოგიური კლინიკა ვაკეში, თბილისი.",
};

export default function EnergyHome() {
  const copy = translations.ka;

  return (
    <div className="nrg-page">
      <Header copy={copy} />
      <main>
        <EnergyHero copy={energyCopy} />
        <EnergyMarquee copy={energyCopy} />
        <EnergyServices copy={energyCopy} services={services} />
        <EnergyStats copy={energyCopy} />
        <EnergyWhy copy={energyCopy} />
        <EnergyDoctors copy={energyCopy} doctors={doctors} />
        <EnergyPath copy={energyCopy} />
        <EnergyGallery copy={energyCopy} />
        <EnergyReviews copy={energyCopy} />
        <EnergyCTA copy={energyCopy} home={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}
