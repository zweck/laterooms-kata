import React from 'react'
import ReactSelect from 'react-select'

const HotelSelector = ({
  filterFacilities,
  facilities = []
}) => {
  const onChangeHandler = () => filterFacilities()
  return <ReactSelect
           isMulti
           onChange={onChangeHandler}
           options={facilities}/>
}

export default HotelSelector
