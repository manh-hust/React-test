import { useState } from "react";


function App() {
  const [name, setName] = useState('')
  console.log(name)
  return (
        <div style={{padding: 20}}>
          <input 
            onChange={e => setName(e.target.value)}
          >
          </input>
        </div>
  );
}


export default App;
