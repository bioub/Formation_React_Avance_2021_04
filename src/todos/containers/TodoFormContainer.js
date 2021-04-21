import { connect } from 'react-redux';

import { todoAdd, todoChange } from '../actions';
import TodoForm from '../components/TodoForm/TodoForm';
import { selectTodosInput } from '../selectors';

function mapStateToProps(state) {
  return {
    newTodoInput: selectTodosInput(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChange(inputVal) {
      dispatch(todoChange(inputVal));
    },
    onNewTodoAdd(inputVal) {
      dispatch(todoAdd(inputVal));
    },
  };
}

const createContainer = connect(mapStateToProps, mapDispatchToProps);
export default createContainer(TodoForm);


// function TodoFormContainer() {
//   // const state = store.getState();
//   // const dispatch = store.dispatch;
//   return (
//     <TodoForm newTodoInput={state.newTodo} onNewTodoAdd={() => dispatch({type: 'TODO_ADD', value: state.newTodo})} onNewTodoChange={} />
//   )
// }
