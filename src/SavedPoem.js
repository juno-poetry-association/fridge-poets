import { useState, useEffect } from "react";
import firebase from "./firebase";

const SavedPoem = (props) => {
  const { yourPoem } = props;
  const [favourites, setFavourites] = useState([]);

  // useEffect to store favourite movies into the state.
  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on("value", (snapshot) => {
      const myData = snapshot.val();
      const newArray = [];
      for (let item in myData) {
        const poemList = [item, [myData[item]]];
        newArray.push(poemList);
      }
      setFavourites(newArray);
    });
  }, []);

  // remove fro the list
  const removePoem = (poem) => {
    const dbRef = firebase.database().ref();
    dbRef.child(poem).remove();
  };

  return (
    <>
      {favourites.map((poem) => {
        const poemWords = poem[1][0];

        return (
          <ul key={poem[0]}>
            {poemWords.map((word) => {
              return (
                <li key={word}>
                  <p>{word}</p>
                </li>
              );
            })}
            <button onClick={() => removePoem(poem[0])}>Remove</button>
          </ul>
        );
      })}
    </>
  );
};

export default SavedPoem;
