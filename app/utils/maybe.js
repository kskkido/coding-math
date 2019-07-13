const maybe = (y, fn) => x => (x === null || x === undefined ? y : fn(x));

export default maybe;
