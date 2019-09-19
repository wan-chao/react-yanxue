import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../../store/actions/userinfo'
import { Row,Col,Calendar} from 'antd';
import Layout from '../../components/layout'
import NewsList from '../../components/news-list'
import TitleBar from '../../components/title-bar'
import MenuList from './menuList'
import styles from './style/index.module.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu:[]
    };
  }

  componentDidMount(){
    // console.log('...',this.props.userinfo)
  }

  jumpPage(menu){
    this.props.history.push(menu.url)
  }

  render() {
    let {menus,userType} = this.props.userinfo
    return (
      <Row>
        <Col offset={2} span={20}>
          {menus?<MenuList menus={menus} userType={userType} jump={this.jumpPage.bind(this)}/>:<div></div>}
          <div className={styles.content}>
            <div className={styles.content_left}>
              <NewsList title='动态播报'/>
              <NewsList color="#2459f0" title='其他新闻'/>
            </div>
            <div className={styles.content_right}>
              <TitleBar color="#2459f0" title='日历'/>
              <Calendar fullscreen={false}/>
            </div>
          </div>
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
)(Home))