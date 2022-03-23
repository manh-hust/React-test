import { useState, useEffect, useCallback } from "react";
// import Button from "./Components/button";
// import Header from "./Components/header";
// import Content from "./Components/content";
// import Avatar from "./Components/avatar";
import Product from "./Components/product";


function App() {
  
  console.log('re-render cha')

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])
    
  const handleSubmit = () => {
    setProducts([...products, {
      name: name,
      price: parseInt(price)
    }])
    setName('')
    setPrice('')
  }

  const total = products.reduce((result, prod) => result + prod.price, 0)

  return (
      <div style={{padding: 20}}>
        <input
          value={name}
          placeholder='Enter your name'
          onChange={e => setName(e.target.value)}
        />
        <br/>
         <input
          value={price}
          placeholder='Enter price'
          onChange={e => setPrice(e.target.value)}
        />
        <br/>
        <button onClick={handleSubmit}>
          Add
        </button>
        <h3>Total: {total}</h3>
        <ul>
          {products.map(item => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>

        <Product/>
      </div>
  );
}


export default App;
