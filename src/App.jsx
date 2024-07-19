import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { Create } from './Components/Create'
import { BlogDetail } from './Components/BlogDetail'
import {NotFound} from './Components/NotFound'

function App() {

  return <>
  <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        
        <Switch>
          <Route exact path='/'>
          <Home/>
          </Route>
          <Route path='/create'>
          <Create/>
          </Route>
          <Route path='/blogs/:id'>
          <BlogDetail/>
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  </>
}

export default App
