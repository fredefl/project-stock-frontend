import { createMap } from '../lib/utils'
import { Map, Record, fromJS } from 'immutable'

const InitialState = Record({
  loading: false,
  projects: Map(),
  offset: 1
})
const initialState = new InitialState

const revive = ({ loading, projects, offset }) => initialState.merge({
  loading,
  projects: new Map(projects),
  offset
})

export default function advisorReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state)

  switch (action.type) {
    case 'GET_PROJECT_START':
    case 'GET_PROJECTS_START':
      return state.set('loading', true)

    case 'GET_PROJECT_SUCCESS':
      return state
        .update('projects', map => map.merge(createMap([action.payload])))
        .set('loading', false)

    case 'GET_PROJECTS_SUCCESS':
      return state
        .update('projects', map => map.merge(Map(action.payload.data)))
        .set('loading', false)
        .set('offset', action.payload.offset)

  }

  return state
}
