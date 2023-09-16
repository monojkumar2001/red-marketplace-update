import React from "react";
import Link from "next/link";
import style from '../../styles/section/nftCard.module.css'
const OfferNftCard = () => {
  return (
    <>
      {data.map((item, i) => {
       return(
        <div className="col-md-6 col-lg-4 col-xl-3 mb-4" key={i}>
        <Link href="/" >
     <div className={style.product_card}>
     <div className={style.product_image}>
            <img src={item.img} alt=""/>
          </div>
          <div className="mt-4">
            <div className={style.name_diamond}>
            <span className={style.product_name}>
                {item.title}
                </span>
                <p className={style.token_type}>{item.token}</p>
            </div>
          </div>
     </div>
        </Link>
      </div>
       )
      })}
    </>
  );
};

export default OfferNftCard;

const data = [
  {
    id:'1',
    img:'/assets/img/product/1.png',
    title:"Hamlet Contemplates...",
    token:"BSC",
  },
  {
    id:'1',
    img:'/assets/img/product/1.png',
    title:"Hamlet Contemplates...",
    token:"BSC",
  },
  {
    id:'1',
    img:'/assets/img/product/1.png',
    title:"Hamlet Contemplates...",
    token:"BSC",
  },
  {
    id:'1',
    img:'/assets/img/product/1.png',
    title:"Hamlet Contemplates...",
    token:"BSC",
  },
 
];
