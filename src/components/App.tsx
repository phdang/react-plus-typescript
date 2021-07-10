import React from "react";
import pizzas from "../data/pizzas.json";
import PizzaItems from "./Pizza";
import AppCss from "./App.module.css";
import PizzaSVG from "../svg/pizza.svg";
import Cart from "./Cart";
import AppStateProvider from "./AppState";
import SpecialOffer from "./SpecialOffer";
const App = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <AppStateProvider>
      <div className={AppCss.container}>
        <div className={AppCss.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCss.siteTitle}>Delicious Pizzas</div>
          <Cart />
        </div>
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className={AppCss.pizzaList}>
          {pizzas.map((pizza) => (
            <PizzaItems key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
