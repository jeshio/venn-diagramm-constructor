const randomIndex = arrayLength => Math.ceil(Math.random() * (arrayLength - 1));

export default (point, sets, positions) => {
  let position;
  const shapeLeftSet = point.shape === sets.leftSet.shape;
  const shapeRightSet = point.shape === sets.rightSet.shape;
  const colorLeftSet = point.color === sets.leftSet.color;
  const colorRightSet = point.color === sets.rightSet.color;

  if (true) {
    // point.isSuccess) {
    if ((shapeLeftSet && colorRightSet) || (colorLeftSet && shapeRightSet)) {
      position = { ...positions.setsIntersect[randomIndex(positions.setsIntersect.length)] };
    } else if (shapeLeftSet || colorLeftSet) {
      position = { ...positions.leftSet[randomIndex(positions.leftSet.length)] };
    } else if (shapeRightSet || shapeRightSet) {
      position = { ...positions.rightSet[randomIndex(positions.rightSet.length)] };
    }
  }

  if (!position) {
    position = { ...positions.outside[randomIndex(positions.outside.length)] };
  }

  return { ...point, ...position };
};
