import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToastWrapper } from "@/components/ui/ToastWrapper";
import { JsonLd } from "@/components/common/JsonLd";
import { SITE_CONFIG } from "@/config/site";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Premium Surprise & Gift Delivery`,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description:
    "Create unforgettable moments with premium surprise gifting, customized gifts, cakes, flowers and doorstep surprise experiences by Happiness Deliver.",
  keywords: [
    "Happiness Deliver",
    "surprise delivery",
    "gifting experience",
    "female surprise presenter",
    "anniversary surprise delivery",
    "birthday surprise package",
    "parents special surprise gift",
    "romantic proposal setup",
  ],
  authors: [{ name: "Happiness Deliver Team" }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} | Premium Surprise & Gift Delivery`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Premium Surprise & Gift Delivery`,
    description: SITE_CONFIG.description,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-sans bg-[#FFFDF9] text-slate-900 selection:bg-rose-100 selection:text-rose-900"
        suppressHydrationWarning={true}
      >
        <JsonLd />
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ToastWrapper />
        </CartProvider>
      </body>
    </html>
  );
}
