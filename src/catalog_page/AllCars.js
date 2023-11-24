import React, { useEffect } from "react";
import { renderCars } from "../render";
import axios, { isCancel, AxiosError} from "axios";

export const All_cars = [
    {
        id: 1,
        maker: 'Renault',
        model: 'Logan',
        power: 250,
        max_speed: 205,
        price: 7100,
        },
        {
        id: 2,  
        maker: 'Skoda',
        model: 'Fabia',
        power: 220,
        max_speed: 190,
        price: 4500
        },
        {
        id: 3,  
        maker: 'Ford',
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
        <renderCars />
    )
}

export default AllCars;
