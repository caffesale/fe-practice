import "./App.css";
import Card from "./components/card/Card";
import Cart from "./components/cart/Cart";
import useProduct from "./api/useProduct";

function App() {
  const {
    products,
    cartInfo,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
  } = useProduct();

  return (
    <main className="flex">
      <div className="container">
        <section className="product-list" aria-labelledby="title">
          <h1 className="title" id="title">
            Desserts
          </h1>

          <div className="list">
            {products.map((dessert) => {
              return (
                <Card
                  key={dessert.name}
                  {...dessert}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              );
            })}
          </div>
        </section>
        <section aria-labelledby="cart">
          <Cart cartInfo={cartInfo} removeProduct={removeProduct} />
        </section>
      </div>
    </main>
  );
}

export default App;
