import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Hello, HelloWorld, HelloWorldApp } from './HelloWorldApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>Sisas</div>
    <HelloWorldApp user={'papapapa'} id='1'/>
    <Hello 
      user={{name: 'posdf', lastname: 'askjdf'}} 
      id={1}/>
    <HelloWorld user={{name: 'posdf', lastname: 'askjdf'}} 
      id={1}
      title={'Titulo'}/>
  </React.StrictMode>,
)
