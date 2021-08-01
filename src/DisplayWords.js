import { useEffect, useState } from "react";
import axios from "axios";
import { addWordToPoem } from './CreatePoem';

const DisplayWords = (props) => {

  addWordToPoem('pumpkin');

  const [ words, setWords ] = useState([]);

  const  { userSearchTerm } = props;

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
      {words.map((wordsObj) => {
        return (
          <li key={wordsObj.word}>
            <p>{wordsObj.word}</p>
          </li>
        );
      })}
    </ul>
  )
}

export default DisplayWords;