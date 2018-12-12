import { isIntersectWithCircle } from 'helpers';
import { checkPoint } from '.';

export default (point, sets) => {
  const checkedPoint = checkPoint(point, sets);

  const intersectWithLeftSet = isIntersectWithCircle(point, sets.leftSet);
  const intersectWithRightSet = isIntersectWithCircle(point, sets.rightSet);

  const isSuccessWith = {
    intersect: checkedPoint === 2 && intersectWithLeftSet && intersectWithRightSet,
    rightSet: checkedPoint === 1 && intersectWithRightSet && !intersectWithLeftSet,
    leftSet: checkedPoint === 0 && intersectWithLeftSet && !intersectWithRightSet,
    outside: checkedPoint === -1 && !intersectWithLeftSet && !intersectWithRightSet,
  };

  return !!Object.keys(isSuccessWith).find(key => isSuccessWith[key]);
};
