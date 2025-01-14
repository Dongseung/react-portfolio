import React from "react";
import "../asset/css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="textWrap en">
        <p class="title">
          Want to <span class="en2">Work Together?</span>
        </p>
        <p class="contact en2">Contact</p>
        <p>
          <a href="mailto:abc@hanmail.net">abc@hanmail.net</a>
        </p>
      </div>
      <div class="bottom en">
        <ul class="sns">
          <li>
            <a href="/" aria-label="페이스북 계정 연결">Facebook</a>
          </li>
          <li>
            <a href="/" aria-label="인스타그램 계정 연결">Instagram</a>
          </li>
        </ul>
        <p class="copyright">DS.shin &#169;2024</p>
      </div>
    </footer>
  );
};

export default Footer;
