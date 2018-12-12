import { generatePointsInside, isIntersectWithCircle } from '.';

export default (width, height, circle1, circle2, count = 1000) => generatePointsInside(
  point => !isIntersectWithCircle(point, circle1) && !isIntersectWithCircle(point, circle2),
  () => Math.random() * width,
  () => Math.random() * height,
  count,
);
