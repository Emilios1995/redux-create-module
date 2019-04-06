import React from 'react';
import {connect} from 'react-redux';
import {actions} from './counter';

const App = ({count, dispatch}) => (
  <div>
    {count}
    <button onClick={() => dispatch(actions.increment())}>Increment</button>
    <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
    <button onClick={() => dispatch(actions.add(4))}>Add 4</button>
    <button onClick={() => dispatch(actions.sub(3))}>Sub 3</button>
  </div>
);

export default connect((state) => ({count: state}))(App);
