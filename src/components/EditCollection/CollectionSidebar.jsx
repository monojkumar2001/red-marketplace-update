"use client";
import React,{useState} from 'react';
import Link from 'next/link';
const Sidebar = ({sidebarActive , _toggleSidebar2}) => {
 
    const [toggle, setToggle] = useState(1);
    const togglebtn = (index) => {
      setToggle(index);
    };
  return (
    <>
     <div
          className={`edit-create-collection-sidebar ${
            sidebarActive ? "active" : ""
          }`}
        >
          <h1 className="edit-create-collection-title">My Collection</h1>
          <ul className="edit-collection-items">
          <li className="edit-collection-item " onClick={_toggleSidebar2}>
          <Link href={'/edit-collection'}
                className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => togglebtn(1)}
              >
               <button className='collection-item-link'> Collection</button>
              </Link>
              </li> 
            <li className="edit-collection-item" onClick={_toggleSidebar2}>
              <Link  href={'/edit-collection/earning'}
                className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => togglebtn(2)}
              >
            
                <button className='collection-item-link'> Earnings</button>
              </Link>
            </li>
            <li className="edit-collection-item" onClick={_toggleSidebar2}>
              <Link  href={'/edit-collection/links'}
                className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => togglebtn(3)}
              >
            
                  <button className='collection-item-link'>    Links</button>
              </Link>
            </li>
          </ul>
          <h1 className="edit-create-collection-title">Drop</h1>
          <ul className="edit-collection-items" >
            <li className="edit-collection-item" onClick={_toggleSidebar2}>
              <Link  href={'/edit-collection/collection-setting'}
                className={toggle === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => togglebtn(4)}
              >
                
                <button className='collection-item-link'>Setting</button>
              </Link>
            </li>
            <li className="edit-collection-item" onClick={_toggleSidebar2}>
              <Link href={'/edit-collection/pre-reveal'}
                className={toggle === 5 ? "tabs active-tabs" : "tabs"}
                onClick={() => togglebtn(5)}
              >
             
                <button className='collection-item-link'>Pre Reveal</button>
              </Link>
            </li>
            <li className="edit-collection-item" onClick={_toggleSidebar2}>
              <Link href={'/edit-collection/drop-earning'}
                className={toggle === 6 ? "tabs active-tabs" : "tabs"}
                onClick={() => togglebtn(6)}
              >
            
                
                <button className='collection-item-link'> Earnings</button>
              </Link>
            </li>
            <li className="edit-collection-item">
              <Link href='/user-mint' className="tabs">
              <button className='collection-item-link'>Drop Page</button>
              </Link>
            </li>
          </ul>
          <div className="close-menus" onClick={_toggleSidebar2}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
    </>
  )
}

export default Sidebar