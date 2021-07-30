import './App.css';
import { useEffect, useState } from 'react'; 
import axios from 'axios';

function App() {

  useEffect( () => {
    axios ({
      url: "https://api.datamuse.com/words",
      method: 'GET',
      dataResponse: 'json',
      params: {
        rel_jjb: 'ocean',
      }
      
    }).then((res)=>{
      console.log(res.data);
    })
  },[])

  return (
    <div>
      <h1>POETRY</h1>
    </div>
  );
}

export default App;