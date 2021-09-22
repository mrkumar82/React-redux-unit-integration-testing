import "./App.css";
import React, { useState } from "react";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Headline from "./component/Headline/Headline";
import Button from "./component/Button/Button";
import ListItem from "./component/ListItem/ListItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/index";
const tempArray = [
  {
    fName: "Ramesh",
    lName: "Kumar",
    email: "test@test.com",
    age: 24,
    onlineStatus: true,
  },
];

function App(props) {
  const [hidebtn, setHidebtn] = useState(false);
  const fetch = () => {
    props.fetchPosts();
    exampleMethod();
  };
  const { posts } = props;

  const configButton = {
    buttonText: "Get Posts",
    emitEvent: fetch,
  };

  const exampleMethod = () => {
    setHidebtn(true);
  };

  return (
    <div data-test="app">
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
              {!hidebtn && <Button {...configButton} />}
              {posts.length > 0 && (
                <div>
                  {posts.map((post, index) => {
                    const configListItem = {
                      title: post.title,
                      desc: post.body,
                    };
                    return <ListItem key={index} {...configListItem} />;
                  })}
                </div>
              )}
            </section>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, { fetchPosts })(App);
