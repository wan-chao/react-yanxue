import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { Row,Col} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../../store/actions/userinfo'
import {userinfo} from '../../api/login'
import {routerList} from '../../config/config'
import styles from './style/index.module.scss'
import SignOut from '../sign-out'

class MHeader extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:{}
    }
  }
  componentWillMount(){
    this.getUsrInfo()
  }
  getUsrInfo(){
    let token = localStorage.getItem('__config_center_token')
    let hasInfo = this.props.userinfo.userName?true:false
    if(hasInfo) {
      this.setState({
        user:this.props.userinfo
      })
      this.authPath(this.props.userinfo)
    }else{
      userinfo(token).then(res=>{
        console.log(res)
        if(res.status===200){
          this.setState({
            user:res.data
          })
          this.authPath(res.data)
          this.props.userinfoActions.userData(res.data)
        }
      })
    }
  }
  authPath(data){
    let menus = data.menus
    let list = routerList(menus)
    let path = this.props.history.location.pathname
    let index = list.findIndex(v=>{
      return v === path
    })
    if(index<0) {
      this.props.history.push('/')
    }
  }
  signOut(){
    console.log('用户退出登录...')
  }
  backHome(){
    this.props.history.push('/')
  }
  render() {
    return (
      <header>
        <Row className={styles.header}>
          <Col offset={1} span={22} className={styles.header_top}>
            <div className={styles.header_left} onClick={this.backHome.bind(this)}>研学旅行安全管理后台</div>
            <SignOut user={this.state.user} out={this.signOut.bind(this)}/>
          </Col>
        </Row>
      </header>
    )
  }
}

  //将redux state映射到组件的props属性
function mapStateToProps(state) {
  return {
    userinfo:state.userinfo
  }
}
//将redux actions dispatch映射到组件的props属性
function mapDispatchToProps(dispatch) {
  return {
    userinfoActions:bindActionCreators(userinfoActions,dispatch)
  }
}
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MHeader);