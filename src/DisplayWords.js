import { useEffect} from "react";
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
      const data = res.data;
      const wordsArray = data.map( (wordObj) => {
        return wordObj.word;
      })
      setWords(wordsArray);
    });
  }, [userSearchTerm, setWords]);

  function addWordToPoem(word) {
    const newPoem = [...yourPoem, word];
    setYourPoem(newPoem);
    // TO REMOVE WORD
    const oldWordsArr = [...words];
    const filteredArr = oldWordsArr.filter((arrWord) => arrWord !== word);
    setWords(filteredArr);
  }

  // keyboard accessibility to add words to poem
  function handleKeyPress(e, word) {
    if (e.charCode === 13) {
      addWordToPoem(word)
    }
  }

  return (
    <ul>
      {words.map((word) => {
        return (
          <li key={word} onClick={() => addWordToPoem(word)} onKeyPress={(e) => handleKeyPress(e, word)} tabIndex="0">
            <p>{word}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayWords;
