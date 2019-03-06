import React, { Component } from 'react';
import './App.css';

import HotelCard from './widgets/hotel-card'

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <header className="bg-blue-light m-6 p-6 rounded shadow-lg">
          <h1 className="text-white text-3xl">Hotel finder</h1>
        </header>
        <section>
          <HotelCard hotelName='hotelone' rating={4} />
        </section>
      </div>
    );
  }
}

export default App;
