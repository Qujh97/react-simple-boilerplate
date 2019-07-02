/**
 * 高阶组件(继承方式)
 */

const editPropsHocEt = (WrappedComponent, newProps) => class NewComponent extends WrappedComponent {
  componentDidMount() {
    console.log('rewrite didmount');
  }

  render() {
    return super.render();
  }
};

export default editPropsHocEt;
