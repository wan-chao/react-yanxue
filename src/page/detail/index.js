import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../../store/actions/userinfo'
import Layout from '../../components/layout'

class Detail extends Component {

  componentWillMount(){
    // console.log('222',this.props.userinfo)
    // let { history: { replace }, location } = this.props
    // if (location.pathname != '/login') replace('./login')
  }

  render() {
    return (
      <h1>Detail</h1>
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
)(Detail))