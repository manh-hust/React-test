import { useState } from "react";
import Button from "./Components/button";
import Header from "./Components/header";

function App() {
 
  const [item, setItem] = useState('')
  const [list, setList] = useState([])

  const addTodo = () => {
      setList(prev => [...prev, item])
      setItem('')
  }
  return (
        <div style={{padding: 20}}>
          <Header.Header1/>
          <Header.Header2/>
         <input 
          value={item} 
          onChange={e => setItem(e.target.value)}/>
         <button onClick={addTodo}>Add</button>
         <ul>
           {list.map((item, index) => (
             <li key={index}>{item}</li>
           ))}
         </ul>

         <Button
            title="Click me !"
            href="https://fullstack.edu.vn"
            onClick={() => console.log(Math.random())}
         />
        </div>
  );
}


export default App;
