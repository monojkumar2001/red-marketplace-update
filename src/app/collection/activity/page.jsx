import React from "react";
import "../../../styles/dashboard.css";
const page = () => {
  return (
    <>
      <div className="ranking cpy-6">
        <div className="container">
          <div className="ranking-wrapper">
            <div className="table-responsive">
              <table className="table table-box-activity">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="recent-item-list">
                        <div className="item-list-left">
                          <img src="/assets/img/action/3.png" alt="" />
                        </div>
                        <div className="item-list-right">
                          <h4>Sacral Metatron</h4>
                          <p>Hannah Zeo</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>30,6453.01 ETH</span>
                    </td>
                    <td>
                      <span>1</span>
                    </td>
                    <td>
                      <div className="red-vat">
                        <span>RED MARKET</span>
                      </div>
                    </td>
                    <td>
                      <div className="red-vat">
                        <span>ES6HGN89</span>
                      </div>
                    </td>
                    <td>1 Day ago</td>
                  </tr>
                </tbody>
              </table>
              <nav aria-label="" className="d-flex justify-content-end" >
                <ul class="pagination">
                  <li class="page-item disabled">
                    <a
                      class="page-link"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
