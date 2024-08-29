
import React from 'react';
import '../styling/footer.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">© 2024 Your Company Name. All rights reserved.</p>
        <p className="footer-links">
         <Link className="footer-link" to={"/privacypolicy"}>  Privacy Policy</Link>| 
         <Link className="footer-link" to={"/termsofservice"}> Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
