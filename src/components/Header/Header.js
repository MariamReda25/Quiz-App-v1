import "./Header.css";
function Header({ title, children }) {
  return (
    <header
      className="header"
      style={
        title !== ""
          ? { justifyContent: "space-between" }
          : { justifyContent: "flex-end" }
      }
    >
      {children}
    </header>
  );
}

export default Header;
