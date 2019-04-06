import createModule from 'redux-create-module';

const counter = createModule('counter', 0, {
  increment: (state, action) => state + 1,
  decrement: (state, action) => state - 1,
  add: (state, action) => state + action.payload,
  sub: (state, action) => state - action.payload
});

export default counter.reducer;
export const actions = counter.actions;
