export default (func, ...args) => {
  try {
    return func(args);
  } catch (error) {
    return false;
  }
};
