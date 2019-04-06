const createModule = require('./index');

const counter = createModule('counter', 0, {
  increment: (state, action) => state + 1,
  decrement: (state, action) => state - 1,
  add: (state, action) => state + action.payload.number
});

test('reducer handles the action correclty', () => {
  const newState = counter.reducer(1, counter.actions.increment());
  expect(newState).toBe(2);
});

test('reducer handles the action correclty from initialState', () => {
  const newState = counter.reducer(undefined, counter.actions.increment());
  expect(newState).toBe(1);
});

test('payload is included in the action', () => {
  const action = counter.actions.add(5);
  expect(action.payload).toBe(5);
});

test('createModule returns action types as an object', () => {
  expect(counter.types).toHaveProperty('increment');
});
