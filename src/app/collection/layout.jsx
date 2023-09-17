import PageBanner from "@/components/Banner/PageBanner";
import CollectionHeader from "@/components/Collection/CollectionHeader";
import ItemSidebar from "@/components/CollectionItem/ItemSidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <PageBanner title="Collection" linkTitle="Page" link="/collection" />
      <CollectionHeader />

      <div className="profile-info">
        <div className="container-fluid">
          <div className="my-5">
            <div className="row">
              <ItemSidebar/>
              {children}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default layout;
