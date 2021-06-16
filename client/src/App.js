import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home';
import Detail from './containers/Detail';
import Form from './containers/Form';
import Landing from './containers/Landing';



const App = () => (
  <BrowserRouter>
    <Route exact path="/home/create" component={Form} />
    <Route exact path="/home/detail/:idGame" component={Detail} />
    <Route exact path="/home" component={Home}/>
    <Route exact path="/" component={Landing} />
  </BrowserRouter>
)


export default App;
