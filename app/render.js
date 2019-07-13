import { always } from 'ramda';
import maybe from './utils/maybe';

export const renderOnTo = maybe(always(), root => component => {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }

  root.appendChild(component());
});
