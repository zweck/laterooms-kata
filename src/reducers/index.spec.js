import reducer, { defaultState } from './index'

describe('reducer test', () => {
  it('should return default state when no action match', () => {
    expect(reducer(defaultState, { type: 'ACTION' })).toEqual(defaultState)
  })
})
