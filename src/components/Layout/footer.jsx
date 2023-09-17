import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="footer-sec cpt-6">
        <div className="container">
          <div className="top-footer mb-3">
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-4 col-sm-6">
                <div className="foot-content">
                  <div className="footer-title">
                    <img
                      src="/assets/img/logo/logo-2.png"
                      alt="Image not found"
                    />
                  </div>
                  <p className="footer-des">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis{" "}
                  </p>

                  <div className="social">
                    <ul className="social-ul">
                      <li>
                        <Link href="/" className="social-link">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="social-link">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link href="" className="social-link">
                          <FaLinkedin />
                        </Link>
                      </li>
                      <li>
                        <Link href="" className="social-link">
                          <FaDiscord />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 mb-4 col-sm-6">
                <div className="foot-content">
                  <div className="footer-title">
                    <h3 className="f-title">My Account</h3>
                  </div>
                  <ul className="footer-menu footer-menu d-flex flex-column gap-2">
                    <li className="footer-list">
                      <Link href="/author" className="footer-link">
                        Authors
                      </Link>
                    </li>
                    <li className="footer-list">
                      <Link href="/collection" className="footer-link">
                        Collection
                      </Link>
                    </li>
                    <li className="footer-list">
                      <Link href="/collection-create" className="footer-link">
                        Create Collection
                      </Link>
                    </li>
                    <li className="footer-list">
                      <Link href="/item-create" className="footer-link">
                        Create Items
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 mb-4 col-sm-6">
                <div className="foot-content">
                  <div className="footer-title">
                    <h3 className="f-title">Resources</h3>
                  </div>
                  <ul className="footer-menu d-flex flex-column gap-2">
                    <li className="footer-list">
                      <Link href="/help" className="footer-link">
                        Help & Support
                      </Link>
                    </li>
                    <li className="footer-list">
                      <Link href="/action" className="footer-link">
                        Live Auctions
                      </Link>
                    </li>
                    <li className="footer-list">
                      <Link href="/item" className="footer-link">
                        Item Details
                      </Link>
                    </li>
                    <li className="footer-list">
                      <Link href="/activity" className="footer-link">
                        Activity
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 mb-4 col-sm-6">
                <div className="foot-content">
                  <div className="footer-title">
                    <h3 className="f-title">Company</h3>
                  </div>
                  <ul className="footer-menu footer-menu d-flex flex-column gap-2">
                    <li className="footer-list">
                      <Link href="" className="footer-link">
                        About Us
                      </Link>
                    </li>
                    <li className="footer-list">
                      <Link href="/contact" className="footer-link">
                        Contact Us
                      </Link>
                    </li>
                    <li className="footer-list">
                      <Link href="" className="footer-link">
                        Our Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-4 col-sm-6">
                <div className="foot-content">
                  <div className="footer-title">
                    <h3 className="f-title">Newsletter</h3>
                  </div>
                  <p className="footer-des mb-3">
                    Fill their seed open meat. Sea you great Saw image stl
                  </p>

                  <div className="search-box">
                    <form method="post" className="subscribe-box">
                      <input
                        type="text"
                        className="form-control subscribe"
                        placeholder="Enter your email..."
                      />
                      <button className="subscribe-btn" type="submit">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.2631 1.82405C3.5333 1.6293 3.89351 1.61414 4.17911 1.78551L16.6791 9.2855C16.9301 9.43611 17.0837 9.70736 17.0837 10.0001C17.0837 10.2928 16.9301 10.5641 16.6791 10.7147L4.17911 18.2147C3.89351 18.386 3.5333 18.3709 3.2631 18.1761C2.99291 17.9814 2.86462 17.6444 2.93687 17.3193L4.37818 10.8334L8.75033 10.8334C9.21056 10.8334 9.58366 10.4603 9.58366 10.0001C9.58366 9.53984 9.21056 9.16675 8.75033 9.16675L4.37818 9.16675L2.93687 2.68086C2.86462 2.35572 2.99291 2.01879 3.2631 1.82405Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copy-right d-flex justify-content-center">
            <p className="copy-text">
              Copyright 2021, NFT Constructer All Rights Reserved.
            </p>
            {/* <ul className="f-foot-ul">
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
