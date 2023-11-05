import React from "react";
import { Link } from "react-router-dom";

export const All_cars = [
    {
        id: 1,
        maker: 'Renault ',
        model: 'Logan',
        power: 250,
        max_speed: 210,
        price: 7100,
        },
        {
          id: 2,  
          maker: 'Skoda ',
          model: 'Fabia',
          power: 220,
          max_speed: 190,
          price: 4500
        },
        {
          id: 3,  
          maker: 'Ford ',
          model: 'Mustang',
          power: 290,
          max_speed: 235,
          price: 13000
        },
        {
            id: 4,
            maker: 'Renault',
            model: 'Scenic',
            power: 200,
            max_speed: 210,
            price: 9100
        }
]

function AllCars(){
    return(
        <div>
            {All_cars.map((car) => (
                <div key={car.model} id="Cars_container">
                    <div className="Car_container">
                        <div className="car_container_top">Car {car.id}</div>
                        <div className="car_image"><img src="./logan.jpeg"></img></div>
                        <p className="Car_paragraph" id="car_name">{car.maker} {car.model}</p>
                        <p className="Car_paragraph">Power: {car.power}</p>
                        <p className="Car_paragraph">Max speed: {car.max_speed}</p>
                        <p className="Car_paragraph">Price: {car.price}</p>
                        <Link to={`/cars/${car.id}`}><button className="details">View details</button></Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllCars;
