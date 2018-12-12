export default (intersectConditionCheck, generateX, generateY, count = 1000) => {
  const points = [];

  Array(count)
    .fill(count)
    .forEach(() => {
      const point = {
        x: generateX(),
        y: generateY(),
      };
      if (intersectConditionCheck(point)) {
        points.push(point);
      }
    });

  return points;
};
