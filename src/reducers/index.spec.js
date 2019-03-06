import reducer, { defaultState } from './index'
import { FILTER_BY_FACILITY } from '../actions'

const GYM_STORE = [
  {
    name: "hoteltwo",
    starRating: 3,
    facilities: ["car park", "gym"]
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
})
