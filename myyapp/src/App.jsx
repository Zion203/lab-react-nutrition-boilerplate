import { useState } from 'react'
import './App.css'
import FoodData from "../resources/FoodData"
import Search  from './component/Search'
import FoodBox from './component/FoodBox'


function App() {
  const [search , setSearch] = useState("")

  const fitered = FoodData.filter((e) =>{
    return e.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <>
      <h1>Pro-nutrition-App</h1>
      <Search setSearch = {setSearch} />
      {
        fitered.length <= 0 ?(
          <h3>No Data found</h3>
        ) : (
          fitered.map((e,i) => {
            return <FoodBox Key ={i} ele ={e} index ={i} />
          })
        )
      }
    </>
  
  )
}

export default App
