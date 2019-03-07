import reducer, { defaultState } from './index'
import {
  SORT_BY_STAR_DESC,
  SORT_BY_STAR_ASC,
  FILTER_BY_FACILITIES } from '../actions'

const GYM_STORE = [
  {
    name: "hoteltwo",
    starRating: 3,
    facilities: ["car park", "gym"]
  }
]

const POOL_STORE = [
  {
    name: "hotelone",
    starRating: 5,
    facilities: ["car park", "pool"]
  }
]

const SORTED_ASC_HOTELS = [
  {
    name: "hoteltwo",
    starRating: 3,
    facilities: ["car park", "gym"]
  },
  {
    name: "hotelthree",
    starRating: 3,
    facilities: []
  },
  {
    name: "hotelone",
    starRating: 5,
    facilities: ["car park", "pool"]
  },
]

const SORTED_DESC_HOTELS = [
  {
    name: "hotelone",
    starRating: 5,
    facilities: ["car park", "pool"]
  },
  {
    name: "hotelthree",
    starRating: 3,
    facilities: []
  },
  {
    name: "hoteltwo",
    starRating: 3,
    facilities: ["car park", "gym"]
  },
]

describe('reducer test', () => {
  it('should return default state when no action match', () => {
    expect(reducer(defaultState, { type: 'ACTION' })).toEqual(defaultState)
  })

  it('should filter hotels by a given facility', () => {
    const reducedState = reducer(
      defaultState,
      { type: FILTER_BY_FACILITIES, payload: ['gym'] }
    )
    expect(reducedState).toEqual(GYM_STORE)
  })

  it('should filter hotels by a multiple facilities', () => {
    const reducedState = reducer(
      defaultState,
      { type: FILTER_BY_FACILITIES, payload: ['car park', 'pool'] }
    )
    expect(reducedState).toEqual(POOL_STORE)
  })

  it('should return multiple hotels that share a facility', () => {
    const reducedState = reducer(
      defaultState,
      { type: FILTER_BY_FACILITIES, payload: ['car park'] }
    )
    expect(reducedState).toEqual([ ...POOL_STORE, ...GYM_STORE ])
  })

  it('should sort the hotels ascending', () => {
    const reducedState = reducer(
      defaultState,
      { type: SORT_BY_STAR_ASC }
    )
    expect(reducedState).toEqual(SORTED_ASC_HOTELS)
  })

  it('should sort the hotels descending', () => {
    const reducedState = reducer(
      defaultState,
      { type: SORT_BY_STAR_DESC }
    )
    expect(reducedState).toEqual(SORTED_DESC_HOTELS)
  })
})
