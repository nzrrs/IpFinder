// COMPONENTS IMPORTS
import Header from "./components/Header"
import Main from "./components/Main"
// REACT IMPORTS
import { useRef } from "react"
export default function App(){
  
  const inputField = useRef(null)

  return (
    <>
      <Header inputField = {inputField}/>
      <Main/>
    </>
  )
}