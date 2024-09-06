import productData from "./data.json";
import React from "react";

export default function useProduct() {
  const [products, setProducts] = React.useState(
    productData.map((product) => {
      product["quantity"] = 0;
      return product;
    })
  );
  const cartInfo = products.reduce(
    (acc, product) => {
      if (product.quantity <= 0) return acc;
      acc.products.push(product);
      acc.totalPrice += product.quantity * product.price;
      acc.totalCount += product.quantity;
      return acc;
    },
    {
      products: [],
      totalPrice: 0,
      totalCount: 0,
    }
  );
  const increaseQuantity = (productName) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.name === productName
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  const decreaseQuantity = (productName) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.name === productName && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };
  const removeProduct = (productName) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.name === productName ? { ...product, quantity: 0 } : product
      )
    );
  };
  return {
    products,
    cartInfo,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
  };
}
