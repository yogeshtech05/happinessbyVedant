export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  location: string;
  occasion: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Priya & Rahul Sharma",
    role: "Anniversary Surprise in Mumbai",
    quote:
      "Happiness Deliver made our 5th anniversary unforgettable. The female surprise presenter was so sweet and poised! My husband was completely moved to tears when she delivered the letter and flowers. Truly 10/10 experience!",
    rating: 5,
    location: "Mumbai",
    occasion: "Anniversary",
    date: "2 weeks ago",
  },
  {
    id: "t2",
    name: "Dr. Ananya Roy",
    role: "Parents Special in Delhi NCR",
    quote:
      "I live abroad and wanted to send something genuinely emotional to my parents for their 30th anniversary. Gauri's team executed everything with such grace and dignity. My parents said it was the best day of their life!",
    rating: 5,
    location: "Delhi NCR",
    occasion: "Parents Special",
    date: "1 month ago",
  },
  {
    id: "t3",
    name: "Vikram Malhotra",
    role: "Birthday Surprise in Bangalore",
    quote:
      "The photography team was incredible, and the cake was divine! What sets them apart is the emotional warmth—it wasn't just a delivery guy throwing a box; it was a real celebration host!",
    rating: 5,
    location: "Bangalore",
    occasion: "Birthday",
    date: "3 weeks ago",
  },
  {
    id: "t4",
    name: "Sanya Kulkarni",
    role: "Romantic Proposal Experience in Pune",
    quote:
      "I booked the Premium Surprise Experience for my partner's proposal. The live guitarist played our song right as she opened the door. The whole neighborhood was smiling! Thank you Gauri!",
    rating: 5,
    location: "Pune",
    occasion: "Romantic",
    date: "Just yesterday",
  },
];
