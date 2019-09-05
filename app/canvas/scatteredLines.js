import repeat from 'utils/repeat';

export const draw = (
  context,
  {
    width,
    height
  }
) => (
  repeat(100)(() => {
    context.beginPath();
    context.moveTo(Math.random() * width, Math.random() * height);
    context.lineTo(Math.random() * width, Math.random() * height);
    context.stroke();
  })
);
