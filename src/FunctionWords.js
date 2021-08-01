import { useState } from "react";
import functionWordArray from "./functionWordArray";

const FunctionWords= (props) => {

  const { yourPoem, setYourPoem } = props;

  const [ functionArray, setFunctionArray ] = useState(functionWordArray)

  function addWordToPoem(word) {
    const newPoem = [...yourPoem, word];
    setYourPoem(newPoem);
    // TO REMOVE WORD
    const oldFunctionsArr = [...functionArray];
    const filteredArr = oldFunctionsArr.filter(arrWord => arrWord !== word);
    setFunctionArray(filteredArr)
  }

  return (
    <ul>
      {functionArray.map( (word) => {
        return (
          <li key={word} onClick={() => addWordToPoem(word)}>
            <p>{word}</p>
          </li>
        );
      })}
    </ul>
  )
}

export default FunctionWords;