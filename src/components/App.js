import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import NewsContainer from "../containers/NewsContainer";
import { Switch, Route } from "react-router-dom";

const App = () => (
  <div>
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={NewsContainer} />
      <Route exact path="/:num" component={NewsContainer} />
      <Route path="/Internacionales" component={NewsContainer} />
      <Route path="/Tecnologia" component={NewsContainer} />
      <Route path="/Espectaculos" component={NewsContainer} />
      <Route path="/Deportes" component={NewsContainer} />
      <Route path="/Diseno" component={NewsContainer} />
      <Route path="/search/" component={NewsContainer} />
    </Switch>
  </div>
);

export default App;
