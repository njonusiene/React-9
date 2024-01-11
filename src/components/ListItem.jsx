import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";


const ListItem = ({item, index, handleClick, listData, setListData}) => {
    
    const [text, setText] = useState(item)
    const [isEditMode, setEditMode] = useState(false)
    const inputRef = useRef()

    const handleEditMode = (e) => {
        setEditMode(!isEditMode)

    }
    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            setEditMode(false)

            const newListData = [...listData]
            newListData[index] = text
            setListData(newListData)
        }
    }
    const handleBlur = (e) => {
        if(e.key === "Enter"){
            setEditMode(false)

            const newListData = [...listData]
            newListData[index] = text
            setListData(newListData)
        }
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [isEditMode])

  return (
    <li className="list-item" key={index}>
        <div className={isEditMode ? "text hidden" : "text"}>{text}</div>
        <div className="button">
            <div className="icons">
                <button className="edit" onClick={handleEditMode}>
                <FaRegEdit />
                </button>
                <button className="remove" onClick={() => handleClick(index)}>
                <FaRegTrashAlt />
                </button>
                </div>
             <input ref={inputRef} className={isEditMode ? "" : "hidden"} onBlur={handleBlur} onChange={handleChange} onKeyDown={handleKeyDown} type="textarea" value={text}/>
        </div>
    </li>
  )
}

export default ListItem
