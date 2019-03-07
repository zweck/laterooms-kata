import * as R from 'ramda'
import {
  SORT_BY_STAR_DESC,
  SORT_BY_STAR_ASC,
  FILTER_BY_FACILITIES
} from '../actions'

export const defaultState = [
  {
    name: "hotelone",
    starRating: 5,
    facilities: ["car park", "pool"]
  },
  {
    name: "hoteltwo",
    starRating: 3,
    facilities: ["car park", "gym"]
  },
  {
    name: "hotelthree",
    starRating: 3,
    facilities: []
  }
]

const filterByFacility = filteredFacilities => hotel => R.all(
  (faciliy) => (
    R.includes(faciliy, hotel.facilities)
  )
)(filteredFacilities)

const sortHotelsAsc = state => R.sortBy(R.prop('starRating'), state)
const handlers = {
  [SORT_BY_STAR_ASC]: state => sortHotelsAsc(state),
  [SORT_BY_STAR_DESC]: state => R.reverse(sortHotelsAsc(state)),
  [FILTER_BY_FACILITIES]: (state, action) => {
    const facilityFilter = R.filter(filterByFacility(action.payload))
    return facilityFilter(defaultState)
  }
}

export default (state = defaultState, action) => {
  const handler = handlers[action.type] || R.identity
  return handler(state, action)
}
