import "./App.css";
import { useState } from "react";
import Form from "./Form";
import DisplayWords from "./DisplayWords";
import FunctionWords from "./FunctionWords";
import CreatePoem from "./CreatePoem";

function App() {

  const [userSearchTerm, setUserSearchTerm] = useState("");
  const [functionsDisplayed, setFunctionsDisplayed] = useState(false)

  return (

    <div>
      <header>
        <h1>POETRY</h1>
      </header>

      <main>
        <section className="formContainer">
          <Form
            setUserSearchTerm={setUserSearchTerm}
            setFunctionsDisplayed={setFunctionsDisplayed}
          />
        </section>

        <section className="displaySection">
          <DisplayWords userSearchTerm={userSearchTerm} />
        </section>

        <section className="functionWords">
          {functionsDisplayed ? <FunctionWords /> : null}
        </section>

        <section className="poemContainer">
          <CreatePoem />
        </section>

      </main>

      <footer>
        <p>Created at Juno College</p>
      </footer>
    </div>
  );
}

export default App;
