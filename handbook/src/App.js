import { Route, Switch } from "react-router-dom";
import handbook from "./data.json";
import Homepage from "./pages/Homepage";
import Skills from "./pages/Skills";
import Definition from "./components/Definition";
import Header from "./pages/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/skill">
          <Skills data={handbook} />
        </Route>
        <Route path="/:id">
          <Definition />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
