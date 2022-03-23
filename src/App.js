import { useState, useEffect } from "react";
// import Button from "./Components/button";
import Header from "./Components/header";

const tabs =['posts', 'comments', 'albums']

function App() {
 
  const[title, setTitle] = useState()
  const [type, setType] = useState('posts')
  const [data, setData] = useState([])
  const [goToTop, setGoToTop] = useState(false)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(data => setData(data))
  },[type])

  useEffect(() => {

    const handleScroll = () => {
      setGoToTop(window.scrollY >= 200)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  },[])

  return (
      <div style={{padding: 20}}>
        <Header.Header2/>
        {tabs.map(item => 
          <button 
            key={item}
            style={type === item ? {
              background : '#333',
              color: '#fff'
            } : {}}
            onClick={() => setType(item)}
          >
            {item}
          </button>
        )}
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <ul>
        {data.map(item => (
          <li key={item.id}>{item.name || item.title}</li>
        ))}
        </ul>
        {goToTop && (
          <button style={{
            position: 'fixed',
            bottom: 20,
            right: 20
          }}
            onClick={() =>  window.scrollTo({
              top: 0,
              behavior: "smooth"
            })}
          >
            Go to top
        </button>
        )}
      </div>
  );
}


export default App;
