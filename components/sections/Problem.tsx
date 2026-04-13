"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardList, Users, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: ClipboardList,
    iconBg: "rgba(239,68,68,0.1)",
    iconColor: "#EF4444",
    title: "Booking chaos",
    description:
      "Phone calls and WhatsApp messages fill your morning before a single class starts.",
  },
  {
    icon: Users,
    iconBg: "rgba(245,158,11,0.1)",
    iconColor: "#F59E0B",
    title: "Staff guesswork",
    description:
      "No clear picture of who showed up, who's owed what, or who's available tomorrow.",
  },
  {
    icon: AlertCircle,
    iconBg: "rgba(129,140,248,0.1)",
    iconColor: "#818CF8",
    title: "Missed renewals",
    description:
      "Members quietly lapse because no one tracked their membership expiry.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problem"
      ref={ref}
      className="py-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            className="font-syne font-bold mb-4"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--text-primary)",
              maxWidth: "560px",
            }}
          >
            You didn't open a gym to manage software.
          </h2>
          <p
            className="text-[16px] leading-relaxed"
            style={{ color: "var(--text-muted)", maxWidth: "480px" }}
          >
            Most gym owners spend 3+ hours a day on admin work. That time
            belongs with your members.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-xl p-6 border transition-all duration-200"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(110,231,183,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: problem.iconBg }}
                >
                  <Icon size={18} color={problem.iconColor} />
                </div>

                {/* Title */}
                <h3
                  className="font-syne font-semibold text-[15px] mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {problem.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[15px] font-medium"
          style={{ color: "var(--accent-mint)" }}
        >
          → StudioSync solves all three.
        </motion.p>

      </div>
    </section>
  );
}