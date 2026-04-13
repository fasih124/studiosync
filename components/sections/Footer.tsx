"use client";
import { Zap } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Resources: ["Documentation", "Help Center", "API Reference", "Integrations", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-0">

        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pb-14">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-syne font-bold text-[16px] mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              <Zap
                size={18}
                className="text-[var(--accent-mint)]"
                fill="currentColor"
              />
              StudioSync
            </div>
            <p
              className="text-[13px] leading-relaxed"
              style={{ color: "var(--text-muted)", maxWidth: "200px" }}
            >
              Run your gym. Not spreadsheets.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-[11px] font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                             <a
                      href="#"
                      className="text-[13px] transition-colors duration-200"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color =
                          "var(--accent-mint)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color =
                          "var(--text-muted)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Twitter/X */}
                     <a
              href="#"
              aria-label="Twitter"
              className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent-mint)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--accent-mint)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-muted)";
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>

            {/* LinkedIn */}
                     <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent-mint)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--accent-mint)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-muted)";
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent-mint)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--accent-mint)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-muted)";
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p
            className="text-[12px]"
            style={{ color: "var(--text-muted)" }}
          >
            © 2024 StudioSync, Inc. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}