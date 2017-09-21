import React, {Component} from 'react';
import {Icon} from 'antd';
import './TopBar.css';

export default class TopBar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='navigation-bar'>
        <div className='home-icon-warp'>
          <Icon type="home" style={{ fontSize: 24, color: '#08c' }}/>
        </div>
        <div className='dropdown'>
          <Icon type="bars" style={{ fontSize: 24, color: '#08c' }}/>
          <div className="dropdown-content">
            <p href="#">Menu 1</p>
            <p href="#">Menu 2</p>
            <p href="#">Menu 3</p>
          </div>
        </div>
      </div>
    );
  }
}