import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Inscription from "./views/Inscription";
import Login from "./views/Login";

const App = () => {
  return (
    <>
      <Router basename="/eventos-ui">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/inscripcion/:id?">
            <Inscription />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
