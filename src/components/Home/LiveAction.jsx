'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar} from "swiper/modules";
import "swiper/css/navigation";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import "swiper/css/pagination";
import style from "../../styles/section/nftCard.module.css";
const LiveAction = () => {
  return (
    <>  {/* // ==============expolor product============= */}
    <div className="expolor-product">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <div className="title-content">
              <h2>Live Auctions</h2>
              <p>Most popular gaming digital nft market place </p>
            </div>
            <div className="slider-nav">
              <div className="prev">
                <FaArrowLeft/>
              </div>
              <div className="next">
              <FaArrowRight/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="service-boxes">
            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination, Scrollbar]}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              breakpoints={{
                450: {
                  slidesPerView: 1.4,
                },
                680: {
                  slidesPerView: 2,
                },
                1050: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 4,
                },
              }}
            >
              {
                data.map((item, i)=>{
                  return (
                    <SwiperSlide key={i}>
              <div className={style.product_card}>
                <div className={style.product_image}>
                  <img src={item.img} alt="" />
                </div>
                <div className="mt-4">
                  <div className={style.name_diamond}>
                    <span className={style.product_name}>{item.title}</span>
                    <p className={style.token_type}>{item.token}</p>
                  </div>
                </div>
                <div className="buy-like">
                <div className="author-name-type">
                      <p className="author-type">Hightest bid</p>
                      <p className="price">No bids yet</p>
                    </div>
                  <div className="price-area">
                    <p className="price-type">Price</p>
                    <p className="price"> 4.89 ETH</p>
                  </div>
                </div>
              </div>
              </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default LiveAction;
// import React from "react";
// import Link from "next/link";

// const NftCard = () => {
//   return (
//     <>
//       {data.map((item, i) => {
//         return (
//           <div className="col-md-6 col-lg-4 col-xl-3 mb-4" key={i}>
//             <Link href="/">
//               <div className={style.product_card}>
//                 <div className={style.product_image}>
//                   <img src={item.img} alt="" />
//                 </div>
//                 <div className="mt-4">
//                   <div className={style.name_diamond}>
//                     <span className={style.product_name}>{item.title}</span>
//                     <p className={style.token_type}>{item.token}</p>
//                   </div>
//                 </div>
//                 <div className="buy-like">
//                 <div className="author-name-type">
//                       <p className="author-type">Hightest bid</p>
//                       <p className="price">No bids yet</p>
//                     </div>
//                   <div className="price-area">
//                     <p className="price-type">Price</p>
//                     <p className="price"> 4.89 ETH</p>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default NftCard;

const data = [
  {
    id: "1",
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates...",
    token: "BSC",
  },
  {
    id: "2",
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates...",
    token: "BSC",
  },
  {
    id: "3",
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates...",
    token: "BSC",
  },
  {
    id: "4",
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates...",
    token: "BSC",
  },
  {
    id: "5",
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates...",
    token: "BSC",
  },
  {
    id: "6",
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates...",
    token: "BSC",
  },
  {
    id: "7",
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates...",
    token: "BSC",
  },
];
