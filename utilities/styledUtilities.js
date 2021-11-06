export const clampedLerp = (min, max, from, to, unit) =>
  `
  clamp(
    ${min}${unit},
    calc(${min}${unit} + (${max} - ${min}) * ((100vw - ${from}px) / (${to} - ${from}))),
    ${max}${unit}
  );
`;
