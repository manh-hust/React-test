import {
    SET_TODO_INPUT,
    ADD_TODO_INPUT,
    DEL_TODO_INPUT
} from './Constant'

const initTodos =  JSON.parse(localStorage.getItem('todos')) || []
const initialState = {
    todos: initTodos,
    todoInput: ''
}

function reducer(state, actions) {
    switch (actions.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: actions.payload,
            }
        case ADD_TODO_INPUT:
 
            return{
                ...state,
                todos: [...state.todos, actions.payload]
            }
        case DEL_TODO_INPUT:
            const newTodos = [...state.todos]
            newTodos.splice(actions.payload, 1)
            return{
                ...state,
                todos: newTodos       
            }        

        default:
            throw new Error('Invalid action.')
    }
}

export {
    initialState
}
export default reducer