import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

require("aframe");
require("aframe-physics-system");

const App = ({ children }) => (
  <>
    <Header />

    <main>{children}</main>

    <Footer />
  </>
);

export default App;
