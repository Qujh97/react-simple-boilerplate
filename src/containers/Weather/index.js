/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAsync } from './actions';

class Weahter extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  getWeather = () => {
    const { dispatch } = this.props;
    dispatch(getAsync('苏州'));
  }

  render() {
    return (
      <div>
        Weahter
        <button onClick={this.getWeather}>get weather</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps)(Weahter);
