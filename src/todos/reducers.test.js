import { todoAdd } from "./actions";
import { itemsReducer } from "./reducers";

test('#itemsReducer unknown action', () => {
  const state = [{id: 1, text: 'A', completed: false}];
  const action = {type: 'lambda'}
  const nextState = itemsReducer(state, action);

  expect(nextState).toBe(state);
});

test('#itemsReducer TODO_ADD', () => {
  const state = [{id: 1, text: 'A', completed: false}];
  const action = todoAdd('B');
  const nextState = itemsReducer(state, action);

  expect(nextState).not.toBe(state);
  expect(nextState[1].text).toEqual('B');
});
