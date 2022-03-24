import TodoApp from './Todo'
import { useStore, actions } from './store';
import { useRef} from 'react'
import Video from './Components/video';

function App() {
  
  const [state, dispath] = useStore()
  const {todos ,todoInput } = state

  const refInput = useRef()

  const handleAdd = (todo) => {
    dispath(actions.addJob(todo))
    dispath(actions.setJob(''))

    refInput.current.focus()
  }

  return (
      <div style={{padding: 20}}>
        <input
          ref={refInput}
          placeholder='Enter todo ...'
          value={todoInput}
          onChange={e => 
            dispath(actions.setJob(e.target.value))
          }
        />
        <button onClick={() => handleAdd(todoInput)}>Add</button>
        <ul>
          {todos.map((item, index) => (
            <li key={index}>{item} <button onClick={() => dispath(actions.deleteJob(index))}> X</button></li>
          ))}
        </ul>
        <h1>Video</h1>
        <Video/>
      </div>
  );
}


export default App;
