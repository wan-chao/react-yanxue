import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../../store/actions/userinfo'
import Layout from '../../components/layout'
import { Row,Col} from 'antd';
import styles from './style/index.module.scss'
import MTree from '../../components/m-tree'

class Organization extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentWillMount(){
  }

  render() {
    return (
      <Row>
        <Col offset={2} span={20}>
          <MTree/>
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
)(Organization))