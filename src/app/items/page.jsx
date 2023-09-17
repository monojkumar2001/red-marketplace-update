"use client";
import { useState } from "react";
import { IoMdRefresh, IoIosArrowDown } from "react-icons/io";
import { FiShare, FiActivity } from "react-icons/fi";
import { BiCollection } from "react-icons/bi";
import { FaRegHandPaper } from "react-icons/fa";
import Link from "next/link";
import '../../styles/WalletConnet.css';
import '../../styles/NftDetails.css'
import '../../styles/MakeOffer.css'
import TokenDetails from "@/components/NftItems/TokenDetails";
import CollectionDetailsItem from "@/components/NftItems/CollectionDetailsItem";
import MakeOfferPopup from "@/components/Popup/MakeOfferPopup";
import NftTransection from "@/components/NftItems/NftTransection";
import PageBanner from "@/components/Banner/PageBanner";
import Image from "next/image";
import NFTModelCongratulations from "@/components/Popup/NFTModelCongratulations";
import PlaceBidOfferPopup from "@/components/Popup/PlaceBidOfferPopup";

function Items() {
  const [toggleActive, setToggleActive] = useState(0);
  const toggleHandle = (index) => {
    setToggleActive(index);
  };

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      {/*
    <!-- =============page banner==================== -->*/}
<PageBanner title="Item Details" linkTitle='explore' />
      {/*
    <!-- =============page banner end================ -->*/}
      {/* <!-- ============feature============== --> */}
      <section className="item cpy-6">
        <div className="container">
          <div className="nft-details-item-con row g-4">
            <div className="item-left col-lg-5 col-md-12">
              <div className="item-img">
                <Image width={450} height={490} src="/assets/img/collection/1.jpg" alt="" />
              </div>
              <div className="nft-toggle-bar">
                <div
                  className={
                    toggleActive === 1
                      ? "nft-toggle-title acitve"
                      : "nft-toggle-title"
                  }
                  onClick={() => {
                    if (toggleActive === 1) {
                      setToggleActive();
                    } else {
                      setToggleActive(1);
                    }
                  }}
                >
                  <div className="nft-items-icon d-flex  gap-3">
                    <span>
                      <svg
                        width="4"
                        height="18"
                        viewBox="0 0 4 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 4C1.45 4 0.979002 3.804 0.587002 3.412C0.195002 3.02 -0.000664969 2.54934 1.69779e-06 2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06C2.55 1.69779e-06 3.021 0.196002 3.413 0.588002C3.805 0.980002 4.00067 1.45067 4 2C4 2.55 3.804 3.021 3.412 3.413C3.02 3.805 2.54934 4.00067 2 4ZM0.500002 18V6H3.5V18H0.500002Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span>Token Details</span>
                  </div>
                  <p className="icons">
                    <IoIosArrowDown />
                  </p>
                </div>
                <div
                  className={
                    toggleActive === 1
                      ? "nft-toggle-content active"
                      : "nft-toggle-content"
                  }
                >
                  <div className="nft-content-details">
                    <TokenDetails />
                  </div>
                </div>
              </div>
              <div className="nft-toggle-bar">
                <div
                  className={
                    toggleActive === 2
                      ? "nft-toggle-title acitve"
                      : "nft-toggle-title"
                  }
                  onClick={() => {
                    if (toggleActive === 2) {
                      setToggleActive();
                    } else {
                      setToggleActive(2);
                    }
                  }}
                >
                  <div className="nft-items-icon d-flex  gap-3">
                    <span>
                      <BiCollection />
                    </span>
                    <span>Collection Details</span>
                  </div>
                  <p className="icons">
                    <IoIosArrowDown />
                  </p>
                </div>
                <div
                  className={
                    toggleActive === 2
                      ? "nft-toggle-content active"
                      : "nft-toggle-content"
                  }
                >
                  <div className="nft-content-details">
                    <CollectionDetailsItem />
                  </div>
                </div>
              </div>
            </div>
            <div className="item-right col-lg-7 col-md-12">
              <div className="ownership">
                <div className="owner">
                  <div className="avatar">
                    <img src="/assets/img/inner/7.jpg" alt="" />
                  </div>
                  <div className="name">
                    <p>Owned By</p>
                    <h1>Ralph Garraway</h1>
                  </div>
                </div>
                <div className="nft-items-share">
                  <button className="share-btn" onClick={refreshPage}>
                    <IoMdRefresh />
                  </button>
                  <button className="share-btn share-btns">
                    <span>
                      <FiShare />
                    </span>
                    <span>Share</span>
                  </button>
                </div>
              </div>
              <div className="description mt-3">
                <h3 className="nft-titile mb-3">Garraway</h3>
                <p>
                  Habitant sollicitudin faucibus cursus lectus pulvinar dolor
                  non ultrices eget. Facilisi lobortisal morbi fringilla urna
                  amet sed ipsum vitae malesuada. Habitant sollicitudin faucibus
                  cursus lectus pulvinar dolor non ultrices eget. Facilisi
                  lobortisal amet sed ipsum vitae malesuada. Habitant
                  sollicitudin faucibus cursus lectus pulvinar dolor non
                  ultrices eget. Facilisi lobortisal
                </p>
              </div>
              <div className="ownership my-3 pb-4">
                <button className="bid-btn-init w-100">
                  <span>Not listed</span>
                </button>
                {/* <MakeOfferPopup /> */}
                {/* <NFTModelCongratulations/> */}
                <PlaceBidOfferPopup/>
              </div>

              <div className="nft-toggle-bar">
                <div
                  className={
                    toggleActive === 3
                      ? "nft-toggle-title acitve"
                      : "nft-toggle-title"
                  }
                  onClick={() => {
                    if (toggleActive === 3) {
                      setToggleActive();
                    } else {
                      setToggleActive(3);
                    }
                  }}
                >
                  <div className="nft-items-icon d-flex  gap-3">
                    <span>
                      <FaRegHandPaper />
                    </span>
                    <span>Offer</span>
                  </div>
                  <p className="icons">
                    <IoIosArrowDown />
                  </p>
                </div>
                <div
                  className={
                    toggleActive === 3
                      ? "nft-toggle-content active"
                      : "nft-toggle-content"
                  }
                >
                  <div className="nft-content-details">
                    <p>No offers found</p>
                  </div>
                </div>
              </div>
              <div className="nft-toggle-bar">
                <div
                  className={
                    toggleActive === 4
                      ? "nft-toggle-title acitve"
                      : "nft-toggle-title"
                  }
                  onClick={() => {
                    if (toggleActive === 4) {
                      setToggleActive();
                    } else {
                      setToggleActive(4);
                    }
                  }}
                >
                  <div className="nft-items-icon d-flex  gap-3">
                    <span>
                      <FiActivity />
                    </span>
                    <span>Activity</span>
                  </div>
                  <p className="icons">
                    <IoIosArrowDown />
                  </p>
                </div>
                <div
                  className={
                    toggleActive === 4
                      ? "nft-toggle-content active"
                      : "nft-toggle-content"
                  }
                >
                  <div className="nft-content-details">
                    <NftTransection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ============feature end============== --> */}
    
    </>
  );
}

export default Items;
