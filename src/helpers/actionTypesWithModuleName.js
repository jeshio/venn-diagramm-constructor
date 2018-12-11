export default (actionTypes, moduleName) => Object.keys(actionTypes).reduce(
  (base, key) => ({ ...base, [key]: `${moduleName}/${actionTypes[key]}` }),
  {},
);
