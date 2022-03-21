import {useStore, actions } from './Store'
import {useRef} from 'react'


function App() {
  
  const [state, dispatch] = useStore()
  const { todos  , todoInput } = state

  const inputRef = useRef()

  function handleAdd(){
    dispatch(actions.addTodoInput(todoInput))
    dispatch(actions.setTodoInput(''))
    inputRef.current.focus()
  }
  function handleDelete(index){
    dispatch(actions.deleteTodoInput(index))
  }
  localStorage.setItem('todos', JSON.stringify(state.todos))

  return (
        <div>
          <input
            ref={inputRef}
            value={todoInput}
            placholder="Enter todo ..."
            onChange={e => {
                dispatch(actions.setTodoInput(e.target.value))
            }}
          />
          <button onClick={handleAdd}>Add</button>
          <ul>
            {
              todos.map((todo, index) => (
                <li key={index}>
                  {todo}
                  <span style={{
                      marginLeft: 20,
                      cursor:'pointer'}}
                      onClick={() =>handleDelete(index)}
                  >x</span>
                </li>
              ))
            }
          </ul>
        </div>
  );
}

export default App;
