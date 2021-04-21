import { combineReducers } from 'redux';

import { TODO_ADD, TODO_CHANGE, TODO_DELETE, TODO_UPDATE } from './constants';

// pure function
// - prédictive : appelée avec des params données
// elle retourne toujours la même chose
// fonction prédictive : add(1, 2) === 3
// fonction non-prédic : Math.random() === ???
// - ne modifie pas ses params
// state ne doit pas être modifié, retourner un nouveau state
// - ne doit pas avoir de side-effect (on utilisera redux-thunk ou saga)
// pas de requete HTTP, pas d'appel au localStorage
function inputReducer(previousState = '', { type, payload }) {
  switch (type) {
    case TODO_CHANGE:
      return payload;
    default:
      return previousState;
  }
}

function itemsReducer(previousState = [], { type, payload }) {
  switch (type) {
    case TODO_ADD:
      return [...previousState, payload];
    case TODO_DELETE:
      return previousState.filter((item) => item.id !== payload.id);
    case TODO_UPDATE:
      return previousState.map((item) => item.id !== payload.id ? item : {...item, ...payload});
    default:
      return previousState;
  }
}

const todosReducer = combineReducers({
  input: inputReducer,
  items: itemsReducer,
});

export { inputReducer, itemsReducer, todosReducer };
