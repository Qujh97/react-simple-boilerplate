/**
 * 高阶组件(代理方式)
 */
import React, { Component } from 'react';

const editPropsHoc = newProps => WrappedComponent => class NewComponent extends Component {
  componentDidMount() {
    console.log('代理方式可以添加生命周期操作');
  }

  render() {
    return (
      <WrappedComponent {...this.props} {...newProps} />
    );
  }
};

export default editPropsHoc;
