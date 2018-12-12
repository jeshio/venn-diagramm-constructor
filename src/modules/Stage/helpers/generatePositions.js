import {
  generatePointsInCircle,
  generatePointsBetweenCircles,
  generatePointsOutsideCircles,
} from 'helpers';

export default (leftSet, rightSet) => ({
  outside: generatePointsOutsideCircles(570, 470, leftSet, rightSet),
  leftSet: generatePointsInCircle(leftSet, rightSet),
  rightSet: generatePointsInCircle(rightSet, leftSet),
  setsIntersect: generatePointsBetweenCircles(leftSet, rightSet),
});
