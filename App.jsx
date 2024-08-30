import Header from "./components/header"
import SearchBar from "./components/SearchBar"
import SelectMenu from "./components/SelectMenu"
import CountriesList from "./components/CountriesList"
import './App.css'

const App =() => {
  return (
    <div>
        <Header/>
        <main>
          <div className="search-filter-container">
            <SearchBar/>
            <SelectMenu/>
          </div>
          <CountriesList/>
        </main>
    </div>
  )
}
export default App
