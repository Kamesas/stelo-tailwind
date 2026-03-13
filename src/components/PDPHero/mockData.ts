export interface Slide {
  id: number;
  src: string;
  alt: string;
  thumb: string;
  darkText: boolean;
}

export interface PricingOption {
  id: number;
  label: string;
  product: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  bullets?: string[];
}

export const SLIDES: Slide[] = [
  {
    id: 0,
    src: "/images/PDPHero/slide_1.png",
    alt: "Stelo biosensor with app",
    thumb: "/images/PDPHero/slide_1.png",
    darkText: true,
  },
  {
    id: 1,
    src: "/images/PDPHero/slide_2.jpg",
    alt: "Woman wearing Stelo",
    thumb: "/images/PDPHero/slide_2.jpg",
    darkText: false,
  },
  {
    id: 2,
    src: "/images/PDPHero/slide_3.gif",
    alt: "Sensor close-up",
    thumb: "/images/PDPHero/slide_3.gif",
    darkText: false,
  },
  {
    id: 3,
    src: "/images/PDPHero/slide_4.jpg",
    alt: "App lifestyle shot",
    thumb: "/images/PDPHero/slide_4.jpg",
    darkText: false,
  },
  {
    id: 4,
    src: "/images/PDPHero/slide_5.png",
    alt: "Outdoor activity",
    thumb: "/images/PDPHero/slide_5.png",
    darkText: false,
  },
  {
    id: 5,
    src: "/images/PDPHero/slide_6.jpg",
    alt: "Cooking with Stelo",
    thumb: "/images/PDPHero/slide_6.jpg",
    darkText: false,
  },
];

export const PRICING: PricingOption[] = [
  {
    id: 0,
    label: "2 WEEK SUPPLY",
    product: "1 Biosensor",
    price: "$55.00"
  },
  {
    id: 1,
    label: "1 MONTH SUPPLY",
    product: "2 Biosensors",
    price: "$99.00"
  },
  {
    id: 2,
    label: "MONTHLY SUBSCRIPTION",
    product: "2 Biosensors",
    price: "$89.00",
    originalPrice: "$99.00",
    badge: "SAVE 10%",
    bullets: ["Shipped every month"],
  },
  {
    id: 3,
    label: "3 MONTH SUBSCRIPTION",
    product: "6 Biosensors",
    price: "$252.00",
    originalPrice: "$297.00",
    badge: "SAVE 15%",
    bullets: ["Shipped every 3 months", "Maximum savings"],
  },
];
