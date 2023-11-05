import React from "react";
import { useParams } from "react-router-dom";
import { All_cars } from "./AllCars";

const CarInfo = () => {
    const { id } = useParams();
    const selectedCar = All_cars.find((car) => car.id === parseInt(id));

    return(
        <div>
            {selectedCar && (
                <div className="Car_container">
                    <div className="car_container_top"><h2>Info about this car:</h2></div>
                    <img src="./logan.jpeg" className="car_image" alt="image of a car"></img>
                    <p>Model: {selectedCar.maker + selectedCar.model}</p>
                    <p>Power: {selectedCar.power}</p>
                    <p>Max speed: {selectedCar.max_speed}</p>
                    <p>Price: {selectedCar.price}</p>
                </div>
            )}
        </div>
    );
};

export default CarInfo;
