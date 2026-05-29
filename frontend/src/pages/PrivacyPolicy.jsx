import React from 'react';
import { Helmet } from 'react-helmet-async';

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
    <div className="text-gray-700 leading-relaxed space-y-3">{children}</div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Helmet>
        <title>Privacy Policy | SofaShine</title>
        <meta name="description" content="SofaShine's privacy policy explains how we collect, use, and protect your personal data when you use our sofa cleaning services in Delhi NCR." />
        <link rel="canonical" href="https://sofashine.in/privacy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: May 2025</p>

          <Section title="1. Who We Are">
            <p>SofaShine ("we", "us", "our") is a professional home and sofa cleaning service operating in Delhi NCR, India. Our website is <strong>sofashine.in</strong>. You can reach us at <a href="mailto:hello@sofashine.in" className="text-teal-600 hover:underline">hello@sofashine.in</a> or <a href="tel:+919315576914" className="text-teal-600 hover:underline">+91 9315576914</a>.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information you provide directly when you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fill out the contact or booking form on our website (name, email, phone number, message)</li>
              <li>Book a service via WhatsApp or phone call (name, address, phone number)</li>
              <li>Contact us by email</li>
            </ul>
            <p>We do not collect payment card details — all payments are handled in cash or via third-party payment apps (UPI, Paytm, GPay) that have their own privacy policies.</p>
            <p>We may also collect non-personal technical data automatically: your IP address, browser type, pages visited, and time spent on the site. This data is used only in aggregate to understand site usage.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process and confirm your service booking</li>
              <li>Contact you about your appointment (reminders, confirmation, follow-up)</li>
              <li>Respond to your enquiries</li>
              <li>Send you service-related updates (not marketing unless you opt in)</li>
              <li>Improve our services based on feedback</li>
            </ul>
            <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </Section>

          <Section title="4. Data Storage">
            <p>Booking enquiries submitted through our website contact form are stored locally in your browser's localStorage on your device. We do not store this data on external servers beyond what is needed to respond to your enquiry.</p>
            <p>If you contact us via WhatsApp or phone, messages are stored on those platforms under their respective privacy policies (WhatsApp: Meta Privacy Policy; phone calls follow standard telecommunications practices).</p>
          </Section>

          <Section title="5. Cookies">
            <p>Our website uses minimal cookies for essential site functionality. We do not currently use advertising cookies or third-party tracking cookies. If this changes, we will update this policy and ask for your consent where required.</p>
          </Section>

          <Section title="6. Third-Party Services">
            <p>Our website loads images from Unsplash (images.unsplash.com) and iStock (media.istockphoto.com). Visiting our site may cause your browser to connect to those servers. Please refer to their respective privacy policies for details on any data they may collect.</p>
          </Section>

          <Section title="7. Your Rights">
            <p>Under applicable Indian data protection law, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ask what personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data use at any time</li>
            </ul>
            <p>To exercise any of these rights, email us at <a href="mailto:hello@sofashine.in" className="text-teal-600 hover:underline">hello@sofashine.in</a>. We will respond within 7 business days.</p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>Our services are intended for adults. We do not knowingly collect personal information from individuals under the age of 18. If you believe a child has submitted personal data to us, please contact us and we will promptly delete it.</p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. We encourage you to review this page periodically.</p>
          </Section>

          <Section title="10. Contact">
            <p>For any privacy-related questions, contact us at:</p>
            <ul className="list-none space-y-1">
              <li>Email: <a href="mailto:hello@sofashine.in" className="text-teal-600 hover:underline">hello@sofashine.in</a></li>
              <li>Phone: <a href="tel:+919315576914" className="text-teal-600 hover:underline">+91 9315576914</a></li>
              <li>Address: Delhi NCR, India</li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
