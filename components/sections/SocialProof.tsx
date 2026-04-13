"use client";

import { motion } from "framer-motion";

const brands = [
  "PeakFit",
  "IronHouse",
  "CoreStudio",
  "EliteGym",
  "ZenMotion",
  "PulseFit",
];

export default function SocialProof() {
  return (
    <section
      className="relative py-7 overflow-hidden"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-surface)",
      }}
    >
      {/* Label */}
      <p
        className="text-center text-xs mb-5 tracking-wide"
        style={{ color: "var(--text-muted)" }}
      >
        Trusted by 500+ fitness studios worldwide
      </p>

      {/* Marquee Wrapper */}
      <div className="relative overflow-hidden">

        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--bg-surface), transparent)",
          }}
        />

        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, var(--bg-surface), transparent)",
          }}
        />

        {/* Scrolling Track */}
        <div className="flex gap-16 w-max animate-marquee">
          {/* Render brands twice for seamless loop */}
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="font-syne font-semibold text-[15px] whitespace-nowrap select-none"
              style={{ color: "var(--text-primary)", opacity: 0.35 }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}