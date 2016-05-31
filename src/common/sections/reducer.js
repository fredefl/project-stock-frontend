import { createMap } from '../lib/utils'
import { Map, Record, fromJS } from 'immutable'

const InitialState = Record({
  loading: false,
  sections: Map(),
  offset: 1,
  subscribe_success: ''
})
const initialState = new InitialState

const revive = ({ loading, sections, offset, subscribe_success }) => initialState.merge({
  loading,
  sections: new Map(sections),
  offset,
  subscribe_success
})

export default function sectionReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state)

  switch (action.type) {
    case 'PUT_SUBSCRIBE_START':
    case 'GET_SECTIONS_START':
      return state.set('loading', true)

    case 'GET_SECTIONS_SUCCESS':
      return state
        .update('sections', map => map.merge(Map(action.payload.data)))
        .set('loading', false)
        .set('offset', action.payload.offset)

    case 'SUBSCRIBE_CLOSE_SNACKBAR':
      return state.set('subscribe_success', '')

    case 'PUT_SUBSCRIBE_ERROR':
      return state.set('subscribe_success', 'error')

    case 'PUT_SUBSCRIBE_SUCCESS':
      return state.set('loading', false).set('subscribe_success', 'success')
  }

  return state
}
