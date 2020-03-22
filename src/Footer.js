import React from "react";
import FooterNavBar from "./FooterNavBar";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-wrapper">
        <FooterNavBar />
        <div className="copyright-info" data-testid="copyright-info">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </div>
        <div className="social-media" data-testid="social-media">
          Social media links!
        </div>
        <div className="app-stores" data-testid="app-stores">
          App Stores!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
