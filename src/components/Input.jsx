import { useRef } from "react"
import { FaPlus } from "react-icons/fa6";

const Input = ({setListData}) => {

  const inputRef = useRef()
  
  const handleClick = () => {
    const inputValue = inputRef.current.value
    setListData(prevValues => [...prevValues, inputValue])
    inputRef.current.value = ""
  }

  return (
    <>
        <button id="add" onClick={handleClick} ref={inputRef} >
        <FaPlus />Add Note        
        </button>
    </>
  )
}

export default Input