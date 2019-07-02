/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filter from '../Filter';
import selectTodo from './selectors';
import { add, toggle, remove } from './actions';
import { editPropsHoc, editPropsHocEt } from '../../components';

class Todo extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    todo: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    console.log(props);
  }

  state = {
    text: ''
  };

  componentDidMount() {
    console.log('old didmount');
  }

  handleAdd = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    if (text) {
      dispatch(add(text));
      this.setState({
        text: ''
      });
    }
  }

  handleFinish = (id) => {
    const { dispatch } = this.props;
    dispatch(toggle(id));
  }

  handleRemove = (id) => {
    const { dispatch } = this.props;
    dispatch(remove(id));
  }

  render() {
    const { text } = this.state;
    const { todo } = this.props;
    return (
      <div>
        <input value={text} onChange={(e) => { this.setState({ text: e.target.value }); }} />
        <button onClick={this.handleAdd}>add</button>
        {
          todo && todo.map(item => (
            <p key={item.id}>
              {item.text} - {item.completed ? '已办' : '待办'}
              <button onClick={() => { this.handleFinish(item.id); }}>change</button>
              <button onClick={() => { this.handleRemove(item.id); }}>×</button>
            </p>
          ))
        }
        <Filter />
      </div>
    );
  }
}

const newProps = {
  cxk: {
    hobby: '唱 跳 rap 篮球',
    msg: '鸡你太美'
  },
  wyf: {
    hobby: 'freestyle',
    msg: '大碗宽面'
  },
  staticContext: '鸡你太美'
};

const HocTodo = editPropsHocEt(Todo, newProps);

const mapStateToProps = state => ({
  todo: selectTodo(state)
});

export default connect(mapStateToProps)(HocTodo);
