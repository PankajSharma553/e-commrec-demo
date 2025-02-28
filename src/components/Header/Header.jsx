import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrapper">
          <div className="header_left">
            <div className="header_logo">
              <a href="" className="header_logoLink">
                Exclusive
              </a>
            </div>
          </div>
          <div className="header_navbar">
            <ul className="header_list">
              <li className="header_item">
                <a href="#" className="header_link active">
                  Home
                </a>
              </li>
              <li className="header_item">
                <a href="#" className="header_link">
                  Contact
                </a>
              </li>
              <li className="header_item">
                <a href="#" className="header_link">
                  About
                </a>
              </li>
              <li className="header_item">
                <a href="#" className="header_link">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <div className="header_right">
            <form className="header_rightForm">
              <div className="header_search">
                <input
                  type="text"
                  id="search"
                  name="seacrh"
                  className="header_searchInput"
                  placeholder="What are you looking for?"
                />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </form>
            <div className="header_profile">
              <a href="" className="header_favirate">
                <i class="fa-regular fa-heart"></i>
              </a>
              <a href="" className="header_cardShopping">
                <i class="fa-solid fa-cart-shopping"></i>
              </a>
              <a href="" className="header_profileIcon">
                <i class="fa-solid fa-user"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
