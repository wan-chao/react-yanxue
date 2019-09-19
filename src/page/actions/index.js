import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../../store/actions/userinfo'
import Layout from '../../components/layout'
import { Row,Col,Input,Button } from 'antd';
import styles from './style/index.module.scss'
import MDropdown from '../../components/m-dropdown'

class Active extends Component {
  constructor(props){
    super(props)
    this.state = {
      lists:['111','222','333','444','555','666']
    }
  }

  componentWillMount(){
  }

  render() {
    return (
      <Row>
        <Col offset={2} span={20}>
          <div className={styles.content_top}>
            <MDropdown/>
            <Input className={styles.top_input} placeholder="请输入内容"/>
            <Button type="primary" style={{marginLeft:20}}>搜索</Button>
          </div>
          <ul className={styles.content_mid}>
            {this.state.lists.map((list,index)=>(
              <li className={`${styles.mid_card} ${(index+1)%4===0?null:styles.mid_cardEnd}`}>{list}</li>
            ))}
          </ul>
        </Col>
      </Row>
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

export default Layout(connect(
  mapStateToProps,
  mapDispatchToProps
)(Active))