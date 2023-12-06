import React from "react";
import { useParams } from "react-router-dom";
import { All_cars } from "../catalog_page/AllCars";
import logan from "../images/logan.jpeg"

const CarInfo = () => {
    const { id } = useParams();
    const selectedCar = All_cars.find((car) => car.id === parseInt(id));

    return(
        <div>
            {selectedCar && (
                <div className="Car_container" id="details_container">
                    <div className="car_container_top"><h2>Info about this car:</h2></div>
                    <img src={logan} className="car_image" alt="This car"></img>
                    <p>Model: {selectedCar.maker + " " + selectedCar.model}</p>
                    <p>Power: {selectedCar.power}hp</p>
                    <p>Max speed: {selectedCar.max_speed}kmph</p>
                    <p>Price: {selectedCar.price}$</p>
                </div>
            )}
        </div>
    );
};

export default CarInfo;
