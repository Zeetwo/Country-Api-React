export default function CountryCard({name, flag, population,region,capital}) {
  return (
    <a className="country-card" href={`/Rest%20country%20apii/country.html?name=${name.common}`}>
        <img src={flag} alt={name + 'flag'}/>
        <div class="card-text">
            <h3 class="card-title">{name}</h3>
            <p><b>Population: </b>{population}</p>
            <p><b>Region: </b>{region}</p>
            <p><b>Capital: </b>{capital}</p>
        </div>
      </a>
  )
}
