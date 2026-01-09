import Subject from "../Subject/Subject";
import "./Score.css";
function Score({ score, title, icon, numOfQuestions }) {
  return (
    <div className="score">
      <div className="score__title">
        <Subject title={title} icon={icon} />
      </div>
      <p className="score__value">{score}</p>
      <p className="score__total">Out of {numOfQuestions}</p>
    </div>
  );
}

export default Score;
