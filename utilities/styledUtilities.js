export const breakpoints = {
  tablet: 480,
  desktop: 992,
};

export const ranges = {
  tablet: [480, 992],
  desktop: [900, 1800],
};

export const clampedLerp = (min, max, from, to, unit) => `
  clamp(
    ${min}${unit},
    calc(${min}${unit} + (${max} - ${min}) * ((100vw - ${from}px) / (${to} - ${from}))),
    ${max}${unit}
  );
`;

export const responsiveLerp = (property, min, max) => `
  @media (min-width: ${breakpoints.desktop}px) {
    ${property}: ${clampedLerp(min, max, ...ranges.desktop, "px")};
  }
  ${property}: ${clampedLerp(min, max, ...ranges.tablet, "px")};
`;
