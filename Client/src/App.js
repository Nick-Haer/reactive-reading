import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import ErrorPage from "./pages/ErrorPage";
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Switch>
          <Route exact path = "/"  component = {Search}/>
          <Route exact path = "/saved"  component = {Saved}/>
          <Route path = "*" component = {ErrorPage}/> 
          </Switch>
        </>
      </Router>
    )
  }


}

export default App;
