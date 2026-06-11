"use client";

import Image from "next/image";
import { useState } from "react";

import type { Doctor } from "@/data/doctors";

type Props = {
  doctors: Doctor[];
  cta: string;
};

export function TeamShowcase({ doctors, cta }: Props) {
  const [active, setActive] = useState(0);
  const count = doctors.length;

  return (
    <div className="team-showcase">
      <div className="team-controls">
        <span className="team-counter">
          {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
        <div className="team-arrows">
          <button
            type="button"
            onClick={() => setActive((active - 1 + count) % count)}
            aria-label="Previous doctor"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setActive((active + 1) % count)}
            aria-label="Next doctor"
          >
            →
          </button>
        </div>
      </div>
      <div className="team-panels">
        {doctors.map((doctor, index) => (
          <article
            key={doctor.name}
            className={`team-panel${index === active ? " is-active" : ""}`}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              sizes="(max-width: 720px) 100vw, 50vw"
            />
            <span className="panel-name" aria-hidden>
              {doctor.name}
            </span>
            <div className="panel-info">
              <h3>{doctor.name}</h3>
              <p>{doctor.role}</p>
              <a href="#contact">{cta} →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
