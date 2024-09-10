export default function SelectMenu({setQuery}) {
  return (
    <select className="select-menu" onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}>
        <option hidden>Filter by Region</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
  )
}
