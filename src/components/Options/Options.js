import Option from "../Option/Option";
import "./Options.css";
const choices = new Map([
  [0, "A"],
  [1, "B"],
  [2, "C"],
  [3, "D"],
]);

function Options({
  options,
  dispatch,
  selectedOption,
  answer,
  questionAnswer,
}) {
  return (
    <>
      <ul className="options">
        {options.map((option, i) => (
          <Option
            option={option}
            key={option}
            optionNumber={choices.get(i)}
            dispatch={dispatch}
            answer={answer}
            selectedOption={selectedOption}
            questionAnswer={questionAnswer}
          />
        ))}
      </ul>
    </>
  );
}

export default Options;
