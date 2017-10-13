import React, {Component, PropTypes} from 'react';
import {Icon} from 'antd';
import './TopBar.scss';

export default class TopBar extends Component{
  static propTypes = {
    history: PropTypes.object,
  }

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  handleLogout = () => {
    localStorage.clear();
    this.props.history.push('/login');
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
            <p href="#" onClick={this.handleLogout}><Icon type="logout" /> 注销</p>
            <p href="#">Menu 2</p>
            <p href="#">Menu 3</p>
          </div>
        </div>
      </div>
    );
  }
}