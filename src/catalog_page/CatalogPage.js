import React, { useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import Loader from "./loader";
import axios, { isCancel, AxiosError} from "axios";
import { SearchBar } from "./SearchBar";
import { renderCars } from "../render";
import { All_cars } from "./AllCars"

function CatalogPage() {

  const [sortedCars, setSortedCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const post_url = 'http://localhost:5000/catalog';
    const get_url = 'http://localhost:5000/catalog'

    axios.post(post_url, All_cars)
  .then(response => {
    console.log('Cars posted successfully:', response.data);
  })
  .catch(error => {
    console.error('Error occurred during POST request:', error);
    setLoading(false); 
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      const response = await axios.get(get_url);
      setSortedCars(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);
      
  const sortByPower = () => {
    const sortedCarsByPower = [...sortedCars].sort((a, b) => b.power - a.power);
    setSortedCars(sortedCarsByPower);
  };

  const sortBySpeed = () => {
    const sortedCarsBySpeed = [...sortedCars].sort((a, b) => b.max_speed - a.max_speed);
    setSortedCars(sortedCarsBySpeed);
  };

  const sortByPrice = () => {
    const sortedCarsByPrice = [...sortedCars].sort((a, b) => b.price - a.price);
    setSortedCars(sortedCarsByPrice);
  };

 const filterByPower = (minPower, maxPower) => {
  const url = `http://localhost:5000/catalog/filter/power?min_power=${minPower}&max_power=${maxPower}`;

  axios.get(url)
    .then(response => {
      console.log('Data received:', response.data);
      setSortedCars(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

  const filterBySpeed = (minSpeed, maxSpeed) => {
    const url = `http://localhost:5000/catalog/filter/speed?min_speed=${minSpeed}&max_speed=${maxSpeed}`;

  axios.get(url)
    .then(response => {
      console.log('Data received:', response.data);
      setSortedCars(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

  const filterByPrice = (minPrice, maxPrice) => {
    const url = `http://localhost:5000/catalog/filter/price?min_price=${minPrice}&max_price=${maxPrice}`;

  axios.get(url)
    .then(response => {
      console.log('Data received:', response.data);
      setSortedCars(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};
  const resetFilters = () => {
    setSortedCars(All_cars);
  }
  const searchByModel = (model) => {
    const foundCars = [...All_cars].filter(car => car.model === model || car.maker === model);
    setSortedCars(foundCars);
  }
  
return (
  <div>
    <Header />
    <SearchBar onSortByPower={sortByPower} onSortBySpeed={sortBySpeed} onSortByPrice={sortByPrice} onFilterByPower={filterByPower} onFilterBySpeed={filterBySpeed} onFilterByPrice={filterByPrice} onResetFilters={resetFilters} onSearchByModel={searchByModel}/>
    {loading ? (
      <Loader />
    ) : (
      <div>
        {renderCars(sortedCars)}
      </div>
    )}
    <Footer />
  </div>
);
}

export default CatalogPage;
