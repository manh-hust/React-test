import Navbar from "./Components/Production/Navbar";
import Home from "./Components/Production/Home";
import {Switch, Route} from "react-router-dom"
import BackToTop from "./Components/BackToTop"
import Products from "./Components/Production/Products";
import Product from "./Components/Production/Product";
import Error from "./Components/Error/Error";
import Cart from "./Components/Production/cart";

function App() {

  return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={Product} />
          <Route path="/:somestring" component={Error}/>
        </Switch>
        <BackToTop/>
      </div>
  );
}


export default App;
