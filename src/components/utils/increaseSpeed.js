export const increaseSpeed = (speed, score) =>
  speed - 50 * (speed > 20 && score > 7 && (score - 6) % 50 === 0);
