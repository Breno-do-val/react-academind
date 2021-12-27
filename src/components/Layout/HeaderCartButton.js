import React from "react";

import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = React.useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
