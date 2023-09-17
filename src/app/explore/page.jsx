import PageBanner from '@/components/Banner/PageBanner'
import ExploreNftCard from '@/components/NftCard/ExploreNftCard'
import Link from 'next/link'
import React from 'react'

const Explore = () => {
  return (
    <>
    <PageBanner title="Explore" linkTitle='Explore' />
      {/* ====================top collection=================== */}
      <div className="top-collection cpt-6">
        <div className="container">
          <div className="row">
            <div className="section-title explore-header-item">
              <div className="filtaring-category">
                <ul className="cat-fil-link">
                  <li>
                    <button className="tag-link">
                      All
                    </button>
                  </li>
                  <li>
                    <button className="tag-link">
                      Art
                    </button>
                  </li>
                  <li>
                    <button className="tag-link">
                      Music
                    </button>
                  </li>
                  <li>
                    <button className="tag-link">
                      Collectibles
                    </button>
                  </li>
                  <li>
                    <button className="tag-link">
                      Sports
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="top-collection-arefa cpy-5">
            <div className="top-collection-slider">
              <div className="row">
               
                <ExploreNftCard/>
               
              </div>

              <div className="load-more-area mt-4">
                <button className="custom-btn">
                  <span>Load More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore