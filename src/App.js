import './App.css';
import { useEffect, useState } from 'react'; 
import axios from 'axios';

function App() {

  const [ words, setWords ] = useState([]);

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
      setWords(res.data)
    })
  },[])

  return (
    <div>
      <h1>POETRY</h1>
      <ul>
        {
          words.map((wordsObj, index) => {
            return (
              <li key={index}>
                <p>{wordsObj.word}</p>
              </li>
            )
          })
        }
      </ul>


    </div>
  );
}

export default App;