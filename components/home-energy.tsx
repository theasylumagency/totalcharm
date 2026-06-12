import Image from "next/image";
import Link from "next/link";

import { TeamShowcase } from "@/components/team-showcase";
import type { Doctor } from "@/data/doctors";
import type { EnergyCopy } from "@/data/energy";
import type { Service } from "@/data/services";
import type { HomeCopy } from "@/data/translations";
import interiorReception from "@/source/interior/totcharm_dentinner11.png";
import interiorLounge from "@/source/interior/totcharm_dentinner99.png";

type EnergyProps = {
  copy: EnergyCopy;
};

export function EnergyHero({ copy }: EnergyProps) {
  return (
    <section className="nrg-hero section-shell" id="home">
      <div className="nrg-hero-panel reveal">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Total Charm Dent clinic atmosphere"
        >
          <source src="/total-charm-hero.mp4" type="video/mp4" />
        </video>
        <div className="nrg-hero-overlay" />
        <div className="nrg-hero-content">
          <p className="eyebrow nrg-eyebrow">{copy.hero.eyebrow}</p>
          <h1>
            {copy.hero.titleStart}
            <br />
            <span className="nrg-accent-text">{copy.hero.titleAccent}</span>
          </h1>
          <p className="nrg-hero-text">{copy.hero.text}</p>
          <div className="button-row">
            <a className="nrg-button nrg-button-blue" href="#contact">
              {copy.hero.primary}
            </a>
            <a className="nrg-button nrg-button-ghost" href="#services">
              {copy.hero.secondary}
            </a>
          </div>
        </div>
        <span className="nrg-hero-badge">{copy.hero.badge}</span>
      </div>
    </section>
  );
}

export function EnergyMarquee({ copy }: EnergyProps) {
  const items = [...copy.marquee, ...copy.marquee];

  return (
    <section className="nrg-marquee" aria-label="Clinic highlights">
      <div className="nrg-marquee-track" aria-hidden>
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <em>✦</em>
          </span>
        ))}
      </div>
    </section>
  );
}

export function EnergyStats({ copy }: EnergyProps) {
  return (
    <section className="nrg-stats section-shell">
      {copy.stats.items.map((stat) => (
        <article className="nrg-stat" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </article>
      ))}
    </section>
  );
}

export function EnergyServices({ copy, services }: EnergyProps & { services: Service[] }) {
  return (
    <section className="nrg-services section-shell" id="services">
      <div className="nrg-section-head">
        <div className="section-intro">
          <p className="eyebrow nrg-eyebrow">{copy.services.eyebrow}</p>
          <h2>{copy.services.title}</h2>
          <p>{copy.services.text}</p>
        </div>
        <Link className="nrg-button nrg-button-outline" href="/services">
          {copy.services.viewAll}
        </Link>
      </div>
      <div className="nrg-service-grid">
        {services.map((service, index) => (
          <Link className="nrg-service-card" key={service.name} href="/services">
            <span className="nrg-service-num">{String(index + 1).padStart(2, "0")}</span>
            <Image src={service.image} alt="" sizes="120px" />
            <h3>{service.name}</h3>
            <p>{service.summary}</p>
            <span className="nrg-service-arrow" aria-hidden>
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function EnergyWhy({ copy }: EnergyProps) {
  return (
    <section className="nrg-why" id="clinic">
      <div className="section-shell nrg-why-grid">
        <div className="section-intro reveal">
          <p className="eyebrow nrg-eyebrow nrg-eyebrow-light">{copy.why.eyebrow}</p>
          <h2>{copy.why.title}</h2>
          <p>{copy.why.text}</p>
        </div>
        <div className="nrg-why-points">
          {copy.why.points.map((point, index) => (
            <article key={point}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{point}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EnergyDoctors({ copy, doctors }: EnergyProps & { doctors: Doctor[] }) {
  return (
    <section className="nrg-team section-shell" id="doctors">
      <div className="section-intro reveal">
        <p className="eyebrow nrg-eyebrow">{copy.doctors.eyebrow}</p>
        <h2>{copy.doctors.title}</h2>
      </div>
      <TeamShowcase doctors={doctors} cta={copy.doctors.cta} />
    </section>
  );
}

export function EnergyPath({ copy }: EnergyProps) {
  return (
    <section className="nrg-path section-shell">
      <div className="section-intro reveal">
        <p className="eyebrow nrg-eyebrow">{copy.path.eyebrow}</p>
        <h2>{copy.path.title}</h2>
      </div>
      <ol className="nrg-path-steps">
        {copy.path.steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step}</h3>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function EnergyGallery({ copy }: EnergyProps) {
  return (
    <section className="nrg-gallery section-shell">
      <div className="section-intro reveal">
        <p className="eyebrow nrg-eyebrow">{copy.gallery.eyebrow}</p>
        <h2>{copy.gallery.title}</h2>
      </div>
      <div className="nrg-gallery-grid">
        <div className="nrg-gallery-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Clinic interior video"
          >
            <source src="/total-charm-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <figure className="nrg-gallery-photo">
          <Image
            src={interiorReception}
            alt="Total Charm Dent — მიმღები"
            sizes="(max-width: 1100px) 100vw, 380px"
          />
        </figure>
        <figure className="nrg-gallery-photo">
          <Image
            src={interiorLounge}
            alt="Total Charm Dent — მოსასვენებელი სივრცე"
            sizes="(max-width: 1100px) 100vw, 380px"
          />
        </figure>
      </div>
    </section>
  );
}

export function EnergyReviews({ copy }: EnergyProps) {
  return (
    <section className="nrg-reviews section-shell">
      <div className="section-intro reveal">
        <p className="eyebrow nrg-eyebrow">{copy.reviews.eyebrow}</p>
        <h2>{copy.reviews.title}</h2>
      </div>
      <div className="nrg-review-grid">
        {copy.reviews.items.map((review) => (
          <article className="nrg-review-card" key={review.quote}>
            <span aria-hidden>„</span>
            <p>{review.quote}</p>
            <strong>{review.author}</strong>
            <small>{review.service}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export function EnergyCTA({ copy, home }: EnergyProps & { home: HomeCopy }) {
  return (
    <section className="nrg-cta" id="contact">
      <div className="section-shell nrg-cta-inner">
        <h2>{copy.cta.title}</h2>
        <p>{copy.cta.text}</p>
        <div className="button-row">
          <a className="nrg-button nrg-button-ivory" href={home.contact.phoneHref}>
            {copy.cta.call}
          </a>
          <a className="nrg-button nrg-button-ghost" href="mailto:hello@totalcharmdent.ge">
            {home.appointment}
          </a>
        </div>
        <span className="nrg-cta-meta">
          {home.contact.address} · {home.contact.phone}
        </span>
      </div>
    </section>
  );
}
