import { Map, fromJS } from 'immutable'
import { createAction } from '../lib/utils'

export const getAdvisor = (options) =>
  createAction(options, {
    name: 'ADVISOR',
    defaults: new Map({
      filter: { }
    }),
    url: (apiUrl, options) =>
      `${apiUrl}advisor/${options.get('id')}`,
    skip: (state, options) =>
      state.advisors.get('advisors').get(options.get('id'))
  })

export const getAdvisors = (options) =>
  createAction(options, {
    name: 'ADVISORS',
    defaults: fromJS({
      filter: {
        limit: 8,
        offset: 1
      }
    }),
    url: (apiUrl, options) =>
      `${apiUrl}advisors/`, // ?filter=${JSON.stringify(options.get('filter'))}
    modify: (data, options) => (
      { data, offset: options.get('filter').get('offset') + options.get('filter').get('limit') }
    )
  })

export const getProjects = (options) =>
  createAction(options, {
    name: 'ADVISOR_PROJECTS',
    defaults: new Map({
      filter: { }
    }),
    url: (apiUrl, options) =>
      `${apiUrl}advisor/${options.get('id')}/advisedProjects`
  })

export const getPublications = (options) =>
  createAction(options, {
    name: 'ADVISOR_PUBLICATIONS',
    defaults: new Map({
      filter: { }
    }),
    url: (apiUrl, options) =>
      `${apiUrl}advisor/${options.get('id')}/publications`
  })
