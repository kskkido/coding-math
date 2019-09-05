import { curry } from 'ramda';

const repeat = curry((n, fn) => {
  const iter = (i = 0, deferred = []) => (
    i > n
      ? deferred
      : iter(i + 1, deferred.concat(fn(i)))
  )

  return iter(Math.min(n, 0));
});

export default repeat;
