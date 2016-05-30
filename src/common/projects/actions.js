import { Map, fromJS } from 'immutable'
import { createAction } from '../lib/utils'

export const getProject = (options) =>
  createAction(options, {
    name: 'PROJECT',
    defaults: new Map({
      filter: { }
    }),
    url: (apiUrl, options) =>
      `${apiUrl}project/${options.get('id')}`,
    skip: (state, options) =>
      state.project.get('project').get(options.get('id'))
  })

export const getProjects = (options) =>
  createAction(options, {
    name: 'PROJECTS',
    defaults: fromJS({
      filter: {
        limit: 8,
        offset: 1
      }
    }),
    url: (apiUrl, options) =>
      `${apiUrl}/projects/`, // ?filter=${JSON.stringify(options.get('filter'))}
    modify: (data, options) => (
      { data, offset: options.get('filter').get('offset') + options.get('filter').get('limit') }
    )
  })
