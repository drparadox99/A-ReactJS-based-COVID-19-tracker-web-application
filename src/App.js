import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components";
import { About, News, Sources, Home, PageMap, Quiz } from "./pages";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact from="/" render={() => <Home />} />
          <Route exact from="/map" render={() => <PageMap />} />
          <Route exact path="/sources" render={(props) => <Sources />} />
          <Route
            exact
            path="/news"
            render={function (props) {
              //console.log({ ...props });
              return <News {...props} />;
            }}
          />
          <Route exact from="/news" render={() => <News />} />
          <Route exact from="/About" render={() => <About />} />
          <Route exact from="/Quiz" render={() => <Quiz />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
