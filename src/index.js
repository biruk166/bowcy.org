import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

export default function Index
() {
  return (
    <div>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </div>
  )
}

ReactDOM.render(
<Index />,
  document.getElementById('root')
);
