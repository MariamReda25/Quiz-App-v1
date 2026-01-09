import moonDark from "../../assets/images/icon-moon-dark.svg";
import sunDark from "../../assets/images/icon-sun-dark.svg";
import moonLight from "../../assets/images/icon-moon-light.svg";
import sunLight from "../../assets/images/icon-sun-light.svg";
import "./Theme.css";
function Theme({ dispatch, theme = "light" }) {
  return (
    <div className="theme">
      <svg className="theme__icon">
        <use xlinkHref={theme === "light" ? sunDark : sunLight}></use>
      </svg>
      <button
        className={`theme__btn ${theme === "light" ? "" : "dark"}`}
        onClick={() => dispatch({ type: "theme/toggle" })}
      ></button>
      <svg className="theme__icon">
        <use xlinkHref={theme === "light" ? moonDark : moonLight}></use>
      </svg>
    </div>
  );
}

export default Theme;
