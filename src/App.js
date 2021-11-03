import {Component} from "react";
import { Switch, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuildr/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render(){
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            <Route exact path="/" component={BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
  
}

export default App;