import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <a href="/">HOME</a>

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/skill" component={Skills} />
      </Switch>
    </div>
  );
}

export default App;
