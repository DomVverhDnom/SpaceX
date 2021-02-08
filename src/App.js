import React from "react";
import { Route } from "react-router-dom";
import { Footer, Header, Main, Calendar, Details, Features } from "./components";
import FetchData from "./service/FetchData";
import "./css/style.css";

class App extends React.Component {
  fetchData = new FetchData();

  state = {
    rocket: "Falcone 1",
    rocketFeatures: null,
  };

  componentDidMount() {
    this.updateRocket();
  }
  updateRocket() {
    this.fetchData
      .getRocket()
      .then((data) => data.find((item) => item.name === this.state.rocket))
      .then((rocketFeatures) => this.setState({ rocketFeatures }));
  }
  render() {
    return (
      <>
        <Header />
        <Route path="/" render={() => <Main rocketsName={this.state} />} />
        <Route path="/Calendar" component={Calendar} exact />
        <Route path="/Details" component={Details} exact />
        <Features />
        <Footer />
      </>
    );
  }
}

export default App;
