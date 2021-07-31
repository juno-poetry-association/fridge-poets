import { useEffect, useState } from "react";
import axios from "axios";

function Form() {
  const [userInput, setUserInput] = useState([]);

  const [autoComplete, setAutoComplete] = useState([]);

  useEffect(() => {
    axios({
      url: "https://api.datamuse.com/sug",
      method: "GET",
      dataResponse: "json",
      params: {
        s: userInput,
        max: "6",
      },
    }).then((res) => {
      setAutoComplete(res.data);
    });
  }, [userInput]);

  const inputHAndleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <form action="#">
      <label htmlFor="searchInput" className="sr-only"></label>
      <input
        type="text"
        id="searchInput"
        onChange={inputHAndleChange}
        list="autoCompleteSuggestions"
      />
      <datalist id="autoCompleteSuggestions">
        {autoComplete.map((suggestion, index) => {
          return <option value={suggestion.word} key={index}></option>;
        })}
      </datalist>
      <button>Search</button>
      <button>Halloween</button>
      <button>Christmas</button>
      <button>Dirty words</button>
      <button>Technology</button>
    </form>
  );
}

export default Form;
