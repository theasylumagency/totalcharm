import type { Metadata } from "next";
import { Noto_Sans_Georgian, Noto_Serif_Georgian } from "next/font/google";
import "./globals.css";

const notoSansGeorgian = Noto_Sans_Georgian({
  variable: "--font-sans-georgian",
  subsets: ["georgian", "latin", "cyrillic-ext"],
  weight: "variable",
  display: "swap",
});

const notoSerifGeorgian = Noto_Serif_Georgian({
  variable: "--font-serif-georgian",
  subsets: ["georgian", "latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Total Charm Dent | Premium Dental Clinic in Vake, Tbilisi",
  description:
    "Total Charm Dent is a premium dental clinic in Vake, Tbilisi offering diagnostics, therapeutic dentistry, orthodontics, surgery, implantology, periodontology, and aesthetic dentistry.",
  keywords: [
    "Total Charm Dent",
    "dental clinic Vake",
    "dentist Tbilisi",
    "implantology Tbilisi",
    "orthodontics Tbilisi",
    "aesthetic dentistry",
  ],
  openGraph: {
    title: "Total Charm Dent",
    description: "Precision dentistry in Vake, Tbilisi, designed around trust.",
    type: "website",
    locale: "ka_GE",
    siteName: "Total Charm Dent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ka"
      className={`${notoSansGeorgian.variable} ${notoSerifGeorgian.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
