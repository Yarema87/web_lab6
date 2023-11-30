import React, { useState } from "react";

const openFilterMenu = () => {
    document.getElementById("filter_list").classList.toggle("active");
    document.querySelector(".Search_bar").classList.add("active");
  };
const openPowerFilter = () => {
    document.getElementById("power_filter").classList.toggle("active");
    document.querySelector(".Search_bar").classList.add("wider");
  };
const openSpeedFilter = () => {
    document.getElementById("speed_filter").classList.toggle("active");
    document.querySelector(".Search_bar").classList.add("wider");
  };
const openPriceFilter = () => {
    document.getElementById("price_filter").classList.toggle("active");
    document.querySelector(".Search_bar").classList.add("wider");
  }

function Filters({onFilterByPower, onFilterBySpeed, onFilterByPrice}){
    const [minPower, setMinPower] = useState('0');
    const [maxPower, setMaxPower] = useState('2000');
    const [minSpeed, setMinSpeed] = useState('0');
    const [maxSpeed, setMaxSpeed] = useState('400');
    const [minPrice, setMinPrice] = useState('0');
    const [maxPrice, setMaxPrice] = useState('1000000');

    const handleMinPower = (event) => {
        setMinPower(event.target.value);
    }
    const handleMaxPower = (event) => {
        setMaxPower(event.target.value);
    }
    const handleMinSpeed = (event) => {
        setMinSpeed(event.target.value);
    }
    const handleMaxSpeed = (event) => {
        setMaxSpeed(event.target.value);
    }
    const handleMinPrice = (event) => {
        setMinPrice(event.target.value);
    }
    const handleMaxPrice = (event) => {
        setMaxPrice(event.target.value);
    }

    return(
        <span className="filter">
        <p className="filter_text">Filter by:</p>
        <button className="low_pointer" onClick={openFilterMenu}>
          ▼
        </button>
        <ul className="filter_list" id="filter_list">
          <li>
            <button onClick={openPowerFilter}>Power</button>
            <ul className="filters" id="power_filter">
                <li>min<input type="number" id="power_min" value={minPower} onChange={handleMinPower}></input></li>
                <li>max<input type="number" id="power_max" value={maxPower} onChange={handleMaxPower}></input></li>
                <li><button onClick={() => onFilterByPower(minPower, maxPower)}>Filter</button></li>
            </ul>
          </li>
          <li>
            <button onClick={openSpeedFilter}>Max speed</button>
            <ul className="filters" id="speed_filter">
                <li>min<input type="number" id="speed_min" value={minSpeed} onChange={handleMinSpeed}></input></li>
                <li>max<input type="number" id="speed_max" value={maxSpeed} onChange={handleMaxSpeed}></input></li>
                <li><button onClick={() => onFilterBySpeed(minSpeed, maxSpeed)}>Filter</button></li>
            </ul>
          </li>
          <li>
            <button onClick={openPriceFilter}>Price</button>
            <ul className="filters" id="price_filter">
                <li>min<input type="number" id="price_min" value={minPrice} onChange={handleMinPrice}></input></li>
                <li>max<input type="number" id="price_max" value={maxPrice} onChange={handleMaxPrice}></input></li>
                <li><button onClick={() => onFilterByPrice(minPrice, maxPrice)}>Filter</button></li>
            </ul>
          </li>
        </ul>
      </span>
    )
}

export default Filters;