import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

const HotelCard = ({
  name,
  starRating,
  facilities = []
}) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <img
      className="w-full"
      src="https://placeimg.com/300/300/arch"
      alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p>
        {R.map((i) => <span key={i}>★</span>, R.range(0, starRating))}
      </p>
      <p className="text-grey-darker text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
      <button className="bg-blue hover:bg-blue-dark text-white font-bold mt-6 py-2 px-4 rounded-full">
        Book
      </button>
    </div>
    <div className="px-6 py-4">
      {R.map(faclity => (
        <span
          key={faclity}
          className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
          #{faclity}
        </span>
      ), facilities)}
    </div>
  </div>
)

HotelCard.propTypes = {
  name: PropTypes.string,
  starRating: PropTypes.number,
  facilities: PropTypes.array
}

export default HotelCard
