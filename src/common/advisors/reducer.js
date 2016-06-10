import { createMap } from '../lib/utils'
import { Map, Record, fromJS } from 'immutable'

const InitialState = Record({
  loading: false,
  advisors: Map(),
  offset: 1,
  publications: Map()
})
const initialState = new InitialState

const revive = ({ loading, advisors, offset, publications }) => initialState.merge({
  loading,
  advisors: new Map(advisors),
  offset,
  publications: new Map(publications)
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
        .update('advisors', map => map.merge(Map(action.payload.data)))
        .set('loading', false)
        .set('offset', action.payload.offset)

    case 'GET_ADVISOR_PROJECTS_SUCCESS':
      let projects = createMap(action.payload)

      return state
        .update('advisors', map.map(advisor => {
          if(advisor.id == projects.get(0).advisor.id) {
            if (!advisor.projects)
              advisor.projects = projects
            else
              advisor.projects.merge(projects)
          }
          return advisor
        }))

    case 'GET_ADVISOR_PUBLICATIONS_SUCCESS':
      let publications = createMap(action.payload)

      return state
        .update('advisors', map.map(advisor => {

          if(advisor.id == publications.get(0).advisor.id) {
            if (!advisor.publications)
              advisor.publications = publications
            else
              advisor.publications.merge(publications)
          }
          return advisor
        }))
  }

  return state
}
