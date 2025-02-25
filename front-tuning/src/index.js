import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import './style.css'
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/ConfigureStore';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)