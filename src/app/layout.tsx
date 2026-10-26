import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
});

export const metadata: Metadata = {
  title: {
    default: "Yudany Foundation",
    template: "%s · Yudany Foundation",
  },
  description:
    "Yayasan Kasih Karunia Yudany dan Yayasan Heesu merawat serta memberdayakan anak penyandang disabilitas ganda di Cileungsi, Bogor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
