import React from "react";
import PizzaCSS from "./Pizza.module.css";
import { Pizza } from "../types";
import { withAddToCart, AddToCartProps } from "./AddToCart";
interface Props extends AddToCartProps {
  pizza: Pizza;
}

const PizzaItems: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };
  return (
    <li className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button
        type="button"
        className={PizzaCSS.button}
        onClick={handleAddToCartClick}
      >
        Add To Cart
      </button>
    </li>
  );
};

export default withAddToCart(PizzaItems);
