import React from "react";
import logan from "./images/logan.jpeg";
import { Link } from "react-router-dom";


export function renderCars(cars) {
    return (
    <div className="render">
        {cars.map((car) => (
            <div key={car.model} id="Cars_container">
                <div className="Car_container">
                    <div className="car_container_top">Car {car.id}</div>
                    <div className="car_image"><img src={logan} alt="Some car"></img></div>
                    <p className="Car_paragraph" id="car_name">{car.maker} {car.model}</p>
                    <Link to={`/cars/${car.id}`}><button className="details">View details</button></Link>
                </div>
            </div>
        )
    )
    }
</div>)
}