import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const h1 = React.createElement('div', null, 
  React.createElement('ul', null, 
    React.createElement('li', null, 'item 1')));

const h2 = <div>
  <ul>
    <li>item 2</li>
  </ul>
</div>;

ReactDOM.createRoot(document.getElementById('root')).render(
  /*<React.StrictMode>
    <div>Sisas</div>
    <App />
  </React.StrictMode>,*/
  h2
)
