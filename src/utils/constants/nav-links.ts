import { HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon, Shield, Users, MessageCircle } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Features",
        href: "/features",
        menu: [
            {
                title: "Store Protection",
                tagline: "Protect your store with fraud detection and security tools.",
                href: "/",
                icon: Shield,
            },
            {
                title: "Customer Insights",
                tagline: "Understand your customers’ needs with actionable insights.",
                href: "/",
                icon: Users,
            },
            {
                title: "Communication Channels",
                tagline: "Centralize all customer interactions in one place.",
                href: "/",
                icon: MessageCircle,
            },
        ],
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
    {
        title: "Enterprise",
        href: "/enterprise",
    },
    {
        title: "Resources",
        href: "/resources",
        menu: [
            {
                title: "Blog",
                tagline: "Read articles on the latest trends in tech.",
                href: "/resources/blog",
                icon: NewspaperIcon,
            },
            {
                title: "Help",
                tagline: "Get answers to your questions.",
                href: "/resources/help",
                icon: HelpCircleIcon,
            },
        ]
    },
    {
        title: "Changelog",
        href: "/changelog",
    },
];
