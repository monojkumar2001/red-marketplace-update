import PageBanner from "@/components/Banner/PageBanner";
import CollectionHeader from "@/components/Collection/CollectionHeader";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <PageBanner title="Collection" linkTitle="Page" link="/collection" />
      <CollectionHeader />
      {children}
    </>
  );
};

export default layout;
