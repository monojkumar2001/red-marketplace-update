"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ItemSidebar = () => {
  const [traits, setTraits] = useState(0);
  const toggleHandler = (index) => {
    setTraits(index);
  };
  return (
    <>
      <div className="col-lg-3 col-md-12 items-sidebar">
        <div className="tranding-bar">
          <h4>Status</h4>
          <ul className="tranding-cat">
            <Link href="/" className="tranding-cat-lin">
              <button>All</button>
            </Link>
            <Link href="/" className="tranding-cat-lin">
              <button>Listed</button>
            </Link>
            <Link href="/" className="tranding-cat-lin">
              <button> On auction</button>
            </Link>
            <Link href="/" className="tranding-cat-lin">
              <button> New</button>
            </Link>
            <Link href="/" className="tranding-cat-lin">
              <button> Has offers</button>
            </Link>
          </ul>
          <div className="items-traits-con">
            <h4>Traits</h4>
            <ul className="items-traits-ul d-flex flex-column gap-3 mt-3">
              <li className="item-traits">
                <div
                  onClick={() => {
                    if (traits === 1) {
                      toggleHandler();
                    } else {
                      toggleHandler(1);
                    }
                  }}
                  className={
                    traits === 1 ? "traits-list active" : "traits-list"
                  }
                >
                  <h5>Background</h5>
                  <div className="d-flex align-items-center gap-2">
                    <span>0</span>
                    <span className="traits-icon">
                      <IoIosArrowDown />
                    </span>
                  </div>
                </div>
                <div
                  className={
                    traits === 1
                      ? "item-traits-content active"
                      : "item-traits-content"
                  }
                >
                  <div className="d-flex align-items-center justify-content-between gap-4">
                    <div className="traits-input d-flex mt-2 align-items-center gap-2 ">
                      <input type="checkbox" id="check-1" />
                      <label htmlFor="check-1">green</label>
                    </div>
                    <span>648</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-4">
                    <div className="traits-input d-flex mt-2 align-items-center gap-2 ">
                      <input type="checkbox" id="check-2" />
                      <label htmlFor="check-2">red</label>
                    </div>
                    <span>648</span>
                  </div>
                </div>
              </li>
              <li className="item-traits">
                <div
                  onClick={() => {
                    if (traits === 2) {
                      toggleHandler();
                    } else {
                      toggleHandler(2);
                    }
                  }}
                  className={
                    traits === 2 ? "traits-list active" : "traits-list"
                  }
                >
                  <h5>Body</h5>
                  <div className="d-flex align-items-center gap-2">
                    <span>0</span>
                    <span className="traits-icon">
                      <IoIosArrowDown />
                    </span>
                  </div>
                </div>
                <div
                  className={
                    traits === 2
                      ? "item-traits-content active"
                      : "item-traits-content"
                  }
                >
                  <div className="d-flex align-items-center justify-content-between gap-4">
                    <div className="traits-input d-flex mt-2 align-items-center gap-2 ">
                      <input type="checkbox" id="check-1" />
                      <label htmlFor="check-1">green</label>
                    </div>
                    <span>648</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-4">
                    <div className="traits-input d-flex mt-2 align-items-center gap-2 ">
                      <input type="checkbox" id="check-2" />
                      <label htmlFor="check-2">red</label>
                    </div>
                    <span>648</span>
                  </div>
                </div>
              </li>
              <li className="item-traits">
                <div
                  onClick={() => {
                    if (traits === 3) {
                      toggleHandler();
                    } else {
                      toggleHandler(3);
                    }
                  }}
                  className={
                    traits === 3 ? "traits-list active" : "traits-list"
                  }
                >
                  <h5>Hat</h5>
                  <div className="d-flex align-items-center gap-2">
                    <span>0</span>
                    <span className="traits-icon">
                      <IoIosArrowDown />
                    </span>
                  </div>
                </div>
                <div
                  className={
                    traits === 3
                      ? "item-traits-content active"
                      : "item-traits-content"
                  }
                >
                  <div className="d-flex align-items-center justify-content-between gap-4">
                    <div className="traits-input d-flex mt-2 align-items-center gap-2 ">
                      <input type="checkbox" id="check-1" />
                      <label htmlFor="check-1">green</label>
                    </div>
                    <span>648</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-4">
                    <div className="traits-input d-flex mt-2 align-items-center gap-2 ">
                      <input type="checkbox" id="check-2" />
                      <label htmlFor="check-2">red</label>
                    </div>
                    <span>648</span>
                  </div>
                </div>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemSidebar;
