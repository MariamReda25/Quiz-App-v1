import "./Option.css";
function Option({
  option,
  optionNumber,
  answer,
  selectedOption,
  dispatch,
  questionAnswer,
}) {
  const isAnswerd = answer !== null;
  const isSelected = selectedOption !== null;
  const optionClass = isAnswerd
    ? option === questionAnswer
      ? "valid"
      : "invalid"
    : isSelected
    ? selectedOption === option
      ? "selected"
      : ""
    : "";
  return (
    <li
      className={`option ${optionClass} `}
      onClick={() => dispatch({ type: "option/select", payload: option })}
    >
      <span className={`option__number ${optionClass}`}>{optionNumber}</span>
      <span className="option__title">{option}</span>
    </li>
  );
}

export default Option;
