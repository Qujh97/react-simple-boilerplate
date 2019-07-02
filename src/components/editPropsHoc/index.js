/**
 * 高阶组件(代理方式)
 */
import React, { Component } from 'react';

const editPropsHoc = (WrappedComponent, newProps) => class NewComponent extends Component {
  render() {
    return (
      <WrappedComponent {...this.props} {...newProps} />
    );
  }
};

export default editPropsHoc;
