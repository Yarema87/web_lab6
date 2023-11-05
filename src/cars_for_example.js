import React from "react";

const cars_for_example = [
    {
    maker: 'Renault ',
    model: 'Logan',
    power: 250,
    max_speed: 210,
    price: 7100
    },
    {
      maker: 'Skoda ',
      model: 'Fabia',
      power: 220,
      max_speed: 190,
      price: 4500
    },
    {
      maker: 'Ford ',
      model: 'Mustang',
      power: 290,
      max_speed: 235,
      price: 13000
    }
  ]

function CarsForExample(){
    return(
        <div>
            {cars_for_example.map((car) => (
                <div key={car.model} id="Cars_container">
                    <div className="Car_container">
                        <p className="Car_paragraph">Model: {car.maker} {car.model}</p>
                        <p className="Car_paragraph">Power: {car.power}</p>
                        <p className="Car_paragraph">Max speed: {car.max_speed}</p>
                        <p className="Car_paragraph">Price: {car.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
} 
export default CarsForExample;