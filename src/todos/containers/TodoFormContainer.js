// import { connect } from 'react-redux';

import { useDispatch, useSelector } from 'react-redux';

import { todoAdd, todoChange } from '../actions';
import TodoForm from '../components/TodoForm/TodoForm';
import { selectTodosInput } from '../selectors';

// function mapStateToProps(state) {
//   return {
//     newTodoInput: selectTodosInput(state),
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onNewTodoChange(inputVal) {
//       dispatch(todoChange(inputVal));
//     },
//     onNewTodoAdd(inputVal) {
//       dispatch(todoAdd(inputVal));
//     },
//   };
// }

// const createContainer = connect(mapStateToProps, mapDispatchToProps);
// export default createContainer(TodoForm);

function TodoFormContainer() {
  const newTodoInput = useSelector(selectTodosInput);
  const dispatch = useDispatch();
  return (
    <TodoForm
      newTodoInput={newTodoInput}
      onNewTodoAdd={(v) => dispatch(todoAdd(v))}
      onNewTodoChange={(v) => dispatch(todoChange(v))}
    />
  );
}

export default TodoFormContainer;
