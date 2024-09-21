import './App.css'
import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([{}]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    try{
      const response = await fetch('http://localhost:5000/api/data')
      const jsonData = await response.json();
      setData(jsonData)
    } catch(error){
      console.log('Error',error)
    }
  }

  
  return (
    <div className="App">
      <h1>Hello everyone</h1>
      <h3>{data.message}</h3>
    </div>
  )
}

export default App
