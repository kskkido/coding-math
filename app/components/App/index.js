import { tap, pipe } from 'ramda';
import * as scatteredLines from 'canvas/scatteredLines';
import * as sineWave from 'canvas/sineWave';
import * as cosineWave from 'canvas/cosineWave';
import * as tangentWave from 'canvas/tangentWave';
import * as bounce from 'canvas/bounce';
import * as orbit from 'canvas/orbit';
import * as cross from 'canvas/cross';
import * as sineWaveBounce from 'canvas/sineWaveBounce';
import * as orbitTriad from 'canvas/orbitTriad';
import Canvas from '../Canvas';

const App = () =>
  tap(
    pipe(
      tap(el => el.appendChild(Canvas({ draw: scatteredLines.draw }))),
      tap(el => el.appendChild(Canvas({ draw: sineWave.draw }))),
      tap(el => el.appendChild(Canvas({ draw: cosineWave.draw }))),
      tap(el => el.appendChild(Canvas({ draw: tangentWave.draw }))),
      tap(el => el.appendChild(Canvas({ draw: bounce.draw }))),
      tap(el => el.appendChild(Canvas({ draw: orbit.draw }))),
      tap(el => el.appendChild(Canvas({ draw: cross.draw }))),
      tap(el => el.appendChild(Canvas({ draw: sineWaveBounce.draw }))),
      tap(el => el.appendChild(Canvas({ draw: orbitTriad.draw })))
    ),
    document.createElement('p')
  );

export default App;
