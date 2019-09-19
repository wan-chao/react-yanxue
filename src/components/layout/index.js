import React, { Component } from 'react';
import MHeader from '../m-header'

export default (WrappedComponent) => class extends Component {
  render(){
    return (
      <div className="container">
        <MHeader history={this.props.history}/>
        <WrappedComponent {...this.props}/>
      </div>
    )
  }
}