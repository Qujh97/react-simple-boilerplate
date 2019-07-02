import { createSelector } from 'reselect';

const getTodo = state => state.todo; // 从state中获取todo(state在mapStateToProps中传入)
const getFilter = state => state.filter; // 从state中获取filter

const selectTodo = createSelector(
  [getTodo, getFilter], // 将以参数形式传入下方的函数
  (todo, filter) => {
    switch (filter) {
      case 'all': {
        return todo;
      }
      case 'uncompleted': {
        return todo.filter(item => !item.completed);
      }
      case 'completed': {
        return todo.filter(item => item.completed);
      }
      default: {
        return todo;
      }
    }
  }
);

export default selectTodo;
