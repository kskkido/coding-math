import { tap, pipe } from 'ramda';
import { draw } from 'canvas/scatteredLines';
import Canvas from '../Canvas';

const App = () =>
  tap(
    pipe(
      tap(el => el.appendChild(Canvas({ draw })))
    ),
    document.createElement('p')
  );

export default App;
