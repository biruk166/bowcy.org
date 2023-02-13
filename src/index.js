import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

// for state managment
import { store } from './stateManagment/store';
import { Provider } from 'react-redux';

function Index() {
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
