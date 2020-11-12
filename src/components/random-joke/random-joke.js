import React, { Component } from 'react';
import ApiService from '../../services/apiService';
import '../random-joke/random-joke.css';
import Spinner from '../loading-spinner/spinner'

export default class RandomJoke extends Component{

  apiService = new ApiService();
  state = {
    value: null,
    loading: true,
    category: null
  };
  componentDidMount(){
    this.getJoke();
    this.interval = setInterval(this.getJoke, 20000)
    //this.getCategory();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onJokeLoaded = (value) => {
    this.setState({
      value,
      loading: false
    })
  }
  /*getCategory = () => {
    this.apiService.categoryJokefunction().then((body) => {
      this.setState({
        category: body
      })
    })
  }
  renderJokes(arr) {
    return arr.map((el) => {
      return(
        <li className='joke-list-li' onClick={() => {console.log(el)}}>
          {el}
        </li>
        
      )
    })
  } */
  getCategoryJoke = () => {
    this.apiService.categoryJokefunction()
  }
  getJoke = () => {
   this.apiService.randomJokeFunction().then(this.onJokeLoaded);
 }
 render() { 
  const {value, loading} = this.state
  const load = loading ? <Spinner /> : null;
  const content = !loading ? <JokeView joke = { value }/> : null;
  /*if (!category) {
    return <Spinner/>
  }
  const items = this.renderJokes(category)
*/
  
  return(
    <div className='main-block'>  
      
      <div className='random-joke-block'> 
        <div className='component-block'>
          {load}
          {content}
        
        </div>
        <div className='joke-list-button'>
          
          <button className='random-joke-button' onClick={this.getJoke}>Random Joke</button>
        </div>
      </div>
    </div>
  )
}

}

const JokeView = ({ joke }) => {
  const { value } = joke;
  return(
    <div>{joke}</div>
  )

}