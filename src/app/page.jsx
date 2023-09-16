import Image from 'next/image'
import Link from 'next/link'
import style from "../styles/home.module.css"
import Expolor from '@/components/Home/Expolor'
import LiveAction from '@/components/Home/LiveAction'
import WorkCard from '@/components/Home/WorkCard'
import CategoriesSlider from '@/components/Home/CategoriesSlider'
// import SearchBarItem from '@/components/Layout/SearchBarItem'
export default function Home() {
  return (
<>
<div className={style.banner}>
        <div className={style.banner_content_wrap}>
          <div className={style.banner_content_wrapper}>
            <div className={style.banner_content}>
              <h1 className={style.banner_title}>
                Discover, collect, and sell extraordinary NFTs
              </h1>
              <p className="mt-4">
                Marketplace for monster character cllections non fungible token
                NFTs
              </p>

              <div className={style.banner_button_area}>
                <Link href="/" className="custom-btn">
                  <span>Explore More</span>
                </Link>
                <Link href="/" className="custom-btn-alt">
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Expolor/>
      <LiveAction/>

     {/* =========== How It work ============= */}
   <WorkCard/>

<CategoriesSlider/>

</>
  )
}
