import React from "react";
import "../styles/Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div class="footer1">
        <h5>Copyright © 2023. All Rights Reserved.</h5>
        <a href="http://www.example.com/terms-of-use">Terms of Use</a>
        <a href="http://www.example.com/privacy-policy">Privacy Policy</a>
        <p>
          Follow us on:
          <a href="http://www.facebook.com/example">Facebook</a> |{" "}
          <a href="http://www.twitter.com/example">Twitter</a> |{" "}
          <a href="http://www.instagram.com/example">Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
