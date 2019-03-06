import * as R from 'ramda'
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

const handlers = {
}

export default (state = defaultState, action) => {
  const handler = handlers[action.type] || R.identity
  return handler(state, action)
}
