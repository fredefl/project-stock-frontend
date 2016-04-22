import { createMap } from '../lib/utils'
import { Map, Record } from 'immutable'

const InitialState = Record({
  loading: false,
  advisors: Map(),
  offset: 1
})
const initialState = new InitialState

const revive = ({ loading, advisors, offset }) => initialState.merge({
  loading,
  advisors: new Map(advisors),
  offset
})

export default function advisorReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state)

  switch (action.type) {
    case 'GET_ADVISOR_START':
    case 'GET_ADVISORS_START':
      return state.set('loading', true)

    case 'GET_ADVISOR_SUCCESS':
      return state
        .update('advisors', map => map.merge(createMap([action.payload])))
        .set('loading', false)

    case 'GET_ADVISORS_SUCCESS':
      return state
        .update('advisors', map => map.merge(createMap(action.payload.data)))
        .set('loading', false)
        .set('offset', action.payload.offset)

  }

  return state
}
