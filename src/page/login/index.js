import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../../store/actions/userinfo'
import styles from './style/index.module.scss'
import LoginForm from './loginForn'
import {userLogin} from '../../api/login'

class Login extends Component {

  componentWillMount(){
  }

  submitForm(data){
    let {username,password} = data
    userLogin(username,password).then(res=>{
      console.log(res)
      if(res.status === 200){
        localStorage.setItem('__config_center_token',res.data);
        this.props.userinfoActions.login(true)
        this.props.history.push('/')
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className={styles.content}>
          <div className={styles.middle}>
            <img className={styles.icon_bg} src={require("../../static/images/loginIcon.png")} alt=""/>
            <ul className={styles.login_form}>
              <li className={styles.form_top}>研学旅行安全管理后台</li>
              <li className={styles.user_form}>
                <div className={styles.form_box}>
                  <LoginForm submit={this.submitForm.bind(this)}/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
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
)(Login);