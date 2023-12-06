import React, { useState } from "react";
import Filters from "./filters";
import Sorting from "./sorting";


export function SearchBar({onSortByPower, onSortBySpeed, onSortByPrice, onFilterByPower, onFilterBySpeed, onFilterByPrice, onResetFilters, onSearchByModel}){
  const applyChanges = () => {
    const elementsToRemoveActiveClass = [
      ".Search_bar",
      ".filters",
      "#filter_list",
      "#power_filter",
      "#speed_filter",
      "#price_filter",
      "#sort_list"
    ];
  
    elementsToRemoveActiveClass.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        element.classList.remove("active");
      }
    });
    document.querySelector(".Search_bar").classList.remove("wider");
  };

  const [model, setModel] = useState('');
  const searchCar = (event) => {
    setModel(event.target.value);
  }
  
  return (
    <div className="Search_bar">
      <Filters onFilterByPower={onFilterByPower} onFilterBySpeed={onFilterBySpeed} onFilterByPrice={onFilterByPrice}/>
      <Sorting onSortByPower={onSortByPower} onSortBySpeed={onSortBySpeed} onSortByPrice={onSortByPrice} />
      <span className="filter">
        <button id="reset" onClick={onResetFilters}>Reset filters</button>
      </span>
      <span className="filter" id="search">
        <input type="search" className="search" placeholder="enter model" onChange={searchCar}></input>
        <button onClick={() => onSearchByModel(model)} id="search_button">Search</button>
      </span>
      <span className="filter" id="fourth_filter">
        <button id="Apply" onClick={applyChanges}>Hide</button>
      </span>

    </div>
  );
};
