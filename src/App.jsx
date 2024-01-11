import { useEffect, useState } from "react"
import "./App.css"

import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [listData, setListData] = useState([])

  // Užkrovimas iš localstorage ir pavertimas į masyvą
  useEffect(() => {
    const savedData = localStorage.getItem("listData")
    if(savedData) setListData(savedData.split(","))
  }, [])

  // Išsaugojimas localstorage
  useEffect(() => {
    localStorage.setItem("listData", listData)
  }, [listData])

  return (
   <>
    <Input setListData={setListData}/>
    <List listData={listData} setListData={setListData}/>
    </>
  )
}

export default App
