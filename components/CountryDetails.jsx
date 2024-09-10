import React, { useContext, useEffect, useState } from 'react'

import './CountryDetails.css'
import { useParams, Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContaxt'
import CountriesDetailsShimmer from './CountriesDetailsShimmer'

export default function CountryDetails() {
  const params = useParams()
 
  const {state} = useLocation()

  console.log(state);
  const countryName = params.country;

  const [Data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isDark] =useContext(ThemeContext)

  function updateCountryData(data){
    setData({
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0].common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      flag: data.flags.svg,
      tld: data.tld,
      languages: Object.values(data.languages || {}).join(", "),
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() =>  setData((prevState) => ({ ...prevState, borders })))
    });
  }

  useEffect(() => {
    if (state){
      updateCountryData(state)
      return
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data)
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [countryName]);
  if (notFound) {
    return <div>Country Not Found</div>;
  }
  return (
    Data && (
      <main className={`${isDark ? 'dark' : ''}`}>
        <div className="country-details-container">
          <span className="back-btn" onClick={() => history.back()}>
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
          {Data === null ?(
            <CountriesDetailsShimmer/>
          ) : (
            <div className="country-details">
            <img src={Data.flag} alt={`{$(Data.name)} flags`} />
            <div className="details-text-container">
              <h1>{Data.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: {Data.nativeName || Data.name}</b>
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
                  <b>Capital: {Data.capital?.join(" ")}</b>
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
              {Data.borders.length !== 0 && (
                <div className="border-countries">
                  <b>Border Countries: </b>&nbsp;
                  {Data.borders.map((border) => (
                    <Link key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          )}
        </div>
      </main>
    )
  );
}
