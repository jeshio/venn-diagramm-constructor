import { generatePointsInside, isIntersectWithCircle } from '.';

export default (circle, outsideCircle, count = 1000) => generatePointsInside(
  point => isIntersectWithCircle(point, circle) && !isIntersectWithCircle(point, outsideCircle),
  () => (Math.random() - 0.5) * 2 * circle.radius + circle.x,
  () => (Math.random() - 0.5) * 2 * circle.radius + circle.y,
  count,
);
