import "./App.css";
import { useState } from "react";
import Form from "./Form";
import DisplayWords from "./DisplayWords";
import FunctionWords from "./FunctionWords";
import CreatePoem from "./CreatePoem";
import functionWordArray from "./functionWordArray";

function App() {
  const [userSearchTerm, setUserSearchTerm] = useState("");
  const [functionsDisplayed, setFunctionsDisplayed] = useState(false);
  const [yourPoem, setYourPoem] = useState([]);
  const [functionArray, setFunctionArray] = useState(functionWordArray);
  const [words, setWords] = useState([]);

  const handleRefresh = () => {
    setFunctionsDisplayed(false);
    setYourPoem([]);
    setWords([]);
  }

  return (
    <div>
      <header className="wrapper">
        <h1>POETRY</h1>
        <Form
          setUserSearchTerm={setUserSearchTerm}
          setFunctionsDisplayed={setFunctionsDisplayed}
        />
      </header>

      <main className="wrapper">

        <section className="displaySection">
          <DisplayWords
            userSearchTerm={userSearchTerm}
            yourPoem={yourPoem}
            setYourPoem={setYourPoem}
            setWords={setWords}
            words={words}
          />
        </section>

        <div className="flex">

          <section className="functionWords">
            {functionsDisplayed ? (
              <FunctionWords
                yourPoem={yourPoem}
                setYourPoem={setYourPoem}
                setFunctionArray={setFunctionArray}
                functionArray={functionArray}
              />
            ) : null}
          </section>

          <section className="poemContainer">
            <CreatePoem
              yourPoem={yourPoem}
              setYourPoem={setYourPoem}
              setFunctionArray={setFunctionArray}
              functionArray={functionArray}
              setWords={setWords}
              words={words}
            />
            <button onClick={handleRefresh}>Refresh!</button>
          </section>

        </div>
      </main>

      <footer className="wrapper">
        <p>Created at <a href="https://junocollege.com">Juno College</a></p>
      </footer>
    </div>
  );
}

export default App;
