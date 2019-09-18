export const degree = r => (
  (r * 180) / Math.PI
);

export const radian = d => (
  (d * Math.PI) / 180
);

export const xArc = (d, r) => (
  r * Math.cos(d)
)

export const yArc = (d, r) => (
  r * Math.sin(d)
)
