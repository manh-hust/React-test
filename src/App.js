import Header from "./Components/header";

function App() {

  const animals = [{
    name: 'Dog'
  },{
    name: 'Cat'
  }, {
    name: 'Pig'
  }]
  
  return (
        <div>
          <Header text={'Cat'} message={'He'} src="https://youtube.com"/>
          <ul>
            {
              animals.map((item, index) => 
                  <li key={index}>{item.name}</li>
              )
            }
          </ul>
        </div>
  );
}


export default App;
