const CreatePoem = (props) => {

  const { yourPoem } = props

  return (
    <ul>
      {
        yourPoem.map((word) => {
          return (
            <li key={word}>
              <p>{word}</p>
            </li>
          );
        })
      }
    </ul>
  )
}

export default CreatePoem;