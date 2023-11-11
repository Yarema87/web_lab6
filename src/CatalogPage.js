import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { SearchBar } from "./SearchBar";
import { renderCars } from "./render";
import { All_cars } from "./AllCars";

function CatalogPage() {

  const [sortedCars, setSortedCars] = useState(All_cars);

  const sortByPower = () => {
    const sortedCarsByPower = [...All_cars].sort((a, b) => b.power - a.power);
    setSortedCars(sortedCarsByPower);
  };

  const sortBySpeed = () => {
    const sortedCarsBySpeed = [...All_cars].sort((a, b) => b.max_speed - a.max_speed);
    setSortedCars(sortedCarsBySpeed);
  };

  const sortByPrice = () => {
    const sortedCarsByPrice = [...All_cars].sort((a, b) => b.price - a.price);
    setSortedCars(sortedCarsByPrice);
  };
  const filterByPower = (minPower, maxPower) => {
    const filteredCarsByPower = [...All_cars].filter(car => car.power >= minPower && car.power <= maxPower);
    setSortedCars(filteredCarsByPower);
  };
  const filterBySpeed = (minSpeed, maxSpeed) => {
    const filteredCarsBySpeed = [...All_cars].filter(car => car.max_speed >= minSpeed && car.max_speed <= maxSpeed);
    setSortedCars(filteredCarsBySpeed);
  };
  const filterByPrice = (minPrice, maxPrice) => {
    const filteredCarsByPrice = [...All_cars].filter(car => car.price >= minPrice && car.price <= maxPrice);
    setSortedCars(filteredCarsByPrice);
  }
  const resetFilters = () => {
    setSortedCars(All_cars);
  }
  const searchByModel = (model) => {
    const foundCars = [...All_cars].filter(car => car.model == model || car.maker == model);
    setSortedCars(foundCars);
  }
  
  return (
    <div>
      <Header />
      <SearchBar onSortByPower={sortByPower} onSortBySpeed={sortBySpeed} onSortByPrice={sortByPrice} onFilterByPower={filterByPower} onFilterBySpeed={filterBySpeed} onFilterByPrice={filterByPrice} onResetFilters={resetFilters} onSearchByModel={searchByModel}/>
      {renderCars(sortedCars)}
      <Footer />
    </div>
  );
}

export default CatalogPage;
