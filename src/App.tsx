import { useEffect } from "react";
import Cart from "./components/Cart";
import Filter from "./components/Filters/Filter";
import Loader from "./components/Loader";
import Products from "./components/Products";
import { useProducts } from "./contexts/productContext";
import "./app.scss";

function App() {
  const { isFetching, products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="appContainer">
      {isFetching && <Loader />}
      <main className="twoColumnGrid">
        <div className="side">
          <Filter />
        </div>
        <div className="main">
          <main className="mainHeader">
            <p>{products?.length} Product(s) found</p>
          </main>
          <Products products={products} />
        </div>
      </main>
      <Cart />
    </div>
  );
}

export default App;
