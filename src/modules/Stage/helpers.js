export const isIntersect = (pointPosition, circle) => {
  const x = (pointPosition.x - circle.x) ** 2;
  const y = (pointPosition.y - circle.y) ** 2;
  return Math.sqrt(x + y) < circle.radius;
};
