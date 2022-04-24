import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";

import { Contact } from "./components/Pages/Contact.jsx";
import { Product } from "./components/Pages/Product";
import SignIn from "./components/Pages/SignIn.jsx";
import Footer from "./components/Pages/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
