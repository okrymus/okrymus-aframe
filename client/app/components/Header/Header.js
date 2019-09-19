import React from "react";

import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link to="/">Home</Link>

    <nav>
      <Link to="/helloworld">Hello World</Link>
      <Link to="/realtime">Real Time</Link>
      <Link to="/periodicTable">Periodic Tabble</Link>
    </nav>

    <hr />
  </header>
);

export default Header;
