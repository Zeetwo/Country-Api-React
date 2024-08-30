export default function SelectMenu() {
  return (
    <select className="select-menu">
        <option value="Asia">Asia</option>
        <option hidden="">Filter by Region</option>
        <option value="America">America</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
  )
}
