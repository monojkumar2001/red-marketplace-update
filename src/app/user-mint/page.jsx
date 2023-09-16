'use client';
import React, {useState} from 'react'
import PageBanner from '@/components/Banner/PageBanner'
import UserFaq from '@/components/userMintItems/UserFaq'
import UserMintItem from '@/components/userMintItems/UserMintItem'
import UserRoadmap from '@/components/userMintItems/UserRoadmap'
import UserTeam from '@/components/userMintItems/UserTeam';
import "../../styles/user-mint.css";
const UserMint = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const activeBtnHandler = (index) => {
    setActiveBtn(index);
  };
  return (
    <>
      <PageBanner title="User Mint" linkTitle='Pages' />

           {/* ============== Mint Page ===================*/}
           <section className="mint-page cpy-6">
        <div className="container">
          <div className="mint-header-content">
            <button
              className={
                activeBtn === 1 ? "mint-header-item active" : "mint-header-item"
              }
              onClick={() =>activeBtnHandler(1)}
            >
              Mint
            </button>
            <button
              className={
                activeBtn === 2 ? "mint-header-item active" : "mint-header-item"
              }
              onClick={() => activeBtnHandler(2)}
            >
              Roadmap
            </button>
            <button
              className={
                activeBtn === 3 ? "mint-header-item active" : "mint-header-item"
              }
              onClick={() => activeBtnHandler(3)}
            >
              Team
            </button>
            <button
              className={
                activeBtn === 4 ? "mint-header-item active" : "mint-header-item"
              }
              onClick={() =>activeBtnHandler(4)}
            >
              FAQ
            </button>
          </div>
          <div className="mint-content-wrapper">
            <div
              className={
                activeBtn === 1
                  ? "mint-content-items active"
                  : "mint-content-items"
              }
            >
              <UserMintItem />
            </div>
            <div
              className={
                activeBtn === 2
                  ? "mint-content-items active"
                  : "mint-content-items"
              }
            >
              <UserRoadmap/>
            </div>
            <div
              className={
                activeBtn === 3
                  ? "mint-content-items active"
                  : "mint-content-items"
              }
            >
                <UserTeam/>
            </div>
            <div
              className={
                activeBtn === 4
                  ? "mint-content-items active"
                  : "mint-content-items"
              }
            >
                <UserFaq/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserMint