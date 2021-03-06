import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import About from './About';
import Game from './Game';
import Home from './Home';
import Howto from './Howto';
import Navbar from './Navbar';

import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'
import allReducer from './reducers'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import thunk from 'redux-thunk'

const projectStore = createStore(
  allReducer, 
  applyMiddleware(thunk)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={projectStore}>
    <Router>
      <>
        <App />
        <Navbar />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/howto" component={Howto} />        
        <Route exact path="/game" component={Game} />
      </>
    </Router>
  </Provider>,
  document.getElementById('root')
);

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
