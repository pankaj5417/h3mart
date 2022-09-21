import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  const [show,setShow]=useState(false)
  const [expanded, setExpanded] = useState(false);

  function expand() {
      setExpanded(true);
  }

  function close() {
      setExpanded(false);
  }

  const showSearchBar=()=>{
    setShow(!show)
  }
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
              <img className="logo" src="https://coincap.io/static/logos/black.svg" alt="" />
            </li>
            
          </ul>
        </div>

        <div>
          <ul className="navbarCenter d-flex">
            <div className="searchContainer d-flex"  tabIndex={0} onFocus={expand} onBlur={close}>
            <li >
            {expanded? <input type="text" className="searchBar" />:""}
            </li>
            <li>
            <i class="fa fa-search" aria-hidden="true" onClick={showSearchBar}></i>
            </li>

            </div>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa fa-cog" aria-hidden="true"></i>

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
