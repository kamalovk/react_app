import React, { Component } from 'react';
import Header from '../header/header';
import RandomJoke from '../random-joke/random-joke';
import DogList from '../dog-list/dog-list'
import DogDetail from '../dog-detail/dog-detail'
import '../app/app.css';
import {BrowserRouter as Router, Redirect, Route, Switch}  from 'react-router-dom'; 
export default class App extends Component{
  state = {
    selectedDog: null
  }
  onDogSelected = (el) => {
    this.setState( {
      selectedDog: el
    })
  }
  

  render() {
    return(
      <Router>
        <div className='main-app'>
        <Header />
        <Switch>
        <Route path = '/' 
          render = {() => <h3 className='start-page'>Hello, this is my sample application</h3>} exact/>
        <Route path='/random-joke' component={RandomJoke} />
        <Route 
          path='/dog-list' 
          render ={(props) => <div className='dog-sector'>
                  <div>
                  <DogList onItemSelected = {this.onDogSelected}{...props} />
                    
                  </div>
                  <div>
                    <DogDetail dogId = {this.state.selectedDog}/>       
                  </div>
              </div>}/>
        <Redirect  to='/'/>
        </Switch>
        
          
        </div>
        
      </Router>
      
    )
  }
}