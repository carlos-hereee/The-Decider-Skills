import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Skills from "./pages/Skills";
import handbook from "./data.json";

function App() {
  return (
    <div className="App">
      <a href="/">HOME</a>

      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/skill">
          <Skills data={handbook} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
