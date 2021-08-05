
const FunctionWords = (props) => {
  const { yourPoem, setYourPoem, setFunctionArray, functionArray } = props;

  function addWordToPoem(word) {
    const newPoem = [...yourPoem, word];
    setYourPoem(newPoem);
    // TO REMOVE WORD
    const oldFunctionsArr = [...functionArray];
    const filteredArr = oldFunctionsArr.filter((arrWord) => arrWord !== word);
    setFunctionArray(filteredArr);
  }

  // keyboard accessibility to add words to poem
  function handleKeyPress(e, word) {
    if (e.charCode === 13) {
      addWordToPoem(word)
    }
  }

  return (
    <ul>
      {functionArray.map((word) => {
        return (
          <li key={word} onClick={() => addWordToPoem(word)} onKeyPress={(e) => handleKeyPress(e, word)} tabIndex="0">
            <p>{word}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FunctionWords;
