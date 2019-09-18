import * as R from 'ramda';
import { createId } from './id';

const safeObserver = obs => (
  obs.next ? obs : { next: obs }
);

const createObservable = (fn) => {
  const observers = new Map();

  return ({
    subscribe: R.compose(
      (observer) => {
        const id = createId();
        observers.set(id, observer);

        return () => {
          observers.delete(id)
        }
      },
      R.tap(fn),
      safeObserver
    ),
    dispatch: () => {
      for (const observer of observers) {
        fn(observer);
      }
    },
  })
}

export const fromEvent = (event) => {
  const observable = createObservable(observer => {
    document.addEventListener(event, observer.next)
  });

  return {
    ...observable,
    subscribe: (sub) => {
      const unsubscribe = observable.subscribe(sub);

      return () => {
        document.removeEventListener(event, sub);
        unsubscribe();
      }
    }
  }
}