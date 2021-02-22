import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage =() => (
<div>
  <h1> Hat pages</h1>
</div>
)


function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage}/>  
      <Route path='/shop/hats' component={HatsPage}/>  
    </div>
  );
}

export default App;

