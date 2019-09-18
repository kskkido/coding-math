import { fromEvent } from 'utils/reactive';

export const draw = (
  context,
  {
    width,
    height
  }
) => {
  const setMouseTracker = (scope) => {
    const animate = (dynamic) => {
      context.clearRect(0, 0, width, height);
      context.save();
      context.translate(scope.ax, scope.ay)
      context.rotate(Math.atan2(dynamic.dy, dynamic.dx));
      context.beginPath();
      context.moveTo(20, 0);
      context.lineTo(-20, 0);
      context.moveTo(20, 0);
      context.lineTo(10, -10);
      context.moveTo(20, 0);
      context.lineTo(10, 10);
      context.stroke();
      context.restore();
    }

    return (event) => animate({
      dx: event.clientX - scope.ax,
      dy: event.clientY - scope.ay,
    })
  }

  fromEvent('mousemove').subscribe(setMouseTracker({
    ax: width / 2,
    ay: height / 2,
  }))
};
