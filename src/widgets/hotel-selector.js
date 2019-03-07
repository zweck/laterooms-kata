import React from 'react'
import ReactSelect from 'react-select'
import PropTypes from 'prop-types'
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

HotelSelector.propTypes = {
  filterOptions: PropTypes.func,
  facilities: PropTypes.array,
}

export default HotelSelector
