import Head from "./components/header";
import Home from "./components/home";
import { Container } from "@chakra-ui/layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Headphones from "./components/Page.Headphone";
import Speakers from "./components/Page.Speaker";
import Earphones from "./components/Page.Earphones";
import Products from "./components/pages.product"
import Checkout from "./components/pages.Checkout";
import ScrollToTop from "./components/ScrollToTop";




function App() {
  return ( 
    <Router>
       <Container  w={["100%"]} maxW="1440" margin="auto" >
          <Head/>
        <ScrollToTop>
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route  path="/headphones">
              <Headphones/>
            </Route>

            <Route path="/speakers">
              <Speakers/>
            </Route>

            <Route path="/earphones">
              <Earphones/>
            </Route>

            <Route path="/products">
              <Products/>
            </Route>

            <Route path="/checkout">
              <Checkout/>
            </Route>
            
          </Switch>
          </ScrollToTop>
        </Container>
    </Router>
  );
}

export default App;
