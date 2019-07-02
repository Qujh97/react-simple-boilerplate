import { Component } from 'react';
import PropTypes from 'prop-types';

class FaCC extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  }

  componentDidMount() {
    console.log('为所欲为');
  }

  render() {
    const { children } = this.props;
    return children('为所欲为', '鸡你太美');
  }
}

export default FaCC;
