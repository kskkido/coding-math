export const raf = (fn) => (
  requestAnimationFrame(fn)
);

export const cancel = (stamp) => (
  cancelAnimationFrame(stamp)
);
