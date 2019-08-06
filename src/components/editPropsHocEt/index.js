/**
 * 高阶组件(继承方式)
 */

const editPropsHocEt = newProps => WrappedComponent => class NewComponent extends WrappedComponent {
  componentDidMount() {
    console.log('didmount HocEt');
  }

  render() {
    this.props = { ...this.props, ...newProps };
    return super.render();
  }
};

export default editPropsHocEt;
