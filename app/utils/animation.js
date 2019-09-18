import { raf, cancel } from './raf';
import { createId } from './id';

class Animation {
  static of(...args) {
    return new Animation(...args);
  }

  constructor(...args) {
    this.setup(...args);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.tick = this.tick.bind(this);
  }

  setup(cb) {
    this.cb = cb;
    this.id = createId();
  }

  start() {
    this.progress = 0;
    this.loop();
  }

  stop() {
    if (this.stamp) {
      cancel(this.stamp);
    }
  }

  loop() {
    this.stamp = raf(this.tick);
  }

  tick(n) {
    this.animate(n - this.progress);
    this.loop();
  }

  animate(p) {
    this.cb(p);
    this.cb = this.cb.next();
  }
}

export default Animation;
