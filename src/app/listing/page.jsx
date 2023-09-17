"use client";
import { useState } from "react";
import PageBanner from "@/components/Banner/PageBanner";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
const Listing = () => {
  const [inputValue, setInputValue] = useState("");
  const [days, setDays] = useState("");

  const handleChange = (event) => {
    setDays(event.target.value);
  };
  const number = (e) => {
    const newValue = e.target.value.replace(/[^0-9.]/g, "");
    setInputValue(newValue);
  };
  return (
    <>
      <PageBanner title="List for sale" linkTitle="Pages" />
      <div className="profile-area cpy-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-4 col-md-12 mb-4">
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
                      <span className="product-name">
                        "Cyber Doberman #766”
                      </span>
                      <p className="token-type">BSC</p>
                    </div>
                  </div>

                  <div className="buy-like">
                    <div className="author-info">
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
              <div className="form-info">
                <h4 className="sm-title mb-3">
                Choose a type of sale
              </h4>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="mb-3 list-fixed-price-item-content  d-flex align-items-center justify-content-between">
                      <label htmlFor="check" className="list-fixed-price-item">
                        <span>Fixed price</span>
                        <p>The item is listed at the price you set.</p>
                      </label>
                      <input
                        id="check"
                        className="list-check-box"
                        type="radio"
                        placeholder="Item name"
                      />
                    </div>
                  </div>

                  <div className="col-md-12 mb-3">
                    <div className="mb-3 list-fixed-price-item-content  d-flex align-items-center justify-content-between">
                      <label htmlFor="check2" className="list-fixed-price-item">
                        <span>Sell to highest bidder</span>
                        <p>The item is listed for auction.</p>
                      </label>
                      <input
                        id="check2"
                        className="list-check-box"
                        type="radio"
                        placeholder="Item name"
                      />
                    </div>
                  </div>

                  <div className="col-md-12 ">
                  <h4 className="sm-title mb-3">
                  Set a price
              </h4>
                    <div className="mb-3 list-fixed-price-item-content">
                      <span>Starting price</span>
                      <div className="nft-item-price mt-3 d-flex align-items-center justify-content-between">
                        <input
                          type="text"
                          placeholder="Input price"
                          className=""
                          id="numberField"
                          required
                          value={inputValue}
                          onChange={number}
                        />
                        <h4>ETH</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 my-3">
                  <h4 className="sm-title mb-3">
                  Duration
              </h4>
                    <Box sx={{ minWidth: "100%"}}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            All Days
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={days}
                            label="All Days"
                            onChange={handleChange}
                          >
                            <MenuItem value={1}>1 hour</MenuItem>
                            <MenuItem value={2}>6 hour</MenuItem>
                            <MenuItem value={3}>1 day</MenuItem>
                            <MenuItem value={4}>3 days</MenuItem>
                            <MenuItem value={5}>7 days</MenuItem>
                            <MenuItem value={5}>1 month</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mt-4">
                    <button className="custom-btn">
                      Complete Listing
                    </button>
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
