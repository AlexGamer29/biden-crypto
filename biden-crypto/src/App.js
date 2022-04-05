import "./App.css";
import Navbar from "./component/navbar";
import { Router, Route } from "react-router-dom";
import { Home } from "./page/home";
import { About } from "./page/about";
import { Product } from "./page/product";
import { Contact } from "./page/contact";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="pages">
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </div>
      </Router>
    </>
  );
}

export default App;
