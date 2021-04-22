import { TODO_ADD, TODO_CHANGE, TODO_DELETE, TODO_UPDATE } from './constants';

function randomInt() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

// function createAction(type) {
//   return (payload) => {
//     return {
//       type,
//       payload
//     }
//   }
// }

// const todoChange = createAction(TODO_CHANGE);

function todoChange(payload) {
  return { type: TODO_CHANGE, payload };
}

function todoDelete(payload) {
  return { type: TODO_DELETE, payload };
}

function todoUpdate(payload) {
  return { type: TODO_UPDATE, payload };
}

function todoAdd(text) {
  return {
    type: TODO_ADD,
    payload: {
      id: randomInt(),
      text,
      completed: false,
    },
  };
}

export { todoChange, todoAdd, todoDelete, todoUpdate };
