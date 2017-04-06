A single function that returns a reducer, action creators, and action types.
This is just a little helper whose is goal is to remove the need of manually making some of the boilerplate, such as constants and action creators.

## Installation
`npm install --save redux-create-module`

## API
There's only one function
### createModule(name, initalState, handler) -> {reducer, actions, types}

#### Params
`name` is just a string that will be included in the action types.

`initialState` is, well, the initial state for the module.

`handler` is where it gets interesting. It's an object where the keys are action names
and the values are action handlers. For example:
```js
const counter = createModule('counter', 0, {
  increment: (state, action) => state + 1,
  decrement: (state, action) => state - 1
})
```
#### Returns
This function returns an object with three things:

`actions` is an object with action creators. 
for example: `counter.actions.increment()` will return 
`{ type: 'counter/increment', payload: {} }`

`reducer` is regular reducer that you can pass to the redux store or to `combineReducers`

`types` is an object with the generated action types. For example:
`counter.types.increment` is equal to `counter/increment`
This is useful to handle an action from another module. for example, if we wanted
to make another module that tracks how many times the counter was incremented: 
```js
const timesIncremented = createModule('timesIncremented', 0 {
  [counter.types.increment]: (state, action) => state + 1
})
```



## Basic Usage

```js
// counter.js

import createModule from "redux-create-module";

const counter = createModule('counter', 0, {
  increment: (state, action) => state + 1,
  decrement: (state, action) => state - 1
});

export default counter.reducer;
export const actions = counter.actions;

// actions.increment() -> {type: 'counter/increment', payload: {}}
```

```js
// app.js

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
```

```js
// store.js

import { createStore } from "redux";
import counter from "./counter";

let store = createStore(counter);

export default store;
```
