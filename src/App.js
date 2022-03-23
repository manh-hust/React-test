import { useState, useEffect } from "react";
// import Button from "./Components/button";
// import Header from "./Components/header";
// import Content from "./Components/content";
import Avatar from "./Components/avatar";

function App() {
  const [check, setCheck] = useState(false)
  const handleTonggle = () => {
    setCheck(!check)
  }

  return (
      <div style={{padding: 20}}>
        <button onClick={handleTonggle}>Toggle</button>
        {check && <Avatar/>}
      </div>
  );
}


export default App;
