export default (point, sets) => {
  const shapeLeftSet = point.shape === sets.leftSet.shape;
  const shapeRightSet = point.shape === sets.rightSet.shape;
  const colorLeftSet = point.color === sets.leftSet.color;
  const colorRightSet = point.color === sets.rightSet.color;

  if ((shapeLeftSet && colorRightSet) || (colorLeftSet && shapeRightSet)) {
    return 2;
  }
  if (colorRightSet || shapeRightSet) {
    return 1;
  }
  if (shapeLeftSet || colorLeftSet) {
    return 0;
  }

  return -1;
};
