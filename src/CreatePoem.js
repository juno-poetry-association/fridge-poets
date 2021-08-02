import functionWordArray from "./functionWordArray";

const CreatePoem = (props) => {
  const { yourPoem, setYourPoem, words, setWords, functionArray, setFunctionArray } = props;

  // when users click on the word, remove that word from poemArray.
  // we need to send back to words array

  const handleRemove = (word) => {
    let isAFunctionWord = false;
    for (let functionWord of functionWordArray) {
      if (functionWord === word) {
        isAFunctionWord = true;
      }
    }

    if (isAFunctionWord === true) {
      // send it to function words
      const newFunctionArray = [...functionArray, word];
      setFunctionArray(newFunctionArray);
    } else {
      // send it to display words
      const newWordsArray = [...words, word];
      setWords(newWordsArray);
    }

    // remove from poem
    const currentPoem = [...yourPoem];
    const newPoem = currentPoem.filter((removedWord) => removedWord !== word);
    setYourPoem(newPoem);
  };

  return (
    <ul>
      {yourPoem.map((word) => {
        return (
          <li key={word} onClick={() => handleRemove(word)}>
            <p>{word}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CreatePoem;
