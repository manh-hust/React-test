import { SET_TODO_INPUT, ADD_TODO_INPUT, DEL_TODO_INPUT} from './Constant'

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})
export const addTodoInput = payload => ({
    type: ADD_TODO_INPUT,
    payload
})
export const deleteTodoInput = payload => ({
    type: DEL_TODO_INPUT,
    payload
})