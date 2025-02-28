import React from "react";
import "./Footer.css";
import qrImg from "../../assets/images/qr-code.png";
import googlePlay from "../../assets/images/google-play.png";
import appstoreImg from "../../assets/images/app-store.png";
import facebookIcon from "../../assets/images/facebook.svg";
import instragramIcon from "../../assets/images/instagram.svg";
import likedInIcon from "../../assets/images/linkedin.svg";
import twitterIcon from "../../assets/images/twitter.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_left">
            <div className="footer_logo">
              <a href="" className="footer_logoLink">
                Exclusive
              </a>
            </div>
            <h4 className="footer_title">Subscribe</h4>
            <p className="footer_desc">Get 10% off your first order</p>
            <form className="footer_form">
              <div className="footer_email">
                <input
                  className="footer_emailInput"
                  placeholder="Enter your email"
                />
                <i class="fa-solid fa-paper-plane"></i>
              </div>
            </form>
          </div>

          <div className="footer_support">
            <h4 className="footer_title">Support</h4>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="footer_gmailSend">
              <a href="mailto:exclusive@gmail.com"></a>exclusive@gmail.com
            </p>
            <p className="footer_phoneSend">
              <a href="tel:+88015-88888-9999"></a>+88015-88888-9999
            </p>
          </div>

          <div className="footer_navbar">
            <h4 className="footer_title">Account</h4>
            <ul className="footer_list">
              <li className="footer_item">
                <a href="" className="footer_link">
                  My Account
                </a>
              </li>
              <li className="footer_item">
                <a href="" className="footer_link">
                  Login / Register
                </a>
              </li>
              <li className="footer_item">
                <a href="" className="footer_link">
                  Cart
                </a>
              </li>
              <li className="footer_item">
                <a href="" className="footer_link">
                  Wishlist
                </a>
              </li>
              <li className="footer_item">
                <a href="" className="footer_link">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div className="footer_navbar">
            <h4 className="footer_title">Quick Link</h4>
            <ul className="footer_list">
              <li className="footer_item">
                <a href="" className="footer_link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer_item">
                <a href="" className="footer_link">
                  Terms Of Use
                </a>
              </li>
              <li className="footer_item">
                <a href="" className="footer_link">
                  FAQ
                </a>
              </li>
              <li className="footer_item">
                <a href="" className="footer_link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_right">
            <h4 className="footer_title">Download App</h4>
            <div className="footer_socialPlatfomr">
              <p>Save $3 with App New User Only</p>
              <div className="footer_socialPlatfomrWarp">
                <div className="footer_qr">
                  <div className="footer_qrImg">
                    <img src={qrImg} alt="qr img" />
                  </div>
                </div>
                <div className="footer_socialPlatStore">
                  <div className="footer_googlePlayImg">
                    <img src={googlePlay} alt="google play" />
                  </div>
                  <div className="footer_googlePlayImg">
                    <img src={appstoreImg} alt="google play" />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_social">
              <div className="footer_socialWrap">
                <a href="" className="footer_socilaLink">
                  <img src={facebookIcon} alt="facebook" />
                </a>
                <a href="" className="footer_socilaLink">
                  <img src={twitterIcon} alt="facebook" />
                </a>
                <a href="" className="footer_socilaLink">
                  <img src={instragramIcon} alt="facebook" />
                </a>
                <a href="" className="footer_socilaLink">
                  <img src={likedInIcon} alt="facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="footer_copyright--content">
          <p>
            <i class="fa-solid fa-copyright"></i> Copyright Rimel 2022. All
            right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
