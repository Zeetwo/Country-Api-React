// import Data from "../Data"
import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountryShimmer from './CountryShimmer'

export default function CountriesList({query}) {
  const [Data, setData] = useState ([])

  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
  } , [])

  return (
    <>
      {!Data.length ? (
        <CountryShimmer />
      ) : (
        <div className="countries">
          {Data.filter((country) =>
            country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
          ).map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            );
          })}
        </div>
      )}
    </>
  );
} 