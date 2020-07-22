import {
  GET_RESTAURANTS,
} from './actions'

import data from 'data'

export const fetchRestaurants = () => async (dispatch) => {
  dispatch({ type: GET_RESTAURANTS, payload: data })
}