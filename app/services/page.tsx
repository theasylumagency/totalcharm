import type { Metadata } from "next";
import Image from "next/image";

import { Footer, Header } from "@/components/home";
import { serviceCategories } from "@/data/service-catalog";
import { translations } from "@/data/translations";

export const metadata: Metadata = {
  title: "სერვისები | Total Charm Dent",
  description:
    "Total Charm Dent-ის სერვისების სრული კატალოგი — დიაგნოსტიკა, თერაპია, ქირურგია და იმპლანტაცია, ორთოდონტია და ესთეტიკური სტომატოლოგია ვაკეში, თბილისში.",
};

export default function ServicesPage() {
  const copy = translations.ka;

  return (
    <>
      <Header copy={copy} />
      <main>
        <section className="page-hero section-shell">
          <p className="eyebrow">სერვისების კატალოგი</p>
          <h1>თექვსმეტი სერვისი, ხუთი მიმართულება, ერთი გეგმა.</h1>
          <p className="page-hero-text">
            დიაგნოსტიკიდან ესთეტიკამდე — მკურნალობის ყველა ეტაპი ერთ სივრცეში, ერთი გუნდის
            ხელში.
          </p>
        </section>

        <nav className="catalog-nav" aria-label="Service categories">
          <div className="section-shell catalog-nav-inner">
            {serviceCategories.map((category, index) => (
              <a key={category.id} href={`#${category.id}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {category.name}
              </a>
            ))}
          </div>
        </nav>

        {serviceCategories.map((category, index) => (
          <section className="catalog-section" id={category.id} key={category.id}>
            <div className="section-shell catalog-grid">
              <div className="catalog-intro section-intro">
                <p className="eyebrow">
                  {String(index + 1).padStart(2, "0")} / {String(serviceCategories.length).padStart(2, "0")}
                </p>
                <h2>{category.name}</h2>
                <p>{category.blurb}</p>
              </div>
              <div className="catalog-cards">
                {category.services.map((service) => (
                  <a className="catalog-card" key={service.name} href="/#contact">
                    <Image src={service.image} alt="" sizes="120px" />
                    <h3>{service.name}</h3>
                    <p>{service.summary}</p>
                    <span>
                      {copy.appointment} <em aria-hidden>→</em>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="catalog-cta">
          <div className="section-shell catalog-cta-inner">
            <h2>არ იცით, რომელი სერვისი გჭირდებათ?</h2>
            <p>
              დაიწყეთ კონსულტაციით — გუნდი შეაფასებს მდგომარეობას და სწორ გზას შეგირჩევთ.
            </p>
            <div className="button-row">
              <a className="button button-ivory" href={copy.contact.phoneHref}>
                {copy.finalCta.call}
              </a>
              <a className="button button-outline-dark" href="/#contact">
                {copy.appointment}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer copy={copy} />
    </>
  );
}
