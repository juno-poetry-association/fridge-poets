import { useState } from "react";

const CreatePoem = () => {

  const [ yourPoem, setYourPoem ] = useState([]);

  function addWordToPoem(word) {
    const newPoem = [...yourPoem, word];
    setYourPoem(newPoem);
  }

  return(
    <p>here's our poem!</p>
  )
}

export default CreatePoem;
export { addWordToPoem } from CreatePoem;