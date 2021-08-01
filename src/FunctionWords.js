import { useState } from "react";
import functionWordArray from "./functionWordArray";

const FunctionWords= () => {
  // console.log(functionWordArray);

  return (
    <ul>
      {functionWordArray.map( (word) => {
        return (
          <li key={word}>
            <p>{word}</p>
          </li>
        );
      })}
    </ul>
  )
}

export default FunctionWords;