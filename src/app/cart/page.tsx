import { Metadata } from "next";
import CartClient from "./CartClient";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: `Your Surprise Cart | ${SITE_CONFIG.name}`,
  description:
    "Review your selected doorstep surprise packages, add-ons, customized presenter notes, and delivery slots.",
};

export default function CartPage() {
  return <CartClient />;
}
