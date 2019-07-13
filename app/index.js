import { renderOnTo } from './render';
import App from './components/App';

const render = renderOnTo(document.getElementById('root'));

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(require('./components/App').default);
  });
}
