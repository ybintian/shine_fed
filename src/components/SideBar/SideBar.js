import React,{Component, PropTypes} from 'react';

import { Menu, Icon, Button } from 'antd';

import './SideBar.scss';

const SubMenu = Menu.SubMenu;

export default class SideBar extends Component{
  static propTypes = {
    history: PropTypes.object,
  }
  constructor(props){
    super(props);
  }

  onClick = (obj) => {
    if (this.props.onClick) return this.props.onClick(obj);
    const url = obj.keyPath.reverse().join('/');
    this.props.history.push(url);
  }

  render(){
    return(
      <aside className="sidebar">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          className='sidebar'
          onClick={this.onClick}
        >
          <Menu.Item key="/">
            <Icon type="home" />
            <span>主页</span>
          </Menu.Item>
          <Menu.Item key="/user">
            <Icon type="user" />
            <span>用户</span>
          </Menu.Item>
          <Menu.Item key="/about">
            <Icon type="desktop" />
            <span>关于</span>
          </Menu.Item>
        </Menu>
      </aside>
    );
  }
}