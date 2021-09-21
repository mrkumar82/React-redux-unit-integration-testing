import "./App.css";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Headline from "./component/Headline/Headline";

const tempArray = [
  {
    fName: "Ramesh",
    lName: "Kumar",
    email: "test@test.com",
    age: 24,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <section className="container">
              <Headline
                header="Post"
                desc="This is my first class component"
                tempArray={tempArray}
              />
            </section>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
