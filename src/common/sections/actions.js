import { Map, fromJS } from 'immutable';
import { createAction } from '../lib/utils';

export const SUBSCRIBE_CLOSE_SNACKBAR = 'SUBSCRIBE_CLOSE_SNACKBAR';

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
      `${apiUrl}/sections/`,
    modify: (data, options) => (
      { data, offset: options.get('filter').get('offset') + options.get('filter').get('limit') }
    )
  })

export function closeSnackbar() {
  return ({ dispatch }) => {
    return {
      type: SUBSCRIBE_CLOSE_SNACKBAR
    };
  };
}

export const subscribeToSection = ( options, data ) => {
  return createAction(options, {
    name: 'SUBSCRIBE',
    method: 'PUT',
    data: data,
    defaults: new Map({
      filter: { }
    }),
    url: (apiUrl, options) =>
      `${apiUrl}me/subscriptions/`
  })
}
