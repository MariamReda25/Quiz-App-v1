import "./Questions.css";
function Questions({
  question,
  numOfQuestions,
  questionNumber,
  selectedOption,
  children,
}) {
  return (
    <>
      <div className="questions">
        <h3 className="heading-tertiary mb-medium">
          Question {questionNumber} of {numOfQuestions}
        </h3>
        <h2 className="heading-secondary mb-large">{question}</h2>
        <progress
          max={numOfQuestions}
          value={selectedOption ? questionNumber : questionNumber - 1}
          className="questions__progress"
        />
      </div>
      {children}
    </>
  );
}

export default Questions;
