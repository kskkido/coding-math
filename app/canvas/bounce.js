import Animation from 'utils/animation';

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
        context.arc(scope.centerX, scope.centerY + Math.sin(scope.angle) * scope.offset, 50, 0, Math.PI * 2, false);
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

  Animation.of(setupBounce({
    centerY: height * .5,
    centerX: width * .5,
    offset: height * 0.3,
    speed: 0.1,
    angle: 0,
  })).start();
};
