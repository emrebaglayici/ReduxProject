import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/product" component={Dashboard}/>
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct}/>
        <Route path="/cart" component={CartDetail}/>
        
      </Switch>
    </Container>
  );
}

export default App;
