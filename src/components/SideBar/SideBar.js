import React,{Component} from 'react';
import { Menu, Icon, Button } from 'antd';

import './SideBar.scss';

const SubMenu = Menu.SubMenu;

export default class SideBar extends Component{
  constructor(props){
    super(props);
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
        >
          <Menu.Item key="1">
            <Icon type="home" />
            <span>主页</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
        </Menu>
      </aside>
    );
  }
}