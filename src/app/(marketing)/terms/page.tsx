import { AnimationContainer, MaxWidthWrapper } from "@/components";
import Link from "next/link";

const TermsPage = () => {
    return (
        <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
                    Terms and Conditions
                </h1>
                <p className="text-sm mb-2 italic mt-20">
                Last updated: 1st December 2024
                </p>
                <p className="mt-4">
                    Welcome to Nexigo SaaS. These terms and conditions outline the rules and regulations for the use of Nexigo&apos;s website and services.
                </p>

                <h2 className="text-xl font-medium mt-8">
                    Acceptance of Terms
                </h2>

                <p className="mt-8 text-muted-foreground">
                    By accessing and using Nexigo, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms, you may not use our website or services.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Changes to Terms
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Nexigo reserves the right to modify these terms at any time. We will notify you of any changes by updating the &quot;Last updated&quot; data at the top of this page. Your continued use of our website and services after any modifications indicates your acceptance of the new terms.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Use of Services
                </h2>

                <h3 className="text-lg mt-8">
                    Eligibility
                </h3>
                <p className="mt-8">
                    To use Nexigo, you must be at least 18 years old and capable of entering into a binding contract.
                </p>

                <h3 className="text-lg mt-8">
                    Account Registration
                </h3>
                <div className="mt-8">
                    <ul className="list-disc ml-8 text-muted-foreground">
                        <li>You must provide accurate and complete information during the registration process.</li>
                        <li>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
                        <li>You agree to notify us immediately of any unauthorized use of your account.</li>
                    </ul>
                </div>

                <h3 className="text-lg mt-8">
                    Acceptable Use
                </h3>
                <div className="mt-8">
                    You agree not to use Nexigo for any unlawful or prohibited activities, including but not limited to:
                    <ul className="list-disc text-muted-foreground ml-8">
                        <li>Uploading or sharing content that is offensive, harmful, or violates any laws.</li>
                        <li>Using the service to distribute spam or malicious content.</li>
                        <li>Attempting to gain unauthorized access to other user accounts or Nexigo&apos;s systems.</li>
                    </ul>
                </div>

                <h2 className="text-xl font-medium mt-12">
                    Service Features
                </h2>

                <h3 className="text-lg mt-8">
                    Cloud Solutions
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Nexigo offers a range of cloud-based solutions. You agree to use these features responsibly and in compliance with applicable laws.
                </p>

                <h3 className="text-lg mt-8">
                    Analytics and Reporting
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Nexigo provides analytics and reporting tools for your business. You agree to use this data ethically and ensure compliance with all privacy regulations.
                </p>

                <h3 className="text-lg mt-8">
                    Integrations
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You may integrate Nexigo with third-party tools. Nexigo is not responsible for the functionality or security of these integrations.
                </p>

                <h3 className="text-lg mt-8">
                    Business Transfers
                </h3>
                <p className="mt-8 text-muted-foreground">
                    In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    User Content
                </h2>

                <h3 className="text-lg mt-8">
                    Ownership
                </h3>

                <p className="mt-8 text-muted-foreground">
                    You retain ownership of any content you upload or create using Nexigo. However, by uploading or creating content, you grant Nexigo a worldwide, non-exclusive, royalty-free license to use, reproduce, and display your content as necessary to provide our services.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Privacy
                </h2>

                <p className="mt-8 text-muted-foreground">
                    Your privacy is important to us. Please review our <Link href="/privacy" className="underline">Privacy Policy</Link> to understand how we collect, use, and protect your information.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Termination
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Nexigo reserves the right to suspend or terminate your account at any time, with or without notice, for any reason, including but not limited to violation of these terms.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Disclaimers and Limitations of Liability
                </h2>

                <h3 className="text-lg mt-8">
                    No Warranties
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Nexigo is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not warrant that the service will be uninterrupted, error-free, or free from viruses or other harmful components.
                </p>

                <h3 className="text-lg mt-8">
                    Limitation of Liability
                </h3>
                <p className="mt-8 text-muted-foreground">
                    In no event shall Nexigo be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the service.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Governing Law
                </h2>
                <p className="mt-8 text-muted-foreground">
                    These terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Contact Us
                </h2>
                <p className="mt-8 text-muted-foreground">
                    If you have any questions or concerns about this Privacy Policy, please contact us at support@nexigo.io.
                </p>

                <p className="mt-8 font-medium">
                    By using Nexigo, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
                </p>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default TermsPage;
