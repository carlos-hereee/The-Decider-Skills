import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
