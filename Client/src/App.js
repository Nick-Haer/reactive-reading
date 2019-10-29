import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import './App.css';

class App extends React.Component {

render () {
  return (
    <Router>
      <>
    <Switch>
    <NavBar />


    </Switch>
      </>


    </Router>
  )
}


}

export default App;
