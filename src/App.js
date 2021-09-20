import "./App.css";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Headline from "./component/Headline/Headline";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <section className="container">
              <Headline
                header="Posts"
                desc="This is my first class component"
              />
            </section>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
