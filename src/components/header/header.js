import React, { Component } from 'react';
import '../header/header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component{
  render() {
    return(
      <div className='header-main'>
        <ul className='header-list'>
        
          <li>
            <Link to='/'>Start</Link>
          </li>
          <li>
            <Link to='/random-joke'>Jokes</Link>
          </li>
          <li>
            <Link to = '/dog-list'>Dog list</Link>
          </li>
          
        </ul>
      </div>
    )
  }


}