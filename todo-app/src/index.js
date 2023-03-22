import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './styles/reset.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import App from './components/App/App';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>,
);
