import {FolderOpenIcon, Package, PackageIcon, PieChart, ShoppingBag} from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [


    {
        name: "Amazon",
        logo: "/assets/amazon-logo.svg",
    },
    {
        name: "shopify",
        logo: "/assets/shopify.svg",
    },
    {
        name: "Ebay",
        logo: "/assets/ebay.svg",
    },

] as const;

export const PROCESS = [
    {
        title: "Setup your store",
        description: "Create an account for your business and fulfil compliance",
        icon: PackageIcon,
    },
    {
        title: "Upload products",
        description: "Easily upload your products and setup pricing",
        icon: ShoppingBag,
    },
    {
        title: "Manage and track",
        description: "Track sales across multiple products and track customer behaviour",
        icon: PieChart,
    },
] as const;

export const FEATURES = [
    {
        title: "Link shortening",
        description: "Create short links that are easy to remember and share.",
    },
    {
        title: "Advanced analytics",
        description: "Track and measure the performance of your links.",
    },
    {
        title: "Password protection",
        description: "Secure your links with a password.",
    },
    {
        title: "Custom QR codes",
        description: "Generate custom QR codes for your links.",
    },
    {
        title: "Link expiration",
        description: "Set an expiration date for your links.",
    },
    {
        title: "Team collaboration",
        description: "Share links with your team and collaborate in real-time.",
    },
] as const;

export const REVIEWS = [
    {
        name: "Kenneth Okpala",
        username: "@kennethokpala",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        rating: 5,
        review: "Nexigo has allowed us to sell out on every product launch; their streamlined and fast systems are unbeatable."
    },
    {
        name: "Tolu Adesanya",
        username: "@tolusells",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        rating: 5,
        review: "Nexigo transformed our online business! The customer insights feature is a game-changer—we now understand our buyers like never before."
    },
    {
        name: "Chioma Nwafor",
        username: "@chiomascloset",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        rating: 5,
        review: "I love how Nexigo handles settlements and disputes. It’s like having a dedicated legal team on standby—smooth and efficient!"
    },
    {
        name: "Emeka Ugwu",
        username: "@ugwuemeka",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        rating: 5,
        review: "Thanks to Nexigo, our sales have doubled. The customer analytics give us real-time data to make smart decisions."
    },
    {
        name: "Aisha Abdullahi",
        username: "@aisha_trendz",
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        rating: 5,
        review: "Selling online is less stressful with Nexigo. The communication tools make keeping up with customers so easy and professional."
    },
    {
        name: "Funmi Alabi",
        username: "@funmialabi",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        rating: 5,
        review: "With Nexigo’s store protection, I feel secure running my business. It’s reassuring to know my store is safe from fraud and chargebacks."
    },
    {
        name: "Segun Adewale",
        username: "@segunskitchen",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        rating: 5,
        review: "Nexigo has been a blessing for my business. Their platform is reliable, and I can focus on my products while they handle the heavy lifting!"
    },
    {
        name: "Ada Umeh",
        username: "@adaumeh",
        avatar: "https://randomuser.me/api/portraits/women/9.jpg",
        rating: 4,
        review: "I appreciate how easy Nexigo is to use. The learning curve was minimal, and my team loves the customer insights feature!"
    },
    {
        name: "Yusuf Bello",
        username: "@yusufbello",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        rating: 5,
        review: "The analytics tools on Nexigo are unmatched! We’ve been able to refine our marketing strategies with the data provided."
    }
] as const;

