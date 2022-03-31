import Navbar from "./Components/Production/Navbar";
import Home from "./Components/Production/Home";
import {Switch, Route} from "react-router-dom"
import BackToTop from "./Components/BackToTop"
import Products from "./Components/Production/Products";
import Product from "./Components/Production/Product";

function App() {

  return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Product} />
        </Switch>
        <BackToTop/>
      </div>
  );
}


export default App;
