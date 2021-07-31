import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    axios({
      url: "https://api.datamuse.com/words",
      method: "GET",
      dataResponse: "json",
      params: {
        rel_jjb: "ocean",
      },
    }).then((res) => {
      setWords(res.data);
    });
  }, []);

  return (
    <div>
      <header>
        <h1>POETRY</h1>
      </header>

      <main>
        <section className="formContainer">
          <Form />
        </section>
      </main>
      <ul>
        {words.map((wordsObj, index) => {
          return (
            <li key={index}>
              <p>{wordsObj.word}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
