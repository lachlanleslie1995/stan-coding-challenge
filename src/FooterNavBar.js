import React from "react";
import { Link } from "@reach/router";

const FooterNavBar = () => {
  return (
    <ul className="footer-nav-bar" data-testid="footer-nav-bar">
      <li>
        <Link to="/" data-testid="home-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/termsandconditions" data-testid="terms-info">
          Terms and Conditions
        </Link>
      </li>
      <li>
        <Link to="/privacypolicy" data-testid="privacy-policy">
          Privacy Policy
        </Link>
      </li>
      <li>
        <Link to="/collectionstatement" data-testid="collection-statement">
          Collection Statement
        </Link>
      </li>
      <li>
        <Link to="/help" data-testid="footer-help">
          Help
        </Link>
      </li>
      <li>
        <Link to="/account" data-testid="manage-account">
          Manage Account
        </Link>
      </li>
    </ul>
  );
};

export default FooterNavBar;
