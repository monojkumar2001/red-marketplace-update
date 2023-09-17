"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { FaShareAlt, FaEdit ,FaCheck} from "react-icons/fa";
import {FiCheck} from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
const CollectionHeader = () => {
  const [activeColItem, setActiveColItem] = useState(1);
  const toggleHandler = (index) => {
    setActiveColItem(index);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-lg-8 col-md-10">
            <div className="profile-content">
              <div className="profile-img">
                <Image width={106} height={106} src="/assets/img/inner/1.png" alt="" />
                <span className="pf-check">
                  <FiCheck/>
                </span>
              </div>
              <div className="name-title">
                <h1 className="profile-name">Nft Marketplace</h1>
                <p>Created by 051_Hart</p>
              </div>
              <div className="profile-info-box">
                <ul className="item-info">
                  <li>
                    <span className="item-title">7.2 </span>
                    <span className="item-text">Items</span>
                  </li>
                  <li>
                    <span className="item-title">5.3 </span>
                    <span className="item-text">Owners</span>
                  </li>
                  <li>
                    <span className="item-title">
                      <img src="assets/img/icon/eth.svg" alt="" /> 2.55
                    </span>
                    <span className="item-text">Floor Price</span>
                  </li>
                  <li>
                    <span className="item-title">
                      <img src="/assets/img/icon/eth.svg" alt="" /> 17.2 K
                    </span>
                    <span className="item-text">Volume Traded</span>
                  </li>
                </ul>
              </div>
              <div className="profile-des">
                <p>
                  Habitant sollicitudin faucibus cursus lectus pulvinar dolor
                  non ultrices eget. Facilisi lobortisal morbi fringilla urna
                  amet sed ipsum vitae malesuada. Habitant sollicitudin faucibus
                  cursus lectus pulvinar dolor non ultrices eget. Facilisi
                  lobortisal morbi fringilla urna amet sed ipsum vitae
                  malesuada.
                </p>
                <ul className="collection-social-ul-items justify-content-center d-flex align-items-center gap-2 mt-3">
                  <li className="social-link">
                    <BsHeartFill />
                  </li>
                  <li className="social-link">
                    <FaShareAlt />
                  </li>
                  <li className="social-link">
                    <Link href={"/edit-collection"}>
                      <FaEdit />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="item-bar">
          <div className="row">
            <ul className="item-ul">
              <li
                className={`${
                  activeColItem === 1 ? "col_item_link active" : "col_item_link"
                }`}
                onClick={() => toggleHandler(1)}
              >
                <Link href={"/collection/items"}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8333 17.5V9.16667H17.5V17.5H10.8333ZM2.5 10.8333V2.5H9.16667V10.8333H2.5ZM7.5 9.16667V4.16667H4.16667V9.16667H7.5ZM2.5 17.5V12.5H9.16667V17.5H2.5ZM4.16667 15.8333H7.5V14.1667H4.16667V15.8333ZM12.5 15.8333H15.8333V10.8333H12.5V15.8333ZM10.8333 2.5H17.5V7.5H10.8333V2.5ZM12.5 4.16667V5.83333H15.8333V4.16667H12.5Z"
                      fill="#7D7F96"
                    />
                  </svg>

                  <p>Items</p>
                </Link>
              </li>
              <li
                className={`${
                  activeColItem === 2 ? "col_item_link active" : "col_item_link"
                }`}
                onClick={() => toggleHandler(2)}
              >
                <Link href={"/collection/activity"}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33366 4.16667V15.8333H16.667V4.16667H3.33366ZM2.50033 2.5H17.5003C17.7213 2.5 17.9333 2.5878 18.0896 2.74408C18.2459 2.90036 18.3337 3.11232 18.3337 3.33333V16.6667C18.3337 16.8877 18.2459 17.0996 18.0896 17.2559C17.9333 17.4122 17.7213 17.5 17.5003 17.5H2.50033C2.27931 17.5 2.06735 17.4122 1.91107 17.2559C1.75479 17.0996 1.66699 16.8877 1.66699 16.6667V3.33333C1.66699 3.11232 1.75479 2.90036 1.91107 2.74408C2.06735 2.5878 2.27931 2.5 2.50033 2.5V2.5ZM12.3278 8.16083L10.8337 6.66667H15.0003V10.8333L13.5062 9.33917L10.2862 12.5592L8.51866 10.7917L6.16116 13.1483L4.98283 11.97L8.51866 8.43417L10.2862 10.2025L12.3278 8.16083Z"
                      fill="#7D7F96"
                    />
                  </svg>

                  <p>Activity</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionHeader;
