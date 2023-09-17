import ItemSidebar from "@/components/CollectionItem/ItemSidebar";
import CollectionCard from "@/components/NftCard/CollectionCard";


const layout = ({ children }) => {
  return (
    <>
      <div className="profile-info">
        <div className="container-fluid">
          <div className="my-5">
            <div className="row">
              <ItemSidebar/>
       {children}
            </div>
          </div>

          {/* // ==============expolor product============= */}

          {/* // ==============expolor product============= */}
        </div>
      </div>
    </>
  );
};

export default layout;
