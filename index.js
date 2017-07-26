export default function createModule(name, initial, handler) {
  const reducer = (state = initial, action) => {
    const [module, type] = action.type.split("/");
    if (module === name) {
      return handler[type] ? handler[type](state, action) : state;
    } else {
      return handler[action.type] ? handler[action.type](state, action) : state;
    }
  };
  const actions = Object.keys(handler).reduce(
    (acc, key) =>
      Object.assign(acc, {
        [key]: (payload = {}) => ({ type: `${name}/${key}`, payload })
      }),
    {}
  );
  const types = Object.keys(handler).reduce((acc, key) => Object.assign({}, acc, {[key]: `${name}/${key}`}), {});
  return { reducer, actions, types };
}
