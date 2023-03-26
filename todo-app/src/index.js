import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './styles/reset.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App';
import store, { persistor } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loadind={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
