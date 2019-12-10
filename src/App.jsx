import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import Customers from "./pages/customers";
import Rentals from "./pages/rentals";
import Movies from "./pages/movies";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import MovieForm from "./pages/movie/index";
import Login from "./components/login/index";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
