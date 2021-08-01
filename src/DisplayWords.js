import { useEffect, useState } from "react";
import axios from "axios";

const DisplayWords = (props) => {
  const { userSearchTerm, yourPoem, setYourPoem, setWords, words } = props;

  useEffect(() => {
    axios({
      url: "https://api.datamuse.com/words",
      method: "GET",
      dataResponse: "json",
      params: {
        rel_trg: userSearchTerm,
        max: 40,
      },
    }).then((res) => {
      setWords(res.data);
    });
  }, [userSearchTerm]);

  function addWordToPoem(word) {
    const newPoem = [...yourPoem, word];
    setYourPoem(newPoem);
    // TO REMOVE WORD
    const oldWordsArr = [...words];
    const filteredArr = oldWordsArr.filter((arrWord) => arrWord.word !== word);
    setWords(filteredArr);
  }

  return (
    <ul>
      {words.map((wordsObj) => {
        return (
          <li key={wordsObj.word} onClick={() => addWordToPoem(wordsObj.word)}>
            <p>{wordsObj.word}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayWords;
