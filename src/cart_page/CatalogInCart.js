import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseAmount, increaseAmount } from './actions';
import logan from '../images/logan.jpeg';
import { All_cars } from '../catalog_page/AllCars';

function CatalogInCart() {
  const carAmounts = useSelector((state) => state);
  const dispatch = useDispatch();

  const carsInCart = All_cars.filter((car) => carAmounts[car.model] > 0);

  const totalAmount = carsInCart.reduce((total, car) => {
    return total + carAmounts[car.model] * car.price;
  }, 0);

  return (
    <div className="catalog_in_cart">
      {carsInCart.map((car) => (
        <div key={car.model} id="Cars_container_in_cart">
          <div className="Car_container_in_cart">
            <img src={logan} alt="Some car" className="car_image_in_cart" />
            <p className="Car_paragraph_in_cart" id="car_name">
              {car.maker} {car.model}
            </p>
            <button onClick={() => dispatch(decreaseAmount(car.model))}>-</button>
            <p id="amount">{carAmounts[car.model] || 0}</p>
            <button onClick={() => dispatch(increaseAmount(car.model))}>+</button>
            <p id="price_in_cart">{car.price}$</p>
          </div>
        </div>
      ))}
      <h5 id="total_amount">Total amount: ${totalAmount.toFixed(2)}</h5>
    </div>
  );
}

export default CatalogInCart;
