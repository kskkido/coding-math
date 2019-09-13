import raf from 'utils/raf';

export const draw = (
  context,
  {
    width,
    height
  }
) => {
  const setupBounce = scope => (
    Object.assign(
      () => {
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(scope.centerX + Math.cos(scope.angle) * scope.offset, scope.centerY + Math.sin(scope.angle) * scope.offset, 20, 0, Math.PI * 2, false);
        context.arc(scope.centerX + Math.cos(scope.angle * 1.33) * scope.offset, scope.centerY + Math.sin(scope.angle * 1.33) * scope.offset, 20, 0, Math.PI * 2, false);
        context.arc(scope.centerX + Math.cos(scope.angle * 1.66) * scope.offset, scope.centerY + Math.sin(scope.angle * 1.66) * scope.offset, 20, 0, Math.PI * 2, false);
        context.fill();
      },
      {
        next: () => (
          setupBounce({
            ...scope,
            angle: scope.angle + scope.speed
          })
        )
      }
    )
  )

  const scopedRender = animate => (
    (p) => {
      animate(p);
      raf(scopedRender(animate.next()));
    }
  );

  scopedRender(setupBounce({
    centerY: height * .5,
    centerX: width * .5,
    offset: height * 0.3,
    speed: 0.03,
    angle: 0,
  }))()
};
