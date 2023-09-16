import PageBanner from "@/components/Banner/PageBanner";
import React from "react";

const Listing = () => {
  return (
    <>
      <PageBanner title="List for sale" linkTitle="Pages" />
      <div className="profile-area cpy-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-4 col-md-12 mb-4">
              <h4 className="sm-title mb-3">New Collection item</h4>
              <div className="product-card">
                <div className="product-image">
                  <a href="" className="product-link">
                    <img
                      src="assets/img/product/1.png"
                      alt=""
                      className="product"
                    />
                  </a>
                </div>
                <div className="product-des">
                  <div className="name-diamond">
                    <div className="name-cat">
                      <a href="#" className="product-name">
                        "Cyber Doberman #766”
                      </a>
                      <p className="token-type">BSC</p>
                    </div>
                  </div>

                  <div className="buy-like">
                    <div className="author-info">
                      <img
                        src="assets/img/inner/7.jpg"
                        alt=""
                        className="author-img"
                      />
                      <div className="author-name-type">
                        <p className="author-type">Creator</p>
                        <a href="" className="creator-profile">
                          SalvadorDali
                        </a>
                      </div>
                    </div>
                    <div className="price-area">
                      <p className="price-type">Current Bid</p>
                      <p className="price"> 4.89 eTH</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-8 col-md-12">
              <h4 className="sm-title mb-3">
                Image, Video, Audio, or 3D Model*
              </h4>
              <span>Drag or choose your file to upload</span>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="profile-image-upload-card">
                    <div className="form-group">
                      <input
                        type="file"
                        name="file-7[]"
                        id="file-8"
                        className="inputfile"
                        multiple
                      />
                      <label for="file-8">
                        <span className="archive-name">Upload File</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-info mt-5">
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="input-title">Name</h4>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Item name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h4 className="input-title">External link</h4>
                    <p>
                      We will include a link to this URL on this item's detail
                      page, so that users can click to learn more about it. You
                      are welcome to link to your own webpage with more details.
                    </p>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="http://yoursite.io/item/123"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h4 className="input-title">Description</h4>
                    <p className="collection-discription">
                      The description will be included on the item's detail page
                      underneath its image. Markdown syntax is supported.
                    </p>
                    <div className="my-3">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        className="form-control"
                        rows="5"
                        placeholder="Provide a detailed description of your item."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h4 className="input-title">
                    Collection
                    </h4>
                    <p className="collection-discription">
                        This is the collection where your item will appear.
                      </p>
                    <div className="mb-3">
                      <select
                        class="form-select form-select-item"
                        aria-label="Default select example"
                      >
                        <option selected>Select collection</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-title">
                      <p>Blockchain</p>
                    </div>
                    <div className="mb-3">
                      <select
                        class="form-select form-select-item"
                        aria-label="Default select example"
                      >
                        <option selected>Ethereum</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-title">
                      <p>Freeze metadata</p>
                      <p className="collection-discription">
                        Freezing your metadata will allow you to permanently
                        lock and store all of this item's content in
                        decentralized file storage.
                      </p>
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="To freeze your metadata, you must create your item first."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
