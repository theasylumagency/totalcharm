import Image from "next/image";
import Link from "next/link";

import { ServiceIndex } from "@/components/service-index";
import { TeamShowcase } from "@/components/team-showcase";
import type { Doctor } from "@/data/doctors";
import type { Service } from "@/data/services";
import type { HomeCopy } from "@/data/translations";
import interiorReception from "@/source/interior/totcharm_dentinner11.png";
import interiorLounge from "@/source/interior/totcharm_dentinner99.png";

type CopyProps = {
  copy: HomeCopy;
};

const navHrefs = ["/#home", "/energy", "/services", "/#doctors", "/#clinic", "/#contact"];

export function Header({ copy }: CopyProps) {
  return (
    <header className="site-header">
      <input className="menu-toggle" id="menu-toggle" type="checkbox" aria-label="Mobile menu" />
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Total Charm Dent home">
          <Image
            className="brand-logo"
            src="/total-charm-logo.svg"
            alt=""
            width={44}
            height={38}
            unoptimized
          />
          <span className="brand-text">
            <span className="brand-name">Total Charm Dent</span>
            <span className="brand-sub">Vake · Tbilisi</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {copy.nav.map((item, index) => (
            <Link key={item} href={navHrefs[index]}>
              {item}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitch />
          <Link className="button button-dark header-cta" href="/#contact">
            {copy.appointment}
          </Link>
          <label className="menu-button" htmlFor="menu-toggle" aria-label="Open navigation">
            <span />
            <span />
          </label>
        </div>
      </div>

      <div className="mobile-menu">
        <nav aria-label="Mobile navigation">
          {copy.nav.map((item, index) => (
            <a key={item} href={navHrefs[index]}>
              {item}
            </a>
          ))}
        </nav>
        <LanguageSwitch />
        <a className="button button-dark" href="/#contact">
          {copy.appointment}
        </a>
      </div>
    </header>
  );
}

export function Hero({ copy }: CopyProps) {
  return (
    <section className="hero" id="home">
      <div className="section-shell hero-copy reveal">
        <p className="eyebrow">{copy.hero.eyebrow}</p>
        <h1>{copy.hero.title}</h1>
        <div className="hero-row">
          <p className="hero-text">{copy.hero.text}</p>
          <div className="button-row">
            <a className="button button-dark" href="#contact">
              {copy.hero.primary}
            </a>
            <a className="button button-light" href="#services">
              {copy.hero.secondary}
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell">
        <div className="hero-media reveal">
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
          <div className="hero-note">
            <span>{copy.hero.noteLabel}</span>
            <strong>{copy.hero.noteValue}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip({ copy }: CopyProps) {
  return (
    <section className="trust-strip" aria-label="Clinic trust signals">
      <div className="section-shell trust-inner">
        {copy.trust.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </section>
  );
}

export function SignatureServices({ copy, services }: CopyProps & { services: Service[] }) {
  return (
    <section className="services-section" id="services">
      <div className="section-shell">
        <ServiceIndex
          services={services}
          eyebrow={copy.services.eyebrow}
          title={copy.services.title}
          text={copy.services.text}
          viewAll={copy.services.viewAll}
        />
      </div>
    </section>
  );
}

export function WhySection({ copy }: CopyProps) {
  const principles = [
    "ზუსტი დიაგნოსტიკა მკურნალობამდე",
    "ინდივიდუალური მკურნალობის დაგეგმვა",
    "გამოცდილი სპეციალისტების გუნდი",
    "მშვიდი, თანამედროვე კლინიკური გარემო",
  ];

  return (
    <section className="why-section" id="clinic">
      <div className="section-shell why-grid">
        <SectionIntro eyebrow={copy.why.eyebrow} title={copy.why.title} text={copy.why.text} />
        <div className="principle-list">
          {principles.map((principle, index) => (
            <article className="principle-row" key={principle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeadDoctor({ copy, doctor }: CopyProps & { doctor: Doctor }) {
  return (
    <section className="lead-doctor section-shell" id="doctors">
      <div className="lead-portrait reveal">
        <Image src={doctor.image} alt={doctor.name} priority sizes="(max-width: 900px) 100vw, 42vw" />
      </div>
      <div className="lead-copy reveal">
        <p className="eyebrow">{copy.leadDoctor.eyebrow}</p>
        <h2>{copy.leadDoctor.name}</h2>
        <p className="lead-role">{copy.leadDoctor.role}</p>
        <p className="lead-bio">{copy.leadDoctor.bio}</p>
        <a className="button button-dark" href="#contact">
          {copy.appointment}
        </a>
      </div>
    </section>
  );
}

export function TeamSlider({ copy, doctors }: CopyProps & { doctors: Doctor[] }) {
  const team = doctors.filter((doctor) => doctor.name !== copy.leadDoctor.name);

  return (
    <section className="team-section section-shell">
      <SectionIntro eyebrow={copy.team.eyebrow} title={copy.team.title} />
      <TeamShowcase doctors={team} cta={copy.team.cta} />
    </section>
  );
}

export function PatientPath({ copy }: CopyProps) {
  return (
    <section className="path-section section-shell">
      <SectionIntro eyebrow={copy.path.eyebrow} title={copy.path.title} />
      <div className="path-steps">
        {copy.path.steps.map((step, index) => (
          <article key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ClinicGallery({ copy }: CopyProps) {
  return (
    <section className="gallery-section section-shell">
      <SectionIntro eyebrow={copy.gallery.eyebrow} title={copy.gallery.title} />
      <div className="gallery-grid">
        <div className="gallery-large">
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
        <figure className="gallery-photo">
          <Image
            src={interiorReception}
            alt="Total Charm Dent — მიმღები"
            sizes="(max-width: 1100px) 100vw, 380px"
          />
        </figure>
        <figure className="gallery-photo">
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

export function Reviews({ copy }: CopyProps) {
  const reviews = [
    {
      quote: "კონსულტაციაზე ყველაფერი მშვიდად და გასაგებად ამიხსნეს. გეგმა თავიდანვე მკაფიო იყო.",
      author: "ნ.",
      service: "დიაგნოსტიკა",
    },
    {
      quote: "მკურნალობა ზუსტად ისე წარიმართა, როგორც დაგეგმილი გვქონდა. გარემო ძალიან მშვიდია.",
      author: "მარიამი",
      service: "თერაპია",
    },
    {
      quote: "იმპლანტაციის პროცესი პროფესიონალური და ორგანიზებული იყო, ზედმეტი დაძაბულობის გარეშე.",
      author: "გ.",
      service: "იმპლანტოლოგია",
    },
  ];

  return (
    <section className="reviews-section section-shell">
      <SectionIntro eyebrow={copy.reviews.eyebrow} title={copy.reviews.title} />
      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.quote}>
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

export function FinalCTA({ copy }: CopyProps) {
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">{copy.contact.eyebrow}</p>
          <h2>{copy.finalCta.title}</h2>
          <p className="contact-text">{copy.finalCta.text}</p>
          <dl className="contact-details">
            <div>
              <dt>{copy.contact.addressLabel}</dt>
              <dd>{copy.contact.address}</dd>
            </div>
            <div>
              <dt>{copy.contact.phoneLabel}</dt>
              <dd>
                <a href={copy.contact.phoneHref}>{copy.contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt>{copy.contact.hoursLabel}</dt>
              <dd>
                {copy.contact.hoursWeekdays}
                <br />
                {copy.contact.hoursSunday}
              </dd>
            </div>
          </dl>
          <div className="button-row">
            <a className="button button-ivory" href={copy.contact.phoneHref}>
              {copy.finalCta.call}
            </a>
            <a className="button button-outline-dark" href="mailto:hello@totalcharmdent.ge">
              {copy.appointment}
            </a>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps?q=12+Dimitri+Arakishvili+Street,+Tbilisi,+Georgia&output=embed"
            title={copy.contact.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export function Footer({ copy }: CopyProps) {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div>
          <a className="brand footer-brand" href="/" aria-label="Total Charm Dent home">
            <Image
              className="brand-logo"
              src="/total-charm-logo.svg"
              alt=""
              width={44}
              height={38}
              unoptimized
            />
            <span className="brand-text">
              <span className="brand-name">Total Charm Dent</span>
              <span className="brand-sub">Vake · Tbilisi</span>
            </span>
          </a>
          <p>{copy.footer.note}</p>
        </div>
        <div className="footer-contact">
          <strong>{copy.footer.address}</strong>
          <a href={copy.contact.phoneHref}>{copy.contact.phone}</a>
          <a href="mailto:hello@totalcharmdent.ge">hello@totalcharmdent.ge</a>
          <span>
            {copy.contact.hoursWeekdays} · {copy.contact.hoursSunday}
          </span>
        </div>
      </div>
    </footer>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-intro reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function LanguageSwitch() {
  return (
    <div className="language-switch" aria-label="Language selector">
      <Link className="active" href="/?lang=ka" aria-label="ქართული">
        KA
      </Link>
      <Link href="/?lang=en" aria-label="English">
        EN
      </Link>
      <Link href="/?lang=ru" aria-label="Русский">
        RU
      </Link>
    </div>
  );
}
