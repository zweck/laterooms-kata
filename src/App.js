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
    <div className="text-center">
      <header className="bg-blue-light m-6 p-6 rounded shadow-lg">
        <h1 className="text-white text-3xl">Hotel finder</h1>
        <span>
          Please select some facilities
          <HotelSelector
            filterOptions={filterOptions}
            facilities={facilities} />
        </span>
      </header>
      <section>
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
