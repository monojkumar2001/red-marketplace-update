"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import SearchBarItem from "./SearchBarItem";
import { IoIosArrowDown , IoMdClose } from "react-icons/io";
import {AiOutlineMenu} from 'react-icons/ai'
import ConnectWalletBtn from "../WalletConnect/ConnectWalletBtn";
// import ConnectWalletBtn from "../ConnectWallet/ConnectWalletBtn";
function Header() {
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, [navActive]);

  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  console.log(activeIndex);

  const [dropdownActive, setDropdownActive] = useState();

  return (
    // <!-- =====================Navigation=========== -->
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <div className="logo">
            <Link href="/" className="logo-link">
              <img src="/assets/img/logo/logo-2.png" alt="" />
            </Link>
          </div>
          <SearchBarItem />

          <div className={`menu ${sidebarActive ? "active" : ""}`}>
            <div className="close-menu" onClick={() => setSidebarActive(false)}>
            <IoMdClose/>
            </div>
            <ul className="menu-nav-ul">
              <li className="nav-list">
                <Link href="/" className="nav-link" onClick={_toggleSidebar}>
                  Home
                </Link>
              </li>
              <li
                className="nav-list"
                onClick={() => {
                  if (dropdownActive === 1) {
                    setDropdownActive();
                  } else {
                    setDropdownActive(1);
                  }
                }}
              >
                <div className="select nav-select-item">
                  <div className="select-menu">
                    <div className="select-menu-inner">
                      <p>Explore</p>
                      <IoIosArrowDown />
                    </div>
                    <ul
                      className={
                        dropdownActive === 1 ? "dp-menu active" : "dp-menu"
                      }
                    >
                      <li>
                        <Link
                          href="/items"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Item Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/explore"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Explore
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li
                className="nav-list"
                onClick={() => {
                  if (dropdownActive === 3) {
                    setDropdownActive();
                  } else {
                    setDropdownActive(3);
                  }
                }}
              >
                <div className="select nav-select-item">
                  <div className="select-menu">
                    <div className="select-menu-inner">
                      <p>Pages</p>
                      <IoIosArrowDown />
                    </div>
                    <ul
                      className={
                        dropdownActive === 3 ? "dp-menu active" : "dp-menu"
                      }
                    >
                      <li>
                        <Link
                          href="/account"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          User Account
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/my-collection"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          My Collection
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/ranking"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Ranking
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/listing"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Listing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/user-profile"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          User Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/create-item"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Create Items
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/collection/items"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Collection
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/edit-collection"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Edit Collection
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-list">
                <Link
                  href="/contact"
                  className="nav-link"
                  onClick={_toggleSidebar}
                >
                  Contacts
                </Link>
              </li>
              <li className="nav-list px-3">
                <ConnectWalletBtn />
              </li>
            </ul>
          </div>
          <div className="show-nav" onClick={_toggleSidebar}>
            <AiOutlineMenu/>
          </div>
        </nav>
      </div>
    </header>
    // {/* <!-- =====================Navigation end =========== --> */}
  );
}
export default Header;
