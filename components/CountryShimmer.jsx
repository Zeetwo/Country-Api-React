import React from 'react'

import './CountryShimmer.css'

export default function CountryShimmer() {
  return (
    <div className='countries'>
        {Array.from({length:10}).map((el ,i) => {
        return <div key={i} className="country-card shimmer-card"></div>
        })}
    </div>
  )
}
