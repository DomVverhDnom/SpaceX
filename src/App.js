import React from "react";
import { Route } from "react-router-dom";
import { Footer, Header, Main, Calendar, Details } from "./components";

import "./css/style.css";

function App() {
  return (
    <>
      <Header />
      <Route path="/" component={Main} exact />
      <Route path="/Calendar" component={Calendar} exact />
      <Route path="/Details" component={Details} exact />
      <Footer />
    </>
  );
}

export default App;
