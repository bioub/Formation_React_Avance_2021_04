import { createAction, nanoid } from '@reduxjs/toolkit';

const todoChange = createAction('TODO_CHANGE');
const todoDelete = createAction('TODO_DELETE');
const todoUpdate = createAction('TODO_UPDATE');

const todoAdd = createAction('TODO_ADD', (text) => ({
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
}));

export { todoChange, todoAdd, todoDelete, todoUpdate };
