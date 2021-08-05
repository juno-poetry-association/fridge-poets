import "./App.css";
import { useState } from "react";
import Form from "./Form";
import DisplayWords from "./DisplayWords";
import FunctionWords from "./FunctionWords";
import CreatePoem from "./CreatePoem";
import Button from "./Button";
import functionWordArray from "./functionWordArray";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SavedPoem from "./SavedPoem";

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
    <Router>
      <div>
        <header className="wrapper">
          <h1>Refridgeration Versification</h1>
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

          <section className="savedPoem">
            {/* <SavedPoem /> */}

            <Route exact path="/" component={Button} />

            <Route exact path="/poem" component={SavedPoem} />
          </section>
        </main>

        <footer className="wrapper">
          <p>
            Created at <a href="https://junocollege.com">Juno College</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
