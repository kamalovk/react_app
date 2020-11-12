
import React, { Component } from 'react';
import '../dog-list/dog-list.css';
import MainService from '../../services/mainService';
import Spinner from '../loading-spinner/spinner';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

export default class DogList extends Component {
mainService = new MainService();
state = {
  dogs: null,
}
componentDidMount(){
  this.getList();
}
componentWillUnmount(){

}
getList = () => {
  this.mainService.allBredds().then((body) => {
    this.setState({
      dogs: body
    })
  })
}
renderDogs(arr) {
  return arr.map((el) => {
    return(
      <li className='dog-list-li' onClick={() => {
        this.props.onItemSelected(el)}}>
        <a href= '#'>
          {el}
        </a>
      </li>
    )
  })
}
sampleFunc() {
  return(
    <div>dddddd</div>
  )
}

  render(){
    const { dogs } = this.state;
    if (!dogs) {
      return <Spinner />
    }
    const items = Object.keys(dogs);
    const items_ar_slice1 = items.slice(0, 50);
    
    let items_array = this.renderDogs(items_ar_slice1)
    
    return(
      <div className='dog-list-block'> 
        <ul className='dog-list-ul'>
          {items_array}
        </ul>
      </div>
    )
  }
}
