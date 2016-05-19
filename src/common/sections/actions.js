import { Map, fromJS } from 'immutable'
import { createAction } from '../lib/utils'

export const getSections = (options) =>
  createAction(options, {
    name: 'SECTIONS',
    defaults: fromJS({
      filter: {
        limit: 8,
        offset: 1
      }
    }),
    url: (apiUrl, options) =>
      `${apiUrl}/sections/`, // ?filter=${JSON.stringify(options.get('filter'))}
    modify: (data, options) => (
      { data, offset: options.get('filter').get('offset') + options.get('filter').get('limit') }
    )
  })
