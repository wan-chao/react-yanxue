import React, { Component } from 'react';
import styles from './style/index.module.scss'

class TitleBar extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  static defaultProps = { 
    color:'#f02454',
    title:'新闻'
  }
  componentWillMount(){
  }
  render() {
    let iconStyle ={
      background:this.props.color
    }
    return (
      <ul className={styles.list_title}>
        <li className={styles.title_icon} style={iconStyle}></li>
        <li className={styles.title_txt}>{this.props.title}</li>
      </ul>
    )
  }
}
  
export default TitleBar;