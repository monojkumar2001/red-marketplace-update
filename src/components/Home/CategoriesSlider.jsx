'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar} from "swiper/modules";
import "swiper/css/navigation";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import "swiper/css/pagination";
import style from "../../styles/section/nftCard.module.css";
const CategoriesSlider = () => {
  return (
    <>  {/* // ==============expolor product============= */}
    <div className={`${style.categories_explore} cpy-6`}>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <div className="title-content">
              <h2>Explore Categories</h2>
              {/* <p>Most popular gaming digital nft market place </p> */}
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

export default CategoriesSlider;

const data = [
  {
    id: "1",
    img: "/assets/img/product/1.png",
    title: "Art",
  },
  {
    id: "2",
    img: "/assets/img/product/1.png",
    title: "Gaming"
  },
  {
    id: "3",
    img: "/assets/img/product/1.png",
    title: "Memberships",
  },
  {
    id: "4",
    img: "/assets/img/product/1.png",
    title: "Music",
  },
  {
    id: "5",
    img: "/assets/img/product/1.png",
    title: "PFPs",
  },
  {
    id: "6",
    img: "/assets/img/product/1.png",
    title: "Photography",
  }
];
