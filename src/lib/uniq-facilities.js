import * as R from 'ramda'

export const uniqFacilities = hotels => R.uniq(R.chain(({ facilities }) => facilities, hotels))
export const facilitiesToSelect = hotels => R.map(
  (facility) => ({ label: facility, value: facility }),
  uniqFacilities(hotels))
