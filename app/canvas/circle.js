import repeat from 'utils/repeat';
import { xArc, yArc } from 'formulas/trigonometry';

export const draw = (
  context,
  {
    width,
    height
  }
) => {
  const cx = width / 2;
  const cy = height / 2;
  const radius = 200;
  const length = 20;
  const sliceN = Math.PI * 2 / length;

  repeat(length)(i => {
    const radian = sliceN * i;

    context.beginPath();
    context.arc(cx + xArc(radian, radius), cy + yArc(radian, radius), 20 * Math.pow(Math.sin(radian / 2), 2), 0, Math.PI * 2, false)
    context.fill();
  })
}
