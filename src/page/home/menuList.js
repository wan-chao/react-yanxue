import React, { Component } from 'react';
import {activeEnableEditor} from '../../config/config'
import styles from './style/index.module.scss'

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menusList:[]
    };
  }
  componentDidMount(){
    this.initMenuList()
  }
  jumpPage(menu){
    this.props.jump(menu)
  }
  initMenuList(){
    let menusList = []
    let {menus,userType} = this.props
    menus.forEach(v=>{
      if(v.name === "活动管理"){
        menusList.push({pic:require('../../static/images/huodong.png'),name:'活动管理',url:activeEnableEditor(userType)?'/actions':'/venue'})
      }else if(v.name === "部门管理"){
        menusList.push({pic:require('../../static/images/jigou.png'),name:'机构管理',url:'/organization'})
      } else if(v.name === "用户管理"){
        menusList.push({pic:require('../../static/images/user.png'),name:'用户管理',url:'/user'})
      } else if(v.name === "电子围栏"){
        menusList.push({pic:require('../../static/images/weilan.png'),name:'电子围栏',url:'/fence'})
      } else if(v.name === "设备管理"){
        menusList.push({pic:require('../../static/images/shebei.png'),name:'设备管理',url:'/device'})
      } else if(v.name === "信息发布"){
        menusList.push({pic:require('../../static/images/xinxi.png'),name:'信息发布',url:'/information'})
      } else if(v.name === "统计分析"){
        menusList.push({pic:require('../../static/images/tongji.png'),name:'统计分析',url:'/statistics'})
      }
    })
    this.setState({menusList})
  }
  render() {
    return (
      <ul className={styles.menu_list}>
        {this.state.menusList.map((menu,index)=>(
          <li key={index} onClick={this.jumpPage.bind(this,menu)}>
            <img src={menu.pic} alt='' className={styles.menu_img}/>
            <span>{menu.name}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default MenuList