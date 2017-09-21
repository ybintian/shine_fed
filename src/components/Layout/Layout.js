import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TopBar,SideBar, Footer} from 'components';
import './Layout.scss';
import 'antd/dist/antd.min.css';

export default class Layout extends Component{
  static propTypes = {
    children: PropTypes.object,
  }

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <TopBar/>
        <SideBar/>
        <div className='layout-content'>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}