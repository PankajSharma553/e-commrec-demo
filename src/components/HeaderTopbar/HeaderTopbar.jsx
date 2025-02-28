import React from "react";
import './HeaderTopbar.css'
const HeaderTopbar = () => {
  return (
    <div className="headderTopbar">
      <div className="container">
        <div className="headerTobar_wrapper">
         <div className="headerTobar_inner">
         <div className="headerTobar_left">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!{" "}
              <a href="" className="">
                ShopNow
              </a>
            </p>
          </div>
          <div className="headerTobar_right">
            <select id="language">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
         </div>
        </div>
      </div>
    </div>
  );`   `
};

export default HeaderTopbar;
