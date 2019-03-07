import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import { facilitiesToSelect } from './lib/uniq-facilities'
import { filterByFacilities, sortByStarAsc, sortByStarDesc } from './actions'
import './App.css';

import HotelCard from './widgets/hotel-card'
import HotelSelector from './widgets/hotel-selector'

export const App = ({
  sortHotelsDesc,
  sortHotelsAsc,
  filterOptions,
  hotels = [],
  facilities = [] }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <header className="bg-blue-light m-6 p-6 rounded shadow-lg max-w-sm">
        <h1 className="text-white text-3xl">Hotel finder</h1>
        <div className='m-2'>
          <span className='text-white text-xl p-2'>Please select some facilities</span>
          <HotelSelector
            filterOptions={filterOptions}
            facilities={facilities} />
          <div className='m-2'>
            <span> Sort By Star </span>
              <button onClick={sortHotelsAsc}>▲</button>
              <button onClick={sortHotelsDesc}>▼</button>
          </div>
        </div>
      </header>
      <section className='result-list'>
        {R.map(hotel => (
          <HotelCard key={hotel.name} {...hotel} />
        ), hotels)}
      </section>
    </div>
  );
}

App.propTypes = {
  sortHotelsDesc: PropTypes.func,
  sortHotelsAsc: PropTypes.func,
  filterOptions: PropTypes.func,
  hotels: PropTypes.array,
  facilities: PropTypes.array
}

const mapStateToProps = ({
  hotels = []
}) => ({
  hotels,
  facilities: facilitiesToSelect(hotels) // TODO: move to middleware on data success
})

const mapDispatchToProps = dispatch => ({
  sortHotelsDesc: R.compose(dispatch, sortByStarDesc),
  sortHotelsAsc: R.compose(dispatch, sortByStarAsc),
  filterOptions: R.compose(dispatch, filterByFacilities)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
