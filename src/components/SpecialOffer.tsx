import React from "react";
import { Pizza } from "../types";
import SpecialOfferCss from "./SpecialOffer.module.css";
import { WithAddToCartProps } from "./AddToCart";

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  return (
    <div className={SpecialOfferCss.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <WithAddToCartProps>
        {({ addToCart }) => {
          return (
            <button
              type="button"
              onClick={() =>
                addToCart({
                  id: pizza.id,
                  name: pizza.name,
                  price: pizza.price,
                })
              }
            >
              Add To Cart
            </button>
          );
        }}
      </WithAddToCartProps>
    </div>
  );
};

export default SpecialOffer;
