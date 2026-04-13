"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Home, Users, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Home,
    title: "Sync Profile",
    description:
      "Connect your current bookings, clients, and staff data. We import everything so nothing is lost.",
  },
  {
    number: "02",
    icon: Users,
    title: "Invite Team",
    description:
      "Invite your staff in seconds. They get their schedule, attendance tools, and nothing more.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Launch Bookings",
    description:
      "Your booking page goes live instantly. Members book classes, pay, and get reminders automatically.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
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
          className="text-center mb-16"
        >
          <span className="section-eyebrow">Setup</span>
          <h2
            className="font-syne font-bold mb-4"
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              color: "var(--text-primary)",
            }}
          >
            Onboarding in minutes, not months.
          </h2>
          <p
            className="text-[16px]"
            style={{ color: "var(--text-muted)" }}
          >
            We handle migration. You launch the thing.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">

          {/* Dashed connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-[52px] left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px"
            style={{
              borderTop: "1px dashed var(--border)",
              zIndex: 0,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative z-10 flex flex-col items-center text-center px-4"
                >
                  {/* Faint step number behind icon */}
                  <div
                    className="absolute top-[-10px] font-syne font-bold select-none pointer-events-none"
                    style={{
                      fontSize: "64px",
                      lineHeight: 1,
                      color: "rgba(110,231,183,0.05)",
                      zIndex: 0,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon Box */}
                  <div
                    className="relative z-10 w-16 h-16 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(110,231,183,0.07)",
                      border: "1px solid rgba(110,231,183,0.18)",
                    }}
                  >
                    <Icon
                      size={24}
                      color="var(--accent-mint)"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-syne font-semibold text-[16px] mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "var(--text-muted)", maxWidth: "240px" }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}