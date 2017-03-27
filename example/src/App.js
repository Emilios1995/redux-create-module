import React from "react";
import { connect } from "react-redux";
import { actions } from "./counter";

const App = ({ count, dispatch }) => (
  <div>
    {count}
    <button onClick={() => dispatch(actions.increment())}>Increment</button>
  </div>
);

export default connect(state => ({ count: state }))(App);
