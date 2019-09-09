import { tap, pipe } from 'ramda';
import * as scatteredLines from 'canvas/scatteredLines';
import * as bounce from 'canvas/bounce';
import * as sineWave from 'canvas/sineWave';
import * as cosineWave from 'canvas/cosineWave';
import * as tangentWave from 'canvas/tangentWave';
import Canvas from '../Canvas';

const App = () =>
  tap(
    pipe(
      tap(el => el.appendChild(Canvas({ draw: scatteredLines.draw }))),
      tap(el => el.appendChild(Canvas({ draw: sineWave.draw }))),
      tap(el => el.appendChild(Canvas({ draw: cosineWave.draw }))),
      tap(el => el.appendChild(Canvas({ draw: tangentWave.draw }))),
      tap(el => el.appendChild(Canvas({ draw: bounce.draw }))),
    ),
    document.createElement('p')
  );

export default App;
