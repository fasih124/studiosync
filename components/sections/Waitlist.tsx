"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section
      id="waitlist"
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Glow blobs */}
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(110,231,183,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Early Access</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-bold mb-4"
          style={{
            fontSize: "clamp(30px, 4.5vw, 50px)",
            color: "var(--text-primary)",
            lineHeight: 1.1,
          }}
        >
          Be the first to run a smarter gym.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[16px] leading-relaxed mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          Join the waitlist and get early access to StudioSync — plus a
          free onboarding session when we launch.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {status === "success" ? (
            /* Success State */
            <div
              className="flex flex-col items-center gap-4 py-8 px-6 rounded-2xl border"
              style={{
                background: "rgba(110,231,183,0.05)",
                borderColor: "rgba(110,231,183,0.25)",
              }}
            >
              <CheckCircle
                size={40}
                style={{ color: "var(--accent-mint)" }}
              />
              <div>
                <p
                  className="font-syne font-bold text-[18px] mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  You're on the list!
                </p>
                <p
                  className="text-[14px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  We'll reach out as soon as early access opens.
                </p>
              </div>
            </div>
          ) : (
            /* Form State */
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-[14px] outline-none transition-all duration-200"
                style={{
                  background: "var(--bg-card)",
                  border: `1px solid ${
                    status === "error"
                      ? "#EF4444"
                      : "var(--border)"
                  }`,
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-dm-sans)",
                }}
                onFocus={(e) => {
                  if (status !== "error") {
                    e.target.style.borderColor = "var(--accent-mint)";
                  }
                }}
                onBlur={(e) => {
                  if (status !== "error") {
                    e.target.style.borderColor = "var(--border)";
                  }
                }}
                disabled={status === "loading"}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-mint whitespace-nowrap"
                style={{
                  opacity: status === "loading" ? 0.7 : 1,
                  cursor:
                    status === "loading" ? "not-allowed" : "pointer",
                }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Error message */}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-[13px]"
              style={{ color: "#EF4444" }}
            >
              {message}
            </motion.p>
          )}

          {/* Trust line */}
          {status !== "success" && (
            <p
              className="mt-4 text-[12px]"
              style={{ color: "var(--text-muted)" }}
            >
              No spam, ever &nbsp;·&nbsp; Unsubscribe anytime &nbsp;·&nbsp; Free early access
            </p>
          )}
        </motion.div>

        {/* Social proof mini */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mt-10"
        >
          <div className="flex -space-x-2">
            {["SM", "JR", "PK", "AL", "MO"].map((initials) => (
              <div
                key={initials}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-semibold border-2"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--bg-surface)",
                  color: "var(--accent-mint)",
                }}
              >
                {initials}
              </div>
            ))}
          </div>
          <p
            className="text-[13px]"
            style={{ color: "var(--text-muted)" }}
          >
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              500+
            </span>{" "}
            studio owners already signed up
          </p>
        </motion.div>

      </div>
    </section>
  );
}