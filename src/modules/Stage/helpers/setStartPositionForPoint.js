import { checkPoint } from '.';

const randomIndex = arrayLength => Math.ceil(Math.random() * (arrayLength - 1));

export default (point, sets, positions) => {
  let position;

  const checkedPoint = checkPoint(point, sets);

  if (point.isSuccess) {
    if (checkedPoint === 2) {
      position = { ...positions.setsIntersect[randomIndex(positions.setsIntersect.length)] };
    } else if (checkedPoint === 0) {
      position = { ...positions.leftSet[randomIndex(positions.leftSet.length)] };
    } else if (checkedPoint === 1) {
      position = { ...positions.rightSet[randomIndex(positions.rightSet.length)] };
    }
  }

  if (!position) {
    position = { ...positions.outside[randomIndex(positions.outside.length)] };
  }

  return { ...point, ...position };
};
