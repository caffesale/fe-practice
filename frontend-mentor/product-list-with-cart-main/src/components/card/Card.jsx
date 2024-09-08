import React from "react";
import CartIcon from "../../../assets/images/icon-add-to-cart.svg?react";
import DecrementIcon from "../../../assets/images/icon-decrement-quantity.svg?react";
import IncrementIcon from "../../../assets/images/icon-increment-quantity.svg?react";
import "./card.css";

function Card({
  image,
  category,
  name,
  price,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) {
  const [inputMode, setInputMode] = React.useState(false);

  const handleInputMode = () => {
    setInputMode((prevState) => !prevState);
  };

  const handleDecrementCounter = () => {
    decreaseQuantity(name);
  };
  const handleIncrementCounter = () => {
    increaseQuantity(name);
  };
  return (
    <div className="card">
      <div className="image-section">
        <img
          className="image"
          src={image.desktop}
          alt={`Dessert Image, ${name}`}
          width={200}
          height={200}
        />
        {inputMode ? (
          <div className="count-container button" data-counter>
            <button className="count-icon" onClick={handleDecrementCounter}>
              <DecrementIcon />
            </button>
            <p>{quantity}</p>
            <button className="count-icon" onClick={handleIncrementCounter}>
              <IncrementIcon />
            </button>
          </div>
        ) : (
          <>
            <button
              className="count-container button"
              type="button"
              onClick={handleInputMode}
            >
              <CartIcon />
              Add to Cart
            </button>
          </>
        )}
      </div>
      <div className="description">
        <p className="category">{category}</p>
        <h3 className="dessert-name">{name}</h3>
        <b className="price">{price.toFixed(2)}</b>
      </div>
    </div>
  );
}

export default React.memo(Card, (prevState, nextState) => {
  return prevState.quantity === nextState.quantity;
});
