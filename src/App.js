import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Index from './components/Index'
import Character from './components/Character'
import Filter from './components/Filter'
import Films from './components/Films'

class App extends Component {
 render(){
  return(
    <BrowserRouter>
      <div className="root">
        <div className="root__top">
          <Link className="root__home" to="/"><img src="http://webiconspng.com/wp-content/uploads/2017/09/Star-Wars-PNG-Image-83517.png"/></Link>
          <h1>Star Wars Character List</h1>
          <Filter/>
        </div>
        <Route exact path="/" component={Index}></Route>
        <Route path="/character/:id" component={Character}></Route>
        <Route path="/films/:id" component={Films}></Route>
      </div>
    </BrowserRouter>
  )
 }
}

export default App;
