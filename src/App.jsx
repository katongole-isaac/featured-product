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

function App() {
  const { data, isLoading, error } = useFetch(BASE_URL);
  const [shoppingCart, dispatch] = useImmerReducer(shoppingCartReducer, []);

  if (error?.message) return <ErrorPage msg={error?.message} />;

  return (
    <>
      <div className="container-fluid w-100  p-0 ">
        <Navbar shoppingCartLength={shoppingCart.length} />
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
