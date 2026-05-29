import React from 'react';
import { Helmet } from 'react-helmet-async';

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
    <div className="text-gray-700 leading-relaxed space-y-3">{children}</div>
  </div>
);

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Helmet>
        <title>Terms of Service | SofaShine</title>
        <meta name="description" content="SofaShine's terms of service for professional sofa and home cleaning in Delhi NCR — booking, cancellation, satisfaction guarantee, and liability terms." />
        <link rel="canonical" href="https://sofashine.in/terms" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: May 2025</p>

          <Section title="1. Acceptance of Terms">
            <p>By booking a service with SofaShine or using our website (sofashine.in), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </Section>

          <Section title="2. Services">
            <p>SofaShine provides professional sofa cleaning, carpet cleaning, mattress cleaning, home deep cleaning, and related services in Delhi NCR, India. Services are carried out by trained, verified technicians using eco-friendly cleaning products.</p>
            <p>Service availability is subject to technician availability in your area. We reserve the right to decline a booking if we are unable to safely complete the service (e.g., due to extreme sofa damage, safety concerns at the premises, or inaccessible location).</p>
          </Section>

          <Section title="3. Booking and Confirmation">
            <p>A booking is confirmed when you receive a confirmation message from SofaShine via WhatsApp, phone, or email. We recommend confirming your booking at least 2 hours before the scheduled time.</p>
            <p>For same-day bookings, confirmation is subject to technician availability. We will notify you promptly if a same-day slot is unavailable.</p>
          </Section>

          <Section title="4. Pricing and Payment">
            <p>All prices displayed on our website are inclusive of materials and labour. Prices are quoted per service and sofa size as described at the time of booking.</p>
            <p>Payment is due upon completion of service. We accept cash, UPI, Paytm, Google Pay, and PhonePe. No advance payment is required to confirm a booking.</p>
            <p>If additional services are required beyond what was booked (e.g., extra stain treatment), the technician will inform you and obtain your consent before proceeding. You will only be charged for what you agree to.</p>
          </Section>

          <Section title="5. Cancellation and Rescheduling">
            <p>You may cancel or reschedule a booking free of charge up to 2 hours before the scheduled service time by calling or messaging us on +91 9315576914.</p>
            <p>Cancellations within 2 hours of the booking may result in a ₹100 late cancellation fee to cover technician travel costs, at our discretion.</p>
            <p>SofaShine reserves the right to reschedule or cancel a booking due to technician illness, equipment issues, or circumstances beyond our control. In such cases, we will notify you as soon as possible and offer an alternative slot at no additional charge.</p>
          </Section>

          <Section title="6. Satisfaction Guarantee">
            <p>If you are not satisfied with the quality of cleaning, please inform the technician before they leave or contact us within 24 hours of service completion. We will arrange a free re-clean of the affected areas within 48 hours.</p>
            <p>The satisfaction guarantee covers the quality of cleaning work performed. It does not cover:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pre-existing damage, tears, or wear to the sofa fabric or structure</li>
              <li>Stains that are chemically impossible to remove (set stains, bleach damage, permanent dye)</li>
              <li>Results on fabrics cleaned against the manufacturer's care code (e.g., water used on an "S"-coded fabric at the customer's specific request)</li>
            </ul>
          </Section>

          <Section title="7. Customer Responsibilities">
            <p>To ensure we can deliver the best results, please:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ensure the sofa area is reasonably accessible on the day of service</li>
              <li>Remove loose items (cushion covers, throw blankets, decorative pillows) from the sofa before the technician arrives</li>
              <li>Inform us of any known fabric sensitivities, repairs, or pre-existing damage before the service begins</li>
              <li>Keep children and pets away from the cleaned area for 2–4 hours after service to allow drying</li>
            </ul>
          </Section>

          <Section title="8. Liability">
            <p>SofaShine takes all reasonable precautions to avoid damage to your property. In the unlikely event that our technicians cause damage to your sofa or property, please report it to us within 24 hours of the service.</p>
            <p>Our liability is limited to re-cleaning or, where damage is caused by our negligence, reasonable compensation for repair costs. We are not liable for pre-existing damage, normal wear and tear, or damage caused by the nature of the fabric or sofa construction.</p>
            <p>SofaShine is not responsible for any loss or damage caused by factors outside our control, including but not limited to delayed drying due to weather or humidity, or pre-existing structural issues with the sofa.</p>
          </Section>

          <Section title="9. Website Use">
            <p>The content on sofashine.in — including text, images, pricing, and service descriptions — is provided for informational purposes. While we keep it up to date, pricing and availability are subject to change. Confirmed bookings are governed by the agreed price at the time of booking.</p>
          </Section>

          <Section title="10. Governing Law">
            <p>These Terms of Service are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the jurisdiction of the courts in Delhi, India.</p>
          </Section>

          <Section title="11. Contact">
            <p>For questions about these terms, contact us at:</p>
            <ul className="list-none space-y-1">
              <li>Email: <a href="mailto:hello@sofashine.in" className="text-teal-600 hover:underline">hello@sofashine.in</a></li>
              <li>Phone: <a href="tel:+919315576914" className="text-teal-600 hover:underline">+91 9315576914</a></li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
