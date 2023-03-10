import { BASE_URL, useFetch } from "./utils/useFetch";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Loading from "./components/Loading";
import { useImmerReducer } from "use-immer";
import { shoppingCartReducer } from "./utils/shoppingReducer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/index.scss";
import "./app.css";
import ErrorPage from "./components/Error";
import ShoppingCartPage from "./components/shoppingCartPage";
import { useRef, useState } from "react";

function App() {
  const { data, isLoading, error } = useFetch(BASE_URL);
  const [cartSidebar, setCartSideBar] = useState(false);

  const cartBtnRef = useRef();

  const [shoppingCart, dispatch] = useImmerReducer(shoppingCartReducer, []);

  if (error?.message) return <ErrorPage msg={error?.message} />;

  return (
    <>
      <div className="container-fluid w-100  p-0 ">
        <ShoppingCartPage
          cartSidebar={cartSidebar}
          setCartSidebar={setCartSideBar}
          cart={shoppingCart}
          dispatch={dispatch}
        />
        <Navbar
          shoppingCartLength={shoppingCart.length}
          setCartSideBar={setCartSideBar}
          ref={cartBtnRef}
        />
        <div className="container w-100 mt-2 ">
          {isLoading && <Loading />}

          {data && data.length > 0 && (
            <div className="card-columns ">
              <ProductList
                products={data}
                dispatch={dispatch}
                shoppingCart={shoppingCart}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
