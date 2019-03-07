import * as R from 'ramda'
import { FILTER_BY_FACILITIES } from '../actions'
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

const handlers = {
  [FILTER_BY_FACILITIES]: (state, action) => {
    const facilityFilter = R.filter(filterByFacility(action.payload))
    return facilityFilter(state)
  }
}

export default (state = defaultState, action) => {
  const handler = handlers[action.type] || R.identity
  return handler(state, action)
}
