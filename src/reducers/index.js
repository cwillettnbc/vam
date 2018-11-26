/**
 * Root Reducer
 *
 */
import update from 'immutability-helper'

const initialState = {
  brand: "",
  platform: "",
  mode: "",
  features: {
    ABTesting: true
  },
  config: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BRAND':
      return update(state, {
        brand: {
          $set: action.name
        }
      })
    case 'SET_PLATFORM':
      return update(state, {
        platform: {
          $set: action.name
        }
      })
    case 'SET_MODE':
      return update(state, {
        mode: {
          $set: action.name
        }
      })
    case 'SET_CONFIG':
      return update(state, {
        config: {
          $set: action.data
        }
      })
    default:
      return state
  }
};

export default rootReducer