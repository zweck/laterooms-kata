import reducer, { defaultState } from './index'
import { FILTER_BY_FACILITY } from '../actions'

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

describe('reducer test', () => {
  it('should return default state when no action match', () => {
    expect(reducer(defaultState, { type: 'ACTION' })).toEqual(defaultState)
  })

  it('should filter hotels by a given facility', () => {
    const reducedState = reducer(
      defaultState,
      { type: FILTER_BY_FACILITY, payload: ['gym'] }
    )
    expect(reducedState).toEqual(GYM_STORE)
  })

  it('should filter hotels by a multiple facilities', () => {
    const reducedState = reducer(
      defaultState,
      { type: FILTER_BY_FACILITY, payload: ['car park', 'pool'] }
    )
    expect(reducedState).toEqual(POOL_STORE)
  })

  it('should return multiple hotels that share a facility', () => {
    const reducedState = reducer(
      defaultState,
      { type: FILTER_BY_FACILITY, payload: ['car park'] }
    )
    expect(reducedState).toEqual([ ...POOL_STORE, ...GYM_STORE ])
  })
})
