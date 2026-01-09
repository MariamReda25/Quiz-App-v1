import Subjects from "../Subjects/Subjects";

function StartScreen({ quiz, dispatch }) {
  return (
    <>
      <div>
        <h1 className="heading-primary">Welcome to the </h1>
        <h1 className="heading-primary bold mb-medium">Frontend Quiz! </h1>
        <h3 className="heading-tertiary">Pick a subject to get started</h3>
      </div>
      <Subjects quiz={quiz} dispatch={dispatch} />
    </>
  );
}

export default StartScreen;
