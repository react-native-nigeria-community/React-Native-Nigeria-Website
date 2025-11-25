import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto font-['Manrope'] text-[#161C2D]/85 leading-relaxed">

        {/* Title */}
        <h1 className="font-['Rubik'] text-center text-4xl md:text-5xl font-bold text-[#161C2D] mb-4">
          Terms & Conditions – React Native Nigeria (RNN)
        </h1>
        <p className="text-center text-lg text-[#161C2D]/70 mb-16">
          Effective Date: September 22, 2025
        </p>

        {/* Introduction */}
        <section className="mb-16 text-lg">
          <p>
            Welcome to React Native Nigeria (RNN). By accessing reactnativenigeria.com or participating in our events, communities, or services, you agree to the following Terms and Conditions (“Terms”).
          </p>
        </section>

        {/* 1. Eligibility */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            1. Eligibility
          </h2>
          <p className="text-lg">
            You must be at least 18 years old (or have parental consent if 13–17). By using our services, you confirm that you have the right and authority to enter into these Terms.
          </p>
        </section>

        {/* 2. Community Participation */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            2. Community Participation
          </h2>
          <p className="text-lg">
            When participating in RNN communities, events, or platforms, you must comply with our Code of Conduct. Violations may result in suspension or removal from the community.
          </p>
        </section>

        {/* 3. Intellectual Property */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            3. Intellectual Property
          </h2>
          <ul className="space-y-4 text-lg list-disc list-inside marker:text-[#5FDBFC]">
            <li>All content on the RNN website (text, graphics, logos, materials) is owned by RNN or its contributors unless stated otherwise.</li>
            <li>You may not copy, modify, or distribute our content without prior written permission.</li>
            <li>You retain ownership of content you share (e.g., comments, posts, talks), but grant RNN a non-exclusive, royalty-free license to use, display, and share it in community spaces.</li>
          </ul>
        </section>

        {/* 4. Event Participation */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            4. Event Participation
          </h2>
          <ul className="space-y-4 text-lg list-disc list-inside marker:text-[#5FDBFC]">
            <li>Event registrations may be subject to payment. Refund policies will be specified per event.</li>
            <li>RNN is not responsible for personal injury, loss, or damage at events, unless caused by gross negligence.</li>
            <li>Photographs and recordings may be taken at events. By attending, you consent to being photographed/recorded unless you explicitly opt out.</li>
          </ul>
        </section>

        {/* 5. Online Platforms */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            5. Online Platforms
          </h2>
          <p className="text-lg">
            Use of our website, forums, or Slack/Discord groups must be lawful and respectful. Do not engage in spamming, unauthorized promotions, or harmful activities (hacking, scraping, malware).
          </p>
        </section>

        {/* 6. Disclaimer of Warranties */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            6. Disclaimer of Warranties
          </h2>
          <p className="text-lg">
            Our services are provided “as is” and “as available” without warranties of any kind. We do not guarantee uninterrupted service, error-free content, or security beyond reasonable industry measures.
          </p>
        </section>

        {/* 7. Limitation of Liability */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            7. Limitation of Liability
          </h2>
          <ul className="space-y-4 text-lg list-disc list-inside marker:text-[#5FDBFC]">
            <li>Indirect, incidental, or consequential damages.</li>
            <li>Loss of profits, data, or goodwill.</li>
            <li>Issues caused by third-party services (payment providers, hosting, etc.).</li>
          </ul>
        </section>

        {/* 8. Termination */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            8. Termination
          </h2>
          <p className="text-lg">
            We may suspend or terminate your access to our platforms or events if you violate these Terms or the Code of Conduct, or engage in harmful or unlawful behavior.
          </p>
        </section>

        {/* 9. Governing Law */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            9. Governing Law
          </h2>
          <p className="text-lg">
            These Terms will be governed by and interpreted in accordance with generally accepted principles of international contract law, unless mandatory local laws in your jurisdiction require otherwise. By using our services, you agree that any disputes will be resolved fairly under these principles, respecting user rights worldwide.
          </p>
        </section>

        {/* 10. Changes to Terms */}
        <section className="mb-16">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            10. Changes to Terms
          </h2>
          <p className="text-lg">
            We may update these Terms from time to time. Continued use of our services means you accept the updated Terms.
          </p>
        </section>

        {/* 11. Contact */}
        <section className="mb-20">
          <h2 className="font-['Rubik'] text-3xl font-semibold text-[#161C2D] mb-6">
            11. Contact
          </h2>
          <p className="text-lg">
            For any questions about these Terms, contact:{" "}
            <a
              href="mailto:contact@reactnativenigeria.com"
              className="font-medium text-[#5FDBFC] hover:underline"
            >
              contact@reactnativenigeria.com
            </a>
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsAndConditions;