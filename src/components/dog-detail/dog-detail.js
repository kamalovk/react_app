import React, { Component } from 'react';
import '../dog-detail/dog-detail.css';
import MainService from '../../services/mainService';

export default class DogDetail extends Component{
mainService = new MainService();
state = {
  dog: null
};
componentDidMount(){
  this.updateDog();
}
componentDidUpdate(prevProps) {
  if (this.props.dogId !== prevProps.dogId){
    this.updateDog()
  }
}
updateDog() {
  const {dogId} = this.props;
  if(!dogId){
    return;
  }
  this.mainService
    .getDog(dogId)
    .then((dog)=>{
      this.setState({
        dog: dog
      })
    })
}
  render() {
    const {dogId} = this.props;
    if(!this.state.dog) {
      return <div className='dog-detail-start'>Select a dog</div>
    }
    const {dog} = this.state;
    return(
      <div className='dog-detail-div'>
        
        <img className='dog-detail-image' src={dog}></img>
        <div className='dog-detail-name'>{dogId}</div>
      </div>
    )
  }
}