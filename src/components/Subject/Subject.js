import "./Subject.css";
function Subject({ icon, title }) {
  return (
    <>
      <svg className={`subject__icon subject__icon--${title} `}>
        <use xlinkHref={`.${icon}`}></use>
      </svg>
      <span className="subject__title">{title}</span>
    </>
  );
}

export default Subject;
