import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { change } from './actions';

class Filter extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      filter: PropTypes.string.isRequired
    }

    handleSwitch = (status) => {
      const { dispatch } = this.props;
      dispatch(change(status));
    }

    render() {
      const { filter } = this.props;
      return (
        <div>
          <span style={filter === 'all' ? { fontWeight: 'bold' } : {}} onClick={() => this.handleSwitch('all')}>全部</span>|
          <span style={filter === 'uncompleted' ? { fontWeight: 'bold' } : {}} onClick={() => this.handleSwitch('uncompleted')}>待办</span>|
          <span style={filter === 'completed' ? { fontWeight: 'bold' } : {}} onClick={() => this.handleSwitch('completed')}>已办</span>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  filter: state.filter
});

export default connect(mapStateToProps)(Filter);
