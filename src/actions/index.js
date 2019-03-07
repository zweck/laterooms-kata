export const FILTER_BY_FACILITIES = 'FILTER_BY_FACILITIES'

export const filterByFacilities = facilities => ({
  type: FILTER_BY_FACILITIES,
  payload: facilities
})
