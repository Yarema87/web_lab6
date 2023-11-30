import React, { useState } from "react";
import { All_cars } from "../catalog_page/AllCars";


function CarsForExample(){
    const [carsForExample, setCarsForExample] = useState(All_cars.slice(0,3));
    const viewMore = () => {
        setCarsForExample(All_cars);
    }
    return(
        <div>
            {carsForExample.map((car) => (
                <div key={car.model} id="Cars_container">
                    <div className="Car_container">
                        <p className="Car_paragraph">Model: {car.maker} {car.model}</p>
                        <p className="Car_paragraph">Power: {car.power}</p>
                        <p className="Car_paragraph">Max speed: {car.max_speed}</p>
                        <p className="Car_paragraph">Price: {car.price}</p>
                    </div>
                </div>
            ))}
            <div>
                <button className='View_more' onClick={viewMore}>View more</button>
            </div>
        </div>
    )
} 
export default CarsForExample;