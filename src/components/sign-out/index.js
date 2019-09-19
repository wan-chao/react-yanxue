import React, { Component } from 'react';
import styles from './style/index.module.scss'

class SignOut extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  handleClick(){
    this.props.out()
  }
  componentWillMount(){
  }
  render() {
    return (
      <ul className={styles.signOut}>
        <li className={styles.avatar_icon}>
          <img src={require('../../static/images/avatar.png')} alt=""/>
        </li>
        <li className={styles.name_txt} onClick={this.handleClick.bind(this)}>
          {this.props.user.userName}
        </li>
      </ul>
    )
  }
}
  
export default SignOut;