export const SITE_CONFIG = {
  name: "Happiness Deliver by Gauri",
  shortName: "Happiness Deliver",
  tagline: "We Don’t Just Deliver Gifts, We Deliver Emotions.",
  description:
    "India's premier luxury surprise gifting and doorstep surprise experience service. Featuring trained female presenters, handcrafted cakes, imported flowers, and emotional song performances for birthdays, anniversaries, and parents.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://happinessdeliver.com",
  ogImage: "/og-image.jpg",
  contact: {
    phone: "+91 98765 43210",
    phoneClean: "919876543210",
    email: "hello@happinessdeliver.com",
    address: "Mumbai • Delhi NCR • Bangalore • Pune",
    whatsappUrl:
      "https://wa.me/919876543210?text=Hi%20Gauri,%20I%20want%20to%20plan%20a%20surprise!",
  },
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  cities: [
    "Mumbai",
    "Navi Mumbai",
    "Thane",
    "Delhi NCR",
    "Bangalore",
    "Pune",
    "Hyderabad",
    "Kolkata",
  ],
} as const;
