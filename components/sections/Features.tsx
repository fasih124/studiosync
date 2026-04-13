"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const tabVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2 },
  },
};

const tabs = ["Bookings", "Staff", "Members", "Payments"];

const tabContent = {
  Bookings: {
    title: "Booking logic that works while you sleep.",
    description:
      "Members book online 24/7. You see every slot, cancellation, and waitlist in real time.",
    bullets: [
      "Online booking page for your studio",
      "Automatic reminders via SMS and email",
      "Waitlist management built in",
      "Calendar sync with Google Calendar",
    ],
    visual: <BookingsVisual />,
  },
  Staff: {
    title: "Staff scheduling made simple.",
    description:
      "Assign shifts, track attendance, and manage trainer availability in one view.",
    bullets: [
      "Drag-and-drop shift builder",
      "Clock-in / clock-out tracking",
      "Role-based access for trainer, manager, admin",
      "Automated payroll summary export",
    ],
    visual: <StaffVisual />,
  },
  Members: {
    title: "Know every member deeply.",
    description:
      "Track attendance history, membership status, and personal goals — all linked to their profile.",
    bullets: [
      "Member profiles with photo and notes",
      "Attendance streak tracking",
      "Automated renewal reminders",
      "Custom membership plans",
    ],
    visual: <MembersVisual />,
  },
  Payments: {
    title: "Payments that handle themselves.",
    description:
      "Collect monthly memberships, drop-in fees, and packages — automatically.",
    bullets: [
      "Stripe-powered recurring billing",
      "One-click invoices",
      "Revenue dashboard with charts",
      "Failed payment auto-retry",
    ],
    visual: <PaymentsVisual />,
  },
};

// ── Visuals ──────────────────────────────────────────

function BookingsVisual() {
  const sessions = [
    { name: "HIIT Intensity", time: "9:00 AM · 45 min", spots: "12/15", status: "open" },
    { name: "Power Yoga", time: "10:30 AM · 60 min", spots: "FULL", status: "full" },
    { name: "Spin Cycle", time: "12:00 PM · 45 min", spots: "3/15", status: "low" },
  ];

  return (
    <div
      className="rounded-xl border p-5"
      style={{ background: "var(--bg-primary)", borderColor: "var(--border)" }}
    >
      <div className="flex justify-between items-center mb-4">
        <span
          className="text-[12px] font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Upcoming Sessions
        </span>
        <span
          className="text-[10px]"
          style={{ color: "var(--accent-mint)" }}
        >
          View All →
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {sessions.map((s) => (
          <div
            key={s.name}
            className="flex items-center justify-between rounded-lg px-3 py-2.5 border"
            style={{
              background:
                s.status === "open"
                  ? "rgba(110,231,183,0.06)"
                  : s.status === "full"
                  ? "rgba(239,68,68,0.05)"
                  : "var(--bg-card)",
              borderColor:
                s.status === "open"
                  ? "rgba(110,231,183,0.2)"
                  : s.status === "full"
                  ? "rgba(239,68,68,0.2)"
                  : "var(--border)",
            }}
          >
            <div>
              <div
                className="text-[12px] font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {s.name}
              </div>
              <div className="text-[10px]" style={{ color: "var(--text-muted)" }}>
                {s.time}
              </div>
            </div>
            <span
              className="text-[10px] px-2 py-1 rounded-full"
              style={{
                background:
                  s.status === "open"
                    ? "rgba(110,231,183,0.15)"
                    : s.status === "full"
                    ? "rgba(239,68,68,0.12)"
                    : "var(--border)",
                color:
                  s.status === "open"
                    ? "var(--accent-mint)"
                    : s.status === "full"
                    ? "#EF4444"
                    : "var(--text-muted)",
              }}
            >
              {s.spots}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StaffVisual() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const staff = [
    { name: "Alex K.", shifts: [true, true, false, true, true] },
    { name: "Maria L.", shifts: [false, true, true, true, false] },
    { name: "Tom R.", shifts: [true, true, true, false, true] },
    { name: "Sara N.", shifts: [true, false, true, true, true] },
  ];

  return (
    <div
      className="rounded-xl border p-5"
      style={{ background: "var(--bg-primary)", borderColor: "var(--border)" }}
    >
      <div className="mb-3">
        <span
          className="text-[12px] font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Weekly Roster
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[10px]">
          <thead>
            <tr>
              <th
                className="text-left pb-2 pr-3 font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Staff
              </th>
              {days.map((d) => (
                <th
                  key={d}
                  className="text-center pb-2 font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {staff.map((s) => (
              <tr key={s.name}>
                <td
                  className="py-1.5 pr-3 font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {s.name}
                </td>
                {s.shifts.map((on, i) => (
                  <td key={i} className="text-center py-1.5">
                    <div
                      className="w-6 h-5 rounded mx-auto"
                      style={{
                        background: on
                          ? "rgba(110,231,183,0.25)"
                          : "rgba(239,68,68,0.08)",
                        border: on
                          ? "1px solid rgba(110,231,183,0.4)"
                          : "1px solid rgba(239,68,68,0.15)",
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-4 mt-3">
        {[
          { label: "On shift", color: "rgba(110,231,183,0.25)", border: "rgba(110,231,183,0.4)" },
          { label: "Off", color: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.15)" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-sm"
              style={{ background: l.color, border: `1px solid ${l.border}` }}
            />
            <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>
              {l.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MembersVisual() {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ background: "var(--bg-primary)", borderColor: "var(--border)" }}
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 font-syne font-bold text-[15px]"
          style={{
            background: "rgba(110,231,183,0.12)",
            border: "2px solid var(--accent-mint)",
            color: "var(--accent-mint)",
          }}
        >
          JD
        </div>
        <div className="flex-1">
          <div
            className="font-semibold text-[14px] mb-0.5"
            style={{ color: "var(--text-primary)" }}
          >
            Jamie Davis
          </div>
          <div
            className="text-[11px] mb-3"
            style={{ color: "var(--accent-mint)" }}
          >
            Pro Member · Active
          </div>
          <div className="flex gap-5 mb-3">
            {[
              { val: "47", label: "Classes" },
              { val: "🔥 14", label: "Streak" },
              { val: "98%", label: "Attend." },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="font-syne font-bold text-[16px]"
                  style={{ color: "var(--text-primary)" }}
                >
                  {s.val}
                </div>
                <div className="text-[9px]" style={{ color: "var(--text-muted)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div
            className="inline-flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-lg"
            style={{
              background: "rgba(110,231,183,0.08)",
              border: "1px solid rgba(110,231,183,0.25)",
              color: "var(--accent-mint)",
            }}
          >
            ✓ Renews Dec 15 — Auto-pay on
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentsVisual() {
  const bars = [40, 55, 45, 70, 60, 85, 75, 100];
  const months = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div
      className="rounded-xl border p-5"
      style={{ background: "var(--bg-primary)", borderColor: "var(--border)" }}
    >
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>
          Revenue This Month
        </span>
        <span
          className="text-[10px]"
          style={{ color: "#22C55E" }}
        >
          ▲ +18%
        </span>
      </div>
      <div
        className="font-syne font-bold text-[28px] mb-4"
        style={{ color: "var(--accent-mint)" }}
      >
        $12,480
      </div>
      <div className="flex items-end gap-1.5" style={{ height: "80px" }}>
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background:
                i === bars.length - 1
                  ? "var(--accent-mint)"
                  : "rgba(110,231,183,0.25)",
            }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-1">
        {months.map((m) => (
          <span key={m} className="text-[9px]" style={{ color: "var(--text-muted)" }}>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────

export default function Features() {
  const [activeTab, setActiveTab] = useState("Bookings");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section
      id="features"
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
          className="mb-10"
        >
          <span className="section-eyebrow">Features</span>
          <h2
            className="font-syne font-bold"
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              color: "var(--text-primary)",
              maxWidth: "540px",
            }}
          >
            One platform. Every tool your gym needs.
          </h2>
        </motion.div>

        {/* Tab Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex overflow-x-auto mb-12"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-5 py-2.5 text-[14px] font-medium whitespace-nowrap transition-all duration-200"
              style={{
                color:
                  activeTab === tab
                    ? "var(--text-primary)"
                    : "var(--text-muted)",
                borderBottom:
                  activeTab === tab
                    ? "2px solid var(--accent-mint)"
                    : "2px solid transparent",
                marginBottom: "-1px",
                background: "none",
             
                cursor: "pointer",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left: Text */}
            <div>
              <h3
                className="font-syne font-bold text-[22px] mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {content.title}
              </h3>
              <p
                className="text-[15px] leading-relaxed mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                {content.description}
              </p>
              <ul className="flex flex-col gap-3">
                {content.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-[14px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--accent-mint)" }}
                    >
                      ✓
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Visual */}
            <div>{content.visual}</div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}