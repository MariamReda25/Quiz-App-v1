import Score from "../Score/Score";

function FinishScreen({ score, title, icon, numOfQuestions }) {
  return (
    <>
      <div>
        <h1 className="heading-primary">Quiz Completed </h1>
        <h1 className="heading-primary bold mb-medium">You Scored... </h1>
      </div>
      <Score
        score={score}
        title={title}
        icon={icon}
        numOfQuestions={numOfQuestions}
      />
    </>
  );
}

export default FinishScreen;
