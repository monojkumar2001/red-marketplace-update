"use client"
import React, { useState } from "react";
import Sideber from "@/components/Dashboard/Sideber";

import '../../styles/dashboard.css';
import '../../styles/dashboard-responsive.css';


const layout = ({children}) => {
  const [sidebarActive, setSidebarActive] = useState([false]);
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <>
      <div className="user-admin cpt-7">
        <div className="container-fluid p-0 m-0">
          <div className="user-admin-warrper">
          <div className="sidebar-menu-icons" onClick={toggleSidebar}>
          <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20V16.6667H25V20H0ZM0 11.6667V8.33333H25V11.6667H0ZM0 3.33333V0H25V3.33333H0Z"
              fill="#e03939"
            />
          </svg>
        </div>
      <Sideber sidebarActive={sidebarActive} toggleSidebar={toggleSidebar}/>
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