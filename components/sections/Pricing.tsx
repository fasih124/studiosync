"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const priceVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2 },
  },
};

const plans = [
  {
    name: "Starter",
    monthlyPrice: "$0",
    annualPrice: "$0",
    period: "per month",
    subtitle: "For solo trainers just getting started",
    features: [
      "1 location",
      "Up to 50 members",
      "Basic class bookings",
      "Email support",
    ],
    cta: "Start for Free",
    ctaStyle: "ghost",
    featured: false,
  },
  {
    name: "Pro Studio",
    monthlyPrice: "$49",
    annualPrice: "$39",
    period: "per month",
    subtitle: "For growing gyms that mean business",
    features: [
      "Up to 3 locations",
      "Up to 500 members",
      "All booking features",
      "Staff management + payroll",
      "Stripe payments",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaStyle: "mint",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    monthlyPrice: "$129",
    annualPrice: "$99",
    period: "per month",
    subtitle: "For gym chains and franchise operations",
    features: [
      "Unlimited locations",
      "Unlimited members",
      "Everything in Pro",
      "White-label booking page",
      "API access",
      "Dedicated account manager",
    ],
    cta: "Talk to Sales",
    ctaStyle: "ghost",
    featured: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-24"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Eyebrow + Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-eyebrow">Pricing</span>
          <h2
            className="font-syne font-bold mb-3"
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              color: "var(--text-primary)",
            }}
          >
            Plans for every sanctuary.
          </h2>
          <p
            className="text-[15px]"
            style={{ color: "var(--text-muted)" }}
          >
            No hidden fees. No surprise charges. Cancel anytime.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-14"
        >
          <div
            className="flex p-1 rounded-full"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            {(["monthly", "annual"] as const).map((option) => (
              <button
                key={option}
                onClick={() => setBilling(option)}
                className="px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 capitalize"
                style={{
                  background:
                    billing === option
                      ? "var(--accent-mint)"
                      : "transparent",
                  color:
                    billing === option
                      ? "#0A0A0F"
                      : "var(--text-muted)",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Save badge */}
          <AnimatePresence>
            {billing === "annual" && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-[11px] px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(110,231,183,0.1)",
                  color: "var(--accent-mint)",
                  border: "1px solid rgba(110,231,183,0.25)",
                }}
              >
                Save 20%
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl p-7 border flex flex-col gap-5 transition-all duration-200"
              style={{
                background: plan.featured
                  ? "var(--bg-card)"
                  : "var(--bg-card)",
                borderColor: plan.featured
                  ? "var(--accent-mint)"
                  : "var(--border)",
                boxShadow: plan.featured
                  ? "0 0 32px rgba(110,231,183,0.1)"
                  : "none",
                transform: plan.featured ? "scale(1.02)" : "scale(1)",
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="w-fit">
                  <span
                    className="text-[11px] px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(110,231,183,0.12)",
                      color: "var(--accent-mint)",
                      border: "1px solid rgba(110,231,183,0.25)",
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div>
                <h3
                  className="font-syne font-bold text-[16px] mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-[13px] leading-snug"
                  style={{ color: "var(--text-muted)" }}
                >
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={billing}
                    variants={priceVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="font-syne font-bold"
                    style={{
                      fontSize: "clamp(32px, 4vw, 40px)",
                      color: "var(--text-primary)",
                      lineHeight: 1.1,
                    }}
                  >
                    {billing === "monthly"
                      ? plan.monthlyPrice
                      : plan.annualPrice}
                  </motion.div>
                </AnimatePresence>
                <span
                  className="text-[13px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{
                  background: plan.featured
                    ? "rgba(110,231,183,0.15)"
                    : "var(--border)",
                }}
              />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[13px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span
                      className="mt-0.5 flex-shrink-0 text-[12px]"
                      style={{ color: "var(--accent-mint)" }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {plan.ctaStyle === "mint" ? (
                <a
                  href="#waitlist"
                  className="btn-mint justify-center text-[14px] py-2.5"
                >
                  {plan.cta}
                </a>
              ) : (
                <a
                  href="#waitlist"
                  className="btn-ghost justify-center text-[14px] py-2.5"
                >
                  {plan.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}