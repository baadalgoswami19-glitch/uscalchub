import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "USCalcHub – Free US Calculators & Tools",
    template: "%s | USCalcHub",
  },
  description:
    "Free, fast and easy-to-use calculators for salary, paycheck, loans, taxes, mortgage, tips, dates and everyday life in the USA.",
  keywords: [
    "US calculators",
    "paycheck calculator",
    "salary calculator",
    "loan calculator",
    "mortgage calculator",
    "tax calculator",
    "tip calculator",
    "free calculators",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "USCalcHub – Free US Calculators & Tools",
    description:
      "Free calculators and useful tools designed for everyday life in the USA.",
    type: "website",
    siteName: "USCalcHub",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
