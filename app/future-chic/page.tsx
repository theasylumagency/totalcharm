import type { Metadata } from "next";

import { Footer, Header } from "@/components/home";
import {
  FutureCTA,
  FutureDoctors,
  FutureGallery,
  FutureHero,
  FutureProtocol,
  FutureReviews,
  FutureServices,
  FutureStats,
  FutureTicker,
  FutureWhy,
} from "@/components/home-future";
import { doctors } from "@/data/doctors";
import { futureCopy } from "@/data/future";
import { services } from "@/data/services";
import { translations } from "@/data/translations";

export const metadata: Metadata = {
  title: "Total Charm Dent | Future Chic — მომავლის გამოცემა",
  description:
    "Total Charm Dent-ის მთავარი გვერდის ფუტურისტული გამოცემა — ციფრული დიაგნოსტიკა და მომავლის სტანდარტი. პრემიუმ სტომატოლოგიური კლინიკა ვაკეში, თბილისი.",
};

export default function FutureChicHome() {
  const copy = translations.ka;

  return (
    <div className="ftr-page">
      <Header copy={copy} />
      <main>
        <FutureHero copy={futureCopy} />
        <FutureTicker copy={futureCopy} />
        <FutureServices copy={futureCopy} services={services} />
        <FutureWhy copy={futureCopy} />
        <FutureStats copy={futureCopy} />
        <FutureDoctors copy={futureCopy} doctors={doctors} />
        <FutureProtocol copy={futureCopy} />
        <FutureGallery copy={futureCopy} />
        <FutureReviews copy={futureCopy} />
        <FutureCTA copy={futureCopy} home={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}
