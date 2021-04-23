import reduxToolkit from '@reduxjs/toolkit';

import { todoAdd } from "./actions";

test('#todoAdd TODO_ADD mock nanoid', () => {
  const nanoid = reduxToolkit.nanoid;
  reduxToolkit.nanoid = () => '123';

  const action = todoAdd('B');
  expect(action.type).toEqual('TODO_ADD');
  expect(action.payload.id).toEqual('123');

  reduxToolkit.nanoid = nanoid;
});
