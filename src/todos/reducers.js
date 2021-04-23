import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { todoAdd, todoChange, todoDelete, todoUpdate } from './actions';

// const nextState = reducer(state, action);
// pure function
// - prédictive : appelée avec des params données
// elle retourne toujours la même chose
// fonction prédictive : add(1, 2) === 3
// fonction non-prédic : Math.random() === ???
// - ne modifie pas ses params
// state ne doit pas être modifié, retourner un nouveau state
// - ne doit pas avoir de side-effect (on utilisera redux-thunk ou saga)
// pas de requete HTTP, pas d'appel au localStorage
// function inputReducer(previousState = '', { type, payload }) {
//   switch (type) {
//     case TODO_CHANGE:
//       return payload;
//     default:
//       return previousState;
//   }
// }
const inputReducer = createReducer('', {
  [todoChange]: (state, { payload }) => payload,
});

const itemsReducer = createReducer([], {
  [todoAdd]: (state, { payload }) => [...state, payload],
  [todoDelete]: (state, { payload }) =>
    state.filter((item) => item.id !== payload.id),
  [todoUpdate]: (state, { payload }) =>
    state.map((item) =>
      item.id !== payload.id ? item : { ...item, ...payload },
    ),
});

const todosReducer = combineReducers({
  input: inputReducer,
  items: itemsReducer,
});

// function todosReducer(
//   previousState = { input: '', items: [] },
//   { type, payload },
// ) {
//   switch (type) {
//     case TODO_CHANGE:
//       return { ...previousState, input: payload };
//     case TODO_ADD:
//       return { ...previousState, items: [...previousState, payload] };
//     case TODO_DELETE:
//       return {
//         ...previousState,
//         items: previousState.filter((item) => item.id !== payload.id),
//       };
//     case TODO_UPDATE:
//       return {
//         ...previousState,
//         items: previousState.map((item) =>
//           item.id !== payload.id ? item : { ...item, ...payload },
//         ),
//       };
//     default:
//       return previousState;
//   }
// }

export { inputReducer, itemsReducer, todosReducer };
