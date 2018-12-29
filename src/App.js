import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Index from './components/Index'
import Character from './components/Character'
import Filter from './components/Filter'
import Films from './components/Films'

class App extends Component {
 render(){
  return(
    <BrowserRouter>
      <div className="root">
        <Filter/>
        <Route exact path="/" component={Index}></Route>
        <Route path="/character/:id" component={Character}></Route>
        <Route path="/films/:id" component={Films}></Route>
      </div>
    </BrowserRouter>
  )
 }
}

export default App;
