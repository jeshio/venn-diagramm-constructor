import { generatePointsInside, isIntersectWithCircle } from '.';

export default (circle1, circle2, count = 1000) => generatePointsInside(
  point => isIntersectWithCircle(point, circle1) && isIntersectWithCircle(point, circle2),
  () => (Math.random() - 0.5) * 2 * circle1.radius + circle1.x,
  () => (Math.random() - 0.5) * 2 * circle1.radius + circle1.y,
  count,
);
