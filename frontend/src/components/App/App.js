import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppBar from "../AppBar";
import BottomBar from "../BottomBar";
import DictPage from "../DictPage/";
import LearnPage from "../LearnPage";
import UserPage from "../UserPage";
import Center from "../Center";

function App() {
  const appStyle = {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  };

  return (
    <div className="App" style={appStyle}>
      <Router>
        <AppBar />

        <Switch>
          <Center>
            <Route exact path="/">
              <LearnPage />
            </Route>
            <Route path="/dictionary">
              <DictPage />
            </Route>
            <Route path="/user">
              <UserPage />
            </Route>
          </Center>
        </Switch>
        <BottomBar />
      </Router>
    </div>
  );
}

export default App;
