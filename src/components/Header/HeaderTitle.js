import Subject from "../Subject/Subject";
import "./Header.css";
function HeaderTitle({ title, icon, dispatch }) {
  return (
    <div className="header__title" onClick={() => dispatch({ type: "again" })}>
      <Subject title={title} icon={icon} />
    </div>
  );
}

export default HeaderTitle;
