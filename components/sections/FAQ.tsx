"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I migrate from Mindbody or WellnessLiving?",
    answer:
      "Yes. We support full data imports from most major platforms. Our migration team handles everything for Pro and Business plans at no extra cost.",
  },
  {
    question: "Do you take a percentage of my revenue?",
    answer:
      "Never. You pay a flat monthly fee. We don't take a cut of your bookings or memberships — ever.",
  },
  {
    question: "Is there a waitlist or commitment?",
    answer:
      "No waitlist — you can start your 30-day free trial today. No commitment either. Cancel any time from your dashboard with one click.",
  },
  {
    question: "How does the waitlist automation work?",
    answer:
      "When a class fills up, members can join a waitlist. If a spot opens, they're automatically notified and their booking is confirmed — no manual work needed.",
  },
  {
    question: "Can my staff have their own logins?",
    answer:
      "Yes. Each staff member gets a role-based login. Trainers see their schedule and classes. Managers see everything. Admins have full access.",
  },
  {
    question: "Do you support Apple Pay and Google Pay?",
    answer:
      "Yes. Through our Stripe integration, members can pay via Apple Pay, Google Pay, card, or bank transfer — whatever works for them.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="faq"
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
          <span className="section-eyebrow">FAQ</span>
          <h2
            className="font-syne font-bold"
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              color: "var(--text-primary)",
            }}
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="flex flex-col gap-0">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b px-0"
                style={{ borderColor: "var(--border)" }}
              >
                <AccordionTrigger
                  className="py-5 text-left text-[15px] font-medium hover:no-underline transition-colors duration-200"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-[14px] leading-relaxed pb-5"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}