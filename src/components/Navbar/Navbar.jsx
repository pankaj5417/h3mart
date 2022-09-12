import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className={`navbarContainer `}>
        <div>
          <ul className="navbarLeft d-flex">
            <li>
              <a href="#coin" className="navbarRightText">
                Coin
              </a>{" "}
            </li>
            <li>
              <a href="#exchanges" className="navbarRightText">
                Exchanges
              </a>{" "}
            </li>
            <li>
              <a href="#swap" className="navbarRightText">
                Swap
              </a>{" "}
            </li>
          </ul>
        </div>
        <div>
          <ul className="navbarCenter d-flex">
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <a href="#coincap" className="navbarRightText">
                coincap
              </a>{" "}
            </li>
          </ul>
        </div>

        <div>
          <ul className="navbarRight d-flex">
            <li></li>
            <li>
              <button className="wallet-button">Connect Wallet</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
