import type { Metadata } from "next";
import { Syne, DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StudioSync — Run your gym. Not spreadsheets.",
  description:
    "One platform to manage bookings, staff schedules, memberships, and payments for gym owners and fitness studios.",
  keywords: ["gym management", "fitness studio software", "booking system"],
  openGraph: {
    title: "StudioSync — Run your gym. Not spreadsheets.",
    description:
      "One platform to manage bookings, staff schedules, memberships, and payments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <body
        className={`${syne.variable} ${dmSans.variable} noise-bg antialiased`}
      >
        {children}
      </body>
    </html>
  );
}