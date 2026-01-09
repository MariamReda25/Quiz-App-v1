import Subject from "../Subject/Subject";
import "./Subjects.css";
function Subjects({ quiz, dispatch }) {
  return (
    <ul className="subjects">
      {quiz.map((subject) => (
        <li
          className="subject__item"
          key={subject.id}
          onClick={() => dispatch({ type: "subject/select", payload: subject })}
        >
          <Subject title={subject.title} icon={subject.icon} />
        </li>
      ))}
    </ul>
  );
}

export default Subjects;
