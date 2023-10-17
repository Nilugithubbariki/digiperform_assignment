import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <div className="wrap">
        <div className="footerContainer">
          <ul>
            <li>Free Shiping</li>
            <li>Support 24/7</li>
            <li>Money Return</li>
            <li>100% Payment Secure</li>
          </ul>
        </div>
        <div className="lastContainer">
          <ul>
            <li>
              Lorem ipsum dolor sit <br />
              amet consectetur adipisicing
              <br /> elit. Nemo dolore neque <br />
              facilis maxime reiciendis
              <br /> ullam!
            </li>
            <li>
              Menu
              <ol>
                <li>Home</li>
                <li>Shop</li>
                <li>Products</li>
                <li>Bags</li>
                <li>cosmetics</li>
              </ol>
            </li>
            <li>
              Support
              <ol>
                <li>Frequently Asked Questions</li>
                <li>Returns And Refunds</li>
                <li>CGV</li>
                <li>Legal Notice</li>
                <li>Track My Order</li>
              </ol>
            </li>
            <li>
              NewLetter
              <div>
                Subscript to the newsletter and get some crispy stuff every
                week.
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter your email here"
                  style={{ border: "1px solid blue" }}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
