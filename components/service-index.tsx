"use client";

import Image from "next/image";
import { useState } from "react";

import type { Service } from "@/data/services";

type Props = {
  services: Service[];
  eyebrow: string;
  title: string;
  text: string;
  viewAll: string;
};

export function ServiceIndex({ services, eyebrow, title, text, viewAll }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="services-grid">
      <div className="services-intro">
        <div className="section-intro">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
          <a className="button button-light services-view-all" href="/services">
            {viewAll}
          </a>
        </div>
        <div className="service-preview" aria-hidden>
          {services.map((service, index) => (
            <Image
              key={service.name}
              className={index === active ? "is-active" : undefined}
              src={service.image}
              alt=""
              sizes="280px"
            />
          ))}
          <span className="service-preview-count">
            {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
          </span>
        </div>
      </div>
      <div className="service-list" aria-label="Signature services">
        {services.map((service, index) => (
          <a
            className={`service-row${index === active ? " is-active" : ""}`}
            key={service.name}
            href="/services"
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="service-body">
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
            </span>
            <span className="service-arrow" aria-hidden>
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
