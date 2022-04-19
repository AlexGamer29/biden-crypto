import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";

import { Contact } from "./components/Pages/Contact";
import { Product } from "./components/Pages/Product";
import SignIn from "./components/Pages/SignIn";
import Footer from "./components/Pages/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/product" component={Product} />
            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
