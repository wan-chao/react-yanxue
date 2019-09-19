import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import styles from './style/index.module.scss'
import TitleBar from '../title-bar'

class NewsList extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  static defaultProps = { 
    color:'#f02454',
    title:'新闻',
    list:[
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
    ]
  }
  componentWillMount(){
  }
  render() {
    const headerTitle = <TitleBar color={this.props.color} title={this.props.title}/>
    return (
      <List
        header={headerTitle}
        dataSource={this.props.list}
        renderItem={item => (
          <List.Item extra={<div></div>}>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
            />
          </List.Item>
        )}
      />
    )
  }
}
  
export default NewsList;