import { SET, ADD, DELETE } from "./const"

const initState = {
    todos: [],
    todoInput: '',
}


function reducer(state, action){
    switch (action.type){
        case SET :
          return {
            ...state,
            todoInput: action.payload
          }
        case ADD :
          return {
            ...state,
            todos: [...state.todos, action.payload]
          }
    
        case DELETE :
          const newJobs = [...state.todos]
          newJobs.splice(action.payload, 1)
          return {
            ...state,
            todos: [...newJobs]
          }
    
        default :
          throw new  Error('Invalid')
      }
}

export { initState }
export default reducer