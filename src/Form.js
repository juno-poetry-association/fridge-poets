import { useEffect, useState } from "react";
import axios from "axios";

function Form(props) {

  const { setUserSearchTerm } = props;

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

  const inputHandleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setUserSearchTerm(userInput)
    
  }

  const handleClick = (event) => {
    // console.log(event.target.value);
    setUserInput(event.target.value)
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <label htmlFor="searchInput" className="sr-only"></label>
      <input
        type="text"
        id="searchInput"
        onChange={inputHandleChange}
        list="autoCompleteSuggestions"
        value={userInput}
      />
      <datalist id="autoCompleteSuggestions">
        {autoComplete.map((suggestion, index) => {
          return <option value={suggestion.word} key={index}></option>;
        })}
      </datalist>
      <button type="submit">Search</button>
      <button onClick={handleClick} value="halloween">Halloween</button>
      <button onClick={handleClick} value="christmas">Christmas</button>
      <button onClick={handleClick} value="dirty words">Dirty words</button>
      <button onClick={handleClick} value="technology">Technology</button>
    </form>
  );
}

export default Form;