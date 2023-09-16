import PageBanner from '@/components/Banner/PageBanner'
import React from 'react'

// import "../../styles/explore.css";
import CollectionCard from '@/components/NftCard/CollectionCard';
import Link from 'next/link';
const Collection = () => {
  return (
    <>
<div className="profile-info">
        <div className="container">
          <div className="my-5">
            <div className="row">
              <div className="col-12">
                <div className="tranding-bar">
                  <ul className="tranding-cat">
                    <li>
                      <a href="" className="tranding-cat-lin">
                        All
                      </a>
                    </li>
                    <li>
                      <a href="" className="tranding-cat-lin">
                        <i className="icofont-music-alt"></i> Music
                      </a>
                    </li>
                    <li>
                      <a href="" className="tranding-cat-lin">
                        <i className="icofont-world"></i> Virtual World
                      </a>
                    </li>
                    <li>
                      <a href="" className="tranding-cat-lin">
                        <i className="icofont-color-bucket"></i> Art
                      </a>
                    </li>
                    <li>
                      <a href="" className="tranding-cat-lin">
                        <i className="icofont-ui-camera"></i> Photography
                      </a>
                    </li>
                    <li>
                      <a href="" className="tranding-cat-lin">
                        <i className="icofont-downloaded"></i> Domain
                      </a>
                    </li>
                    <li>
                      <a href="" className="tranding-cat-lin">
                        <i className="icofont-book-mark"></i> Collectibles
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* // ==============expolor product============= */}
          <div className="expolor-product cpb-6">
            <div className="container">
              <div className="row mt-5"> 
              <CollectionCard/>          
              </div>
            </div>
          </div>
          {/* // ==============expolor product============= */}
        </div>
      </div>
    </>
  )
}

export default Collection