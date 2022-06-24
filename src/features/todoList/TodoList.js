import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AddTodoForm } from './AddTodoForm'
import { FilterTodoList } from './FilterTodoList'

import { statusChanged } from './todoListSlice'


export const TodoList = () => {

    const view = {
        all: "all",
        completed: "completed",
        uncompleted:"uncompleted"
    }

    const [viewType, setViewType] = useState(view.all)
    
    const todoList = useSelector(state => state.todoList)
    const dispatch = useDispatch()
    
    const onTodoClicked = (id) => dispatch(statusChanged({todoId: id}))
    const onViewAllClicked = () => setViewType(view.all)
    const onViewCompletedClicked = () => setViewType(view.completed) 
    const onViewUnCompletedClicked = () => setViewType(view.uncompleted)
    
    const filteredTodoList = todoList.filter(todo => viewType === view.all 
        ? true : viewType === view.completed 
        ? todo.isCompleted : !todo.isCompleted)
    
    return (
        <div>
            <h3>Todo App</h3>
            {filteredTodoList.map(
                todo => <p
                    style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
                    key={todo.id}
                    onClick={() => onTodoClicked(todo.id)}
                >{todo.content}</p>)}
            <AddTodoForm/>
            <FilterTodoList onFilterClicks={{onViewAllClicked, onViewCompletedClicked, onViewUnCompletedClicked}}/>
        </div>
    )
}