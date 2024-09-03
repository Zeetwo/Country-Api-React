import { useState } from "react"
import Header from "./components/header"
import SearchBar from "./components/SearchBar"
import SelectMenu from "./components/SelectMenu"
import CountriesList from "./components/CountriesList"
import './App.css'

const App =() => {
  const [query,setQuery] = useState('')
  return (
    <div>
        <Header/>
        <main>
          <div className="search-filter-container">
            <SearchBar setQuery ={setQuery}/>
            <SelectMenu/>
          </div>
          <CountriesList query = {query}/>
        </main>
    </div>
  )
}
export default App
