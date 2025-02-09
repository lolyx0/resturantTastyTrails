import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import dish4 from "../assets/dish4.jpg";
import dish5 from "../assets/dish5.jpg";
import dish6 from "../assets/dish6.jpg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpg";
import dish9 from "../assets/dish9.jpg";
import dish10 from "../assets/dish10.jpg";

import lebanese from "../assets/lebanese.jpg";
import moroccan from "../assets/moroccan.jpg";
import gulf from "../assets/gulf.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Hummus",
    description: "Creamy chickpea dip with tahini and olive oil",
  },
  {
    image: dish2,
    title: "Falafel",
    description:
      "Crispy fried chickpea balls served with fresh salad and tahini sauce",
  },
  {
    image: dish3,
    title: "Shawarma",
    description:
      "Slow-roasted marinated meat wrapped in flatbread with garlic sauce",
  },
  {
    image: dish4,
    title: "Tabbouleh",
    description:
      "Fresh parsley, bulgur, and tomato salad with a zesty lemon dressing",
  },
  {
    image: dish5,
    title: "Baba Ghanoush",
    description: "Smoky roasted eggplant dip blended with garlic and tahini",
  },
  {
    image: dish6,
    title: "Kebbeh",
    description:
      "Spiced meat and bulgur wheat patties served with a side of yogurt",
  },
  {
    image: dish7,
    title: "Fattoush",
    description:
      "Mixed greens and crispy pita croutons tossed in a tangy sumac dressing",
  },
  {
    image: dish8,
    title: "Mansaf",
    description:
      "Traditional lamb cooked in a rich, tangy yogurt sauce served over rice",
  },
  {
    image: dish9,
    title: "Baklava",
    description: "Sweet pastry layered with nuts and drizzled with honey syrup",
  },
  {
    image: dish10,
    title: "Kunafa",
    description:
      "Decadent dessert made with shredded pastry and sweet cheese, soaked in syrup",
  },
];

export const ABOUT = {
  header: "Welcome to Tasty Trails!",
  content:
    "At Tasty Trails, we celebrate the rich culinary heritage of the Arab world. Our passion for authentic flavors shines through every dish, crafted with time-honored recipes and a modern twist. Join us on a gastronomic journey where tradition meets innovation.",
};

export const MISSION =
  "Our mission at Tasty Trails is to transport you to the heart of Arab culinary traditions with every bite.";

export const CUSINES = [
  {
    number: "01.",
    image: lebanese,
    title: "Lebanese",
    description:
      "Experience the vibrant flavors of Lebanon—from creamy hummus to refreshing tabbouleh.",
  },
  {
    number: "02.",
    image: moroccan,
    title: "Moroccan",
    description:
      "Savor the rich spices and aromatic tagines that define Moroccan cuisine.",
  },
  {
    number: "03.",
    image: gulf,
    title: "Gulf",
    description:
      "Discover the traditional tastes of the Arabian Gulf, featuring fragrant rice and succulent grilled meats.",
  },
];

export const REVIEW = {
  name: "Layla Al-Mansoori",
  profession: "Food Critic",
  content:
    "“Tasty Trails offers a remarkable culinary journey through the rich flavors of the Arab world. Every dish, from the delicate hummus to the indulgent kunafa, is crafted with passion and precision. A must-visit for an authentic taste experience.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 456 Al Noor Avenue, Dubai, UAE, 12345" },
  { key: "phone", value: "Phone: +971-55-123-4567" },
  { key: "email", value: "Email: info@tastytrails.ae" },
];
export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://facebook.com/tastytrails",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com/tastytrails",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://twitter.com/tastytrails",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
