import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";



const DisplayWords = (props) => {

  const [words, setWords] = useState([]);

  const  { userSearchTerm } = props;

  console.log(userSearchTerm);

  useEffect(() => {
    axios({
      url: "https://api.datamuse.com/words",
      method: "GET",
      dataResponse: "json",
      params: {
        rel_jjb: userSearchTerm,
      },
    }).then((res) => {
      setWords(res.data);
    });
  }, [userSearchTerm]);


  return (

    <ul>
    {words.map((wordsObj, index) => {
      return (
        <li key={index}>
          <p>{wordsObj.word}</p>
        </li>
      );
    })}
  </ul>
  )
}

export default DisplayWords;