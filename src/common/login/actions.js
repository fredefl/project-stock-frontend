import { Map, fromJS } from 'immutable'
import { createAction } from '../lib/utils'

export const login = ( options, data ) => {
  return createAction(options, {
    name: 'LOGIN',
    method: 'POST',
    data: data,
    defaults: new Map({
      filter: { }
    }),
    url: (apiUrl, options) =>
      `${apiUrl}/auth/token/${options.get('email')}`
  })
}
