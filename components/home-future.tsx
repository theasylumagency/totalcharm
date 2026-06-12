import Image from "next/image";
import Link from "next/link";

import { TeamShowcase } from "@/components/team-showcase";
import type { Doctor } from "@/data/doctors";
import type { FutureCopy } from "@/data/future";
import type { Service } from "@/data/services";
import type { HomeCopy } from "@/data/translations";
import interiorReception from "@/source/interior/totcharm_dentinner11.png";
import interiorLounge from "@/source/interior/totcharm_dentinner99.png";

type FutureProps = {
  copy: FutureCopy;
};

export function FutureHero({ copy }: FutureProps) {
  return (
    <section className="ftr-hero" id="home">
      <div className="ftr-orb ftr-orb-a" aria-hidden />
      <div className="ftr-orb ftr-orb-b" aria-hidden />
      <div className="section-shell ftr-hero-grid">
        <div className="ftr-hero-copy reveal">
          <p className="ftr-eyebrow">
            <i aria-hidden />
            {copy.hero.eyebrow}
          </p>
          <h1>
            {copy.hero.titleStart} <span className="ftr-holo">{copy.hero.titleAccent}</span>
          </h1>
          <p className="ftr-hero-text">{copy.hero.text}</p>
          <div className="button-row">
            <a className="ftr-button ftr-button-glow" href="#contact">
              {copy.hero.primary}
            </a>
            <a className="ftr-button ftr-button-glass" href="#services">
              {copy.hero.secondary}
            </a>
          </div>
          <div className="ftr-chips">
            {copy.hero.chips.map((chip) => (
              <span className="ftr-chip" key={chip}>
                <i aria-hidden />
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="ftr-hero-media reveal">
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
          <span className="ftr-hero-tag">{copy.hero.tag}</span>
        </div>
      </div>
    </section>
  );
}

export function FutureTicker({ copy }: FutureProps) {
  const items = [...copy.ticker, ...copy.ticker];

  return (
    <section className="ftr-ticker" aria-label="Clinic highlights">
      <div className="ftr-ticker-track" aria-hidden>
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <em>◇</em>
          </span>
        ))}
      </div>
    </section>
  );
}

export function FutureServices({ copy, services }: FutureProps & { services: Service[] }) {
  return (
    <section className="ftr-services section-shell" id="services">
      <div className="ftr-section-head">
        <div className="section-intro">
          <p className="ftr-eyebrow">
            <i aria-hidden />
            {copy.services.eyebrow}
          </p>
          <h2>{copy.services.title}</h2>
          <p>{copy.services.text}</p>
        </div>
        <Link className="ftr-button ftr-button-glass" href="/services">
          {copy.services.viewAll}
        </Link>
      </div>
      <div className="ftr-service-grid">
        {services.map((service, index) => (
          <Link className="ftr-card ftr-service-card" key={service.name} href="/services">
            <span className="ftr-card-num">{String(index + 1).padStart(2, "0")}</span>
            <Image src={service.image} alt="" sizes="120px" />
            <h3>{service.name}</h3>
            <p>{service.summary}</p>
            <span className="ftr-card-arrow" aria-hidden>
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function FutureWhy({ copy }: FutureProps) {
  return (
    <section className="ftr-why section-shell" id="clinic">
      <div className="ftr-why-grid">
        <div className="section-intro reveal">
          <p className="ftr-eyebrow">
            <i aria-hidden />
            {copy.why.eyebrow}
          </p>
          <h2>{copy.why.title}</h2>
          <p>{copy.why.text}</p>
        </div>
        <div className="ftr-why-points">
          {copy.why.points.map((point, index) => (
            <article className="ftr-card" key={point}>
              <span className="ftr-card-num">{String(index + 1).padStart(2, "0")}</span>
              <h3>{point}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FutureStats({ copy }: FutureProps) {
  return (
    <section className="ftr-stats section-shell">
      {copy.stats.items.map((stat) => (
        <article className="ftr-card ftr-stat" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </article>
      ))}
    </section>
  );
}

export function FutureDoctors({ copy, doctors }: FutureProps & { doctors: Doctor[] }) {
  return (
    <section className="ftr-team section-shell" id="doctors">
      <div className="section-intro reveal">
        <p className="ftr-eyebrow">
          <i aria-hidden />
          {copy.doctors.eyebrow}
        </p>
        <h2>{copy.doctors.title}</h2>
      </div>
      <TeamShowcase doctors={doctors} cta={copy.doctors.cta} />
    </section>
  );
}

export function FutureProtocol({ copy }: FutureProps) {
  return (
    <section className="ftr-protocol section-shell">
      <div className="section-intro reveal">
        <p className="ftr-eyebrow">
          <i aria-hidden />
          {copy.protocol.eyebrow}
        </p>
        <h2>{copy.protocol.title}</h2>
      </div>
      <ol className="ftr-protocol-steps">
        {copy.protocol.steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step}</h3>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function FutureGallery({ copy }: FutureProps) {
  return (
    <section className="ftr-gallery section-shell">
      <div className="section-intro reveal">
        <p className="ftr-eyebrow">
          <i aria-hidden />
          {copy.gallery.eyebrow}
        </p>
        <h2>{copy.gallery.title}</h2>
      </div>
      <div className="ftr-gallery-grid">
        <div className="ftr-gallery-video">
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
        <figure className="ftr-gallery-photo">
          <Image
            src={interiorReception}
            alt="Total Charm Dent — მიმღები"
            sizes="(max-width: 1100px) 100vw, 380px"
          />
        </figure>
        <figure className="ftr-gallery-photo">
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

export function FutureReviews({ copy }: FutureProps) {
  return (
    <section className="ftr-reviews section-shell">
      <div className="section-intro reveal">
        <p className="ftr-eyebrow">
          <i aria-hidden />
          {copy.reviews.eyebrow}
        </p>
        <h2>{copy.reviews.title}</h2>
      </div>
      <div className="ftr-review-grid">
        {copy.reviews.items.map((review) => (
          <article className="ftr-card ftr-review-card" key={review.quote}>
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

export function FutureCTA({ copy, home }: FutureProps & { home: HomeCopy }) {
  return (
    <section className="ftr-cta" id="contact">
      <div className="ftr-orb ftr-orb-c" aria-hidden />
      <div className="section-shell ftr-cta-inner">
        <h2>{copy.cta.title}</h2>
        <p>{copy.cta.text}</p>
        <div className="button-row">
          <a className="ftr-button ftr-button-glow" href={home.contact.phoneHref}>
            {copy.cta.call}
          </a>
          <a className="ftr-button ftr-button-glass" href="mailto:hello@totalcharmdent.ge">
            {home.appointment}
          </a>
        </div>
        <span className="ftr-cta-meta">
          {home.contact.address} · {home.contact.phone}
        </span>
      </div>
    </section>
  );
}
