export default function createModule(name, initial, red) {
  const reducer = (state = initial, action) => {
    const [module, act] = action.type.split("/");
    if (module === name) {
      return red[act] ? red[act](state, action) : state;
    } else {
      return red[action.type] ? red[action.type](state, action) : state;
    }
  };
  const actions = Object.keys(red).reduce(
    (acc, key) => ({
      ...acc,
      [key]: (payload = {}) => ({ type: `${name}/${key}`, payload })
    }),
    {}
  );
  const types = Object.keys(red).map(key => `${name}/${key}`);
  return { reducer, actions, types };
}
