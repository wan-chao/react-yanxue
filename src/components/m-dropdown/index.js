import React, { Component } from 'react';
import {Menu, Dropdown, Icon} from 'antd';

class MDropdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      title:'全部'
    }
  }
  componentWillMount(){
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          待提交
        </Menu.Item>
        <Menu.Item key="1">
          审核中
        </Menu.Item>
        <Menu.Item key="3">
          被驳回
        </Menu.Item>
      </Menu>
    )
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="#">
          {this.state.title} <Icon type="down" />
        </a>
      </Dropdown>
    )
  }
}
  
export default MDropdown;