import React,{Component} from 'react';
import { Menu, Icon, Button } from 'antd';

import './SideBar.css';

const SubMenu = Menu.SubMenu;

export default class SideBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    }
  }

  toggleCollapsed = () => {
    console.info(1111);
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render(){
    return(
      <div>
        <Menu
          className='sidebar'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
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
      </div>
    );
  }
}