A concept for a simpler higher-level Redux library.
The goal here is to remove the need of manually making some of the boilerplate, such as constants and action creators.
The `example` folder has a super-simple implementation in the `createModule.js` file

## Usage

```js
// counter.js

import createModule from "./createModule";

const counter = createModule(0, {
  increment: (state, action) => state + 1,
  decrement: (state, action) => state - 1
});

export default counter.reducer;
export const actions = counter.actions;

```

```js
// app.js

import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "./counter";

const App = ({ count, dispatch }) => (
  <div>
    {count}
    <button onClick={() => dispatch(actions.increment())}>Increment</button>
  </div>
);

export default connect(state => ({ count: state }))(App);
```

```js
// store.js

import { createStore } from "redux";
import counter from "./counter";

let store = createStore(counter);

export default store;
```