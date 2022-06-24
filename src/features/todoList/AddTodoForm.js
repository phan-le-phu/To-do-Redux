import { useState } from "react"
import { useDispatch } from "react-redux"
import { FilterTodoList } from "./FilterTodoList"

import { todoAdded } from "./todoListSlice"



export const AddTodoForm = () => {

    const [content, setContent] = useState('')
    const [visibility, setVisibility] = useState('hidden') 
    
    const dispatch = useDispatch()

    const onValueChanged = (e) => setContent(e.target.value)
    
    const onAddTodoClicked =() => {
        if (content) {
            dispatch(todoAdded(content))
            setContent('')
        }
    }

    return (
        <form>
            <input
                type="text"
                id="todoContent"
                value={content}
                onChange={onValueChanged}
                onFocus={() => setVisibility('visible')}
                onBlur={() => setVisibility('hidden')}
            />
            <button 
                onMouseDown={(e) => e.preventDefault()}
                style={{visibility: visibility}}
                type="button"
                onClick={onAddTodoClicked}
            >Add</button>
        </form>
    )

}