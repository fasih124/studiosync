"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 text-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Glow blobs */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(110,231,183,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-syne font-bold mb-4"
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            color: "var(--text-primary)",
            lineHeight: 1.1,
          }}
        >
          Your gym deserves better tools.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[16px] mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          Join 500+ studios already running smarter with StudioSync.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="#waitlist"
            className="btn-mint text-[16px] px-8 py-3.5"
          >
            Launch Your StudioSync
            <ArrowRight size={16} />
          </a>
          <p
            className="text-[12px]"
            style={{ color: "var(--text-muted)" }}
          >
            No credit card required &nbsp;·&nbsp; 30-day free trial &nbsp;·&nbsp; Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}