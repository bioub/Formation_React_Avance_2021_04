// recompose (aussi l'ancetre des hooks)
// const selectTodosCount = compose(
//  selectTodosItems,
//  (items) => items.length
// );

// reselect (similaire à compose avec Memoize)
// const selectTodosCount = createSelector(
//  selectTodosItems,
//  (items) => items.length
// );
import { createSelector } from 'reselect'

function selectTodos(state) {
  return state.todos;
}

const selectTodosCount = createSelector(
  selectTodosItems,
  (items) => {
    console.log('selectTodosCount');
    return items.filter((it) => !it.completed).length
  }
);
// function selectTodosCount(state) {
//   console.log('selectTodosCount');
//   return selectTodosItems(state).filter((it) => !it.completed).length;
// }

function selectTodosItems(state) {
  return selectTodos(state).items;
}

function selectTodosInput(state) {
  return selectTodos(state).input;
}

export { selectTodos, selectTodosItems, selectTodosInput, selectTodosCount };
