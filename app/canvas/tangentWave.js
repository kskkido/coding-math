import repeat from 'utils/repeat';
import { radian } from 'formulas/trigonometry';

export const draw = (
  context,
  {
    height
  }
) => {
  context.translate(0, height / 2);
  context.scale(1, -1);
  repeat(720)((d) => {
    context.fillRect(
      d,
      Math.tan(radian(d)) * 100,
      5,
      5
    );
  })
};
