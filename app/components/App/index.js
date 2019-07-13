import { tap } from 'ramda';

const App = () =>
  tap(p => {
    p.textContent = 'get it going';
  }, document.createElement('p'));

export default App;
