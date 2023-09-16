import React from 'react'

const DropEarning = () => {
  return (
    <>
      <div className="new-create-content-wrapper">
        <div className="new-create-collection-item">
          <h5 className="modal-titles">Drop Earning</h5>
          <p>
            Add wallt to receice eaning from yuour rimary sale. you can add
            multiple wallets by using a splitter contract OpenSea take a 10% fee
            on pramary sales.
          </p>
        </div>
        <div className="new-create-collection-item collection-item-address">
          <input
            className="input-fuild1"
            type="text"
            placeholder="089fdsdsf9sf7s9009a7sx07a9d7ad8"
          />
     <span className="input-fuild2">90%</span>
        </div>
        <div className="new-create-collection-item collection-item-address">
          <span className="opensea-earning">
            {" "}
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_218_3130)">
                <path
                  d="M15 0C6.7175 0 0 6.7175 0 15C0 23.2825 6.7175 30 15 30C23.2825 30 30 23.2825 30 15C30 6.7175 23.2863 0 15 0ZM7.4 15.5037L7.46375 15.4025L11.3675 9.2975C11.3806 9.27743 11.3988 9.26124 11.4203 9.25062C11.4417 9.24001 11.4657 9.23535 11.4895 9.23714C11.5134 9.23892 11.5364 9.24709 11.556 9.26079C11.5757 9.27449 11.5913 9.29321 11.6013 9.315C12.2513 10.7763 12.8163 12.5937 12.5513 13.725C12.4413 14.19 12.1325 14.82 11.7838 15.4025C11.739 15.4877 11.6902 15.5707 11.6375 15.6512C11.6249 15.6692 11.608 15.6838 11.5883 15.6936C11.5687 15.7034 11.5469 15.7082 11.525 15.7075H7.51625C7.49232 15.7079 7.46874 15.7018 7.44801 15.6898C7.42728 15.6778 7.41018 15.6605 7.39851 15.6396C7.38685 15.6187 7.38106 15.595 7.38176 15.5711C7.38246 15.5472 7.38963 15.5239 7.4025 15.5037H7.4ZM24.7925 17.6038C24.7928 17.6304 24.7853 17.6566 24.7708 17.6791C24.7564 17.7015 24.7357 17.7192 24.7112 17.73C24.4075 17.8588 23.3737 18.3362 22.9437 18.9325C21.8462 20.46 21.0088 22.645 19.1338 22.645H11.3163C10.6562 22.644 10.0028 22.513 9.39345 22.2594C8.78407 22.0058 8.23064 21.6345 7.76479 21.1669C7.29894 20.6994 6.9298 20.1445 6.67846 19.5342C6.42712 18.9239 6.29852 18.27 6.3 17.61V17.52C6.3 17.4475 6.36 17.3875 6.435 17.3875H10.7913C10.8788 17.3875 10.9413 17.4662 10.935 17.5525C10.9025 17.835 10.9563 18.1262 11.0913 18.39C11.3488 18.915 11.8863 19.2425 12.465 19.2425H14.6225V17.5587H12.4875C12.4625 17.5585 12.438 17.5514 12.4167 17.5383C12.3954 17.5251 12.3781 17.5064 12.3667 17.4842C12.3552 17.4619 12.3501 17.437 12.3518 17.412C12.3535 17.387 12.3619 17.363 12.3763 17.3425L12.455 17.23C12.655 16.9413 12.9438 16.4975 13.2313 15.99C13.4263 15.6475 13.6163 15.2825 13.7688 14.915C13.7988 14.85 13.8225 14.7813 13.85 14.715C13.8912 14.5975 13.9337 14.4875 13.9637 14.3788C13.9932 14.2865 14.0203 14.1936 14.045 14.1C14.1163 13.7875 14.1463 13.4575 14.1463 13.1163C14.1463 12.9813 14.1413 12.84 14.1288 12.7075C14.1225 12.5613 14.1038 12.4138 14.0863 12.2675C14.0723 12.1366 14.0523 12.0065 14.0262 11.8775C13.9926 11.6811 13.9518 11.4859 13.9038 11.2925L13.8863 11.2175C13.8488 11.0825 13.8163 10.955 13.7738 10.8212C13.6547 10.4105 13.5179 10.0051 13.3637 9.60625C13.31 9.45621 13.2508 9.3082 13.1862 9.1625C13.0962 8.94 13.0038 8.73875 12.92 8.55C12.8783 8.46914 12.8391 8.38701 12.8025 8.30375C12.7618 8.21392 12.7189 8.12515 12.6737 8.0375C12.6437 7.97125 12.6075 7.9075 12.5838 7.8475L12.32 7.3625C12.2837 7.29625 12.3437 7.215 12.4162 7.23625L14.0663 7.6825H14.0787L14.295 7.745L14.535 7.8125L14.6225 7.83625V6.8575C14.6225 6.38375 15 6 15.4712 6C15.5825 5.9997 15.6927 6.02192 15.7952 6.06531C15.8976 6.1087 15.9903 6.17238 16.0675 6.2525C16.2271 6.41348 16.3169 6.63082 16.3175 6.8575V8.3125L16.4937 8.36125C16.5062 8.3675 16.5212 8.37375 16.5325 8.3825C16.575 8.4125 16.6375 8.46 16.7163 8.52C16.7788 8.5675 16.845 8.6275 16.9225 8.69125C17.1693 8.89235 17.4087 9.10249 17.64 9.32125C17.9075 9.57 18.2075 9.86125 18.495 10.185C18.5762 10.2775 18.6537 10.3675 18.735 10.4675C18.8125 10.5662 18.9 10.6625 18.9725 10.7575C19.0713 10.8875 19.1725 11.0225 19.2663 11.1625C19.3075 11.2288 19.3587 11.2975 19.3975 11.3637C19.5175 11.5412 19.62 11.7238 19.7187 11.9075C19.7612 11.9913 19.8025 12.0838 19.8388 12.1738C19.95 12.42 20.0375 12.6687 20.0912 12.9212C20.109 12.9748 20.1212 13.0301 20.1275 13.0862V13.0988C20.145 13.17 20.1512 13.2488 20.1575 13.3288C20.1927 13.6982 20.1475 14.0709 20.025 14.4212C19.9863 14.5262 19.95 14.6338 19.9025 14.7388C19.8087 14.9513 19.7012 15.1675 19.5725 15.3663C19.53 15.4413 19.4788 15.5188 19.4313 15.5938C19.3775 15.6725 19.32 15.7475 19.2725 15.8187C19.2038 15.9134 19.1316 16.0055 19.0562 16.095C18.99 16.185 18.9238 16.275 18.8488 16.3563C18.7475 16.4788 18.6487 16.5937 18.5425 16.7037C18.4825 16.7762 18.4175 16.8512 18.3475 16.9162C18.2825 16.9912 18.2125 17.0575 18.1525 17.1175C18.0475 17.2225 17.965 17.3012 17.8925 17.37L17.7213 17.5225C17.6974 17.5464 17.665 17.5599 17.6312 17.56H16.3175V19.2425H17.97C18.3388 19.2425 18.69 19.1125 18.975 18.87C19.0713 18.7862 19.4938 18.42 19.995 17.8675C20.0113 17.8487 20.0332 17.8356 20.0575 17.83L24.62 16.5087C24.64 16.503 24.6611 16.5019 24.6817 16.5056C24.7022 16.5093 24.7215 16.5178 24.7383 16.5302C24.755 16.5427 24.7686 16.5589 24.778 16.5775C24.7874 16.5961 24.7924 16.6166 24.7925 16.6375V17.6038Z"
                  fill="#0364FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_218_3130">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            OpenSea
          </span>
          <span className="input-fuild2">90%</span>
        </div>
        <div className="add-collection-address">
          <button>+ Add Address</button>
        </div>

        <div className="save-col-btn">
          <button className="my-collection-btn save-collection-btn">
            Save Collection
          </button>
        </div>
      </div>
    </>
  )
}

export default DropEarning