import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id: "0", content: "to do 1", isCompleted: false},
    {id: "1", content: "to do 2", isCompleted: true}
]


const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        todoAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(content) {
                return {
                    payload: {
                        id: nanoid(),
                        content: content,
                        isCompleted: false
                    }
                }
            }
        },

        statusChanged(state, action) {
            
            const mark = (todo) => todo.isCompleted = true
            const unMark = (todo) => todo.isCompleted = false 

            const existingTodo = state.find(todo => todo.id === action.payload.todoId)
            
            existingTodo.isCompleted ? unMark(existingTodo) : mark(existingTodo)
        }
    }

})


export default todoListSlice.reducer

export const { todoAdded, statusChanged } = todoListSlice.actions