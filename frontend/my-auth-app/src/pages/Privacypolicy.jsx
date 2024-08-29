import React from "react";
import '../styling/PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-heading">Privacy Policy</h1>
      <p>Last updated: August 28, 2024</p>

      <section className="privacy-policy-section">
        <h2>Information We Collect</h2>
        <p>We collect personal information that you voluntarily provide to us when you register on the application, express an interest in obtaining information about us or our products and services, when you participate in activities on the application, or otherwise contact us.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect or receive to communicate directly with you, manage your account, and improve our services. We may also use your information to send promotional communications, but you can opt out of such communications at any time.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>Sharing Your Information</h2>
        <p>We do not share your personal information with third parties except as necessary to provide our services, comply with legal obligations, protect your rights, or as otherwise disclosed in this Privacy Policy.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>Your Privacy Rights</h2>
        <p>You have the right to access, update, or delete your personal information. You can contact us at <a href="mailto:support@example.com">support@example.com</a> to request changes to your information.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns about our privacy practices, please contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
