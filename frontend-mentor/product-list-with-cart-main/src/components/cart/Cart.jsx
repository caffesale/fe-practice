import NeutralIcon from "../../../assets/images/icon-carbon-neutral.svg?react";
import CloseIcon from "../../../assets/images/icon-remove-item.svg?react";
import "./cart.css";

export default function Cart({ cartInfo, removeProduct }) {
  const handleRemoveItem = (name) => {
    removeProduct(name);
  };

  return (
    <div className="cart-receipt">
      <h2 className="cart-title">Your Cart ({cartInfo.totalCount})</h2>
      {cartInfo.products.map((product) => (
        <div key={product.name} className="item">
          <div>
            <p className="item-name">{product.name}</p>
            <div className="price-info">
              <b className="item-count">{product.quantity}x</b>
              <span className="curr-price">@ ${product.price.toFixed(2)}</span>
              <span className="total-price">
                ${(product.price * product.quantity).toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className="close-icon"
            onClick={() => handleRemoveItem(product.name)}
          >
            <CloseIcon />
          </button>
        </div>
      ))}
      <div className="order-total">
        <p>Order Total</p>
        <b>${cartInfo.totalPrice}</b>
      </div>
      <span className="campaign">
        <NeutralIcon /> This is a <b>Carbon-neutral</b> delivery
      </span>
      <button className="confirm-button">Confirm Order</button>
    </div>
  );
}
