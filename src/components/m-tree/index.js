import React, { Component } from 'react';
import {Tree} from 'antd';
const { TreeNode, DirectoryTree } = Tree;

class MTree extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  static defaultProps = { 
    treeData:[
      {
        title: '承办方',
        key: '1',
        children: [
          {
            title: '北京国际旅行社',
            key: '1-1'
          }
        ]
      },
      {
        title: '运营方',
        key: '2'
      },
      {
        title: '监管机构及学校',
        key: '3'
      },
      {
        title: '供应方',
        key: '4',
      },
    ]
  }
  componentWillMount(){
  }
  renderTreeNodes = (data) =>{
    return data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item} >
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} {...item} isLeaf />;
    });
  }

  onSelect = (keys, event) => {
    console.log('Trigger Select', keys, event);
  };

  onExpand = () => {
    console.log('Trigger Expand');
  };

  render() {
    return (
      <DirectoryTree  onSelect={this.onSelect} onExpand={this.onExpand} style={{fontSize:16}}>
        {this.renderTreeNodes(this.props.treeData)}
      </DirectoryTree>
    )
  }
}
  
export default MTree;