import styles from "./styles.css";
import { always, tap, pipe } from 'ramda';

const Canvas = ({
  draw = always(null),
  width = window.innerWidth,
  height = window.innerHeight,
} = {}) =>
  tap(
    pipe(
      tap(el => el.width = width),
      tap(el => el.height = height),
      tap(el => draw(el.getContext('2d'), { width, height }))
    ),
    tap(
      pipe(
        tap(el => el.setAttribute('id', 'canvas')),
        tap(el => el.setAttribute('class', styles.canvas)),
      ),
      document.createElement('canvas')
    )
  )

export default Canvas;
