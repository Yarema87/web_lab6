import React from "react";

const openSortMenu = () => {
    document.getElementById("sort_list").classList.toggle("active");
    document.querySelector(".Search_bar").classList.add("active");
  };

function Sorting({onSortByPower, onSortBySpeed, onSortByPrice}){
    return(
        <span className="filter">
        <p className="filter_text">Sort by:</p>
        <button className="low_pointer" onClick={openSortMenu}>
          ▼
        </button>
        <ul className="filter_list" id="sort_list">
          <li>
            <button onClick={onSortByPower}>Power</button>
          </li>
          <li>
            <button onClick={onSortBySpeed}>Max speed</button>
          </li>
          <li>
            <button onClick={onSortByPrice}>Price</button>
          </li>
        </ul>
      </span>
    )
}
export default Sorting;