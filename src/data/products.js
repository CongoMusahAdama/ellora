import shampooImg from '../assets/shampoo.jpg';
import conditionerImg from '../assets/conditioner.jpg';
import scrubImg from '../assets/scrub.jpg';
import soapImg from '../assets/soap.jpg';

export const products = [
  {
    id: 1,
    name: "Rice Shampoo Bar",
    description: "Sulfate-free. Strengthens hair. Lasts 40–60 washes.",
    price: 35,
    currency: "GHS",
    image: shampooImg,
    category: "Hair",
    size: "Standard (100g)",
    benefits: ["Sulfate-free", "Strengthens hair follicles", "Eco-friendly packaging"],
    ingredients: "Upcycled Rice Protein, Cocoa Butter, Essential Oils",
    whatsappMessage: "Hi Ellora Cosmetics, I'd like to order the Rice Shampoo Bar."
  },
  {
    id: 2,
    name: "Rice Conditioner Bar",
    description: "Deep hydration. Improves elasticity by up to 90% in 30 days.",
    price: 40,
    currency: "GHS",
    image: conditionerImg,
    category: "Hair",
    size: "Standard (100g)",
    benefits: ["Deep hydration", "Detangles hair", "Reduces breakage"],
    ingredients: "Upcycled Rice Bran Oil, Shea Butter, Vitamin E",
    whatsappMessage: "Hi Ellora Cosmetics, I'd like to order the Rice Conditioner Bar."
  },
  {
    id: 3,
    name: "Face & Body Scrub",
    description: "Exfoliates, unclogs pores, brightens skin. No harsh chemicals.",
    price: 55,
    currency: "GHS",
    image: scrubImg,
    category: "Face",
    size: "Jar (250ml)",
    benefits: ["Brightens skin", "Unclogs pores", "Gentle exfoliation"],
    ingredients: "Upcycled Rice Husk, Honey, Lemon Peel",
    whatsappMessage: "Hi Ellora Cosmetics, I'd like to order the Face & Body Scrub."
  },
  {
    id: 4,
    name: "Rice Soap",
    description: "Gentle daily cleanse. Nourishes and softens skin naturally.",
    price: 15,
    currency: "GHS",
    image: soapImg,
    category: "Body",
    size: "Bar (120g)",
    benefits: ["Softens skin", "Even skin tone", "Antibacterial properties"],
    ingredients: "Saponified Rice Oil, Coconut Oil, Natural Fragrance",
    whatsappMessage: "Hi Ellora Cosmetics, I'd like to order the Rice Soap."
  },
  {
    id: 5,
    name: "Hydrating Facial Mist",
    description: "Instant hydration boost with pure rice water extracts.",
    price: 45,
    currency: "GHS",
    image: shampooImg,
    category: "Face",
    size: "Spray (100ml)",
    benefits: ["Refreshing", "PH Balanced", "Instant Glow"],
    ingredients: "Fermented Rice Water, Rosewater, Glycerin",
    whatsappMessage: "Hi Ellora Cosmetics, I'd like to order the Hydrating Facial Mist."
  },
  {
    id: 6,
    name: "Night Repair Cream",
    description: "Intense overnight nourishment for tired skin.",
    price: 85,
    currency: "GHS",
    image: scrubImg,
    category: "Face",
    size: "Small (50ml)",
    benefits: ["Anti-aging", "Deep Repair", "Vitamin Rich"],
    ingredients: "Rice Bran Wax, Jojoba Oil, Niacinamide",
    whatsappMessage: "Hi Ellora Cosmetics, I'd like to order the Night Repair Cream."
  },
  {
    id: 7,
    name: "Rice Glow Oil",
    description: "Non-greasy body oil for a luminous, healthy finish.",
    price: 65,
    currency: "GHS",
    image: conditionerImg,
    category: "Body",
    size: "Large (200ml)",
    benefits: ["Glowing Skin", "Non-greasy", "Aromatherapeutic"],
    ingredients: "Rice Oil, Sweet Almond Oil, Jasmine",
    whatsappMessage: "Hi Ellora Cosmetics, I'd like to order the Rice Glow Oil."
  },
  {
    id: 8,
    name: "Luxury Spa Bundle",
    description: "The complete Ellora experience in one beautiful package.",
    price: 150,
    currency: "GHS",
    image: soapImg,
    category: "Bundles",
    size: "Full Set",
    benefits: ["Value Pack", "Complete Routine", "Perfect Gift"],
    ingredients: "All core products included",
    whatsappMessage: "Hi Ellora Cosmetics, I'd like to order the Luxury Spa Bundle."
  }
];
