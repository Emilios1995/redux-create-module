export default function createModule(initial, red) {
  const reducer = (state = initial, action) => {
    if (red[action.type]) {
      return red[action.type](state, action);
    } else {
      return state;
    }
  };
  const actions = Object.keys(red).reduce(
    (acc, key) => ({ ...acc, [key]: payload => ({ type: key, payload }) }),
    {}
  );
  return { reducer, actions };
}
