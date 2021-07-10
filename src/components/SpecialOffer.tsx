import React from "react";
import { Pizza } from "../types";
import SpecialOfferCss from "./SpecialOffer.module.css";
import { withAddToCart, AddToCartProps } from "./AddToCart";

interface Props extends AddToCartProps {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
    });
  };
  return (
    <div className={SpecialOfferCss.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add To Cart
      </button>
    </div>
  );
};

export default withAddToCart(SpecialOffer);