import { Map } from 'immutable'

const createMap = (input) => input.reduce((things, thing) =>
  things.set(thing.id.toString(), thing)
, Map())

const apiUrl = process.env.API_URL || (process.env.NODE_ENV === 'production'
  ? 'http://api.diku.trade'
  : 'http://localhost:8081'
)

const createAction = (options, { defaults, name, skip = () => false, url, method = 'GET', data = {}, modify }) => {
  options = defaults.mergeDeep(new Map({
    id: options.params ? options.params.id : null
  })).mergeDeep(options)

  if (options.get('store')) {
    const state = options.get('store').get('getState')()

    if (skip(state, options)) {
      return {
        type: ''
      }
    }
  }

  return ({ fetch }) => {
    async function getPromise() {
      try {
        const response = await fetch(url(apiUrl, options), Object.assign({}, {
          method
        }, data))

        if (response.status !== 200) throw response

        return modify ? response.json().then(data => modify(data, options)) : response.json()
      } catch (e) {
        throw e
      }
    }

    return {
      type: `GET_${name}`,
      payload: {
        promise: getPromise()
      }
    }
  }
}

export { createMap, createAction }
