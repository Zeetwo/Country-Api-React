import React, { useEffect, useState } from 'react'

import './CountryDetails.css'

export default function CountryDetails() {
  const countryName = new URLSearchParams(location.search).get('name')

  const [Data,setData] =useState(null)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data)
 
        setData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          flag: data.flags.svg,
          tld: data.tld,
          languages: Object.values(data.languages).join(', '),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(', '),
          
        })
      })
  }, [])
  return (
    Data && (
      <>
        <main> 
          <div className="country-details-container">
            <span className="back-btn">
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </span>
            <div className="country-details">
              <img src={Data.flag} alt={`{$(Data.name)} flags`} />
              <div className="details-text-container">
                <h1>{Data.name}</h1>
                <div className="details-text">
                  <p>
                    <b>Native Name: {Data.nativeName}</b>
                    <span className="native-name"></span>
                  </p>
                  <p>
                    <b>Population: {Data.population.toLocaleString("en-IN")}</b>
                    <span className="population"></span>
                  </p>
                  <p>
                    <b>Region: {Data.region}</b>
                    <span className="region"></span>
                  </p>
                  <p>
                    <b>Sub Region: {Data.subregion}</b>
                    <span className="sub-region"></span>
                  </p>
                  <p>
                    <b>Capital: {Data.capital.join(" ")}</b>
                    <span className="capital"></span>
                  </p>
                  <p>
                    <b>Top Level Domain: {Data.tld}</b>
                    <span className="top-level-domain"></span>
                  </p>
                  <p>
                    <b>Currency: {Data.currencies}</b>
                    <span className="currencies"></span>
                  </p>
                  <p>
                    <b>Languages: {Data.languages}</b>
                    <span className="languages"></span>
                  </p>
                </div>
                <div className="border-countries">
                  <b>Border Countries: </b>&nbsp;
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  );
}
