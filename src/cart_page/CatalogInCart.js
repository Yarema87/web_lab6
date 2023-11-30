import React from 'react';
import { connect } from 'react-redux';
import { decreaseAmount, increaseAmount } from './actions'; 
import logan from '../images/logan.jpeg';
import { All_cars } from '../catalog_page/AllCars';

function CatalogInCart({ carAmounts, decreaseAmount, increaseAmount }) {
    const totalAmount = Object.keys(carAmounts).reduce(
        (total, carModel) => {
          const car = All_cars.find((car) => car.model === carModel);
          if (car) {
            return total + (carAmounts[carModel] || 0) * car.price;
          }
          return total;
        },
        0
      );
      

  return (
        <div className="catalog_in_cart">
        {All_cars.map((car) => (
            <div key={car.model} id="Cars_container_in_cart">
            <div className="Car_container_in_cart">
                <img src={logan} alt="Some car" className="car_image_in_cart" />
                <p className="Car_paragraph_in_cart" id="car_name">
                {car.maker} {car.model}
                </p>
                <button onClick={() => decreaseAmount(car.model)}>-</button>
                <p id="amount">{carAmounts[car.model] || 0}</p>
                <button onClick={() => increaseAmount(car.model)}>+</button>
                <p id="price_in_cart">{car.price}$</p>
            </div>
            </div>
        ))}
        <h5 id="total_amount">Total amount: ${totalAmount.toFixed(2)}</h5>
        </div>
  );
}

const mapStateToProps = (state) => ({
  carAmounts: state,
});

export default connect(mapStateToProps, { decreaseAmount, increaseAmount })(CatalogInCart);
