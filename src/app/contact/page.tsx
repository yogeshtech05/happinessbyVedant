import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact Us & Bookings | ${SITE_CONFIG.name}`,
  description:
    "Get in touch with our surprise experience team. Inquire about custom surprise packages, doorstep female presenters, and midnight delivery slots.",
  openGraph: {
    title: `Contact Us & Bookings | ${SITE_CONFIG.name}`,
    description:
      "Get in touch with our surprise experience team for custom doorstep surprise bookings.",
    url: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
