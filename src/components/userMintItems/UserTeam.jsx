import Image from "next/image";
import React from "react";

const UserTeam = () => {
  return (
    <div className="row">
      {data.map((item, i) => {
        return (
          <div className="col-lg-6 col-md-12" key={i}>
            <div className="mint-team-items">
              <div className="mint-team-img">
                <Image width={40} height={40} src={item.img} alt="" />
              </div>
              <div className="mint-team-content">
                <h4>{item.title}</h4>
                <p>{item.pra}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserTeam;

const data = [
  {
    id: 1,
    img: "/assets/img/profile-imgs.png",
    title: "Drop Test - MB",
    pra: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    id: 2,
    img: "/assets/img/profile-imgs.png",
    title: "Drop Test - MB",
    pra: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    id: 3,
    img: "/assets/img/profile-imgs.png",
    title: "Drop Test - MB",
    pra: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
];
