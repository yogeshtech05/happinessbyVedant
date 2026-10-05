export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: "01",
    title: "Choose a Surprise",
    description:
      "Browse our curated range of emotional surprise packages for birthdays, anniversaries, parents, romantic setups, or festivals.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Customize Your Gift",
    description:
      "Add custom messages, photo/video add-ons, live musician options, specific cake flavors, and personal presenter notes.",
    icon: "SlidersHorizontal",
  },
  {
    step: "03",
    title: "Select Date & Time Slot",
    description:
      "Pick your desired date and exact delivery window—including 12:00 AM midnight or morning surprise slots.",
    icon: "Calendar",
  },
  {
    step: "04",
    title: "We Deliver the Emotion",
    description:
      "Our surprise host arrives at the doorstep, orchestrating a magical, emotional memory your loved one will never forget.",
    icon: "Heart",
  },
];
