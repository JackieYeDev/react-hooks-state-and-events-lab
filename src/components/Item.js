import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const display  = inCart? "in-cart" : "";
  const addToCart = inCart ? "Remove From Cart" : "Add to Cart";

  function handleClick() {
    const newToggle = !inCart;
    setInCart(newToggle);
  }

  return (
    <li className={display}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{addToCart}</button>
    </li>
  );
}

export default Item;
