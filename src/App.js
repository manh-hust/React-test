import { useState } from "react";


function App() {
 
  const [item, setItem] = useState('')
  const [list, setList] = useState([])

  const addTodo = () => {
      setList(prev => [...prev, item])
      setItem('')
  }
  return (
        <div style={{padding: 20}}>
         <input 
          value={item} 
          onChange={e => setItem(e.target.value)}/>
         <button onClick={addTodo}>Add</button>
         <ul>
           {list.map((item, index) => (
             <li key={index}>{item}</li>
           ))}
         </ul>
        </div>
  );
}


export default App;
