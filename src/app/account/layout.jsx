"use client"

import Sideber from "@/components/Dashboard/Sideber";

import '../../styles/dashboard.css';


const layout = ({children}) => {
   
  return (
    <>
      <div className="user-admin cpt-7">
        <div className="container-fluid p-0 m-0">
          <div className="user-admin-warrper">
          {/*  Sidebar */}
      <Sideber/>
            <div className="user-content">
              <div className="user-account-content mt-4">
              {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default layout