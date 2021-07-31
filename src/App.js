import "./App.css";
import { useState } from "react";
import Form from "./Form";
import DisplayWords from "./DisplayWords";

function App() {

  const [userSearchTerm, setUserSearchTerm] = useState("");

  return (

    <div>
      <header>
        <h1>POETRY</h1>
      </header>

      <main>
        <section className="formContainer">
          <Form setUserSearchTerm ={setUserSearchTerm} />
        </section>

        <section className="displaySection">
          <DisplayWords userSearchTerm={userSearchTerm} />
        </section>

        <section className="poemContainer">
          {/* poem component here */}
        </section>

        <section className="functionWords">
          {/* function word component here */}
        </section>

      </main>

      <footer>
        <p>Created at Juno College</p>
      </footer>
    </div>
  );
}

export default App;
