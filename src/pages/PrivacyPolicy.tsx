import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto font-['Manrope'] text-[#161C2D]/85 leading-relaxed">
        {/* Title */}
        <h1 className="font-['Rubik'] text-center text-4xl md:text-5xl font-bold text-[#161C2D] mb-4">
          Privacy Policy – React Native Nigeria (RNN)
        </h1>
        <p className="text-center text-lg text-[#161C2D]/70 mb-16">
          Effective Date: September 22, 2025
        </p>
        {/* Introduction */}
        <section className="mb-16 text-lg">
          <p>
            React Native Nigeria (“RNN,” “we,” “our,” “us”) values your privacy. This Privacy Policy explains how we collect, use, store, and share your personal information when you interact with our website reactnativenigeria.com, online communities, and events. By using our website or participating in our activities, you agree to the practices described below.
          </p>
        </section>

        {/* 1. Information We Collect */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            1. Information We Collect
          </h2>
          <ul className="space-y-4 text-lg list-disc list-inside marker:text-[#5FDBFC]">
            <li><strong>Personal Information you provide directly:</strong> Name, email address, phone number.</li>
            <li><strong>Automatically collected information:</strong> Cookies and similar tracking technologies.</li>
            <li><strong>Community interaction data:</strong> Posts, comments, or uploads you share in community spaces.</li>
            <li>RSVP and attendance information for events.</li>
            <li>Communications with organizers (support requests, incident reports).</li>
          </ul>
        </section>

        {/* 2. How We Use Your Information */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            2. How We Use Your Information
          </h2>
          <ul className="space-y-4 text-lg list-disc list-inside marker:text-[#5FDBFC]">
            <li><strong>Access & Membership:</strong> To provide secure access to our website, forums, events, and services.</li>
            <li><strong>Communication:</strong> Updates about events, programs, newsletters, and resources.</li>
            <li><strong>Personalization & Improvement:</strong> To understand usage, personalize experience, and improve services.</li>
            <li><strong>Community Management:</strong> Moderate discussions, enforce Code of Conduct, protect community safety.</li>
            <li><strong>Transactions:</strong> Process registrations, payments, donations, or purchases; issue confirmations/receipts.</li>
            <li><strong>Support:</strong> Respond to inquiries and requests.</li>
            <li><strong>Legal & Compliance:</strong> Comply with laws and legal processes.</li>
            <li><strong>Security:</strong> Protect against fraud, unauthorized access, misuse of services.</li>
          </ul>
          <p className="mt-8 text-lg font-medium bg-[#5FDBFC]/10 border-l-4 border-[#5FDBFC] pl-6 py-4">
            We will <span className="text-[#5FDBFC] font-bold">never</span> sell, rent, or trade your personal information to third parties.
          </p>
        </section>

        {/* 3. Sharing of Information */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            3. Sharing of Information
          </h2>
          <ul className="space-y-4 text-lg list-disc list-inside marker:text-[#5FDBFC]">
            <li>Service providers (payment processors, hosting providers, email platforms).</li>
            <li>Community partners or sponsors (only relevant to an event you signed up for).</li>
            <li>Authorities (only when required by law or to protect safety).</li>
          </ul>
        </section>

        {/* 4. Cookies & Tracking */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            4. Cookies & Tracking
          </h2>
          <p className="text-lg">
            We use cookies and similar technologies to improve performance and personalize your experience. You can control cookies through your browser settings.
          </p>
        </section>

        {/* 5. Data Retention */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            5. Data Retention
          </  h2>
          <ul className="space-y-4 text-lg list-disc list-inside marker:text-[#5FDBFC]">
            <li>Event-related information: until the event is completed.</li>
            <li>Emails: until you request deletion.</li>
            <li>Legal compliance: as required by law.</li>
          </ul>
        </section>

        {/* 6. Your Rights */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            6. Your Rights
          </h2>
          <ul className="space-y-4 text-lg list-disc list-inside marker:text-[#5FDBFC]">
            <li>Access your personal data.</li>
            <li>Request correction or deletion.</li>
            <li>Opt out of marketing communications.</li>
            <li>Request data portability.</li>
            <li>Restrict or object to processing.</li>
            <li>Not be discriminated against for exercising your rights.</li>
          </ul>
          <p className="mt-6 text-lg">
            To exercise your rights, contact:{" "}
            <a href="mailto:contact@reactnativenigeria.com" className="font-medium text-[#5FDBFC] hover:underline">
              contact@reactnativenigeria.com
            </a>
          </p>
        </section>

        {/* 7. Security */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            7. Security
          </h2>
          <p className="text-lg">
            We take reasonable measures (encryption, access controls, monitoring) to protect your data, but no system is 100% secure.
          </p>
        </section>

        {/* 8. Children’s Privacy */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            8. Children’s Privacy
          </h2>
          <p className="text-lg">
            Our services are not directed to children under 13 years old (or 16 in the EU). We do not knowingly collect data from minors. If we discover such data, we will delete it.
          </p>
        </section>

        {/* 9. Updates to this Policy */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            9. Updates to this Policy
          </h2>
          <p className="text-lg">
            We may update this Privacy Policy. Changes will be posted on this page with an updated date.
          </p>
        </section>

        {/* 10. Contact */}
        <section className="mb-20">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            10. Contact
          </h2>
          <p className="text-lg">
            If you have questions about this Privacy Policy, contact us at:{" "}
            <a href="mailto:contact@reactnativenigeria.com" className="font-medium text-[#5FDBFC] hover:underline">
              contact@reactnativenigeria.com
            </a>
          </p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;