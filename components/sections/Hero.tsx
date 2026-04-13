"use client";

 
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion, type Variants } from "framer-motion";


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* Glow Blobs */}
      <div className="absolute top-[-100px] left-[-200px] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(110,231,183,0.13) 0%, transparent 70%)" }}
      />
      <div className="absolute top-[50px] right-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.13) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text Content ── */}
          <div className="flex-1 max-w-xl">

            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 border border-[var(--accent-mint)] text-[var(--accent-mint)] text-xs px-4 py-2 rounded-full mb-7"
            >
              ✦ Now in public beta — free for 30 days
            </motion.div>

            {/* H1 */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-syne text-[clamp(44px,6vw,72px)] font-bold leading-[1.05] mb-5"
            >
              Run your gym.<br />
              <span style={{ color: "var(--accent-mint)" }}>
                Not spreadsheets.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[17px] leading-[1.7] mb-8 max-w-lg"
              style={{ color: "var(--text-muted)" }}
            >
              StudioSync gives gym owners one place to manage bookings,
              staff shifts, memberships, and payments — so you can focus
              on what matters: your members.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-3 mb-5"
            >
              <a href="#waitlist" className="btn-mint">
                Get Started for Free
                <ArrowRight size={15} />
              </a>
              <a href="#demo" className="btn-ghost">
                <PlayCircle size={15} />
                Book a Demo
              </a>
            </motion.div>

            {/* Trust Line */}
            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              No credit card required &nbsp;·&nbsp; Setup in 10 minutes &nbsp;·&nbsp; Cancel anytime
            </motion.p>
          </div>

          {/* ── Right: Browser Mockup ── */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex-1 w-full max-w-[600px] relative"
          >
            {/* Floating Card 1 — bottom left */}
            <div
              className="absolute bottom-[-18px] left-[-20px] z-10 px-3 py-2 rounded-xl border text-xs"
              style={{
                background: "rgba(26,26,36,0.85)",
                backdropFilter: "blur(12px)",
                borderColor: "var(--border)",
              }}
            >
              <div style={{ color: "var(--text-muted)", fontSize: "10px" }}>This week</div>
              <div className="font-semibold" style={{ color: "var(--accent-mint)" }}>
                ↑ +24% bookings
              </div>
            </div>

            {/* Floating Card 2 — top right */}
            <div
              className="absolute top-[-18px] right-[-16px] z-10 px-3 py-2 rounded-xl border text-xs"
              style={{
                background: "rgba(26,26,36,0.85)",
                backdropFilter: "blur(12px)",
                borderColor: "var(--border)",
              }}
            >
              <div style={{ color: "var(--text-muted)", fontSize: "10px" }}>Right now</div>
              <div className="font-semibold flex items-center gap-1" style={{ color: "var(--text-primary)" }}>
                <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
                12 staff online
              </div>
            </div>

            {/* Browser Chrome */}
            <div
              className="rounded-xl overflow-hidden border"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                boxShadow: "0 4px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Browser Bar */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}
              >
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div
                  className="flex-1 ml-2 text-[11px] px-3 py-1 rounded-md"
                  style={{
                    background: "var(--bg-primary)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  app.studiosync.io/dashboard
                </div>
              </div>

              {/* Dashboard UI */}
              <div className="flex" style={{ height: "320px" }}>

                {/* Sidebar */}
                <div
                  className="w-[110px] flex-shrink-0 border-r p-3 flex flex-col gap-1"
                  style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}
                >
                  <div
                    className="font-syne font-bold text-[11px] mb-3"
                    style={{ color: "var(--accent-mint)" }}
                  >
                    SS
                  </div>
                  {["Dashboard", "Bookings", "Members", "Staff", "Payments"].map((item, i) => (
                    <div
                      key={item}
                      className="text-[10px] px-2 py-1.5 rounded-md"
                      style={{
                        background: i === 0 ? "rgba(110,231,183,0.1)" : "transparent",
                        color: i === 0 ? "var(--accent-mint)" : "var(--text-muted)",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 overflow-hidden">

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { label: "Members", value: "342" },
                      { label: "Classes", value: "18" },
                      { label: "Revenue", value: "$12.4k", mint: true },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-md p-2 border"
                        style={{
                          background: "var(--bg-surface)",
                          borderColor: "var(--border)",
                        }}
                      >
                        <div className="text-[9px] mb-1" style={{ color: "var(--text-muted)" }}>
                          {stat.label}
                        </div>
                        <div
                          className="text-[13px] font-bold font-syne"
                          style={{ color: stat.mint ? "var(--accent-mint)" : "var(--text-primary)" }}
                        >
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div
                    className="text-[10px] font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Today's Bookings
                  </div>
                  <div className="flex items-end gap-1.5" style={{ height: "130px" }}>
                    {[40, 65, 80, 35, 90, 70, 45, 100, 85, 30, 60, 50].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background: i % 3 === 0
                            ? "var(--border)"
                            : "rgba(110,231,183,0.75)",
                        }}
                      />
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}