import React, { Component } from 'react'
import Navbar from './components/navbar'
import Button from './components/button'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import HomePage from './pages/homepage'
const App = () => {
  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  )

}

export default App