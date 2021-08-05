import "./App.css";
import { useState } from "react";
import Form from "./Form";
import DisplayWords from "./DisplayWords";
import FunctionWords from "./FunctionWords";
import CreatePoem from "./CreatePoem";
import functionWordArray from "./functionWordArray";
import SavedPoem from "./SavedPoem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedo,
  faTimes,
  faSearch,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
library.add(faRedo, faTimes, faSearch, faSave);

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
  };

  return (
    <div>
      <header className="wrapper">
        <div className="headerContainer">
          <h1>Fridge Poetry</h1>
          <Form
            setUserSearchTerm={setUserSearchTerm}
            setFunctionsDisplayed={setFunctionsDisplayed}
          />
        </div>
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
            <button
              aria-label="refresh"
              className="refreshBtn"
              onClick={handleRefresh}
            >
              <span>
                <FontAwesomeIcon className="faicons redo" icon="redo" />
              </span>
            </button>
          </section>
        </div>

        <section className="savedPoem">
          <SavedPoem />
        </section>
      </main>

      <footer className="wrapper">
        <p>
          Created at <a href="https://junocollege.com">Juno College</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
