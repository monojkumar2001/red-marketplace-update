'use client';
import Sidebar from '@/components/EditCollection/CollectionSidebar'
import React, { useState } from 'react';
import '../../styles/edit-create-collection.css';
const layout = ({children}) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const _toggleSidebar2 = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <>
      <div className="edit-create-collection cpy-8">
        <div className="show-navs" onClick={_toggleSidebar2}>
          <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20V16.6667H25V20H0ZM0 11.6667V8.33333H25V11.6667H0ZM0 3.33333V0H25V3.33333H0Z"
              fill="white"
            />
          </svg>
        </div>
        <Sidebar sidebarActive={sidebarActive} _toggleSidebar2={_toggleSidebar2} />
        <div className="edit-create-collection-wrapper">
          <div
            className= "edit-col "
          >
            {children}
          </div>
         
        </div>
      </div>
    </>
  )
}

export default layout