import { createMap } from '../lib/utils'
import { Map, Record, fromJS } from 'immutable'

const InitialState = Record({
  loading: false,
  sections: Map(),
  offset: 1
})
const initialState = new InitialState

const revive = ({ loading, sections, offset }) => initialState.merge({
  loading,
  sections: new Map(sections),
  offset
})

export default function sectionReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state)

  switch (action.type) {
    case 'GET_SECTIONS_START':
      return state.set('loading', true)

    case 'GET_SECTIONS_SUCCESS':
      return state
        .update('sections', map => map.merge(Map(action.payload.data)))
        .set('loading', false)
        .set('offset', action.payload.offset)

  }

  return state
}
