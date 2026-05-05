import { img, img1, img2, img3, img4, img5, img6, img7, img8, img9 } from "../assets/blogpostimages/GeerE-CommerceFeatures/index";
import { posts } from "./testimonial";

export { img, img1, img2, img3, img4, img5, img6, img7, img8, img9 };

const currentIndex = posts.findIndex((p) => p.slug === "geer-e-commerce-features");

export const post         = posts[currentIndex];
export const prevPost     = posts[currentIndex + 1] ?? null;
export const nextPost     = posts[currentIndex - 1] ?? null;
export const recentPosts  = posts.slice(0, 5);
export const relatedPosts = posts.filter((p) => p.slug !== post?.slug).slice(0, 3);
export const categories   = [...new Set(posts.flatMap((p) => p.category.split(",").map((c) => c.trim())))];
export const archives     = [...new Set(posts.map((p) => { const [m, , y] = p.date.split(" "); return `${m} ${y}`; }))];

export const products = [
  "Multi-Level Marketing Solutions",
  "E-commerce Solutions",
  "POS Solutions",
  "Logo Branding",
  "Inventory Solutions",
  "Accounting Solutions",
  "SMS Solutions",
  "Payroll Solutions",
  "Blockchain Solutions",
];

export const features = [
  { num: "1", title: "Cash on Delivery Ready",            preImg: img2, img: img3, text: "Is when a recipient pays for a good or service at the time of delivery. COD shipping offers customers an advantage in that they have time to save and make a full payment. Sellers receive faster payment for sales as long as the goods are accepted by the buyer." },
  { num: "2", title: "Shareable Products to Social Media", img: img4, text: "Social media is one of the most cost-efficient digital marketing methods used to syndicate content and increase your business' visibility. Implementing a social media strategy will greatly increase your brand recognition since you will be engaging with a broad audience of consumers." },
  { num: "3", title: "Multivendor E-Commerce",             img: img5, text: "Is a site containing offerings from multiple sellers like vendors or suppliers. All suppliers pay a wise commission for selling in the marketplace. They have their own seller accounts where they manage their inventory themselves." },
  { num: "4", title: "Payment Option",                     img: img6, text: "It is operated for a customer or participant at a Payments Provider for the purposes of paying and receiving payments in Batch Settlement. We at Geer, we provide methods such as Manual Pay, CODM, Online Payment, and Cash on Delivery." },
  { num: "5", title: "Ready Made Logistics with Al Payo",  img: img7, text: "We partnered with Payo to power up our Cash on Delivery process. Payo is the leading payment gateway that manages and simplifies cash on delivery orders." },
  { num: "6", title: "Ready Made Online Payment",          img: img8, text: "Refers to the money that is exchanged electronically. It also involves the use of computer networks, the internet and digital stored value systems. We've partnered with the most trusted banks in the Philippines, payment gateway like paypal, gcash, ipay88, and dragonpay to support your growing market." },
];

export const initialComments = [
  { id: 1, author: "Geer MLM Features | Geer Solutions", date: "MAR 25, 2021 / 7:45 AM", text: "[...] Read More [...]" },
];

export const getSocialLinks = (url) => [
  { icon: "FaFacebookF",  href: `https://www.facebook.com/sharer/sharer.php?u=${url}`, label: "Facebook"  },
  { icon: "FaTwitter",    href: `https://twitter.com/intent/tweet?url=${url}`,          label: "Twitter"   },
  { icon: "FaPinterestP", href: `https://pinterest.com/pin/create/button/?url=${url}`,  label: "Pinterest" },
  { icon: "FaLinkedinIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`, label: "LinkedIn" },
];