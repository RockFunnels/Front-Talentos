import createReducer from '../create-reducer'
import {
  GET_RESTAURANTS
} from './actions'

const initialState = {
    count: 0,
    list: []
}

const restaurants = createReducer(initialState, {
  [GET_RESTAURANTS]: (store, action) => ({
    ...store,
    count: action.payload.length,
    list: action.payload
  }),
})

export default restaurants
