import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increaseAmount } from '../cart_page/actions';
import { All_cars } from "../catalog_page/AllCars";
import { useParams } from "react-router-dom";

function OtherDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedCar = All_cars.find((car) => car.id === parseInt(id));

  const addToCartHandler = () => {
    dispatch(increaseAmount(selectedCar.model));
    navigate("/cart");
  };

  return (
    <div id="other_details">
      <Link to="/catalog">
        <button id="go_back">Go Back</button>
      </Link>
      <button id="to_cart" onClick={addToCartHandler}>
        Add to cart
      </button>
    </div>
  );
}

export default OtherDetails;
