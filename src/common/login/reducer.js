import { createMap } from '../lib/utils'
import { Map, Record, fromJS } from 'immutable'

const InitialState = Record({
  success: false,
  token: null,
  loading: false,
  error: ""
})
const initialState = new InitialState

const revive = ({ success, token, loading, error }) => initialState.merge({
  success,
  token,
  loading,
  error
})

export default function loginReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state)

  switch (action.type) {
    case 'POST_LOGIN_START':
      return state.set('loading', true)

    case 'POST_LOGIN_SUCCESS':
      if ( action.payload.data.token != undefined ) {
        return state.set('success', true)
        .set('token', action.payload.data.token)
        .set('loading', false)
      } else {
        return state.set('loading', false).set('success', false)
      }

    case 'POST_LOGIN_ERROR':
      return state.set('loading', false).set('success', false).set('error', action.payload.message)

  }

  return state
}
