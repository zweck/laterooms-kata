import React from 'react'
import ReactSelect from 'react-select'
import * as R from 'ramda'

const HotelSelector = ({
  filterOptions,
  facilities = []
}) => {
  const onChangeHandler = selected => filterOptions(R.map(({ value }) => value, selected))
  return <ReactSelect
           isMulti
           onChange={onChangeHandler}
           options={facilities}/>
}

export default HotelSelector
