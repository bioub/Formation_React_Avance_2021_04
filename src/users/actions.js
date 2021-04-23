import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAll } from './api/users';
import { selectUsersItems } from './selectors';

// import { selectUsersItems } from './selectors';

export const userFetch = createAsyncThunk(
  'USER_FETCH',
  async (_, { getState }) => {
    const state = getState();
    const previousUsers = selectUsersItems(state);

    // cache
    if (previousUsers?.length) {
      return previousUsers;
    }

    try {
      const users = await getAll();
      return users;
    } catch {
      throw new Error('Mon erreur');
    }
  },
);
// export function userFetch() {
//   return async (dispatch, getState) => {
//     const state = getState();
//     const previousUsers = selectUsersItems(state);

//     // cache
//     if (previousUsers?.length) {
//       return;
//     }

//     dispatch(userFetchRequest());
//     try {
//       const users = await getAll();
//       dispatch(userFetchSuccess(users));
//     } catch (err) {
//       dispatch(userFetchError(err));
//     }
//   };
// }

// export const userFetchRequest = createAction('USER_FETCH_REQUEST');
// export const userFetchSuccess = createAction('USER_FETCH_SUCCESS');
// export const userFetchError = createAction('USER_FETCH_ERROR');
