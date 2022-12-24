import NavBar from "../src/components/NavBar";
import About from "../src/components/About";
import Main from "../src/components/Main";
import SideBar from "../src/components/SideBar";
import Footer from "../src/components/Footer";
import CopyRight from "./components/CopyRight";
import ScrollTop from "./components/ScrollTop";
import SingleCard from "./components/Main/SingleCard";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
        <div className="row mt-5">
          <SideBar />
          <Main />
        </div>
        <SingleCard />
        <About />
        <Footer />
        <ScrollTop />
        <CopyRight />
      </div>
    </Router>
  );
}

export default App;
