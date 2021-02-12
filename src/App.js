import React from "react";
import { Route } from "react-router-dom";
import { Footer, Header, Main, Calendar, Details, Features } from "./components";
import FetchData from "./service/FetchData";
import "./css/style.css";

class App extends React.Component {
  fetchData = new FetchData();

  state = {
    rocket: "Falcon 1",
    rocketFeatures: null,
    allRockets: [],
  };

  componentDidMount() {
    this.updateRocket();
  }
  updateRocket() {
    this.fetchData
      .getRocket()
      .then((data) => {
        this.setState({ allRockets: data.map((item) => item.name) });
        return data;
      })
      .then((data) => data.find((item) => item.name === this.state.rocket))
      .then((rocketFeatures) => this.setState({ rocketFeatures }));
  }

  changeRocket = (rocket) => {
    this.setState(
      {
        rocket,
      },
      this.updateRocket,
    );
  };
  render() {
    return (
      <>
        <Header rocketsNames={this.state.allRockets} changeRocket={this.changeRocket} />
        <Route path="/" render={() => <Main rocket={this.state.rocket} />} />
        <Route path="/Calendar" component={Calendar} exact />
        <Route path="/Details" component={Details} exact />
        {this.state.rocketFeatures && (
          <Features {...this.state.rocketFeatures} rocket={this.state.rocket} />
        )}
        <Footer />
      </>
    );
  }
}

export default App;
