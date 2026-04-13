"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    prefix: "",
    target: 500,
    suffix: "+",
    decimals: 0,
    label: "Studios using StudioSync",
  },
  {
    prefix: "",
    target: 94,
    suffix: "%",
    decimals: 0,
    label: "Reduction in admin time reported",
  },
  {
    prefix: "$",
    target: 2.4,
    suffix: "M",
    decimals: 1,
    label: "Processed monthly on the platform",
  },
  {
    prefix: "",
    target: 4.9,
    suffix: "★",
    decimals: 1,
    label: "Average rating from studio owners",
  },
];

function AnimatedNumber({
  prefix,
  target,
  suffix,
  decimals,
  isInView,
}: {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
  isInView: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const duration = 1800;
  const frameRate = 60;
  const totalFrames = Math.round((duration / 1000) * frameRate);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = eased * target;
      setCurrent(value);

      if (frame === totalFrames) {
        clearInterval(counter);
        setCurrent(target);
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [isInView, target, totalFrames]);

  const display =
    decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center py-6 px-4"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid var(--border)"
                    : "none",
              }}
            >
              {/* Number */}
              <div
                className="font-syne font-bold mb-2"
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)",
                  color: "var(--accent-mint)",
                  lineHeight: 1.1,
                }}
              >
                <AnimatedNumber
                  prefix={stat.prefix}
                  target={stat.target}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  isInView={isInView}
                />
              </div>

              {/* Label */}
              <p
                className="text-[13px] leading-snug"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}