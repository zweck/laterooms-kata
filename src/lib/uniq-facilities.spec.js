import { uniqFacilities, facilitiesToSelect } from './uniq-facilities'

const HOTELS = [
  {
    facilities: ['car park', 'pool']
  },
  {
    facilities: ['car park', 'gym']
  }
]

const FACILITIES = ['car park', 'pool', 'gym']
const SELECT_OBJECT = [
  { label: 'car park', value: 'car park' },
  { label: 'pool', value: 'pool' },
  { label: 'gym', value: 'gym' }
]

describe('#uniqFacilities', () => {
  it('should flatmap the hotel facilities', () => {
    expect(uniqFacilities(HOTELS)).toEqual(FACILITIES)
  })

  it('should map uniqFacilities into a select object', () => {
    expect(facilitiesToSelect(HOTELS)).toEqual(SELECT_OBJECT)
  })
})
