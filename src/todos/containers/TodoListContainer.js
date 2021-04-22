import { connect } from 'react-redux';

import { todoDelete, todoUpdate } from '../actions';
import TodoList from '../components/TodoList/TodoList';
import { selectTodosCount, selectTodosItems } from '../selectors';

function mapStateToProps(state) {
  return {
    items: selectTodosItems(state),
    count: selectTodosCount(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDeleteItem(item) {
      dispatch(todoDelete(item));
    },
    onUpdateItem(item) {
      dispatch(todoUpdate(item));
    }
  }
}

const createContainer = connect(mapStateToProps, mapDispatchToProps);
export default createContainer(TodoList);
