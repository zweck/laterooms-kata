import React from 'react';
import { connect } from 'react-redux'
import * as R from 'ramda'
import { facilitiesToSelect } from './lib/uniq-facilities'
import { filterByFacilities } from './actions'
import './App.css';

import HotelCard from './widgets/hotel-card'
import HotelSelector from './widgets/hotel-selector'

export const App = ({
  filterOptions,
  hotels = [],
  facilities = [] }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <header className="bg-blue-light m-6 p-6 rounded shadow-lg max-w-sm">
        <h1 className="text-white text-3xl">Hotel finder</h1>
        <p>
          <span className='text-white text-xl p-2'>Please select some facilities</span>
          <HotelSelector
            filterOptions={filterOptions}
            facilities={facilities} />
        </p>
      </header>
      <section className='result-list'>
        {R.map(hotel => (
          <HotelCard key={hotel.name} {...hotel} />
        ), hotels)}
      </section>
    </div>
  );
}

const mapStateToProps = ({
  hotels = []
}) => ({
  hotels,
  facilities: facilitiesToSelect(hotels) // TODO: move to middleware on data success
})

const mapDispatchToProps = dispatch => ({
  filterOptions: R.compose(dispatch, filterByFacilities)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
