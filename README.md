# Happiness Deliver by Gauri 🎁✨

> *"We Don’t Just Deliver Gifts, We Deliver Emotions."*

A luxury doorstep surprise-gifting & experience web platform built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Brand & Business Concept

**Happiness Deliver by Gauri** is a premium surprise delivery service operating across major Indian metros (Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, Kolkata). We specialize in emotional doorstep celebrations for:
- **Birthdays**
- **Anniversaries**
- **Parents Special Homages**
- **Romantic Proposals & Dates**
- **Congratulations & Milestones**
- **Festive Hampers**

### Signature Features
- **Trained Female Presenters**: Background-verified, articulate female hosts deliver every surprise with emotional narration, poem scroll reading, and song performance.
- **Customized Gifts & Artisanal Cakes**: Fresh cream cakes, imported rose arrangements, and personalized memory plaques.
- **Optional Photo & Video Coverage**: On-site camera capture with 60-second edited Instagram reel creation.
- **100% On-Time Guarantee**: Pin-point doorstep slot arrival including 12:00 AM Midnight surprises.

---

## 🛠️ Architecture & Tech Stack

- **Framework**: Next.js 16 (App Router with Server & Client Component separation)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 (Custom luxury theme tokens, Playfair Display & Plus Jakarta Sans typography)
- **Icons**: Custom SVG Icon system (`@/components/ui/Icons`)
- **State Management**: React Context (`CartContext`) with `localStorage` persistence
- **SEO**: Dynamic `generateMetadata()`, OpenGraph, Twitter Cards, Canonical URLs, and Schema.org JSON-LD Structured Data

---

## 📁 Scalable Directory Structure

```text
src/
├── app/                        # Next.js App Router (Server Components & Routes)
│   ├── layout.tsx              # Root layout (Metadata, JSON-LD, Fonts, CartProvider)
│   ├── page.tsx                # Home Page (Server Component)
│   ├── loading.tsx             # Global Suspense Skeleton Boundary
│   ├── error.tsx               # Global Error Boundary
│   ├── not-found.tsx           # Global 404 Not Found Page
│   ├── about/                  # About Gauri & Our Story page
│   ├── contact/                # Contact & Inquiry form page
│   ├── packages/               # All Surprise Packages catalog
│   │   ├── page.tsx            # Package catalog Server page
│   │   └── [slug]/             # Slug-based dynamic package route
│   │       ├── page.tsx        # Dynamic SEO Server Component
│   │       └── not-found.tsx    # Package 404 handler
│   ├── cart/                   # Shopping Cart page
│   ├── checkout/               # Doorstep booking checkout
│   └── thank-you/              # Order confirmation & WhatsApp tracking
├── components/                 # Reusable UI & Layout Components
│   ├── layout/                 # Header & Footer
│   ├── navigation/             # MobileNavigation drawer
│   ├── ui/                     # PackageCard, PackageVisual, OccasionCard, SectionHeading, Toast, Icons
│   ├── common/                 # JsonLd, LoadingSkeleton
│   ├── home/                   # Hero, Occasions, Featured, HowItWorks, WhyChooseUs, Emotional, Testimonials, CTA
│   ├── packages/               # PackageCatalog, PackageDetailClient
│   ├── contact/                # ContactForm
│   ├── cart/                   # Cart item list & summary
│   └── checkout/               # Checkout form & summary
├── config/
│   └── site.ts                 # Brand configuration, site metadata, and contact constants
├── data/                       # Mock Data (Ready for future DB replacement)
│   ├── packages.ts             # Surprise package dataset
│   ├── occasions.ts            # Occasion categories
│   ├── testimonials.ts         # Customer reviews
│   ├── why-choose-us.ts        # Core features
│   └── how-it-works.ts         # Booking steps
├── hooks/
│   └── use-cart.ts             # Custom hook for Cart context
├── lib/
│   ├── constants.ts            # Delivery slots, promo codes, currency formatting
│   └── utils.ts                # Helper utilities (formatPrice, cn)
├── types/                      # Domain Type Definitions
│   ├── package.ts              # Package, Addon, Feature, Occasion types
│   ├── cart.ts                 # CartItem, SelectedAddon types
│   └── order.ts                # OrderDetails, OrderStatus, Address types
└── context/
    └── CartContext.tsx         # Cart & Order state management
```

---

## ⚡ Getting Started

### 1. Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### 2. Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Development Server
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Verification
Lint the codebase:
```bash
npm run lint
```

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm run start
```

---

## 🔮 Future Backend & Integration Roadmap

This phase provides the **frontend foundation, UI, SEO, and client-side data state**. The backend architecture is prepared for the following future additions:
1. **Database Integration**: Replace `@/data/packages.ts` with PostgreSQL (Prisma/Drizzle ORM) or MongoDB queries.
2. **Payment Gateway**: Integrate Razorpay / Cashfree checkout modal in `CheckoutClient.tsx`.
3. **Admin Dashboard**: Manage package listings, delivery slots, and presenter assignments.
4. **WhatsApp Business API**: Automate instant order notifications to Gauri's presenter team upon order placement.
