import React from "react";
import "./News.css";
import Globe from "../Assets/globeImage.webp";
import { FiSearch } from "react-icons/fi";

const News = ({ searchContent, setsearchContent }) => {
  return (
    <div className="newsHeader">
      <div className="left">
        <div className="newsLogo">
          <img src={Globe} alt="Globe-Image" />
        </div>
        <div className="newsTitle">
          <h4>NEWS</h4>
        </div>
      </div>

      <div className="middle">
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search"
            value={searchContent}
            onChange={(e) => setsearchContent(e.target.value)}
          />
          <button type="submit">
            <FiSearch className="search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
