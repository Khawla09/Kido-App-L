import React from "react";
import '../styling/PrivacyPolicy.css';

function TermsOfService() {
  return (
    <div className="terms-of-service-container">
      <h1 className="terms-of-service-heading">Terms of Service</h1>
      <p>Last updated: August 28, 2024</p>

      <section className="terms-of-service-section">
        <h2>Acceptance of Terms</h2>
        <p>By accessing or using our application, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our services.</p>
      </section>

      <section className="terms-of-service-section">
        <h2>Use of the Service</h2>
        <p>You agree to use the service only for lawful purposes and in accordance with these terms. You are responsible for all activities that occur under your account.</p>
      </section>

      <section className="terms-of-service-section">
        <h2>User Accounts</h2>
        <p>To access some features of the service, you may need to create an account. You are responsible for maintaining the confidentiality of your account and password.</p>
      </section>

      <section className="terms-of-service-section">
        <h2>Prohibited Activities</h2>
        <p>You agree not to engage in any activities that are harmful, fraudulent, or violate any laws or regulations. This includes unauthorized access to our systems, distribution of malware, and harassment of other users.</p>
      </section>

      <section className="terms-of-service-section">
        <h2>Termination</h2>
        <p>We reserve the right to suspend or terminate your access to the service if you violate these terms or engage in conduct that we deem harmful to the application or other users.</p>
      </section>

      <section className="terms-of-service-section">
        <h2>Governing Law</h2>
        <p>These terms are governed by and construed in accordance with the laws of the jurisdiction in which the application is operated. Any legal disputes will be handled in the appropriate courts of that jurisdiction.</p>
      </section>

      <section className="terms-of-service-section">
        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
      </section>
    </div>
  );
}

export default TermsOfService;
