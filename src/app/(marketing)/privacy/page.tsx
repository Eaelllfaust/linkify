import { AnimationContainer, MaxWidthWrapper } from "@/components";
import React from "react";

const Privacy = () => {
    return (
        <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
                    Privacy Policy
                </h1>
                <p className="text-sm mb-2 italic mt-20">
                    Last updated: 1st December 2024
                </p>
                <p className="mt-4">
                    At <strong>Nexigo</strong>, safeguarding your privacy is our priority. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you interact with our platform and services.
                </p>

                <h2 className="text-xl font-medium mt-8">
                    Information We Collect
                </h2>

                <h3 className="text-lg mt-4">
                    Personal Information
                </h3>
                <p className="mt-8 text-muted-foreground">
                    When you register or interact with Nexigo, we collect personal information such as your name, email address, billing and shipping details, and payment information.
                </p>

                <h3 className="text-lg font-medium mt-12">
                    Non-Personal Information
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We collect non-identifiable information, such as device type, browser information, and usage patterns, to enhance user experience and platform performance.
                </p>

                <h3 className="text-lg font-medium mt-8">
                    Cookies and Tracking
                </h3>
                <p className="mt-8">
                    Nexigo uses cookies and similar technologies to track user activity, manage sessions, and analyze site performance. Adjust your cookie preferences via browser settings.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    How We Use Your Information
                </h2>

                <h3 className="text-lg mt-8">
                    Enhance Your Experience
                </h3>
                <div className="mt-8">
                    We use collected data to:
                    <ul className="list-disc ml-8 text-muted-foreground">
                        <li>Improve platform functionality and user experience.</li>
                        <li>Process orders and provide customer support.</li>
                        <li>Offer personalized product recommendations.</li>
                    </ul>
                </div>

                <h3 className="text-lg font-medium mt-12">
                    Marketing and Communication
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We may use your contact details to send updates, promotional offers, and surveys. You can opt out of these communications at any time.
                </p>

                <h3 className="text-lg mt-8">
                    Analytics and Optimization
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We analyze platform usage trends to optimize features, enhance security, and improve overall performance.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    How We Share Your Information
                </h2>

                <h3 className="text-lg mt-8">
                    Third-Party Services
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Your information may be shared with trusted third-party service providers for payment processing, order fulfillment, and email services.
                </p>

                <h3 className="text-lg mt-8">
                    Compliance with Laws
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Nexigo may disclose information as required by law or legal processes.
                </p>

                <h3 className="text-lg mt-8">
                    Business Transactions
                </h3>
                <p className="mt-8 text-muted-foreground">
                    In case of a merger, acquisition, or sale, your data may be transferred as part of the transaction.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Security Measures
                </h2>
                <p className="mt-8 text-muted-foreground">
                    We implement robust security protocols to protect your data. However, no system is completely secure, and we encourage you to safeguard your account credentials.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Data Retention
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Nexigo retains your personal data for as long as necessary to fulfill legal and operational requirements.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Your Rights
                </h2>

                <h3 className="text-lg mt-8">
                    Access and Updates
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You can access and update your personal information through your account settings.
                </p>

                <h3 className="text-lg mt-8">
                    Data Deletion
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Request deletion of your account or data by contacting support at support@nexigo.com.
                </p>

                <h3 className="text-lg mt-8">
                    Opt-Out of Communications
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Unsubscribe from promotional emails using the links provided in the emails or through account preferences.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Children's Privacy
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Nexigo services are not intended for individuals under 18. If a child under 18 has provided personal information, we will delete it promptly.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    International Data Transfers
                </h2>
                <p className="mt-8 text-muted-foreground">
                    If you access Nexigo from outside your home country, your information may be transferred to and processed in countries with different data protection laws.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Policy Updates
                </h2>
                <p className="mt-8 text-muted-foreground">
                    This Privacy Policy may be revised occasionally. Please review it periodically. Updates will be indicated with a new "Last updated" date.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Contact Us
                </h2>
                <p className="mt-8 text-muted-foreground">
                    For inquiries regarding this policy, contact us at support@nexigo.com.
                </p>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default Privacy;
