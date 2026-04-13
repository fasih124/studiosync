"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    initials: "SM",
    name: "Sarah Mitchell",
    gym: "CrossFit Downtown",
    quote:
      "StudioSync cut our admin time in half within the first week. I can't picture going back to a pen-and-paper system again, not for a second.",
  },
  {
    initials: "JR",
    name: "James Rowe",
    gym: "IronHouse Gym",
    quote:
      "The payments automation is exceptional. Our churn dropped by 31% in the first 3 months since we never miss a renewal.",
  },
  {
    initials: "PK",
    name: "Priya Kapoor",
    gym: "Zen Yoga Studio",
    quote:
      "My instructors love the mobile app. Swapping classes is seamless, and attendance tracking is a breeze — finally a system that just works.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Eyebrow + Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-eyebrow">Testimonials</span>
          <h2
            className="font-syne font-bold"
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              color: "var(--text-primary)",
            }}
          >
            From the sanctuary floor.
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-xl p-6 border flex flex-col gap-4 transition-all duration-200"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                borderTop: "2px solid rgba(110,231,183,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTop =
                  "2px solid var(--accent-mint)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderTop =
                  "2px solid rgba(110,231,183,0.25)";
              }}
            >
              {/* Stars */}
              <div
                className="text-[13px] tracking-wide"
                style={{ color: "var(--accent-mint)" }}
              >
                ★★★★★
              </div>

              {/* Quote */}
              <p
                className="text-[14px] leading-relaxed flex-1"
                style={{ color: "var(--text-muted)" }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-semibold"
                  style={{
                    background: "rgba(110,231,183,0.1)",
                    border: "1px solid rgba(110,231,183,0.25)",
                    color: "var(--accent-mint)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="text-[13px] font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[11px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.gym}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}