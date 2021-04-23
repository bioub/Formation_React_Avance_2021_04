import { createReducer } from '@reduxjs/toolkit'

import { userFetch } from './actions';

const initialValue = {
  loading: false,
  items: [],
};

export const usersReducer = createReducer(initialValue, {
  [userFetch.pending]: (state) => ({
    ...state,
    loading: true,
    items: [],
  }),
  [userFetch.fulfilled]: (state, {payload}) => ({
    ...state,
    loading: false,
    items: payload,
  }),
  [userFetch.rejected]: (state, {error}) => ({
    ...state,
    loading: false,
    error,
  })
})

