import PageBanner from '@/components/Banner/PageBanner'
import NftCard from '@/components/NftCard/NftCard'
import CollectionModel from '@/components/Popup/CollectionModel'
const MyCollection = () => {
  return (
    <>
     <PageBanner title="Create Item" linkTitle='Pages'/>
     <div className="my-collection cpy-6">
        <div className="container">
          <div className="my-collection-title cpt-5">
            <h2>My Collections</h2>
            <p>
              Create curote andmariage colleciton of unique NFTs to share and
              sell . Learn more
            </p>
          </div>           
       <CollectionModel/>

          <div className="row g-4 cpt-7">
          <NftCard/>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCollection