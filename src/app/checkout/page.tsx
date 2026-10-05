import { Metadata } from "next";
import CheckoutClient from "./CheckoutClient";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: `Checkout & Doorstep Booking | ${SITE_CONFIG.name}`,
  description:
    "Complete your doorstep surprise experience booking. Provide recipient address, delivery date, time slot, and special presenter instructions.",
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
