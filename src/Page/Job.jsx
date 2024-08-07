import React, { useState } from "react";
import './Job.css'

function Job() {
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("Tất cả tỉnh/thành");
  const [category, setCategory] = useState("Tất cả ngành nghề");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Position:", position);
    console.log("Location:", location);
    console.log("Category:", category);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };



    
  return (
    <div className="container">
      <div className="header">
        <h1>Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc.</h1>
        <p>
          Tiếp cận 40,000+ tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh
          nghiệp uy tín tại Việt Nam
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Vị trí tuyển dụng"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="search-input"
          />
          <div className="dropdown-container">
            <div className="dropdown">
              <span className="dropdown-label" onClick={() => {}}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 11.5L7 1.5"
                    stroke="#767676"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1.5 7L11.5 7"
                    stroke="#767676"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                {location}
              </span>
              <ul className="dropdown-list">
                <li
                  onClick={(e) => {
                    handleLocationChange(e);
                  }}
                >
                  Hà Nội
                </li>
                <li
                  onClick={(e) => {
                    handleLocationChange(e);
                  }}
                >
                  Hồ Chí Minh
                </li>
                <li
                  onClick={(e) => {
                    handleLocationChange(e);
                  }}
                >
                  Đà Nẵng
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown-container">
            <div className="dropdown">
              <span className="dropdown-label" onClick={() => {}}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 11.5L7 1.5"
                    stroke="#767676"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1.5 7L11.5 7"
                    stroke="#767676"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                {category}
              </span>
              <ul className="dropdown-list">
                <li
                  onClick={(e) => {
                    handleCategoryChange(e);
                  }}
                >
                  Công nghệ
                </li>
                <li
                  onClick={(e) => {
                    handleCategoryChange(e);
                  }}
                >
                  Tài chính
                </li>
                <li
                  onClick={(e) => {
                    handleCategoryChange(e);
                  }}
                >
                  Bán lẻ
                </li>
              </ul>
            </div>
          </div>
          <button type="submit" className="search-button">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4167 9.58333L6.41667 13.5833"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5833 6.41667L9.58333 2.41667"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Tìm kiếm
          </button>
        </div>
      </form>


      <div className="info">
        <div className="item">
          <span className="label">Vị trí chờ bạn khám phá</span>
          <span className="value">46.058</span>
        </div>
        <div className="item">
          <span className="label">Việc làm mới nhất</span>
          <span className="value">5.284</span>
        </div>
        <div className="item">
          <span className="label">Cập nhật lúc:</span>
          <span className="value">19:31 06/08/2024</span>
        </div>
      </div>

    {/* việc làm tốt nhất */}
    

    </div>

    
  );
};

export default Job;