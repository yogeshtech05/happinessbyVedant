import { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: `Surprise Order Confirmed | ${SITE_CONFIG.name}`,
  description:
    "Thank you for your doorstep surprise booking with Happiness Deliver by Gauri. Your host and delivery schedule have been confirmed.",
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
