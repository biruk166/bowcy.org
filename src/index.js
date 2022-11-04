import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { store } from './stateManagment/frontEnd/store';
import { Provider } from 'react-redux';

export default function Index
() {
  return (
    <div>
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>
    </div>
  )
}

ReactDOM.render(
<Index />,
  document.getElementById('root')
);
