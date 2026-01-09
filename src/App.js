import { useEffect, useReducer } from "react";
import Button from "./components/Button/Button";
import FinishScreen from "./components/FinishScreen/FinishScreen";
import Header from "./components/Header/Header";
import HeaderTitle from "./components/Header/HeaderTitle";
import Questions from "./components/Questions/Questions";
import StartScreen from "./components/StartScreen/StartScreen";
import Loader from "./components/Loader/Loader";
import Options from "./components/Options/Options";
import Theme from "./components/Theme/Theme";
import ErrorMessage from "./components/Error/ErrorMessage";

const initialState = {
  quiz: [],
  status: "loading",
  headerTitle: {
    title: "",
    icon: "",
  },
  subject: {},
  questions: [],
  currentQuestion: 0,
  answer: null,
  selectedOption: null,
  score: 0,
  theme: "light",
  message: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "data/recieve":
      return { ...state, quiz: action.payload, status: "ready" };
    case "subject/select":
      const { title, icon, questions } = action.payload;
      return {
        ...state,
        subject: action.payload,
        status: "start",
        questions: questions,
        headerTitle: {
          ...state.headerTitle,
          title,
          icon,
        },
      };
    case "option/select":
      return { ...state, selectedOption: action.payload };

    case "btn/submit":
      return {
        ...state,
        answer: state.selectedOption,
      };
    case "btn/next":
      const numOfQuestions = state.questions.length - 1;
      if (state.currentQuestion < numOfQuestions)
        return {
          ...state,
          score:
            state.questions[state.currentQuestion].answer === state.answer
              ? state.score + 1
              : state.score,
          answer: null,
          selectedOption: null,
          currentQuestion: state.currentQuestion + 1,
        };
      return { ...state, status: "finish" };

    case "btn/error":
      return { ...state };

    case "again":
      return {
        ...state,
        status: "ready",
        headerTitle: {
          title: "",
          icon: "",
        },
        subject: {},
        questions: [],
        currentQuestion: 0,
        answer: null,
        selectedOption: null,
        score: 0,
      };

    case "theme/toggle":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "error":
      return { ...state, status: "error", message: action.payload };
    default:
      return state;
  }
}

export default function App() {
  const [
    {
      headerTitle,
      status,
      quiz,
      questions,
      currentQuestion,
      answer,
      selectedOption,
      score,
      theme,
      message,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numOfQuestions = questions.length;

  useEffect(function () {
    async function fetchQuiz() {
      try {
        const res = await fetch("http://localhost:9000/quizzes");
        if (!res.ok) throw new Error(`Faild to fetch Quiz ${res.status}`);
        const data = await res.json();
        dispatch({ type: "data/recieve", payload: data });
      } catch (error) {
        dispatch({ type: "error", payload: error.message });
      }
    }
    fetchQuiz();
  }, []);

  useEffect(
    function () {
      document.body.classList.toggle("dark");
    },
    [theme]
  );

  function handleSubmit() {
    if (selectedOption && !answer) dispatch({ type: "btn/submit" });
    else if (selectedOption && answer) dispatch({ type: "btn/next" });
    else dispatch({ type: "btn/error" });
  }

  return (
    <div className="app">
      <Header title={headerTitle.title}>
        {headerTitle.title !== "" && (
          <HeaderTitle
            title={headerTitle.title}
            icon={headerTitle.icon}
            dispatch={dispatch}
          />
        )}
        <Theme dispatch={dispatch} theme={theme} />
      </Header>

      <Main>
        {status === "loading" && <Loader />}
        {status === "ready" && <StartScreen quiz={quiz} dispatch={dispatch} />}
        {status === "error" && <ErrorMessage message={message} />}
        {status === "start" && (
          <Questions
            question={questions[currentQuestion].question}
            numOfQuestions={numOfQuestions}
            questionNumber={currentQuestion + 1}
            selectedOption={selectedOption}
          >
            <Options
              options={questions[currentQuestion].options}
              dispatch={dispatch}
              selectedOption={selectedOption}
              answer={answer}
              questionAnswer={questions[currentQuestion].answer}
            />
            <Button onClick={handleSubmit}>
              {answer ? `Next Question` : `Submit answer`}
            </Button>
          </Questions>
        )}
        {status === "finish" && (
          <>
            <FinishScreen
              score={score + 1}
              title={headerTitle.title}
              icon={headerTitle.icon}
              numOfQuestions={numOfQuestions}
            />
            <Button onClick={() => dispatch({ type: "again" })}>
              Play Again
            </Button>
          </>
        )}
      </Main>
    </div>
  );
}

function Main({ children }) {
  return <main className="container">{children}</main>;
}
