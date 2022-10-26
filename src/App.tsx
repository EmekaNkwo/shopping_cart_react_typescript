import { useEffect } from "react";
import Cart from "./components/Cart";
import Filter from "./components/Filters/Filter";
import Loader from "./components/Loader";
import Products from "./components/Products";
import { useProducts } from "./contexts/productContext";
import "./app.scss";
import { useCart } from "./contexts/cartContext";

function App() {
  const { isFetching, products, fetchProducts } = useProducts();
  const { closeCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="appContainer">
      {isFetching && <Loader />}
      <div className="twoColumnGrid" onClick={closeCart}>
        <div className="side">
          <Filter />
        </div>
        <div className="main">
          <main className="mainHeader">
            <p>{products?.length} Product(s) found</p>
          </main>
          <Products products={products} />
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default App;
