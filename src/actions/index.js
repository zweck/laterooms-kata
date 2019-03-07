export const FILTER_BY_FACILITIES = 'FILTER_BY_FACILITIES'
export const SORT_BY_STAR_ASC = 'SORT_BY_STAR_ASC'
export const SORT_BY_STAR_DESC = 'SORT_BY_STAR_DESC'

export const sortByStarAsc = () => ({ type: SORT_BY_STAR_ASC })
export const sortByStarDesc = () => ({ type: SORT_BY_STAR_DESC })
export const filterByFacilities = facilities => ({
  type: FILTER_BY_FACILITIES,
  payload: facilities
})
