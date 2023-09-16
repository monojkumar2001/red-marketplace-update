import React from 'react'

const WorkCard = () => {
  return (
    <>
      <div className="work cpt-6">
        <div className="container">
        <div className="section-title mb-4">
              <h2>How It Work</h2>
            </div>
          <div className="row g-4">
          
          {
            cardData.map((item, i)=>{
                return(
                    <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                    <div className="card-item">
                      <div className="card-head">
                        <div className="card-head-img">
                          <img
                            src={item.img}
                            alt=""
                            className="work-img"
                          />
                        </div>
                        <span>{item.count}</span>
                      </div>
                      <div className="card-content">
                        <h4>{item.title}</h4>
                        <p>
                          {item.des}
                        </p>
                      </div>
                    </div>
                  </div>
                )
            })
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkCard;

const cardData=[
    {
        id:1,
        img:"/assets/img/work/1.svg",
        count:'01',
        title:"Set your wallet",
        des:"Decide which wallet you want to use as your transaction method"
    },
    {
        id:2,
        img:"/assets/img/work/2.svg",
        count:'02',
        title:"Add your NFT's",
        des:" If you are a creator/designer, you can add your NFTs to the display"
    },
    {
        id:3,
        img:"/assets/img/work/3.svg",
        count:'03',
        title:"Buy/Sell your Collection/NFT's",
        des:"You can buy the NFTs you like or sell your NFTs to earn some cash"
    },
]